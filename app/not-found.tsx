"use client";

const NotFound = () => {
  const handleButtonClick = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    // loop through the data and only show the users above age of 30
    for (const user of data.users) {
      if (user.age > 30) {
        console.log(user);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

export default NotFound;
