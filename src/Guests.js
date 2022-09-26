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

  function handleChange1(event) {
    setFirstName(event.target.value);
  }
  function handleChange2(event) {
    setLastName(event.target.value);
  }
  const newGuests = [
    {
      id: id,
      firstName: firstName,
      secondName: lastName,
      attendance: false,
    },
    ...guests,
  ];
  function handleSubmit(event) {
    event.preventDefault();

    id++;
    setGuests(newGuests);
    setLastName('');
    setFirstName('');
  }
  function RemoveGuest() {
    // add idd as parameter
    const removeGuests = guests.filter((guest) => guest.id !== id);
    setGuests(removeGuests);
  }
  function handleAttendanceChange(attendingEvent) {
    // add idd as parameter
    const guestAttending = guests.find((guest) => guest.id === id);
    const updatedGuest = {
      ...guestAttending,
      attendance: (guestAttending.attendance = attendingEvent),
    };
    const allGuestsagain = [guests, updatedGuest];
    setGuests(allGuestsagain);
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
              aria-label="attending"
              type="checkbox"
              checked={guest.attendance}
              onChange={(event) =>
                handleAttendanceChange(
                  guest.attendance,
                  event.currentTarget.checked,
                )
              }
            />
            <button
              css={buttonStyles}
              aria-label="Remove"
              onClick={() => RemoveGuest(guest.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </form>
  );
}
