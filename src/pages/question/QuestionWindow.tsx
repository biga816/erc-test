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

interface Props {
  erc: IERC;
  index: number;
  onAnswer: (result: string) => void;
}

const QuestionWindow = ({erc, index, onAnswer}: Props) => {
  const [value, setValue] = useState('');

  const answer = (): void => onAnswer(value);
  const clear = (): void => setValue('');
  const push = (input: string): void => setValue(value + input);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setValue(e.target.value);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key == 'Enter') {
      answer();
    }
  };
  
  const panel = [0,1,2].map((index) => {
    return (
      <Toolbar key={index}>
        <Button variant="menu" size="lg" fullWidth onClick={() => push(String(1 + index * 3))}>
          { 1 + index * 3 }
        </Button>
        {/* <Divider vertical /> */}
        <Button variant="menu" size="lg" fullWidth onClick={() => push(String(2 + index * 3))}>
          { 2 + index * 3 }
        </Button>
        {/* <Divider vertical /> */}
        <Button variant="menu" size="lg" fullWidth onClick={() => push(String(3 + index * 3))}>
          { 3 + index * 3 }
        </Button>
      </Toolbar>
    )
  });

  return (
    <Window style={{ width: "95%", maxWidth: 400, maxHeight: 440 }}>
      <WindowHeader>Question {index + 1}</WindowHeader>
      <WindowContent>
        <div style={{ height: 52 }}>
          <p style={{fontSize: '12px', marginBottom: '4px'}}>Created: {erc?.created}</p>
          <p>{erc?.title}</p>
        </div>
        <Fieldset label="Answer" style={{ marginTop: '1.5rem' }}>
          <label style={{ paddingRight: '0.5rem', fontSize: '1rem' }}>This ERC is</label>
          <TextField
            variant="flat"
            type="tel"
            width={130}
            value={value}
            onChange={handleChange}
            onKeyDown={ handleKeyDown }
          />
        </Fieldset>
      </WindowContent>
      { panel }
      <Toolbar>
        <Button size="lg" fullWidth onClick={clear}>
          CLEAR
        </Button>
        <Button variant="menu" size="lg" fullWidth onClick={() => push('0')}>
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
