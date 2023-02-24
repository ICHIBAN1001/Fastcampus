# **HTML**

---

# 요소 (=태그라고 혼용해서 사용한다 )

- 어떤 태그들로 내용이 감싸져 있고 그것이 하나의 html코드로 동작한다
- 태그 안의 내용까지 포함 한 전체

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4447f3b1-1bc1-4937-b866-8505c82c12b7/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/365f724c-55cb-4c53-814c-a343b6b1f2e8/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/02ec990f-4d45-449f-86a0-e412ffe4d265/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/88b8ed08-72b6-4ef0-aec1-b4d048b0b24a/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/adbfb4e2-21a1-4311-a7bf-3c9fc02bd000/Untitled.png)

요소의 내용 
    : 그 요소가 가지고 있는 시작하는 태그와 종료되는 태그 사이에 있는 어떤 코드를 지칭한다

# 부모와 자식 관계

상대적인 관계

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ded64a02-c359-47d0-ab95-cec29ef18209/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/59af59c5-8557-466a-9b2c-7d0d14c453a5/Untitled.png)

## 요소 안에 요소 안에 요소 안에 요소………

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/703e4da4-ee2b-47de-b19f-2f97fd0f4980/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a300afc3-36ce-45e4-b8fb-a5bed623ae18/Untitled.png)

### `상위(조상)요소`

나를 기준으로 나를 감싸고 있는 모든 요소들을 지칭하는 개념 (부모 요소도 포함하는 개념)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4d068f6-31b4-48d9-83ab-5b33f2c50783/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec8d1b06-adcf-4dd3-b1fb-ec5a38493d3d/Untitled.png)

나를 기준으로 내가 감싸고 있는 모든 요소들을 지칭 (자식 요소 포함)

# 빈 태그

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f70e46a1-60e1-4000-9c82-73da5d697fe7/Untitled.png)

빈 태그의 작성 방식 2가지

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4cba3b86-f5c2-46ab-8d05-589cc6355b8a/Untitled.png)

※ 빈 태그 뒤에는 되도록 이면   **<태그 />** 이렇게 사용하기!!  

# 속성 → 태그의 기능 확장

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7b026ee-cbe2-4b75-8bc5-ffd12ff2abde/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6e4d3267-7b43-4269-9167-b51569055206/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/35fab655-173e-429b-aeb8-0dbb9d758926/Untitled.png)

# input 요소

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/62734d66-ec21-4768-9e02-f5c9e82a616b/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/159a280b-8104-4f50-9863-d70aa1fbde76/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/98ad9655-ef63-4067-a409-effd0845b6a8/Untitled.png)

사용자가 무엇 인가를 입력하는 역할을 수행하는 태그  (type 이라는 속성이 자동으로 붙는다 )

- 무엇을 입력할 것인지 정확하게 알려줘야 한다
- 입력되는 데이터의 type이 무엇인지를 type속성에다가 값을 명시를 해야한다
- input을 통해서 무엇 인가를 입력하게 할 건데 그것의 type은 ~이다 는 형

# 글자와 상자

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ae31c074-591c-444a-9f47-7fd58275bbed/Untitled.png)

웹 사이트는 이미지를 제외하고 글자와 상자로 이루어져 있다

## `인라인 요소` = 하나의 글자처럼 취급

# **글자는 가로,세로 사이즈를 지정할 수 없다!!**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/434f19b4-c86e-49d2-9706-d5a7bfe4e906/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6e168258-01d4-4c85-8045-e091eaa422a2/Untitled.png)

`<span>` 이라는 요소는 하나의 **글자처럼 취급**이 된다

줄 바꿈 안 하면 띄어쓰기 x

줄 바꿈 하면 띄어쓰기  O   ⇒ `**인라인 요소**`는  줄 바꿈 처리하면 하나의 띄어쓰기로 인식

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/71fb64b5-70be-4509-b9fc-b3e9b8217d01/Untitled.png)

`**인라인 요소**`는 글자를 취급하는 요소 

⇒ `<span>` 태그 하나의 글자 (글자는 가로 세로 사이즈를 가질 수 없다)

## 가로 세로 넓이 추가 불가!

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32a627aa-1bd2-4e0d-82a1-33fe644bf5ce/Untitled.png)

인라인 요소는 글자를 취급하는 요소!!!!  **글자는 가로,세로 사이즈를 지정할 수 없다!!**

## 여백 추가 ( 좌,우 만 가능)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ffc0745d-1b32-4eec-b16c-526bafaead14/Untitled.png)

`인라인 요소(=글자요소)`는 내부,외부 상관없이 요소의 여백을 추가 할 때는, 

- **상・하의 여백은 정상적으로 적용이 되지 않는다**
- **좌・우의 여백은 정상 적용된다!!**

`인라인 요소(=글자요소)`는 자식 요소로 블록 요소를 사용할 수 없다

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7dfe8d39-0020-444a-b9c4-934df205faa4/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e8ce9840-978d-4549-acbc-f9f5828d04d4/Untitled.png)

**글자 안에는 상자를 넣을 수 없다**,  **글자 안에 글자는 넣을 수 있다!**

## `**상자 요소**` = 하나의 **블록처럼 취급**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a676ff08-896e-42be-8cc1-dbdd77875f34/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e20fbfcb-5a94-43bc-8728-1405c184fd93/Untitled.png)

## 가로 세로 넓이 추가 **가능**!

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d4d682c2-746c-44b2-9e6e-fe7ee3cc1f8a/Untitled.png)

## 여백 추가

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8211d179-8ada-439a-b12d-dce30db992cf/Untitled.png)

자식으로 블록 요소를 가져올 수 있다