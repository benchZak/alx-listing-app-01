// components/property/PropertyDetail.tsx
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { useState } from "react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold">{property.name}</h1>
          <div className="flex items-center space-x-2 mt-2">
            <span className="flex items-center">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1">{property.rating}</span>
            </span>
            <span>·</span>
            <span>{property.address.city}, {property.address.country}</span>
          </div>

          {/* Image Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="md:col-span-2 row-span-2">
              <img 
                src={property.image} 
                alt={property.name} 
                className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
              />
            </div>
            {property.images?.slice(1, 5).map((img, index) => (
              <div key={index} className="h-48">
                <img 
                  src={img} 
                  alt={`${property.name} ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-8 border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "description" ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("amenities")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "amenities" ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Amenities
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "reviews" ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveTab("host")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "host" ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                About the host
              </button>
            </nav>
          </div>

          {/* Tab content */}
          <div className="mt-6">
            {activeTab === "description" && (
              <div>
                <h2 className="text-xl font-semibold">About this place</h2>
                <p className="mt-4 text-gray-700">{property.description}</p>
              </div>
            )}

            {activeTab === "amenities" && (
              <div>
                <h2 className="text-xl font-semibold">What this place offers</h2>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.category.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <ReviewSection reviews={property.reviews || []} />
            )}

            {activeTab === "host" && property.host && (
              <div>
                <h2 className="text-xl font-semibold">About the host</h2>
                <div className="mt-4 flex items-start">
                  <img src={property.host.avatar} alt={property.host.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold">{property.host.name}</h3>
                    <p className="mt-2 text-gray-700">{property.host.about}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Booking section */}
        <div className="lg:w-1/3">
          <div className="sticky top-4">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;