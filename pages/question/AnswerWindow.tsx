import Router from 'next/router'
import {
  Toolbar,
  TextField,
  Button,
  Fieldset,
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
        {
          props.isCollect
            ?<div>That’s right!</div>
            : <div>That's wrong...</div>
        }
        <div>ERC {props.erc.eip} was correct.</div>
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
