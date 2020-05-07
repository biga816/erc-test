import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";
import globalStyles from '../../styles/global'

import Header from "./Header";
import DesktopIcon from "./DesktopIcon";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default (props) => (
  <div className="App">
    <ResetStyles />
    <ThemeProvider theme={themes.default}>
      <div className="background">
        <DesktopIcon src="/img/computer.png">My<br />Computer</DesktopIcon>
      </div>
      <div className="container">
        {props.children}
        <Header />
      </div>
    </ThemeProvider>
    <style jsx global>
      {globalStyles}
    </style>
    <style jsx>{`
      .background {
        width: 100vw;
        height: 100vh;background: teal;
      }
      .container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: calc(100vh - 47px);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
);
