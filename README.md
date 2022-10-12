# wanted_pre_onboarding

1. 요구사항 분석
- ORM 사용 하여 구현 : sequelize 사용
- RDBMS 사용 : sqlite사용
- 필요한 모델 만들기 : 회사 (company) , 사용자 (user) , 채용공고 (posting), 지원내역(apply)
- 추가 기능

2. 구현과정
2-1. model 설계
<img width="769" alt="스크린샷 2022-10-12 오후 9 30 28" src="https://user-images.githubusercontent.com/64879792/195343016-5137d3eb-dcdd-42a6-97c0-e79eaaa3948b.png">

2-2. 필요한 npm 모듈 설치

<img width="606" alt="스크린샷 2022-10-12 오후 9 30 59" src="https://user-images.githubusercontent.com/64879792/195343134-a1ed64b2-e172-42a1-b5e2-9ae2e411be6c.png">

---
3. 기능설명
### 1. 채용공고 등록

- POST /list
- request data 예시

```jsx
{
    "company_id": 1,
    "position" : "fnd-developer",
    "rewards" : 15000000,
    "content" : "We are looking for a developer as an;......",
    "tech_stack" : "python, aws "
}
```

- response

```jsx
status : 200,
message : "posted"
```
### 2. 채용공고 수정 (회사id외 모두 수정가능 )

- PUT /list/edit
- 원데이터

```jsx
{
    "lists": [
        {
            "posting_id": 1,
            "company_id": "1",
            "position": "backend-developer",
            "rewards": 15000000,
            "content": "We are looking for a developer as an;......",
            "tech_stack": "python, aws ",
            "createdAt": "2022-10-12T07:56:49.046Z",
            "updatedAt": "2022-10-12T07:56:58.779Z",
            "company": {
                "name": "Wanted Co",
                "country": "Korea",
                "region": "Seoul"
            }
        }
    ]
}
```

- request data 예시

```jsx
{
    "posting_id" : 1,
    "position" : "front-developer",
    "rewards" : 15000000,
    "content" : "We are looking for a developer as an;......",
    "tech_stack" : "python, aws "
}
```

- response ( data 변경 후 )

```jsx
{
    "detail": {
        "posting_id": 1,
        "company_id": "1",
        "position": "front-developer",
        "rewards": 15000000,
        "content": "We are looking for a developer as an;......",
        "tech_stack": "python, aws ",
        "createdAt": "2022-10-12T07:56:49.046Z",
        "updatedAt": "2022-10-12T07:58:01.731Z",
        "company": {
            "name": "Wanted Co",
            "country": "Korea",
            "region": "Seoul"
        }
    }
}
```

### 3. 채용공고 삭제

- DELETE /list
- request data 예시
    
    ```jsx
    
    {
    	"posting_id " : 1 
    }
    ```
    

- response

```jsx
status : 200,
message : "deleted"
```

### 4. 채용공고 리스트 조회

- GET /list
- response data

```jsx
{
    "lists": [
        {
            "posting_id": 1,
            "company_id": "1",
            "position": "front-developer",
            "rewards": 15000000,
            "content": "We are looking for a developer as an;......",
            "tech_stack": "python, aws ",
            "createdAt": "2022-10-12T07:24:07.930Z",
            "updatedAt": "2022-10-12T07:24:07.930Z",
            "company": {
                "name": "Wanted Co",
                "country": "Korea",
                "region": "Seoul"
            }
        },
        {
            "posting_id": 2,
            "company_id": "1",
            "position": "backend-developer",
            "rewards": 15000000,
            "content": "We are looking for a developer as an;......",
            "tech_stack": "python, aws ",
            "createdAt": "2022-10-12T07:24:23.368Z",
            "updatedAt": "2022-10-12T07:24:23.368Z",
            "company": {
                "name": "Wanted Co",
                "country": "Korea",
                "region": "Seoul"
            }
        }
    ]
}
```

### 4-1. 채용공고 리스트 검색기능

- url : GET /list
- request 예시 : /list?keyword=front

- response data 예시

```jsx
{
    "lists": [
        {
            "posting_id": 1,
            "company_id": "1",
            "position": "front-developer",
            "rewards": 15000000,
            "content": "We are looking for a developer as an;......",
            "tech_stack": "python, aws ",
            "createdAt": "2022-10-12T07:24:07.930Z",
            "updatedAt": "2022-10-12T07:24:23.368Z",
            "company": {
                "name": "Wanted Co",
                "country": "Korea",
                "region": "Seoul"
            }
        }
    ]
}
```

### 5. 채용 상세 페이지

- url : GET / list/:posting_id
- response data 예시

```jsx
{
    "lists": [
        {
            "posting_id": 1,
            "company_id": "1",
            "position": "front-developer",
            "rewards": 15000000,
            "content": "We are looking for a developer as an;......",
            "tech_stack": "python, aws ",
            "createdAt": "2022-10-12T07:24:07.930Z",
            "updatedAt": "2022-10-12T07:24:23.368Z",
            "company": {
                "name": "Wanted Co",
                "country": "Korea",
                "region": "Seoul"
            }
        }
    ]
}
```

### 6. 채용공고 지원

- url : POST/apply
- request data 예시

```jsx
{
	"posting_id" : 1,
  "user_id" : 1
}
```

- response data
- 1. // Apply_Model내 데이터에서 같은 posting_id 에 같은 user_id가 있는경

```
이미 지원한 이력이 있습니다.
```

- 2. 처음 지원한 경우
```jsx
status : 200,
message : "지원이 완료 되었습니다."
```
---
### 4.Installation

---

```jsx
$ npm install
```

### 5. Running App

```jsx
$ npm start
```
