import type { ISiteConfig } from './types';

export const softSkillsGrades = [
  { level: 'learning', index: 0 },
  { level: 'trainee', index: 1 },
  { level: 'trainee+', index: 2 },
  { level: 'junior', index: 3 },
  { level: 'junior+', index: 4 },
  { level: 'middle', index: 5 },
  { level: 'senior', index: 6 },
  { level: 'lead', index: 7 },
] as const;

export const siteConfig: ISiteConfig = {
  navLinks: {
    hero: { name: 'hero', url: '#hero' },
    about: { name: 'about', url: '#about' },
    works: { name: 'works', url: '#' },
    blog: { name: 'blog', url: '#' },
    contact: { name: 'contact', url: '#' },
  },
  socialsLinks: [
    {
      name: 'telegram',
      url: 'https://t.me/raman_mikulich',
      iconName: 'TgIcon',
    },
    {
      name: 'github',
      url: 'https://github.com/sputurz',
      iconName: 'GhIcon',
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/sputurz_13',
      iconName: 'InstIcon',
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/sputurza',
      iconName: 'FbIcon',
    },
    {
      name: 'researchgate',
      url: 'https://www.researchgate.net/profile/R-Mikulich/research',
      iconName: 'RgIcon',
    },
  ],
  softSkills: [
    {
      title: 'Frontend',
      list: [
        { name: 'React 18+', level: 3, iconName: 'ReactIcon' },
        { name: 'TypeScript', level: 3, iconName: 'TsIcon' },
        { name: 'JavaScript ES6+', level: 3, iconName: 'JsIcon' },
        { name: 'CSS3', level: 4, iconName: 'CssIcon' },
        { name: 'HTML5', level: 4, iconName: 'HtmlIcon' },
        { name: 'SCSS', level: 3, iconName: 'ScssIcon' },
        { name: 'Figma', level: 3, iconName: 'FigmaIcon' },
        { name: 'PhotoShop', level: 4, iconName: 'PsIcon' },
        { name: 'Webpack', level: 3, iconName: 'WebpackIcon' },
        { name: 'Vite', level: 3, iconName: 'ViteIcon' },
        { name: 'Jest', level: 3, iconName: 'JestIcon' },
        { name: 'Styled-components', level: 3, iconName: 'StyledCompIcon' },
        { name: 'Tanstack React-Query', level: 3, iconName: 'ReactQueryIcon' },
        { name: 'React Hook Forms', level: 3, iconName: 'HookformIcon' },
        { name: 'Zod', level: 3, iconName: 'ZodIcon' },
        { name: 'RestApi', level: 3, iconName: 'RestApiIcon' },
        { name: 'Redux/Redux Toolkit ', level: 3, iconName: 'ReduxIcon' },
        { name: 'Axios ', level: 3, iconName: 'AxiosIcon' },
        { name: 'NextJs ', level: 2, iconName: 'NextJsIcon' },
      ],
    },
    {
      title: 'Backend',
      list: [
        { name: 'Python', level: 3, iconName: 'PyIcon' },
        { name: 'NodeJs', level: 2, iconName: 'NodeIcon' },
        { name: 'Php', level: 0, iconName: 'PhpIcon' },
        { name: 'MySQL', level: 0, iconName: 'MySqlIcon' },
        { name: 'SQLite', level: 0, iconName: 'SqliteIcon' },
        { name: 'Django', level: 0, iconName: 'DjangoIcon' },
      ],
    },
    {
      title: 'Hobby',
      list: [
        { name: 'OpenCV', level: 3, iconName: 'OpenCvIcon' },
        { name: 'Arduino', level: 4, iconName: 'ArduinoIcon' },
        { name: 'Processing', level: 2, iconName: 'ProcessingIcon' },
      ],
    },

    {
      title: 'Other',
      list: [
        { name: 'MO Word/Excel/PowerPoint', level: 5, iconName: 'OfficeIcon' },
        { name: 'VBA', level: 3, iconName: 'VbaIcon' },
        { name: 'Autodesk Iventor', level: 4, iconName: 'AutodeskIcon' },
        { name: 'Mathematica', level: 2, iconName: 'MathematicaIcon' },
        { name: 'Mathcad', level: 2, iconName: 'MathcadIcon' },
        { name: 'OriginPro', level: 4, iconName: 'OriginProIcon' },
        { name: 'SolidWorks', level: 3, iconName: 'SolidWorksIcon' },
        { name: 'CorelDraw', level: 2, iconName: 'CoreldrawIcon' },
      ],
    },
  ],
  formEndpoint: 'https://formspree.io/f/mqawokpy',
};
