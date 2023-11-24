import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fresca', sans-serif;
}

body {
  font-family: "Altone Trial", sans-serif;
  scroll-behavior:smooth;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-button {
  background: #fff;
}
::-webkit-scrollbar-track-piece {
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background:  ${({ theme }) => theme.colors.primaryColor};

}

.flex {
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
}

.mt-10 {
  margin-top: 10px;
}


`;
