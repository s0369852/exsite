## 마크다운(Markdown)
  1. _이텔릭_ <br/>
  2. **두껍게** <br/>
  3. _**이텔릭+두껍게**_<br/>
  4. ~~취소선~~<br/>
  5. <u>밑줄</u><br/>

  ### 목록(List)
  1. 순서가 필요한 목록
  1. 순서가 필요한 목록
  1. 순서가 필요한 목록
      1. 순서가 필요한 목록
      1. 순서가 필요한 목록
  1. 순서가 팔요한 목록
  <br/><br/>
  - 순서가 필요하지 않은 목록
  - 순서가 필요하지 않은 목록
  - 순서가 필요하지 않은 목록
      - 순서가 필요하지 않은 목록
      - 순서가 필요하지 않은 목록
  - 순서가 필요하지 않은 목록
<br/><br/>

## 링크(Links)
<a href='https::/google.com'>GOOGLE</a><br/>
[GOOGLE](https://google.com)<br/>
<a href='https://naver.com' title='NAVER로 이동!'>NAVER</a><br/>
[NAVER](https://naver.com "NAVER로 이동!")<br/>
<a href='https://naver.com' title='NAVER로 이동!' target='_blank'>NAVER</a>
<br/><br/>

## 이미지(Image)
![Image](https://via.placeholder.com/200/00FF00)
[![ImageLink](https://via.placeholder.com/400/443fed)](https://naver.com)
<br/><br/>

## 인용문(BlockQuote)
> 남의 말이나 글에서 직접 또는 간접으로 따온 문장. <br/>
> (네이버 국어 사전)
<br/><br/>

> 중첩된 인용문
>> 중첩된 인용문1
>>> 중첩된 인용문2
<br/><br/>

## 인라인(inline) 코드 강조
css에서 `background` 혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있다.
<br/><br/>

## 블록(block) 코드 강조
```html
<a href='https://www.google.co.kr/' target='_blank'>GOOGLE</a>
```

```CSS
.list > li {
  position: absolute;
  top: 40px;
}
```

```JavaScript
function func(){
  let a = 'AAA';
  return a;
}
```

```bash
$ git commit -m 'Hello'
```

```plaintext
개발언어를 사용하는 블록코드 강조가 아닌 단순하게 텍스트만 블록코드 강조로 출력가능
```
<br/><br/>

## 표(Table)

position 속성

값 | 의미 | 기본값
-- | :--: | --:
static | 기준 없음 | O
relative | 요소 자신 | X
absolute | 위치 상 부모 요소 | X
fixed | 뷰포트 | X
<br/><br/>

## 원시 HTML(Raw HTML)
동해물과 <span style='text-decoration: underline;'>백두산</span>이 마르고 닳도록<br/>
하느님이 보우하사 우리나라 만세 
<br/><br/>

<a href='https://naver.com' title='Naver로 이동!' target='_blank'>NAVER</a>
<br/>
<img width='70' src='https://via.placeholder.com/200/ff3300' alt='이미지'>
<br/><br/>

## 수평선(Horizontal Rule)
---
<br/>

***
<br/>

___
<br/>