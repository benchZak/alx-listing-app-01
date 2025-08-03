// components/property/BookingSection.tsx
import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const total = nights * price;

  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xl font-semibold">${price}</span>
          <span className="text-gray-600"> / night</span>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1">5.0</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="border rounded-lg p-3">
          <label className="block text-xs font-medium text-gray-700">CHECK-IN</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full mt-1 focus:outline-none"
          />
        </div>
        <div className="border rounded-lg p-3">
          <label className="block text-xs font-medium text-gray-700">CHECKOUT</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full mt-1 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-4 border rounded-lg p-3">
        <label className="block text-xs font-medium text-gray-700">GUESTS</label>
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="w-full mt-1 focus:outline-none"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
          ))}
        </select>
      </div>

      <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200">
        Reserve
      </button>

      {nights > 0 && (
        <div className="mt-6">
          <div className="flex justify-between py-2">
            <span>${price} × {nights} {nights === 1 ? 'night' : 'nights'}</span>
            <span>${price * nights}</span>
          </div>
          <div className="flex justify-between py-2 border-t border-gray-200 font-semibold">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSection;