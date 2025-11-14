import { siteConfig, softSkillsGrades } from '../../../config/site.config';
import { Graph } from '../../ui/Graph';
import { ShowMore } from '../../ui/ShowMore';
import styles from './About.module.scss';

export function About() {
  return (
    <>
      <section className={styles.about} id={siteConfig.navLinks.about.name}>
        <h2 className={styles.about__title}>More About Me</h2>

        {siteConfig.softSkills.map((skills) => (
          <>
            <h3 className={styles['about__sub-title']}>{skills.title}:</h3>
            <ShowMore
              array={skills.list}
              renderItem={(skill) => (
                <Graph
                  title={skill.name}
                  tooltip={softSkillsGrades[skill.level].level}
                  value={skill.level}
                ></Graph>
              )}
            />
          </>
        ))}
      </section>
    </>
  );
}
