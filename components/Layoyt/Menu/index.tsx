import Router from 'next/router'
import { useState } from "react";
import {
  List,
  ListItem,
  Button,
} from "react95";

function Menu() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {open && (
        <List horizontalAlign="left" verticalAlign="top" open={open} onClick={handleClose}>
          <ListItem onClick={() => Router.push('/')}>🚀 Home</ListItem>
          <ListItem>📁 Github</ListItem>
          <ListItem>👨‍💻 Author</ListItem>
          {/* <Divider />
          <ListItem disabled>🔙 Logout</ListItem> */}
        </List>
      )}
      <Button onClick={handleClick} active={open} style={{ fontWeight: 'bold' }}>
        {/* <LogoIcon style={{ marginLeft: -2, marginRight: 4 }} /> */}
        <span className="logo-icon">
          <img className="logo-img" src="/static/img/windows.png"/>
        </span>
        Menu
      </Button>

      <style jsx>{`
        .logo-icon {
          margin-left: -2px;
          margin-right: 4px;
          display: inline-block;
          height: 22px;
        }
        .logo-img {
          height: 100%;
          width: auto;
        }
      `}</style>
    </div>
  );
}

export default Menu;