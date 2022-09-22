let id = 0;

export default function NamesList() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    const newUsers = [
      {
        id: id,
        name: name,
      },
      ...users,
    ];
    id++;
    setUsers(newUsers);
    setName('');
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={name}
        placeholder="Enter a new name"
      />
      <button>Add name</button>
      <br />
      Names:
      {users.map((user) => {
        return <div key={`user-${user.id}`}>{user.name}</div>;
      })}
    </form>
  );
}
