import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";
import globalStyles from '../../styles/global'

import Header from "./Header";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export const Layout = (props) => (
  <div className="App">
    <ResetStyles />
    <ThemeProvider theme={themes.default}>
      <div className="container">
        {props.children}
        <Header />
      </div>
    </ThemeProvider>
    <style jsx global>
      {globalStyles}
    </style>
    <style jsx>{`
      .container {
        width: 100vw;
        height: 100vh;
        position: relative;
        background: teal;
      }
    `}</style>
  </div>
);

export default Layout