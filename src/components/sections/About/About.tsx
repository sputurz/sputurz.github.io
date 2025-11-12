import { siteConfig, softSkillsGrades } from '../../../config/site.config';
import { Graph } from '../../ui/Graph';
import { ShowMore } from '../../ui/ShowMore';
import styles from './About.module.scss';

export function About() {
  return (
    <>
      <section className={styles.about} id={siteConfig.navLinks.about.name}>
        <h2 className={styles.about__title}>More About Me</h2>

        <h3 className={styles['about__sub-title']}>Frontend:</h3>

        <ShowMore
          array={siteConfig.softSkills.frontend}
          renderItem={(skill) => (
            <Graph
              title={skill.name}
              tooltip={softSkillsGrades[skill.level].level}
              value={skill.level}
            ></Graph>
          )}
        />

        <h3 className={styles['about__sub-title']}>Backend:</h3>

        <ShowMore
          array={siteConfig.softSkills.backend}
          renderItem={(skill) => (
            <Graph
              title={skill.name}
              tooltip={softSkillsGrades[skill.level].level}
              value={skill.level}
            ></Graph>
          )}
        />

        <h3 className={styles['about__sub-title']}>Hobby:</h3>

        <ShowMore
          array={siteConfig.softSkills.hobby}
          renderItem={(skill) => (
            <Graph
              title={skill.name}
              tooltip={softSkillsGrades[skill.level].level}
              value={skill.level}
            ></Graph>
          )}
        />

        <h3 className={styles['about__sub-title']}>Other:</h3>

        <ShowMore
          array={siteConfig.softSkills.other}
          renderItem={(skill) => (
            <Graph
              title={skill.name}
              tooltip={softSkillsGrades[skill.level].level}
              value={skill.level}
            ></Graph>
          )}
        />
      </section>
    </>
  );
}
