import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";

export default function Home() {
  const filters = ["Top Villa", "Self Checkin", "Beachfront", "Fireplace"];

  return (
    <div className="space-y-10 px-4 sm:px-8">
      {/* Hero */}
      <section className="bg-cover bg-center h-64 flex items-center justify-center text-white text-center" style={{ backgroundImage: `url('/hero.jpg')` }}>
        <div>
          <h1 className="text-3xl font-bold">Find your favorite place here!</h1>
          <p>The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 justify-center">
        {filters.map((filter, i) => (
          <span key={i} className="px-4 py-1 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">{filter}</span>
        ))}
      </div>

      {/* Listings */}
      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, i: number) => (
          <div key={i} className="border rounded-lg overflow-hidden shadow hover:shadow-md transition">
            <img src={property.image} alt={property.name} className="h-48 w-full object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-lg">{property.name}</h3>
              <p className="text-gray-500">{property.address.city}, {property.address.country}</p>
              <p className="text-yellow-500 font-bold">⭐ {property.rating}</p>
              <p className="text-blue-600 font-semibold">${property.price}/night</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
