// constants/index.ts
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "Modern Loft in Downtown",
    description: "This modern loft is located in the heart of downtown with easy access to all attractions. It features floor-to-ceiling windows with stunning city views, a fully equipped kitchen, and a comfortable living space.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    rating: 4.8,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
    },
    category: ["Wifi", "Kitchen", "Washer", "Dryer", "Air conditioning", "Heating", "TV", "Iron"],
    price: 120,
    reviews: [
      {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5,
        comment: "Great place! Very clean and comfortable. The location was perfect for exploring the city.",
        date: "2023-05-15"
      },
      {
        name: "Jane Smith",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 4,
        comment: "Lovely apartment with amazing views. The host was very responsive and helpful.",
        date: "2023-04-22"
      }
    ],
    host: {
      name: "Michael Johnson",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      about: "I've been hosting for 5 years and love sharing my space with travelers from around the world. My goal is to make your stay as comfortable as possible."
    }
  }
];