import { NextPage} from 'next';
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { Button, Fieldset, Window, WindowContent, WindowHeader } from "react95";

import Layoyt from "../../components/Layoyt";
import { globalQuery } from "../../state/global";

const Result: NextPage = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const subscription = globalQuery.score$.subscribe((score) => setScore(score));

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Layoyt>
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
      </Window>
    </Layoyt>
  )
};

export default Result;
