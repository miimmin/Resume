import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '2019년 허들링 창업멤버 합류를 기점으로 백엔드 개발자로서 성장하고 있습니다. 객체 지향적인 코드와 클린 코드를 사랑합니다. 또한, 기술 간의 Trade-Off 를 고민하고, 가정을 세우고 검증하여 백엔드 서비스를 개발하고, 서버 아키텍처를 구축하고 있습니다. 더불어, 한 번에 완벽한 개발 보다 애자일한 개발을 추구하며, 리팩토링과 성능개선에 관심이 많습니다.',

    "주도적으로 배우고, 도전합니다. 연구에 필요한 인사이트를 얻기 위해 전자전기공학 전공수업을 수강하였습니다. 또한 Java/Spring  백엔드 기술 역량을 위해 스터디를 조직하고 진행하였습니다. 그리고, REST-API를 명확히 이해하기 위해 논문과 컨퍼런스를 통해 학습하였습니다. 현재는 '교과서 같은 기술 블로그 작성하기'를 목표로 특정 주제에 대한 다각도의 관점과 개인적인 견해 등을 주 단위로 기술하고 있습니다.",

    '소통을 좋아합니다. 동료들과의 소통이 활발해지도록 잘 듣고 잘 말하려고 노력합니다. 더불어 구두를 통한 커뮤니케이션 뿐 아니라 Slack, Jira등의 협업 툴을 사용하여 1+1이 3 이상의 성과를 낼 수 있도록 노력하고 있습니다.',
  ],
  sign: '',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
