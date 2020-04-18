import { NextPage} from 'next';
import {
  Toolbar,
  TextField,
  Button,
  Fieldset,
  Window,
  WindowHeader,
  WindowContent
} from "react95";

import Layoyt from "../../components/Layoyt";

const Question: NextPage = () => (
  <Layoyt>
    <Window style={{ width: "95%", maxWidth: 400, maxHeight: 440, position: "absolute", left: 0, right:0, top: 0, bottom: 0, margin: "auto" }}>
        <WindowHeader
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>question.1</span>
        <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
          <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <div style={{ height: 60 }}>
          <p style={{ lineHeight: 1.3 }}>
          ENS support for reverse resolution of Ethereum addresses
          </p>
        </div>
        <Fieldset label="Answer" style={{ marginTop: '1.5rem' }}>
          <label style={{ paddingRight: '0.5rem', fontSize: '1rem' }}>This is ERC</label>
          <TextField variant="flat" width={150} />
        </Fieldset>
      </WindowContent>
      <Toolbar>
        <Button variant="menu" size="lg" fullWidth>
          1
        </Button>
        {/* <Divider vertical /> */}
        <Button variant="menu" size="lg" fullWidth>
          2
        </Button>
        {/* <Divider vertical /> */}
        <Button variant="menu" size="lg" fullWidth>
          3
        </Button>
      </Toolbar>
      <Toolbar>
        <Button variant="menu" size="lg" fullWidth>
          4
        </Button>
        <Button variant="menu" size="lg" fullWidth>
          5
        </Button>
        <Button variant="menu" size="lg" fullWidth>
          6
        </Button>
      </Toolbar>
      <Toolbar>
        <Button variant="menu" size="lg" fullWidth>
          7
        </Button>
        <Button variant="menu" size="lg" fullWidth>
          8
        </Button>
        <Button variant="menu" size="lg" fullWidth>
          9
        </Button>
      </Toolbar>
      <Toolbar>
        <Button size="lg" fullWidth>
          Clear
        </Button>
        <Button variant="menu" size="lg" fullWidth>
          0
        </Button>
        <Button size="lg" fullWidth>
          Go
        </Button>
      </Toolbar>
    </Window>
  </Layoyt>
);

export default Question;
