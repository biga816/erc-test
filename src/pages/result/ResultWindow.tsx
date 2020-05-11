import Router from 'next/router'
import { Button, Fieldset, Toolbar, Window, WindowContent, WindowHeader } from "react95";

interface Props {
  score: number;
  link?: string;
}

export default ({score, link}: Props) => {
  return (
    <Window>
      <WindowHeader
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>Result</span>
        <Button
          style={{ marginRight: '-6px', marginTop: '1px' }}
          size={'sm'}
          square
          onClick={() => Router.push('/')}
        >
          <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <Fieldset label="Youre score is">
          <h2 style={{fontSize: "2rem", margin: "0 8px"}}>{score} / 10</h2>
        </Fieldset>
      </WindowContent>
      { link &&
        <Toolbar>
          <Button
            fullWidth
            size="lg"
            onClick={() => window.open(link)}
            style={{ marginLeft: '2px' }}
          >
            SHARE ON TWITTER
          </Button>
        </Toolbar>
      }
    </Window>
  )
};
