import Router from 'next/router'
import { Button, Fieldset, Toolbar, Window, WindowContent, WindowHeader } from "react95";

export default (props: {score: number, link?: string}) => {

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
          <h2 style={{fontSize: "2rem", margin: "0 8px"}}>{props.score} / 10</h2>
        </Fieldset>
      </WindowContent>
      { props.link &&
        <Toolbar>
          <Button
            fullWidth
            size="lg"
            onClick={() => window.open(props.link)}
            style={{ marginLeft: '2px' }}
          >
            SHARE ON TWITTER
          </Button>
        </Toolbar>
      }
    </Window>
  )
};
