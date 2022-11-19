import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Guests from './Guests.js';

const h1Styles = css`
  display: flex;
  justify-content: center;
  margin: 50px auto;
  font-size: 2em;
`;
const guestListStyles = css`
  display: flex;
  justify-content: center;
  border: 5px solid black;
  border-radius: 7px;
  width: 600px;
  height: 1000px;
  margin: 50px auto;
`;

function App() {
  return (
    <div>
      <section>
        <h1 css={h1Styles}>Guest List</h1>
        <div css={guestListStyles}>
          <h4>
            <Guests />
          </h4>
        </div>
      </section>
    </div>
  );
}

export default App;
