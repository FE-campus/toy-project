# λ±κ²μπ

## νμν jsλ©μλ
- querySelector()
- addEventListener()
- setInterval()
- keyCodes
- pop()
- push()
- Array.prototype.unshift()
- classList.contains()
- classList.add()
- classList.remove()

### setInterval
```javascript
const timerId = setInterval(func|code[, delay, param1, param2,...])
```
λ λ²μ§Έ μΈμλ‘ μ λ¬λ°μ μκ°λ§νΌ λ°λ³΅νμ¬ funcμ μ€νμν¨λ€.

### keyCodes
> ν€λ³΄λμ λ¬Έμ λ° κΈ°λ₯μ νΉμ  μ½λλ‘ μ ν΄λμ κ²
https://blog.outsider.ne.kr/322

### Array.prototype.unshift
```javascript
const arr = [1, 2]

// μΈμλ‘ μ λ¬λ°μ λͺ¨λ  κ°μ μλ³Έ λ°°μ΄μ μ λμ μμλ‘ μΆκ°νκ³  λ³κ²½λ length κ°μ λ°ννλ€.
let result = arr.unshift(3,4)
console.log(result) //4

//unshift λ©μλλ μλ³Έ λ°°μ΄μ μ§μ  λ³κ²½νλ€.
console.log(arr) //[3, 4, 1, 2]
```
λ°°μ΄μ λ§¨ μμ μΆκ°νμ¬ λ°°μ΄μ λ³κ²½μμΌμ€λ€. λν κ·Έ κ°μ μΆκ°λ λ°°μ΄μ μ μ²΄ κΈΈμ΄μ΄λ€.

### element.classList
elementμ ν΄λμ€ λͺ©λ‘ μ κ·Ό => css class λ³κ²½ κ°λ₯

- contain
- add
- remove


<br>
<br>

---

### level μ¬μ
![](https://velog.velcdn.com/images/hvvany/post/991de121-cef8-4720-b886-eead1f487f4d/image.gif)

### level μ΄λ €μ
![](https://velog.velcdn.com/images/hvvany/post/40fd0698-acc3-404c-b3e6-77de1204a5b9/image.gif)