- base 모듈의 목적
  - 특정 목적을 위해 만들어지는 모듈셋의 전반적인 구조를 정의한다.
    - 핵심적인 서비스 기능을 구현한다.
      - 정적인 공통기능
    - 상태를 유지해야하는 서비스인 경우는 store를 활용한다.
      - store에 reducer를 추가하고, action을 제공한다.
    - 서비스 기능이나 action은 index.js를 통해서 export 해서, 서브모듈들이 사용할 수 있도록 한다.
- menu-base 의 기능
  - 사용자에 특화된 메뉴의 구조를 정의한다.
  - 메뉴의 선택시에 어떻게 라우팅되어야 하는지에 대한 구조를 정의한다.
  - 라우팅의 종류를 추가할 수 있는 구조를 정의한다.
    - 메뉴는 여러가지 타입으로 구성될 수 있으며, 각 타입별로 라우팅 방법이 달라질 수 있다.
    - 다른 모듈들은 menu-base 모듈의 action addRoutingType 을 이용해서 타입별로 라우팅될 페이지를 정의할 수 있다
