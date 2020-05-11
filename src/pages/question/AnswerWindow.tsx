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

interface Props {
  isCollect: boolean;
  erc: IERC;
  onNext: () => void;
}

const AnswerWindow = ({isCollect, erc, onNext}: Props) => {
  return (
    <Window>
      <WindowHeader>Answer</WindowHeader>
      <WindowContent>
        <div>
          { isCollect ? "That’s right!" : "That's wrong..." }<br/>
          ERC {erc?.eip} was correct.<br/>
          <br/>
          <Anchor href={erc?.url} target="_blank">Show detail</Anchor>
        </div>
      </WindowContent>
      <Toolbar>
        <Button
          fullWidth
          size="lg"
          onClick={onNext}
          style={{ marginLeft: '2px' }}
        >
          NEXT
        </Button>
      </Toolbar>
    </Window>
  )
};

export default AnswerWindow;
