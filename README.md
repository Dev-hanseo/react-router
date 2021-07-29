// react router 자주 사용할만한 내용 정리

react router 공식 홈페이지 : https://reactrouter.com/web/guides/quick-start

exact : 경로가 location.pathname 정확히 일치하는 경우에만 일치합니다.

switch : <Switch>경로를 독점적으로 렌더링한다는 점에서 고유합니다 . 이와 대조적으로 <Route>위치와 일치하는 모든 항목 은 포괄적으로 렌더링 됩니다. 다음 경로를 고려하십시오.
  URL이 /about이면 <About>, <User>, 그리고 <NoMatch>모두 경로와 일치하므로 모두 렌더링됩니다. 이것은 의도적으로 설계된 <Route>것이므로 사이드바, 이동 경로, 부트스트랩 탭 등과 같은 다   양한 방법으로 s를 앱 으로 구성할 수 있습니다 .그러나 때때로 우리는 <Route>렌더링할 단 하나만 선택하고 싶습니다 . 우리가 /about일치하는 경우 /:user(또는 "404"페이지를 표시) 일치하고    싶지 않습니다 . 방법은 다음과 Switch같습니다.
  
<link to= > : to: string
위치의 경로 이름, 검색 및 해시 속성을 연결하여 만든 링크 위치의 문자열 표현입니다.


