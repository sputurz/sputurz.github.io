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
          <div className={styles['about__text-wrap']}>
            <h3 className={styles['about__sub-title']}>Howdy!</h3>
            <p className={styles.about__text}>
              {`I am aspiring frontend developer, passionate about creating modern web
            interfaces using React and the ecosystem around it.`}
            </p>
            <p className={styles.about__text}>
              {`I have an engineering background and experience working with technical
            documentation, which helps me approach tasks systematically and
            quickly grasp new technologies. I've always been interested in IT
            (I've programmed in Arduino, C, and Python) and plan to further
            develop my skills in web development. I'm already proficient in
            frontend coding and JavaScript, and am currently learning Django and
            MySQL. I'm also exploring new and relevant CSS/HTML/JS technologies
            on learn.javascript.ru and MDN. I also solve exapmles on leetcode
            and codewars. I'm also interested in web development channels on
            Reddit, YouTube, and Habr.`}
            </p>
            <p className={styles.about__text}>
              {`I'm open to internships and
            junior/trainee positions, eager to learn and work with others.`}
              <b></b>
            </p>
            <h3 className={styles['about__sub-title']}>My Higher Education</h3>
            <h4 className={styles['about__text-head']}>
              Bachelor's and Master's Degrees
            </h4>
            <p className={styles.about__text}>
              <b>Place: </b>
              Belarusian State University of Informatics and Radioelectronics,
              Minsk
              <br />
              <b>Program: </b>
              Solid-state electronics, electronic components, micro- and
              nanoelectronics, quantum-based devices
              <br />
              <b>Degree: </b>
              Engineer/Master of Engineering Sciences
              <br />
              <b>Years of study: </b>
              2012-2018
            </p>
            <h4 className={styles['about__text-head']}>Graduate Education</h4>
            <p className={styles.about__text}>
              <b>Place: </b>
              National Academy of Sciences of Belarus, Minsk
              <br />
              <b>Program: </b>
              Optical and optoelectronic devices and systems
              <br />
              <b>Degree: </b>
              Researcher
              <br />
              <b>Years of study: </b>
              2018-2021
            </p>
          </div>

          <div className={styles['about__skills-wrap']}>
            <h3 className={styles['about__sub-title']}>
              I've Got Some skills.
            </h3>
            <ul className={styles['about__skills-list']}>
              {siteConfig.softSkills.map((skills) => (
                <li key={skills.title} className={styles['about__skills-item']}>
                  <h4 className={styles['about__text-head']}>
                    {skills.title}:
                  </h4>
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
        </div>
      </section>
    </>
  );
}
