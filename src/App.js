import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import Names from './Names.js';

const headerStyles = css``;
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
  width: 500px;
  height: 900px;
  margin: 0 auto;
`;

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstName(event.target[0].value);
    setLastName(event.target[0].value);
  };

  return (
    <div>
      <header css={headerStyles}>
        fh
        <Names />
      </header>
      <section>
        <div>
          First name
          <form onSubmit={handleSubmit}>
            <input css={inputStyles} />
          </form>
          Last name
          <form onSubmit={handleSubmit}>
            <input css={inputStyles} />
          </form>
        </div>
        <h1 css={h1Styles}>Guest List</h1>
        <div css={guestListStyles}>
          <h3>
            {firstName}
            {lastName}
          </h3>
        </div>
      </section>
    </div>
  );
}

export default App;
