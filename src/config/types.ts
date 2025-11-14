import * as Icons from '../components/ui/Icon/icons';

export interface INavLink {
  name: string;
  url: string;
}

export interface ISocialsLink {
  name: string;
  url: string;
  iconName: keyof typeof Icons;
}

export interface ISoftSkillList {
  name: string;
  level: number;
  iconName: keyof typeof Icons;
}

export interface ISoftSkill {
  title: string;
  list: ISoftSkillList[];
}

export interface ISiteConfig {
  navLinks: Record<string, INavLink>;
  socialsLinks: ISocialsLink[];
  softSkills: ISoftSkill[];
}
