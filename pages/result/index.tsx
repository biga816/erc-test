import { NextPage} from 'next';
import { useEffect, useState } from 'react'

import Layoyt from "../../components/Layoyt";
import Head from "../../components/Head";
import { globalQuery } from "../../state/global";
import ResultWindow from "./ResultWindow";

const Result: NextPage = () => {
  const [score, setScore] = useState(0);
  const link = `http://twitter.com/share?url=https://erc-checker.web.app/result/score${score}.html&text=ERC TEST: Your Score is ${score} / 10&hashtags=ErcTest`;

  useEffect(() => {
    const subscription = globalQuery.score$.subscribe((score) => setScore(score));

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Layoyt>
      <Head />
      <ResultWindow score={score} link={link}/>
    </Layoyt>
  )
};

export default Result;
