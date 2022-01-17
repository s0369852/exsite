# PART 4. 

### 107. 진수 변환하기 (toString)
- 10 진수의 숫자를 다른 진법으로 변환하는 방밥
- 일반적으로 toString 메소드는 지정된 객체의 문자열을 출력한다.
- Number 객체의 toString 메소드는 값을 특정 진법으로 표현하여 문자형으로 반환한다.

```js
  const dec = 531;

  const binByDex = dec.toString(2);
  const octByDex = dec.toString(8);
  const hexByDex = dec.toString(16);

  console.log(binByDex);  // 1000010011
  console.log(octByDex);  // 1023
  console.log(hexByDex);  // 213
```
- 해설
  * 3: Number 객체의 메소드 toString 숫자 2를 인자로 넣으면 2진수로 변환된다.
  * 4: 8진수로 변환하려면 toString에 숫자 8을 인자로 넣으면 된다.
  * 5: Number 객체의 메소드 toString에 숫자 16를 인자로 넣으면 16진수로 변환된다.
  * 7~9: 변수 binByDex, octByDex, hexByDex을 콘솔 출력하여 변환된 값을 확인한다.
