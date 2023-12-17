import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faBloggerB } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/pic.jpg';

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
      title: 'sangmin2dev@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010-5135-8815',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/sangmin2dev',
      link: 'https://github.com/sangmin2dev',
      icon: faGithub,
    },
    {
      link: 'https://sangmin2dev.gitbook.io/dev/\n',
      icon: faBloggerB,
    },
  ],
  notice: {
    title: '✨ 안녕하세요, 우수한 서비스를 만들고자 하는 백엔드 개발자, 이상민입니다.',
  },
};

export default profile;
