import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import Guests from './Guests.js';

const headerStyles = css`
  margin-bottom: 200px;
`;
const inputStyles = css`
  background-color: aliceblue;
  margin: 3px;
`;
const labelStyles = css`
  display: flex;
  justify-content: center;
  margin: 10px;
  font-size: 18px;
  font-weight: 400;
`;
const h1Styles = css`
  display: flex;
  justify-content: center;
`;
const guestListStyles = css`
  display: flex;
  justify-content: center;
  border: 5px solid black;
  border-radius: 7px;
  width: 600px;
  height: 1000px;
  margin: 0 auto;
`;

function App() {
  return (
    <div>
      <header css={headerStyles}>ps.guest.list</header>
      <section>
        <h1 css={h1Styles}>Guest List</h1>
        <div css={guestListStyles}>
          <h4>
            <Guests />
          </h4>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
