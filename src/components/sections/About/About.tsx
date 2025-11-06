import { siteConfig, softSkillsGrades } from '../../../config/site.config';
import { Graph } from '../../ui/Graph';
import styles from './About.module.scss';

export function About() {
  return (
    <>
      <section className={styles.about} id={siteConfig.navLinks.about.name}>
        <h2 className={styles.about__title}>More About Me</h2>
        <h3 className={styles['about__sub-title']}>I've Got Some skills.</h3>

        <h3 className={styles['about__sub-title']}>FrontEnd:</h3>
        <ul className={styles['about__skills-list']}>
          {siteConfig.softSkills.frontend.map((softSkill) => (
            <li key={softSkill.name}>
              <Graph
                title={softSkill.name}
                tooltip={softSkillsGrades[softSkill.level].level}
                value={softSkill.level}
              ></Graph>
            </li>
          ))}
        </ul>

        <h3 className={styles['about__sub-title']}>BackEnd:</h3>
        <ul className={styles['about__skills-list']}>
          {siteConfig.softSkills.backend.map((softSkill) => (
            <li key={softSkill.name}>
              <Graph
                title={softSkill.name}
                tooltip={softSkillsGrades[softSkill.level].level}
                value={softSkill.level}
              ></Graph>
            </li>
          ))}
        </ul>

        <h3 className={styles['about__sub-title']}>Hobby:</h3>
        <ul className={styles['about__skills-list']}>
          {siteConfig.softSkills.hobby.map((softSkill) => (
            <li key={softSkill.name}>
              <Graph
                title={softSkill.name}
                tooltip={softSkillsGrades[softSkill.level].level}
                value={softSkill.level}
              ></Graph>
            </li>
          ))}
        </ul>

        <h3 className={styles['about__sub-title']}>Other:</h3>
        <ul className={styles['about__skills-list']}>
          {siteConfig.softSkills.other.map((softSkill) => (
            <li key={softSkill.name}>
              <Graph
                title={softSkill.name}
                tooltip={softSkillsGrades[softSkill.level].level}
                value={softSkill.level}
              ></Graph>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
