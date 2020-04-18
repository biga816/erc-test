import Router from 'next/router'
import { AppBar, Toolbar, Button } from "react95";
import Menu from "../Menu";

const Header = () => (
  <AppBar style={{ zIndex: 100 }}>
    <Toolbar className="toolbar">
      <Button
        variant="menu"
        onClick={() => Router.push('/')}
      >
        ERC TEST
      </Button>
      <Menu />
    </Toolbar>

    <style jsx>{`
      :global(.toolbar) {
        justify-content: space-between;
        max-width: 900px;
        margin: auto;
        width: calc(100% - 8px);  
      }
    `}</style>
  </AppBar>
  )

export default Header;