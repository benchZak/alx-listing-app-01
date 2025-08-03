import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">🏠 LuxeStay</div>
      <nav className="flex gap-4 text-gray-600">
        <a href="#">Rooms</a>
        <a href="#">Mansions</a>
        <a href="#">Countryside</a>
      </nav>
      <div className="flex gap-2">
        <input type="text" placeholder="Search..." className="border rounded px-2 py-1" />
        <button className="bg-blue-500 text-white px-3 py-1 rounded">Sign In</button>
        <button className="bg-gray-200 px-3 py-1 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
