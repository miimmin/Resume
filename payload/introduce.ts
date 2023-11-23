import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    "🌱  '왜?' 에 대한 명확한 답을 내릴 수 있는 백엔드 개발자를 지향합니다.",
    '🌳  단단한 기본기와 유연한 아이디어를 개발자로서 저의 가치라 생각합니다.',
    '☕️  사람들과 함께 하는 시간들을 사랑합니다.',
  ],
  sign: '',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
