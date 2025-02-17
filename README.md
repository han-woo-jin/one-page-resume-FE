# One Page Resume`

💡 문제 인식

- 정보 전달의 이력서 양식이 더 이상 개발자의 모든 정보를 담을 수가 없다.
- 개발자는 현 트렌드상 깃허브와 블로그를 기입하고 공유하여야 한다.
- 평가자 입장에서 여러 브라우저를 활용하여 화면 이동을 하는 단점이 있다.

💡 서비스 기획

- 타겟층 : 개발자 구직, 구인자
- 개인이 커스텀 할 수 있는 `resume`
- 양식을 미리 제공하여 `resume` 작성에 시간을 들이지 않음
- 참고 사이트(점핏, 링크드인, zety)
- 결국 각 개인이 주제를 정하고 그 주제마다 템플릿을 수정하여 포트폴리오 화면의 가독성을 높이는거

💡 서비스 이름
One Page Resume

- with OnePageResume
  OwnPersonalRepresents

💡 메인 기능

- 메인페이지
  - 메뉴바
    - 전체 조회 페이지
    - 포트폴리오 만들기 → 로그인 했을 때만
  - 포트폴리오 제작 과정 예시
  - 템플릿 컨셉 5개 정도
- 로그인, 회원가입 페이지 - 모달
  - 카카오 로그인, 자체 로그인(JWT)
- 작성페이지
  - 임시저장 기능 : 각 템플릿 저장할 때에 임시 저장, 주기적으로 저장(2/26 기획)
  - 내 소개(카테고리 설정: { 내 소개(required),기본 정보, 기술 스택, 이력 , 프로젝트, 트러블 슈팅 })
  - 기술 스택
  - 이력
  - 프로젝트
  - 트러블 슈팅
  - github 구현 가능 !! 다른점 비교로 트러블 슈팅 설명 가능 (2/26)
  - ~~tistory~~(2/26)
  - 내 포폴 방문자(10분)
  - \*\* 프리뷰 기능

💡 서브 기능

- 로그인, 회원가입 페이지 - 모달
  - 카카오 로그인, 자체 로그인(JWT)
- 전체 조회 페이지
  - 조회순, 최신순
  - 기술 태그
- 상세 조회 페이지 (== 작성 페이지)
  - 북마크 기능
  - 알림 설정 기능 → 북마크한 포트폴리오 수정시 북마크 한 사람 에게 알림
- 마이페이지

  - 기본 정보 → 이름, 주소지, 생년월일, 이메일 (+ github 주소, tistory 주소, 포트폴리오 주소)
  - 내 포트폴리오 조회, 수정, 삭제
  - 북마크한 포트폴리오 조회

- 포트폴리오 북마크 기능 → 북마크시 주인에게 실시간 알림(+email)
- 누가 자신의 포트폴리오를 봤는지 조회할 수 있도록 제공(5분이 지나면 정보 제공)
- 기술 태그를 사용해 기술을 분류하여 볼 수 있도록 구성
- 공개, 비공개로 설정 가능(비공개일 경우 권한을 부여하여 조회하도록)
- JWT 토큰 발급을 통한 로그인, 카카오 로그인
- 포트폴리오 공유 기능(카카오톡 등)
- 채용 공고 확인 (잡코리아,사람인)
- 깃허브 api를 사용하여 readme 파일등을 읽어와 프로젝트 소개글 작성
- // tistory api를 사용하여 블로그 글 등을 읽어와 소개글 작성

## Trouble Shooting

**한 페이지 안에서 다른 템플릿 넘나들지 않고 트러블 슈팅한 내역을 조회하게 하고 싶었다.**

- 포트폴리오를 볼 때 github의 세세한 커밋을 보지 않는 점
- URL로써 다른 페이지에 들어가는 것은 직관적이지 못하다는 점

**깃헙에서 트러블 슈팅한 특정 커밋을 불러오려고한다.**

→ 모든 데이터를 다 가져와서 DB에서 해버릴까?

→ 커밋 ID와 message만 가져와서 API호출을 2번한다?

**체크박스의 값을 어떻게 리스트에 담는가**

사실 그다지 어려운 문제는 아니었는데 코드를 더 깔끔하고 세련되게 쓰고싶어 프론트엔드 동료와 같이 고민했다.

각 체크박스의 상태값을 조회하는 것은 단순하고 명료한 방법이긴 하다.

**작업방식**

<iframe> 태그를 이용해서 모달로 커밋 페이지가 나오게끔 하였다

→ CSP 보안 문제로 깃헙 URL을 불러오는데에 실패하였다.

![스크린샷 2022-02-26 오전 12.18.00.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b138685f-4db7-444f-b507-74941ab390bf/스크린샷_2022-02-26_오전_12.18.00.png)

kohsuke 라이브러리에서 getPatch() 라는 함수를 찾았다.
→ patch가 무엇인가 라는 질문에서

→ github API에서 patch가 무엇인지 찾아보았다.

→ 달라지는 부분을 나타내주는 API였다.

### 회의록

- 2022-03-01

  - career안에 contents는 career 테이블 안에 구분자를 통해 한 줄로 저장
  - github API 에서 받아오는 Readme파일의 형식이 수상했다.
  - github API는 하루 5000번의 제한이 있다.
  - 이메일 찾기와 비밀번호 찾기

- 2022-02-28

  - react-hook-form 공유
  - 배열 디스트럭쳐링 공유
  - API 설계
  - defaultStack 중요도 선정
  - 회원가입 로그인 방식 확정
  - 프로젝트 임시저장/ 저장 후 공개 방식 확정
  - 깃허브 파일 불러오기 방식 확정

- 2022-02-27

  - **DefaultStack**
  - **Email로 회원가입하면 인증코드**
  - **로그인 방식**
  - **github API 설계의 문제가 드러났다.**
  - **임시저장에 대한 문제**
  - **생성날짜, 조회수, 북마크한 사람 수 에 대한 고려를 전혀 하지 않았다.**
  - [https://macgle.wordpress.com/2022/02/28/project-onepageresume-day3/](https://macgle.wordpress.com/2022/02/28/project-onepageresume-day3/)

- 2022-02-26

  - 임시저장 기능에 대한 추가 → 임시저장 기능 구현 어떻게 할지 추후 결정
  - 회원가입시 이메일로 인증
  - 다른 사람이 내 포트폴리오를 북마크했을때 이메일로 알림
  - 대략적인 API 설계 → 메인 페이지 전체 조회 , 상세 페이지 미설계
  - Back-end ERD 설계 → 내일 수정 예정 (포트폴리오 테이블의 내용이 많아 여러 개로 쪼개어 관리)
  - 전체 포트폴리오에서 구역을 나누어 구역마다 저장할 수 있게 수정
    (원래는 전체 페이지를 한번에 저장하려고 했음)
  - 포트폴리오 개수 1개 제한 안하고 여러개 할 수 있음
  - 로그인 페이지 디자인 구성

- 2022-02-25
  - 프로젝트 주제 선정
  - 팀 노션 작성
  - 기획서 작성
  - 타임라인 1주차 작성
  - 와이어프레임 1차 작성
  - 1차 기능 구상
