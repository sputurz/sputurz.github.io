import { siteConfig, softSkillsGrades } from '../../../config/site.config';
import { Graph } from '../../ui/Graph';
import { Icon } from '../../ui/Icon';
import { ShowMore } from '../../ui/ShowMore';
import styles from './About.module.scss';

export function About() {
  return (
    <>
      <section
        className={styles.about}
        id={siteConfig.navLinks.about.name}
        aria-labelledby={`${siteConfig.navLinks.about.name}-title`}
      >
        <h2
          className={styles.about__title}
          id={`${siteConfig.navLinks.about.name}-title`}
        >
          More About Me
        </h2>

        {siteConfig.softSkills.map((skills) => (
          <div key={skills.title}>
            <h3 className={styles['about__sub-title']}>{skills.title}:</h3>
            <ShowMore
              array={skills.list}
              renderItem={(skill) => (
                <Graph
                  title={
                    <>
                      <Icon
                        name={skill.iconName}
                        className={styles.about__svg}
                      ></Icon>
                      <span>{skill.name}</span>
                    </>
                  }
                  tooltip={softSkillsGrades[skill.level].level}
                  value={skill.level}
                ></Graph>
              )}
            />
          </div>
        ))}
      </section>
    </>
  );
}
