import { useEffect, useState } from 'react'
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

const QuestionWindow = (props: {erc: IERC, index: number, onAnswer: (result: string) => void}) => {
  const [erc, setErc] = useState('');

  const answer = (): void => props.onAnswer(erc);
  const clear = (): void => setErc('');
  const push = (value: string): void => setErc(erc + value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setErc(e.target.value);

  return (
    <Window style={{ width: "95%", maxWidth: 400, maxHeight: 440 }}>
      <WindowHeader>Question {props.index + 1}</WindowHeader>
      <WindowContent>
        <div style={{ height: 60 }}>
          <p style={{ lineHeight: 1.3 }}>
          {/* ENS support for reverse resolution of Ethereum addresses */}
          {props.erc.title}
          </p>
        </div>
        <Fieldset label="Answer" style={{ marginTop: '1.5rem' }}>
          <label style={{ paddingRight: '0.5rem', fontSize: '1rem' }}>This ERC is</label>
          <TextField
            variant="flat"
            width={130}
            value={erc}
            onChange={handleChange}
          />
        </Fieldset>
      </WindowContent>
      <Toolbar>
        <Button variant="menu" size="lg" fullWidth onClick={() => push('1')}>
          1
        </Button>
        {/* <Divider vertical /> */}
        <Button variant="menu" size="lg" fullWidth onClick={() => push('2')}>
          2
        </Button>
        {/* <Divider vertical /> */}
        <Button variant="menu" size="lg" fullWidth onClick={() => push('3')}>
          3
        </Button>
      </Toolbar>
      <Toolbar>
        <Button variant="menu" size="lg" fullWidth onClick={() => push('4')}>
          4
        </Button>
        <Button variant="menu" size="lg" fullWidth onClick={() => push('5')}>
          5
        </Button>
        <Button variant="menu" size="lg" fullWidth onClick={() => push('6')}>
          6
        </Button>
      </Toolbar>
      <Toolbar>
        <Button variant="menu" size="lg" fullWidth onClick={() => push('7')}>
          7
        </Button>
        <Button variant="menu" size="lg" fullWidth onClick={() => push('8')}>
          8
        </Button>
        <Button variant="menu" size="lg" fullWidth onClick={() => push('9')}>
          9
        </Button>
      </Toolbar>
      <Toolbar>
        <Button size="lg" fullWidth onClick={clear}>
          CLEAR
        </Button>
        <Button variant="menu" size="lg" fullWidth>
          0
        </Button>
        <Button size="lg" fullWidth onClick={answer}>
          ENTER
        </Button>
      </Toolbar>
    </Window>
  )
};

export default QuestionWindow;
