import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faBloggerB } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/pic.jpeg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이상민',
    small: '',
  },
  contact: [
    {
      title: 's.miimmin@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010-5135-8815',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/miimmin',
      link: 'https://github.com/miimmin',
      icon: faGithub,
    },
    {
      link: 'https://miimmin.gitbook.io/dev/\n',
      icon: faBloggerB,
    },
  ],
  notice: {
    title: '🧑‍💻 안녕하세요, 서버 개발자 이상민 입니다.',
  },
};

export default profile;
