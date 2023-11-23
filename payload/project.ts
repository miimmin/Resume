import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '삼개월',
      startedAt: '2019-12',
      endedAt: '2022-02',
      where: '대학생과 아파트에 거주하는 시니어 호스트의 주거공간을 연결해주는 홈쉐어링 서비스',
      descriptions: [
        {
          content: '장애 포인트를 줄이기 위한 서버 아키텍처 구성',
          href:
            'https://miimmin.gitbook.io/dev/what-ive-developed/func-and-archi-issue/server-architecture',
          descriptions: [
            { content: '트래픽 분산을 위해 Auto-Scaling과 Load-Balancing 조합 구현' },
            { content: 'MySQL Replication하여 이중화 DB를 구현해 장애에 안전장치가 있는 DB 구축' },
          ],
        },
        {
          content: '사용자의 진입장벽을 낮추기 위해 Kakao/Naver OAuth2 구현',
          href:
            'https://miimmin.gitbook.io/dev/what-ive-developed/func-and-archi-issue/authentication',
          descriptions: [
            { content: '사용자 토큰을 Redis에 저장해 API 응답 속도 향상' },
            { content: 'RTR 알고리즘을 구현해 Refresh Token 탈취에 대한 보안성 향상' },
          ],
        },
        {
          content: '멀티 모듈을 활용한 변경에 유연한 아키텍처로 리팩터링',
          href:
            'https://miimmin.gitbook.io/dev/what-ive-developed/func-and-archi-issue/multi-module-project',
          descriptions: [
            { content: '각 모듈의 책임이 명확하고 최소한의 의존성을 갖는 모듈을 설계' },
          ],
        },
        {
          content: '서비스 업데이트가 활발하게 이루어질 수 있는 배포환경 구축',
          descriptions: [
            {
              content: 'Blue/Green 무중단 배포를 구축해 서버 업데이트의 다운타임 제거',
              href: 'https://miimmin.gitbook.io/dev/what-ive-developed/devops-issue/blue-green',
            },
            {
              content: '배포업무 효율을 위해 Jenkins를 통해 CI/CD 구축',
              href: 'https://miimmin.gitbook.io/dev/what-ive-developed/devops-issue/jenkins-ci-cd',
            },
          ],
        },
      ],
    },
    {
      title: 'DGA Classification',
      startedAt: '2022-09',
      endedAt: '2022-12',
      where: 'DGA로 생성된 악성 도메인 판별 소프트웨어',
      descriptions: [
        {
          content:
            'DGA Classification 소프트웨어에 사용될 16개의 Feature 생성 (도메인패턴, Entropy, etc.)',
          weight: 'MEDIUM',
        },
        {
          content:
            'DGA Classification 소프트웨어에 사용될 Classification ML 모델(Random Forest, XGBoost, etc.) 개발',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: 'Knock-Authentication',
      startedAt: '2019-12',
      endedAt: '2021-01',
      where: '사용자별 디바이스 터치사운드 고유성에 기반한 사용자 인증 연구',
      descriptions: [
        {
          content:
            '각 Feature(time, spectrum, spectrogram, wavelet, etc.)들에 대한 거리기반 Classification(DTW, One-Class KNN, etc.) 연구 및 개발',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: 'Chefling',
      startedAt: '2019-09',
      endedAt: '2019-12',
      where: '무작위 주문이 빗발치는 레스토랑에서 테이블별 서빙순서를 최적화 해주는 서비스',
      descriptions: [
        {
          content: '조리음식할당 스케쥴링 내부로직 구현',
          weight: 'MEDIUM',
        },
        // { content: '같은 테이블의 요리가 가능한 동시에, 가장 빠른 시간에 나올 수 있도록 큐와 연산식을 통해 구현' },
        // { content: '요구조건을 충족하기 위해 요리당 조리시간,요리사의 역량, 준비된 재료수 등 필요한 데이터 설계' },
        // { content: '주문순서 경우의수, 요리사 부상등으로 인한 요리불능상태, 재료부족으로 인한 딜레이 등 테스트케이스 정의 및 테스팅' },
        // {
        //   content: 'Add Foo Feature in 2019',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     { content: 'Integer ut libero eu libero mattis rutrum at at urna' },
        //     { content: 'Integer non turpis ante' },
        //   ],
        // },
      ],
    },
    {
      title: 'Va-Map',
      startedAt: '2019-03',
      endedAt: '2019-06',
      where: '조회한 시설에 대한 맞춤형 Value를 분석하는 서비스',
      descriptions: [
        {
          content: '공공 API를 통해 수집한 10만건의 시설에 대한 Value 추출 내부로직 구현',
          weight: 'MEDIUM',
        },
        // { content: 'Value를 정확히 표현할 수 있는 로직으로 거리기반 가치연산방식, 위치기반 분산도 가치연산방식을 제안 및 구현' },
        // { content: '특정 범위 내에서 유저데이터의 위경도 값을 기반으로 거리와 사용자 입력 가중치를 이용해 Value도출 로직 구현' },
        // { content: '특정 범위 내에서 데이터의 분산도를 기반으로 가치를 Value를 도출하는 로직을 구현' },
      ],
    },
  ],
};
export default project;
