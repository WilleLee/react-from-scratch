```js
import React from "react";
```

브라우저는 "react" 같은 패키지 이름 import를 직접 해석하지 못합니다. Vite는 이런 import를 브라우저가 읽을 수 있는 경로로 바꿔주고, 개발 서버도 띄워줍니다. Vite 공식 문서도 vite를 npm scripts에서 실행해 dev server를 시작하는 방식을 안내하고, bare module import를 유효한 URL로 rewrite한다고 설명합니다.
