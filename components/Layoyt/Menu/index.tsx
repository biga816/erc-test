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
        <List horizontalAlign="right" verticalAlign="bottom" open={open} onClick={handleClose}>
          <ListItem>📁 Github</ListItem>
          <ListItem>👨‍💻 Author</ListItem>
          {/* <Divider />
          <ListItem disabled>🔙 Logout</ListItem> */}
        </List>
      )}
      <Button onClick={handleClick} active={open} style={{ fontWeight: 'bold' }}>
        {/* <LogoIcon style={{ marginLeft: -2, marginRight: 4 }} /> */}
        Menu
      </Button>
    </div>
  );
}

export default Menu;