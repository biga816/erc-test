import { NextPage} from 'next';

import Layoyt from "../../../components/Layoyt";
import Head from "../../../components/Head";
import ResultWindow from "../ResultWindow";

const Result: NextPage = () => {
  const image = "https://erc-checker.web.app/img/ogp/score8.png";
  return (
    <Layoyt>
      <Head image={image}/>
      <ResultWindow score={8}/>
    </Layoyt>
  )
};

export default Result;
