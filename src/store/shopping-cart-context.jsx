import { createContext } from "react";
// createContext에 리액트 컴포넌트가 기본적으로 파라미터로 들어감.
// 기본적으로 createContext는 prop drilling을 해결하기 위해 사용한다.

export const CartContext = createContext({
  items: [],
});
