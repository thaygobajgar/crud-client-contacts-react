import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --color-primary:#000

  font-size:60%
}

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
button{
    cursor: pointer;
    border: none;
    background: transparent;
}
ul,ol{
    margin: 0;
    padding: 0;
    list-style: none;
}
li{
    list-style: none;
}



.container{
  margin: 0 auto;
  width: 100%;
  max-width:1440px;
  /* padding: 0 2rem; */
 
}




`;

export const ColorsTheme = {
  colors: {
    brand1: "#8FCACA",
    brand2: "#A2E1DB",
    brand3: "#D4F0F0",
    translucid: "rgba(255,255,255,.5)",
    black: "#000",
    white: "#FFFFFF",
    alert: "#FF968A",
    alert2: "#FFC8A2",
    success: "#97C1A9",
    blue: "blue",
    green: "green",
  },
};
