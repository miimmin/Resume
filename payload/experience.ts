import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: '허들링 (Huddling)',
      position: '삼개월 홈쉐어링 플랫폼 백엔드 개발자 & 창업멤버(3인)',
      startedAt: '2019-12',
      endedAt: '2022-02',
      descriptions: [
        '홈쉐어링 서비스, 삼개월 서버사이드 기획 및 개발',
        '홈쉐어링 서비스, 삼개월 서비스 기획 참여',
        // '삼개월 홈쉐어링 플랫폼 기술스택 및 개발환경 설정',
        // '홈쉐어링 계약프로세스, 호스트/학생/방에 대한 CRUD 등 모든 요구사항에 대한 데이터 모델링 및 API 설계',
      ],
    },
    {
      title: '시큐레이어 (Seculayer)',
      position: 'AI 모델팀 인턴',
      startedAt: '2022-09',
      endedAt: '2022-12',
      descriptions: [
        'DGA Classification 소프트웨어 내부 Classification 모듈 개발',
        'AI 모델 자동생성기 AutoApe 을 위한 Knowledge 데이터 M/L 모델 생성',
        // 'DGA 악성도메인 Classification에 사용될 도메인패턴, entropy 등 16개의 Feature 생성',
        // 'DGA 악성도메인 Classification RandomForest, XGBoost 모델 생성 및 Classification',
        // 'AI 모델 자동생성기 AutoApe 을 위한 Knowledge 데이터로 kaggle 상위 10% 랭크 이상의 모델 생성',
      ],
    },
    {
      title: '중앙대학교 인간중심시스템 연구실 (HCS-LAB)',
      position: '학부연구생',
      startedAt: '2019-12',
      endedAt: '2021-01',
      descriptions: [
        'Knock-Authentication 연구참여; Classification 모듈 연구 및 개발',
        'Knock-Authentication 연구참여; 사용자 테스트 데이터 설정 및 수집 주관',
        // '고속 푸리에변환(FFT)을 통해 추출된 Spectrum Feature 간의 거리추출',
        // 'time, spectrum, spectrogram, wavelet Feature 각각에 대한 거리 기반 One-Class KNN Classification',
        // 'time, spectrum, spectrogram, wavelet Feature 각각에 대한 DTW 기반 Classification',
        // '테스트 데이터 설계, 데이터 수집 주관 및 각 테스트환경 별 암호 유효성 검증',
      ],
    },
  ],
};

export default experience;
