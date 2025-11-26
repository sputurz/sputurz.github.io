import { siteConfig, softSkillsGrades } from '../../../config/site.config';
import { Graph } from '../../ui/Graph';
import { Icon } from '../../ui/Icon';
import { SectionHead } from '../../ui/SectionHead';
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
        <SectionHead
          id={`${siteConfig.navLinks.about.name}-title`}
          name={siteConfig.navLinks.about.name}
          title="More About Me"
          text="A motivated, aspiring front-end developer focused on React and modern JavaScript. I have experience building SPA applications for pet projects. I'm eager to participate in commercial projects where I can apply and develop my skills, work in a team, and make a difference."
        />
        <div className={styles.about__wrap}>
          <div>
            <h3 className={styles['about__sub-title']}>Howdy!</h3>
            <p className={styles.about__text}>
              {`Aspiring frontend developer, passionate about creating modern web
            interfaces using React and the ecosystem around it. I have an
            engineering background and experience working with technical
            documentation, which helps me approach tasks systematically and
            quickly grasp new technologies. I've always been interested in IT
            (I've programmed in Arduino, C, and Python) and plan to further
            develop my skills in web development. I'm already proficient in
            frontend coding and JavaScript, and am currently learning Django and
            MySQL. I'm also exploring new and relevant CSS/HTML/JS technologies
            on learn.javascript.ru and MDN. I also solve problems on leetcode
            and codewars. I'm also interested in web development channels on
            Reddit, YouTube, and Habr. I'm open to internships and
            junior/trainee positions, eager to learn and work with others.`}
            </p>
          </div>
          <ul className={styles['about__skills-list']}>
            {siteConfig.softSkills.map((skills) => (
              <li key={skills.title} className={styles['about__skills-item']}>
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
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
