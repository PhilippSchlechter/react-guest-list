/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

let id = 0;

const buttonStyles = css`
  border-radius: 1e9px;
  color: black;
  background-color: #fff;
  font-size: 12px;
  margin: 20px;
`;
const inputStyles = css`
  margin: 10px;
  padding: 6px;
`;

export default function NamesList() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guests, setGuests] = useState([]);
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  function handleChange1(event) {
    setFirstName(event.target.value);
  }
  function handleChange2(event) {
    setLastName(event.target.value);
  }
  function RemoveGuest() {
    const newState = [...guests];
    newState.shift();
    setGuests(newState);
  }
  function handleSubmit(event) {
    const newGuests = [
      {
        id: id,
        firstName: firstName,
        secondName: lastName,
      },
      ...guests,
    ];
    id++;
    setGuests(newGuests);
    setLastName('');
    setFirstName('');
    event.preventDefault();
  }
  console.log(guests);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name
        <input css={inputStyles} onChange={handleChange1} value={firstName} />
      </label>
      <label>
        Last Name
        <input css={inputStyles} onChange={handleChange2} value={lastName} />
      </label>
      <button hidden>Add guest</button>

      <br />
      <br />
      <br />
      <br />

      {guests.map((guest) => {
        return (
          <div key={`guest-${guest.id}`}>
            {guest.firstName} {guest.secondName}
            <input
              type="checkbox"
              onChange={(event) =>
                setCheckBoxValue(event.currentTarget.checked)
              }
            />
            <button css={buttonStyles} onClick={() => RemoveGuest()}>
              Remove
            </button>
          </div>
        );
      })}
    </form>
  );
}
