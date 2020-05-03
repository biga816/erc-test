import { NextPage} from 'next';
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { Hourglass } from "react95";
import firebase from "firebase";

import Layoyt from "../../components/Layoyt";
import { IERC } from "../../interfaces/IERC";
import QuestionWindow from './QuestionWindow';
import AnswerWindow from './AnswerWindow';

const Question: NextPage = () => {
  const [list, setList] = useState([] as IERC[]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCollect, setIsCollect] = useState(false);

  useEffect(() => {
    (async() => {
      try {
        const db = firebase.firestore();
        const ercs = await db.collection('ercs').get();
        console.log(ercs.docs.map((doc) => (doc.data())));
        setList(ercs.docs.map((doc) => (doc.data() as IERC)));
        setCurrentIndex(0);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const answer = (result: string) => {
    setIsAnswered(true);
    setIsCollect(result === list[currentIndex].eip);
  }

  const next = () => {    
    if (currentIndex < list.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswered(false);        
    } else {
      Router.push('/result')
    }
  }

  if (list.length === 0) {
    return (
      <Layoyt>
        <Hourglass className="center"/>
        <style jsx>{`
          :global(.center) {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
          }
        `}</style>
      </Layoyt>
    );
  }

  return (
    <Layoyt>
      {
        currentIndex >= 0 && !isAnswered
        ? <QuestionWindow erc={list[currentIndex]} index={currentIndex} onAnswer={answer}/>
        : <AnswerWindow isCollect={isCollect} erc={list[currentIndex]} onNext={next}/>
      }
    </Layoyt>
  )
};

export default Question;
