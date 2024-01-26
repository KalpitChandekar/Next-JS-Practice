const usersData = [
  {
    name: "John Doe",
    age: 32,
    address: "123, Charming Avenue",
  },
  {
    name: "Clark Kent",
    age: 25,
    address: "456, Sunny Side Lane",
  },
  {
    name: "Bruce Wayne",
    age: 40,
    address: "789, Elegant Street",
  },
  {
    name: "Tony Stark",
    age: 35,
    address: "0123, Marvelous Boulevard",
  },
];

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      {usersData.map((user, index) => {
        return (
          <div
            key={index}
            className="border border-black p-4 m-4 rounded-lg bg-green-300"
          >
            <h1 className="text-xl">User</h1>
            <p> name: {user.name}</p>
            <p>age: {user.age}</p>
            <p>address: {user.address}</p>
          </div>
        );
      })}
    </div>
  );
};
export default App;
