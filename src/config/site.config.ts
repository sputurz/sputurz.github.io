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

// softSkillsGrades.forEach((element) => {
//   console.log(element.level);
// });

export const siteConfig = {
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
  softSkills: {
    frontend: [
      { name: 'CSS3', level: 4, iconName: 'CssIcon' },
      { name: 'HTML5', level: 4, iconName: 'HtmlIcon' },
      { name: 'SCSS', level: 3, iconName: 'ScssIcon' },
      { name: 'Figma', level: 3, iconName: 'FigmaIcon' },
      { name: 'PhotoShop', level: 4, iconName: 'PsIcon' },
      { name: 'JavaScript ES6+', level: 3, iconName: 'JsIcon' },
      { name: 'TypeScript', level: 3, iconName: 'TsIcon' },
      { name: 'Webpack', level: 3, iconName: 'WebpackIcon' },
      { name: 'Vite', level: 3, iconName: 'ViteIcon' },
      { name: 'Jest', level: 3, iconName: 'JestIcon' },
      { name: 'React 18+', level: 3, iconName: 'ReactIcon' },
      { name: 'Styled-components', level: 3, iconName: 'StyledCompIcon' },
      { name: 'Tanstack React-Query', level: 3, iconName: 'ReactQueryIcon' },
      { name: 'React Hook F orms', level: 3, iconName: 'HookformIcon' },
      { name: 'Zod', level: 3, iconName: 'ZodIcon' },
      { name: 'RestApi', level: 3, iconName: 'RestApiIcon' },
      { name: 'Redux/Redux Toolkit ', level: 3, iconName: 'ReduxIcon' },
      { name: 'Axios ', level: 3, iconName: 'AxiosIcon' },
      { name: 'NextJs ', level: 2, iconName: 'NextJsIcon' },
    ],
    backend: [
      { name: 'NodeJs', level: 2, iconName: 'NodeIcon' },
      { name: 'Php', level: 0, iconName: 'PhpIcon' },
      { name: 'Python', level: 3, iconName: 'PyIcon' },
      { name: 'MySQL', level: 0, iconName: 'MySqlIcon' },
      { name: 'SQLite', level: 0, iconName: 'SqliteIcon' },
      { name: 'Django', level: 0, iconName: 'DjangoIcon' },
    ],
    hobby: [
      { name: 'OpenCV', level: 3, iconName: 'OpenCvIcon' },
      { name: 'Arduino', level: 4, iconName: 'ArduinoIcon' },
      { name: 'Processing', level: 2, iconName: 'ProcessingIcon' },
    ],

    other: [
      { name: 'Mathematica', level: 2, iconName: 'MathematicaIcon' },
      { name: 'mathcad', level: 2, iconName: 'MathcadIcon' },
      { name: 'MO Word/Excel/PowerPoint', level: 5, iconName: 'OfficeIcon' },
      { name: 'VBA', level: 3, iconName: 'VbaIcon' },
      { name: 'OriginPro', level: 4, iconName: 'OriginProIcon' },
      { name: 'SolidWorks', level: 3, iconName: 'SolidWorksIcon' },
      { name: 'Autodesk Iventor', level: 4, iconName: 'AutodeskIcon' },
      { name: 'CorelDraw', level: 2, iconName: 'CoreldrawIcon' },
    ],
  },
} as const;

// siteConfig.softSkills.frontend.map((skill) => {
//   console.log(skill.name);
// });

// const a = softSkillsGrades[siteConfig.softSkills.frontend[0].level].level;

// console.log(a);

// console.log(typeof a);
