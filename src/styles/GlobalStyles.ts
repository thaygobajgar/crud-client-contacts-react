import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
  --font-family-title: 'Lexend', sans-serif;
    --font-family-text: 'Inter', sans-serif;

    --brand-1: #8FCACA;
    --brand-2: #A2E1DB;
    --brand-3:#D4F0F0;
    --translucid: rgba(255,255,255,.5);

    --grey-0: #0B0D0D;
    --grey-1: #212529;
    --grey-2: #495057;
    --grey-3: #868E96;
    --grey-4: #ADB5BD;
    --grey-5: #CED4DA;
    --grey-6: #DEE2E6;
    --grey-7: #E9ECEF;
    --grey-8: #F1F3F5;
    --grey-9: #F8F9FA;
    --grey-10: #FDFDFD;
    --white-fixed: #FFFFFF;

    --alert-1: #CD2B31;
    --alert-2: #FDD8D8;
    --alert-3: #FFE5E5;

    --success-1: #18794E;
    --success-2: #CCEBD7;
    --success-3: #DDF3E4;


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


 
}

//Reset
html, body, div, span, h1, h2, h3, h4, p, a, em, img, small, strong, ol, ul, li, 
fieldset, button, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, 
figure, figcaption, footer, header, menu, nav, section, audio, video, input, select, option{
    margin: 0;
    border: 0;
    padding: 0;


    text-decoration: none;
    display: block;
    box-sizing: border-box;
    line-height: 1;
    list-style: none;
    border: 0;
}
html,body{
    width: 100%;
    height: 100%;
}

.hidden{
    display: none;
}
`;
