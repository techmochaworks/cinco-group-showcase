export const GROUP = {
  name: "The Cinco Group of Hotels",
  tagline: "Multiple Addresses. One Standard of Excellence.",
  about:
    "The Cinco Group of Hotels represents the pinnacle of contemporary hospitality in Hyderabad. With strategically located properties across the city's most sought-after destinations, we deliver exceptional accommodations, world-class amenities, and personalized service that exceeds expectations. Each hotel embodies our commitment to excellence, blending modern luxury with authentic Indian warmth to create unforgettable experiences for discerning travelers.",
  phone: "+91 90146 32639",
  email: "stay@cincogroup.com",
  address: "Begumpet, Hyderabad – 500016, Telangana, India",
};

export type Property = {
  name: string;
  slug: string;
  area: string;
  description: string;
  bookLink: string;
  images: string[];
};

export const PROPERTIES: Property[] = [

  {
    name: "FabHotel The Cinco Primera",
    slug: "cinco-primera",

    
    area: "Kondapur",
    description:
      "The most recent addition to the group. Larger rooms, warmer interiors and a breakfast service that regulars plan their mornings around.",
    bookLink: "https://wa.me/919014632639",
    images: [
      "https://i.postimg.cc/1XRwX3tF/2025-05-21.webp",
      "https://i.postimg.cc/j54yR7Rk/2025-05-21-1.webp",
      "https://i.postimg.cc/3NrmNxR7/2025-05-21-10.webp",
      "https://i.postimg.cc/FzF3zHRN/2025-05-21-11.webp",
      "https://i.postimg.cc/kGMKGg44/2025-05-21-12.webp",
      "https://i.postimg.cc/tJRWJ4T7/2025-05-21-13.webp",
      "https://i.postimg.cc/brYkrwJs/2025-05-21-14.webp",
      "https://i.postimg.cc/L54L58XY/2025-05-21-15.webp",
      "https://i.postimg.cc/j2qP2S57/2025-05-21-16.webp",
      "https://i.postimg.cc/d1jGJyqK/2025-05-21-2.webp",
      "https://i.postimg.cc/gJH3GZY9/2025-05-21-3.webp",
      "https://i.postimg.cc/k4vW7bn3/2025-05-21-4.webp",
      "https://i.postimg.cc/xC3L9z0Y/2025-05-21-5.webp",
      "https://i.postimg.cc/267nCZz6/2025-05-21-6.webp",
      "https://i.postimg.cc/vBt5GVQZ/2025-05-21-7.webp",
      "https://i.postimg.cc/tTNF9xXg/2025-05-21-8.webp",
      "https://i.postimg.cc/KzDtmMZj/2025-05-21-9.webp",
    ],
  },

  {
    name: "Super Townhouse 359 Begumpet",
    slug: "townhouse-359-begumpet",
    area: "Begumpet",
    description:
      "Quiet floors minutes from Begumpet station and the airport road — the property our long-stay corporate guests keep coming back to.",
    bookLink: "https://wa.me/919014632639",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/832376847.jpg?k=5c60a685c25e05f9df5aa1169ae80ee790dc4cce9933c23b187eb8913fef55bf&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/655262724.jpg?k=ec553563128504cb31d8c3fc888dda2631b6837f5116efce0afaf4cefc7b601e&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/743066856.jpg?k=0765a507edfaa6009e5feeb3e1b7190c131ab1b1afbf1be0791821194bc78051&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/694471647.jpg?k=b5b32e2566acd694c1744e2fd5bdac8630b6d10f3f156a38a1c0d437f26eded3&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/832376822.jpg?k=827aa9b139faeadb61be53ad94d39a8aa659f1ffbe0f56192005e62612ca40e9&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/881601820.jpg?k=55c752ee0840bff9233ffdd191a246ebdbca1cd25c4c3f726e08100d483e290d&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/656579370.jpg?k=3fcad5ce8b44c78f67d6def3a90e09285c371e86800790a09992d6de6c8fa0a0&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/656579421.jpg?k=443fa09a302d315eca9ee594221d63175c416edf683a7f949eab8594c7be3286&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/832376655.jpg?k=2e4748a65ecde111a64a0ff589ecdf963feb111cbbfe18bf841f4e75e1d180cc&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/881601817.jpg?k=7577d80a00d5c35e6b4f9a1c7fea38962438a2c59f13eefe25e881c87be3455b&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/655262705.jpg?k=8a5cc7704998044a7125bdd506fba55976cf37c6c537d90cc339d6e790372fbe&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/832376800.jpg?k=d4cc46263a5fe32abacad2afaf3b946e744e1a30910d8a0e9dfc8b84b35756c0&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/881601822.jpg?k=f4bea21c4c5a5c02d80c3358e7b065f7cc122e6534dff551b4caac9ac6723d56&o=",
      "https://cf.bstatic.com/xsdata/images/hotel/max1024x768/655262742.jpg?k=83066afda1d6956f707948a7de550d56f5c7511736ae7a037cac4270149ed094&o=",
    ],
  },

  {
    name: "Super Townhouse THE CINCO HOTEL",
    slug: "cinco-hotel",
    area: "Ameerpet",
    description:
      "Our flagship address — compact, immaculate rooms a short drive from the business district, built for travellers who want a dependable base in the middle of everything.",
    bookLink: "https://wa.me/919014632639",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/826416075.jpg?k=38f345faefd521b1959f314d09bf459f7dd91b9265df9e70c5bca3f294d4efdc&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/617323707.jpg?k=d8dd1ddd3a50ce4c676eba9d549c4a4b37f5d5544cce0a09852a36569e1720a2&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/874181714.jpg?k=af8ae2b0d9f17189505311c45a39a2dbde8f3ab60124fd134cf4cf01fbd0885d&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/617358387.jpg?k=b0992a64a98ea346cdb68f3baa85daa21a1e25c6ed224ca076d89c9d4f9b7c8a&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/826415902.jpg?k=6d907e5f63c33287224f390e3d109d2f490f759e0aa16358ff8cb49923176d44&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/874181700.jpg?k=a4ebb18ef425cb2222d13f716fda9edf684c77c81e45c37a1d8363575dda47db&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/826415750.jpg?k=f51acfc8450dd9fa3197288b5c76cdc6b7d7b50cfa1a602187219d7f1d29b905&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/815155965.jpg?k=dc8f57c162858f094d4ad901bdfd33e0b52ea2ff59ea7f01385b1528bf78005c&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/826416094.jpg?k=57d49cac7b8071add357948cbca4bcccf74f633ba16d5af86b6b7c2f48abc750&o=",
    ],
  },


  {
    name: "Townhouse Near Secunderabad Railway Station",
    slug: "townhouse-secunderabad",
    area: "Secunderabad",
    description:
      "Two minutes from the railway station. Practical, spotless and open around the clock for guests arriving on the early trains.",
    bookLink: "https://wa.me/919014632639",
    images: [
      "https://i.postimg.cc/gJ7LzqfM/2020-11-28.webp",
      "https://i.postimg.cc/85YfpBqL/2020-11-28-1.webp",
      "https://i.postimg.cc/76RJHMpN/2020-11-28-2.webp",
      "https://i.postimg.cc/MTLf6bhD/2020-11-28-3.webp",
      "https://i.postimg.cc/rmHRVCvj/2020-11-28-4.webp",
      "https://i.postimg.cc/sXLGj9tw/2020-11-28-5.webp",
      "https://i.postimg.cc/85YfpBqZ/2020-11-28-6.webp",
      "https://i.postimg.cc/mDn1LN06/2023-11-17.webp",
      "https://i.postimg.cc/JnFHrc96/2023-11-17-1.webp",
    ],
  },
];

export const FOUNDERS = [
  {
    name: "Sudigollu Hari Babu",
    role: "Co-Founder & Partner",
    image: "https://i.postimg.cc/8CT55870/Gemini-Generated-Image-jyaplejyaplejyap.png",
  },
  {
    name: "Rajesh Krishna",
    role: "Co-Founder & Partner",
    image: "https://i.postimg.cc/yYg2GBhz/Gemini-Generated-Image-eextm2eextm2eext.png",
  },
  {
    name: "Sai Krishna",
    role: "Co-Founder & Partner",
    image: "https://i.postimg.cc/Pf3kc2BY/Gemini-Generated-Image-rjj2w1rjj2w1rjj2.png",
  },
  {
    name: "Rajesh",
    role: "Co-Founder & Partner",
    image: "https://i.postimg.cc/7h1BVTNK/Gemini-Generated-Image-clozw1clozw1cloz.png",
  },
  {
    name: "Avinash",
    role: "Co-Founder & Partner",
    image: "https://i.postimg.cc/pTpnWNSw/Gemini-Generated-Image-mxkxzsmxkxzsmxkx.png",
  },
];

export const TESTIMONIALS = [
  {
    name: "Chinmay",
    city: "Pune",
    quote:
      "This was my first visit to Hyderabad and I booked The Cinco Bliss. The booking process was smooth, the hotel was spotless and well-maintained, with comfortable rooms and all the basic amenities. The staff was friendly, polite and genuinely helpful.",
  },
  {
    name: "Priyanka R.",
    city: "Bengaluru",
    quote:
      "Stayed at Super Townhouse 359 Begumpet for a work trip. Great location, quiet rooms and quick service at any hour. Easily the best value stay I have had in the city.",
  },
  {
    name: "Arjun Mehta",
    city: "Delhi",
    quote:
      "The Cinco Primera exceeded expectations — modern interiors, immaculate housekeeping and a team that remembers your name. Will book again on every Hyderabad visit.",
  },
  {
    name: "Siddharth K.",
    city: "Mumbai",
    quote:
      "Ameerpet is always bustling, but the Super Townhouse was a calm oasis. Fast Wi-Fi, great room service, and they even helped me figure out my travel itinerary for the next day.",
  },
  {
    name: "Nandini Rao",
    city: "Chennai",
    quote:
      "Stayed near Secunderabad Railway Station for a quick transit. Unbeatable convenience, very clean washrooms, and a hassle-free check-in experience despite my odd arrival hours.",
  },
  {
    name: "Rohan & Sneha",
    city: "Kochi",
    quote:
      "We hosted a small family get-together at one of their banquets. The management handled everything perfectly, the catering was fantastic, and the rooms provided were incredibly comfortable.",
  },
];


export const AMENITIES = [
  "Air-conditioned rooms",
  "Free high-speed Wi-Fi",
  "24x7 front desk",
  "Daily housekeeping",
  "Power backup",
  "CCTV & secure entry",
  "In-room dining",
  "Free cancellation on most rates",
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
};

export const POSTS: Post[] = [
  {
    slug: "48-hours-in-hyderabad",
    title: "48 Hours in Hyderabad: A Weekend Worth Planning",
    excerpt:
      "Charminar at sunrise, biryani at noon, Golconda by evening. A two-day route our front desk teams have refined for guests over the years.",
    date: "12 July 2026",
    readTime: "6 min read",
    image: PROPERTIES[1]!.images[3]!,
  },
  {
    slug: "choosing-a-business-hotel",
    title: "What Business Travellers Actually Look For in a Hotel",
    excerpt:
      "It is rarely the lobby. After thousands of corporate stays, here is what shows up again and again in guest feedback.",
    date: "28 June 2026",
    readTime: "4 min read",
    image: PROPERTIES[2]!.images[5]!,
  },
  {
    slug: "planning-a-banquet-function",
    title: "Planning a Small Function: A Simple Checklist",
    excerpt:
      "Headcount, catering, timings and the details people forget. A practical guide before you book a banquet hall.",
    date: "9 June 2026",
    readTime: "5 min read",
    image: PROPERTIES[3]!.images[7]!,
  },
];
