import Router from 'next/router'
import {
  Anchor,
  Toolbar,
  Button,
  Window,
  WindowHeader,
  WindowContent
} from "react95";
import { IERC } from '../../interfaces/IERC';

const AnswerWindow = (props: {isCollect: boolean, erc: IERC, onNext: () => void}) => {
  return (
    <Window>
      <WindowHeader>Answer</WindowHeader>
      <WindowContent>
        <div>
          { props.isCollect ? "That’s right!" : "That's wrong..." }<br/>
          ERC {props.erc?.eip} was correct.<br/>
          <br/>
          <Anchor href={props.erc?.url} target="_blank">Show detail</Anchor>
        </div>
      </WindowContent>
      <Toolbar>
        <Button
          fullWidth
          size="lg"
          onClick={props.onNext}
          style={{ marginLeft: '2px' }}
        >
          NEXT
        </Button>
      </Toolbar>
    </Window>
  )
};

export default AnswerWindow;
