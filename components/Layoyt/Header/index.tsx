import Router from 'next/router'
import { AppBar, Toolbar, Button } from "react95";
import Menu from "../Menu";

const Header = () => (
  <AppBar className="header">
    <Toolbar className="toolbar">
      <Menu />
    </Toolbar>

    <style jsx>{`
      :global(.toolbar) {
        justify-content: space-between;
        width: calc(100% - 8px);  
      }
      :global(.header) {
        z-index: 100;
        bottom: 0;
        top: unset!important;
      }
    `}</style>
  </AppBar>
  )

export default Header;