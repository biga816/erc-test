import { NextPage } from 'next';
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { Button } from "react95";

import Layoyt from "../components/Layoyt";

const Home: NextPage<{ userAgent: string }> = () => {
  const [name, setName] = useState('');

  return (
    <Layoyt>
      <div className="container">
        <div className="pixel-mplus">
          <h2 className="title">ERC TEST</h2>
          <div className="top-image">
            <img src="/static/img/vitalik.gif"/>
          </div>
          <p className="description">
            ERC is Application-level standards and conventions
            in Ethereum Improvement Proposals(EIPs).<br />
            Let's test your ERC knowledge.
          </p>
        </div>
        <Button
          fullWidth
          size="lg"
          onClick={() => Router.push('/question')}
          style={{ marginLeft: '2px' }}
        >
          Start
        </Button>
      </div>
      <style jsx>{`
        .title {
          font-size: 48px;
          text-align: center;
        }
        .description {
          text-align: center;
          margin: 4px 0 32px;
        }
        .container {
          width: 95%;
          max-width: 400px;
          max-height: 420px;
          position: absolute;
          left: 0;
          right:0;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        .top-image {
          display: flex;
          justify-content: center;
          margin: 36px 0;
        }
        .top-image img {
          object-fit: cover;
          width: 180px;
          height: 180px;
          border-radius: 8px;
        }
      `}</style>
    </Layoyt>
  )
};

export default Home;
