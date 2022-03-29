# 섹션6. 배열 다루기

## 32. <b style="color: #458fed">JavaScript의 배열은 객체다</b>
- JavaScript 배열의 내부 동작은 객체와 굉장히 비슷한 부분이 많다. 
- 배열의 확인이 필요할 때엔 <b style="color: coral">Array.isArray()</b>

``` js
const arr = [1, 2, 3];

arr[3] = 'test';
arr['property'] = 'string value';
arr['object'] = {}
arr[{}] = [1, 2, 3]
arr['func'] = function () {
  return 'hello';
};

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 1
// 2
// 3
// test
```
<br><br>

``` js
const arr = [1, 2, 3];

arr[3] = 'test';
arr['property'] = 'string value';
arr['obj'] = {}
arr['{}'] = [1, 2, 3]
arr['func'] = function () {
  return 'hello';
};

arr
/*
[ 1,
  2,
  3,
  'test',
  property: 'string value',
  obj: {},
  '{}': [ 1, 2, 3 ],
  func: [λ] ]
*/
```
<br><br>

```js
const obj = {
  arr: [1, 2, 3],
  3 : 'test',
  property : 'string value',
  obj : {},
  '{}' : [1, 2, 3],
  func : function () {
    return 'hello'
  }
}

obj
/*
{ 3: 'test',
  arr: [ 1, 2, 3 ],
  property: 'string value',
  obj: {},
  '{}': [ 1, 2, 3 ],
  func: [λ: func] }
*/
```
<br><br>

```js
//  배열 확인
const arr1 = '[1, 2, 3]'
const arr2 = [1, 2, 3]

Array.isArray(arr1)  //false
Array.isArray(arr1)  //true
```

