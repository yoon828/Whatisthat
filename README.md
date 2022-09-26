# 🐶 이게멍냥 🐱

## 🐶🐱 팀원 소개
[ 팀원소개 ](https://www.notion.so/a6ae1807780d4a46b1eb408f3a3ddb07)

## 🐶🐱 프로젝트 소개
* 이게 멍냥은 반려동물의 피부질환과 안구질환을 AI를 활용한 사진 분석으로 진단하는 서비스를 메인 기능으로 갖는 웹 서비스입니다. <br>
* 반려 동물의 여러 병들에 대한 증상 별 응급 처치 정보를 제공합니다 <br>
* 반려 동물 자랑과 잃어버린 반려동물을 찾는 커뮤니티 서비스를 제공합니다 <br>
* 사용자 주변의 반려동물 관련 병원과 애완용품상점 등의 정보를 제공합니다 <br>

[ 기획 배경 자료 ](https://www.notion.so/77447be27ed74646acf1833e5a2565d7)<br>
[ 기술 스택 ](https://www.notion.so/394c6ecfd7db44fd92337e5c5b937dd1)<br>
[ 디렉토리 구조 ](https://www.notion.so/Directory-6c65189a251444d2b5cdbd9dd6754967)<br><Br>

## 🐶🐱 산출물
* [ 요구사항 명세서 ](https://www.notion.so/14b90b56db24489791e349874720ffbb)<br>
* [ API 명세서 ](https://www.notion.so/API-9802824865354a09858dbba9f85de7ee) | [ SWAGGER ](j7c101.p.ssafy.io:8080/swagger-ui/index.html)<br>
* [ ERD ](https://www.erdcloud.com/d/YvMvFZgWLRJNAaGnp) <br>
* [ 와이어프레임 ](https://www.figma.com/file/0uAeHn2cMk6vPSX6xiYqbR/%EB%A9%8D%EB%83%A5%EB%A9%8D%EB%83%A5?node-id=0%3A1)<br>
* [ 시퀀스다이어그램 ](https://www.notion.so/4e925d1ff02a4e3cb3167a9e5cb84a2f)

---
## 🐶🐱 배포 및 CI/CD 구축 진행 상황
* 백엔드 CI/CD 구축 완료 : http://j7c101.p.ssafy.io:8080/swagger-ui/index.html <br>
* 프론트엔드 CI/CD 구축 완료 : http://j7c101.p.ssafy.io:3000 <br>

## 🐶🐱 배포 계획
* 프론트엔드 및 백엔드 API 연결하기<br>
* https 설정, nginx 설정 및 배포 완료하기


## 🐶🐱 AI 진행 상황
### 피부
#### 모델1_피부분류
* accuracy <br>
![accuracy](./readmeimg/skin_model/accuracy.png)

* loss<br>
![loss](./readmeimg/skin_model/loss.png)


### 안구
#### 모델1_안구분류(이미지사이즈 small)
* accuracy <br>
![accuracy](./readmeimg/eye_basic_small/accuracy.png)<br>

* loss<br>
![loss](./readmeimg/eye_basic_small/loss.png)

#### 모델2_안구분류(이미지사이즈 up)
* accuracy <br>
![accuracy](./readmeimg/eye_basic_big/accuracy.png)

* loss <br>
![loss](./readmeimg/eye_basic_big/loss.png)

#### 모델3_안구분류(RESNET)
* accuracy <br>
![accuracy](./readmeimg/eye_resnet/accuracy.png)

* loss<br>
![loss](./readmeimg/eye_resnet/loss.png)


---
[ 팀 노션 ](https://www.notion.so/45ecfc3f612b42eaa3c644a1bef4cda3)
