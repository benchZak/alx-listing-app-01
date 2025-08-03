// components/property/ReviewSection.tsx
const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Reviews</h2>
      {reviews.length === 0 ? (
        <p className="mt-4 text-gray-600">No reviews yet.</p>
      ) : (
        <div className="mt-6 space-y-8">
          {reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <div className="flex items-center">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-medium">{review.name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewSection;