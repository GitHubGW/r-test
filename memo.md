## YouTube Clone

### videoRouter.js

- get과 post가 같은 url주소를 사용한다면 아래와 같이 축약해서 쓸 수도 있다.

```
videoRouter.get("/:id(\\d+)/edit", handleGetEditVideo);
videoRouter.post("/:id(\\d+)/edit", handlePostEditVideo);

// videoRouter.route를 통해 해당 url주소를 생성하고, get과 post Request에 대한 컨트롤러를 지정해준다.
videoRouter.route("/:id(\\d+)/edit").get(handleGetEditVideo).post(handlePostEditVideo);
```
