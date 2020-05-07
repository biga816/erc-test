import Router from 'next/router'
import { useState } from "react";
import {
  List,
  ListItem,
  Button,
} from "react95";
import Icon from "../../Icon";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function open(url: string) {
    window.open(url);
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {isOpen && (
        <List horizontalAlign="left" verticalAlign="top" open={isOpen} onClick={handleClose}>
          <ListItem onClick={() => Router.push('/')}>
            <Icon src="/img/computer.png" />Home
          </ListItem>
          <ListItem onClick={() => open("https://github.com/biga816/erc-test")}>
            <Icon src="/img/web.png" />Github
          </ListItem>
          <ListItem onClick={() => open("https://twitter.com/biga816")}>
          <Icon src="/img/user.png" />Author
          </ListItem>
        </List>
      )}
      <Button onClick={handleClick} active={isOpen} style={{ fontWeight: 'bold' }}>
        <Icon src="/img/windows.png" />
        Menu
      </Button>
    </div>
  );
}
