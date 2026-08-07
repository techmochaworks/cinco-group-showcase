export const GROUP = {
  name: "The Cinco Group of Hotels",
  tagline: "Five Addresses. One Standard of Excellence.",
  about:
    "The Cinco Group of Hotels represents the pinnacle of contemporary hospitality in Hyderabad. With five strategically located properties across the city's most sought-after destinations, we deliver exceptional accommodations, world-class amenities, and personalized service that exceeds expectations. Each hotel embodies our commitment to excellence, blending modern luxury with authentic Indian warmth to create unforgettable experiences for discerning travelers.",
  phone: "+91 99999 00000",
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
    name: "Super Townhouse THE CINCO HOTEL",
    slug: "cinco-hotel",
    area: "Ameerpet",
    description:
      "Our flagship address — compact, immaculate rooms a short drive from the business district, built for travellers who want a dependable base in the middle of everything.",
    bookLink: "https://www.oyorooms.com/105415/",
    images: [
      "https://i.postimg.cc/762Lq8DF/2020-11-23.jpg",
      "https://i.postimg.cc/zBgfqZ8m/2020-11-23.webp",
      "https://i.postimg.cc/gJZ0GFdN/2020-11-23-1.webp",
      "https://i.postimg.cc/nzDLnbZg/2020-11-23-2.webp",
      "https://i.postimg.cc/Y9WStKks/2020-11-23-3.webp",
      "https://i.postimg.cc/pTFdPbx7/2020-11-23-4.webp",
      "https://i.postimg.cc/xCzd9DYF/2020-11-23-5.webp",
      "https://i.postimg.cc/sXh23dsC/2023-05-23.webp",
      "https://i.postimg.cc/MTQGz2q2/2023-05-23-1.webp",
    ],
  },
  {
    name: "FabHotel The Cinco Primera",
    slug: "cinco-primera",
    area: "Kondapur",
    description:
      "The most recent addition to the group. Larger rooms, warmer interiors and a breakfast service that regulars plan their mornings around.",
    bookLink:
      "https://www.fabhotels.com/hotels-in-hyderabad/fabhotel-the-cinco-primera-nptktbwh.html",
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
    bookLink: "https://www.oyorooms.com/105473/",
    images: [
      "https://i.postimg.cc/fyxzGcZ2/2023-05-24.webp",
      "https://i.postimg.cc/prNVcGNm/2023-05-24-1.webp",
      "https://i.postimg.cc/prDWwfxZ/2023-05-24-10.webp",
      "https://i.postimg.cc/Y01r56kx/2023-05-24-11.webp",
      "https://i.postimg.cc/j2zxpHKc/2023-05-24-12.webp",
      "https://i.postimg.cc/4yzfD6ZN/2023-05-24-2.webp",
      "https://i.postimg.cc/6qdWkrw3/2023-05-24-3.webp",
      "https://i.postimg.cc/8chp2RDc/2023-05-24-4.webp",
      "https://i.postimg.cc/GtkLWFrp/2023-05-24-5.webp",
      "https://i.postimg.cc/wMhqCXHN/2023-05-24-6.webp",
      "https://i.postimg.cc/QCp82Qs5/2023-05-24-7.webp",
      "https://i.postimg.cc/C5jh3GYb/2023-05-24-8.webp",
      "https://i.postimg.cc/zvnzsC5S/2023-05-24-9.webp",
      "https://i.postimg.cc/ZY35vS3z/unnamed.webp",
    ],
  },
  {
    name: "The Cinco Bliss",
    slug: "cinco-bliss",
    area: "Gachibowli",
    description:
      "Bright rooms, a banquet floor for small functions and a team that handles late arrivals without fuss.",
    bookLink: "https://www.oyorooms.com/223489/",
    images: [
      "https://i.postimg.cc/TPwHBTGW/202505280133514398-629c6a02-df34-43df-91a9-533bf730e6a2.avif",
      "https://i.postimg.cc/4xwS8YCd/202505280133514398-7e9e1e81-d5fa-40e3-baef-82428bcf8f69.avif",
      "https://i.postimg.cc/9Q1nxD34/202505280133514398-c95143a8-9166-41d4-bc79-cc6a659ba39d.avif",
      "https://i.postimg.cc/m2YqHd8k/725232905.jpg",
      "https://i.postimg.cc/QxQPT601/725233040.jpg",
      "https://i.postimg.cc/xTv7zstH/725233079.jpg",
      "https://i.postimg.cc/TYVSDkCn/725233088.jpg",
      "https://i.postimg.cc/DyrDXCBq/725233099.jpg",
      "https://i.postimg.cc/VLqTC7D4/725233116.jpg",
      "https://i.postimg.cc/9FdS7xJL/725233148.jpg",
      "https://i.postimg.cc/m2YqHd8p/725233151.jpg",
      "https://i.postimg.cc/Cxw2HjQs/725233171.jpg",
      "https://i.postimg.cc/htKYb95C/unnamed.webp",
    ],
  },
  {
    name: "Townhouse Near Secunderabad Railway Station",
    slug: "townhouse-secunderabad",
    area: "Secunderabad",
    description:
      "Two minutes from the railway station. Practical, spotless and open around the clock for guests arriving on the early trains.",
    bookLink: "https://www.oyorooms.com/108004/",
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
