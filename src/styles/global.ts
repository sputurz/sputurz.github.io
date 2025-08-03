import { createGlobalStyle, css } from 'styled-components';
import { vp767 } from './utils/mixins';
import { FontStyle } from './utils/fonts';
import { NormalizeStyle } from './utils/normalize';

export const GlobalStyle = createGlobalStyle`
${FontStyle}
${NormalizeStyle}

 *,
*::after,
*::before {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-size: 14px;
  font-family: 'Play';
  font-style: normal;
  font-weight: 400;
  background-image: linear-gradient(
      rgba(39, 135, 245, 0.2),
      rgba(163, 147, 245, 0.2)
    ),
    linear-gradient(rgba(0, 0, 0, 1), rgba(39, 36, 36, 0.7));
}

main {
  flex-grow: 1;
  min-height: calc(100vh - 168px);
 
     ${vp767(css`
       min-height: calc(100vh - 237px);
     `)}
}

img {
  display: block;
  height: auto;
  object-fit: cover;
}

a {
  text-decoration: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
}

button {
  cursor: pointer;
}

svg {
  display: inline-block;
  overflow: hidden;
}

use {
  width: 100%;
  height: 100%;
}
`;
