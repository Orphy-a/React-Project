# 🛒 간단한 쇼핑몰 웹 애플리케이션

React 19(Vite)와 Node.js(Express.js) 기반의 **풀스택 쇼핑몰 웹 애플리케이션**입니다.  
Zustand로 상태를 관리하며, **장바구니·상품 상세·메인 페이지** 등 쇼핑몰에 필요한 주요 기능을 제공합니다.  
또한 **PWA 지원, 반응형 디자인**과 **CSS 모듈·Styled Components**를 통해 최신 웹 환경을 구현해보았습니다.

---

## 📌 기술 스택

### **Frontend**
- React 19
- Vite (빠른 개발 환경)
- Zustand (경량 상태관리)
- Bootstrap (UI 컴포넌트)
- Styled Components, CSS Modules
- PWA 지원

### **Backend**
- Node.js
- Express.js

### **개발 도구**
- ESLint (코드 스타일 자동화)
- SWC (빠른 트랜스파일러)
- npm / yarn

---

## 📂 프로젝트 구조

```plaintext
shopping-mall-app/
├── node_modules/         # 설치된 패키지
├── public/               # 정적 파일 (index.html, 로고 등)
├── src/                  # 프론트엔드 소스
│   ├── components/       # 재사용 React 컴포넌트
│   ├── pages/            # 페이지 컴포넌트 (메인, 상품상세, 장바구니 등)
│   ├── store/            # Zustand 상태 관리
│   ├── hooks/            # 커스텀 Hook
│   ├── styles/           # CSS 모듈/Styled Components
│   ├── assets/           # 이미지·아이콘·폰트
│   └── App.jsx           # 루트 컴포넌트
├── server/               # Node.js+Express 백엔드
│   ├── routes/           # API 라우터
│   ├── controllers/      # 비즈니스 로직
│   └── models/           # DB 모델
├── package.json
├── vite.config.js
├── .eslintrc.js
├── .env
```

---

## 🚀 설치 및 실행 가이드

### 1. 환경 준비
- Node.js (최소 18.x 버전 권장) 설치

### 2. 의존성 설치
```bash
# 프론트엔드
npm install
```
# 백엔드
```
cd server
npm install
```
3. 개발 모드 실행
bash
복사
편집
# 프론트엔드 (기본 5173 포트)
```
npm run dev
```
# 백엔드 (기본 8080 포트)
```
cd server
npm run start
4. 프로덕션 빌드

```
# 프론트엔드 빌드
```
npm run build
```
백엔드: Express 서버 배포 환경에 맞게 실행

🌐 접속 정보
프론트엔드: http://localhost:5173

백엔드: http://localhost:8080

📱 주요 기능
메인 페이지: 전체 상품 목록, 필터·검색 지원

상품 상세 페이지: 개별 상품 정보, 구매·장바구니 버튼

장바구니 페이지: 상품 확인, 수량 변경·삭제, 결제 진행

상태 관리: Zustand + 로컬스토리지 연동

새로고침 시 데이터 유지

라우팅: React Router

상품 데이터 API 연동: Node.js + Express

🎨 기술적 특징
PWA 지원: 모바일 홈 화면 설치 & 오프라인 사용

반응형 디자인: 다양한 디바이스 대응

CSS 모듈 & Styled Components: 유지보수성 높은 스타일 관리

ESLint + SWC: 코드 품질 & 빌드 속도 향상

📄 추가 참고
.env 파일로 API 주소 및 비밀키 관리

server/routes에 REST API 설계

실행 포트 및 환경은 .env로 지정 가능


