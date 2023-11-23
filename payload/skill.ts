import { ISkill } from '../component/skill/ISkill';

// const language: ISkill.Skill = {
//   category: 'Language',
//   items: [
//     {
//       title: 'Java 11',
//       level: 3,
//     },
//   ],
// };
const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java 11',
      level: 3,
    },
    {
      title: 'Spring Framework',
      level: 3,
    },
    {
      title: 'SpringBoot 3.0',
      level: 2,
    },
    {
      title: 'Spring JPA',
      level: 2,
    },
    {
      title: 'QueryDSL 5.0',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL 8.0',
      level: 2,
    },
    {
      title: 'Oracle',
      level: 2,
    },
    {
      title: 'Redis',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Apache JMeter',
    },
    {
      title: 'Micrometer',
    },
    {
      title: 'Prometheus',
    },
    {
      title: 'Grafana',
    },
    {
      title: 'Jira',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: true,
  skills: [backend, database, etc],
  tooltip: '1: 기초 수준\n2: 개발 가능 수준\n3: Production 실무 수준',
};

export default skill;
