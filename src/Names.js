export default function Names() {
  const users = [
    { id: 0, name: 'Rhaisa' },
    { id: 1, name: 'Sara' },
    { id: 2, name: 'Sari' },
    { id: 3, name: 'Tamara' },
    { id: 4, name: 'Philipp' },
    { id: 5, name: 'Bobby' },
  ];

  return (
    <div>
      Names:
      {users.map((user) => {
        return <div key={`user-${user.id}`}>{user.name}</div>;
      })}
    </div>
  );
}
