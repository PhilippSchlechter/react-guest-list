/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const baseUrl =
  'https://express-guest-list-api-memory-data-store.philippschlech1.repl.co';

const buttonStyles = css`
  border-radius: 1e10px;
  color: black;
  background-color: #fff;
  font-size: 13px;
  margin: 30px;
`;
const inputStyles = css`
  margin: 10px;
  padding: 6px;
`;
const checkBoxStyles = css`
  margin-left: 50px;
`;

export default function GuestList() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guests, setGuests] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  async function getGuestsByApi() {
    const response = await fetch(`${baseUrl}/guests`);
    const guestsApi = await response.json();
    setPageLoading(false);
    setGuests(guestsApi);
  }
  useEffect(() => {
    getGuestsByApi().catch(() => {});
  }, []);

  async function addGuestByApi() {
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });
    const createdGuest = await response.json();
    setGuests([...guests, createdGuest]);
    setFirstName('');
    setLastName('');
  }

  async function updateGuestByApi(id, boolean) {
    const response = await fetch(`${baseUrl}/guests/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: boolean }),
    });
    const updatedGuest = await response.json();
    let checkBoxGuests = [...guests];
    checkBoxGuests = checkBoxGuests.map((checkBoxGuest) => {
      if (checkBoxGuest.id === id) {
        return updatedGuest;
      } else {
        return checkBoxGuest;
      }
    });
    setGuests(checkBoxGuests);
  }

  async function deleteGuestByApi(id) {
    const response = await fetch(`${baseUrl}/guests/${id}`, {
      method: 'DELETE',
    });
    const removeGuest = await response.json();
    const reducedGuestList = guests.filter(
      (guest) => guest.id !== removeGuest.id,
    );
    setGuests(reducedGuestList);
  }

  function handleChange1(event) {
    setFirstName(event.target.value);
  }
  function handleChange2(event) {
    setLastName(event.target.value);
  }

  return (
    <div data-test-id="guest">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addGuestByApi().catch(() => {});
          setLastName('');
          setFirstName('');
        }}
      >
        <label>
          First name
          <input
            css={inputStyles}
            onChange={handleChange1}
            value={firstName}
            disabled={pageLoading}
          />
        </label>
        <label>
          Last name
          <input
            css={inputStyles}
            onChange={handleChange2}
            value={lastName}
            disabled={pageLoading}
          />
        </label>
        <button hidden>Add guest</button>

        <br />
        <br />
        <br />
        <br />
      </form>
      {pageLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {guests.map((guest) => {
            return (
              <div key={`${guest.firstName}-${guest.lastName}-${guest.id}`}>
                {guest.firstName} {guest.lastName}
                <input
                  css={checkBoxStyles}
                  aria-label={`${guest.firstName} ${guest.lastName}attending status`}
                  type="checkbox"
                  onChange={async (event) =>
                    await updateGuestByApi(
                      guest.id,
                      event.currentTarget.checked,
                    ).catch(() => {})
                  }
                  checked={guest.attending}
                />
                Attending
                <button
                  css={buttonStyles}
                  aria-label={`Remove${guest.firstName} ${guest.lastName}`}
                  onClick={() => deleteGuestByApi(guest.id).catch(() => {})}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
