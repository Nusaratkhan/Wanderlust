const destinations = [
  {
    name: "Paris",
    location: "France",
    time: "April – June",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    desc: "Paris is the city of love, art, fashion, and history. A dream destination for travelers.",
    hotels: "Hotel Lutetia, Ritz Paris, Le Bristol",
    culture: "Romantic streets, museums, fashion, art & café culture.",
    food: "Croissants, Macarons, French Cheese, Crêpes"
  },
  {
    name: "Dubai",
    location: "UAE",
    time: "November – March",
    img: "https://www.investindubai.gov.ae/-/media/gathercontent/poi/b/burj-khalifa/fallback-image/burj-khalifa-det-3.jpg?rev=1c89d5353de3495eb61237242e525ba1&cx=0.51&cy=0.41&cw=1556&ch=690",
    desc: "Dubai is a luxury paradise with futuristic architecture and desert adventures.",
    hotels: "Burj Al Arab, Atlantis The Palm, Armani Hotel",
    culture: "Arab traditions blended with modern luxury lifestyle.",
    food: "Shawarma, Kebabs, Hummus, Arabic sweets"
  },
  {
    name: "Bali",
    location: "Indonesia",
    time: "April – October",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4" , 
    desc: "Bali offers tropical beaches, spiritual temples, and peaceful vibes.",
    hotels: "Ubud Hanging Gardens, The Mulia, Alila Villas",
    culture: "Hindu traditions, temple ceremonies, yoga & spirituality.",
    food: "Nasi Goreng, Satay, Balinese seafood"
  },
  {
    name: "Kyoto",
    location: "Japan",
    time: "March – May",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    desc: "Kyoto preserves Japan’s ancient traditions and stunning cherry blossoms.",
    hotels: "Hoshinoya Kyoto, Hotel The Mitsui",
    culture: "Tea ceremonies, geishas, temples & traditional kimono.",
    food: "Sushi, Ramen, Matcha desserts"
  },
  {
    name: "Swiss Alps",
    location: "Switzerland",
    time: "June – September",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    desc: "The Swiss Alps are famous for scenic mountains and adventure sports.",
    hotels: "Badrutt’s Palace, The Omnia Zermatt",
    culture: "Mountain villages, alpine lifestyle, precision & discipline.",
    food: "Fondue, Raclette, Swiss Chocolate"
  },
  {
    name: "Manali",
    location: "Himachal Pradesh, India",
    time: "March – June, December – February",
    img: "https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1718085494/banbanjara/agjodlg1fbske9mdrsoc.jpg",
    desc: "Manali is a scenic hill station known for snow-capped mountains, adventure sports, and serene valleys.",
    hotels: "The Himalayan, Span Resort & Spa, Johnson Lodge",
    culture: "Himachali traditions, wooden architecture, local festivals and mountain lifestyle.",
    food: "Siddu, Thukpa, Trout fish, Momos"
    },
    {
    name: "Landour",
    location: "Uttarakhand, India",
    time: "March – June, September – November",
    img: "https://assets.cntraveller.in/photos/60ba0408e1b212c19a8170f2/16:9/w_1920,h_1080,c_limit/landourlead.jpg",
    desc: "Landour is a quiet colonial-era hill town famous for its misty views, forests, and old-world charm.",
    hotels: "Rokeby Manor, Landour Bakehouse Stay, Doma’s Inn",
    culture: "Colonial heritage, slow-paced mountain life, literary and artistic influence.",
    food: "Landour Bakehouse pastries, English breakfast, Tibetan food"
},

  {
    name: "Rome",
    location: "Italy",
    time: "April – June",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR3xUEmt-GSvFjxZPgryJoZWJKEgmMbGMpg&s",
    desc: "Rome is a living museum filled with ancient ruins and art.",
    hotels: "Hotel Eden, Hassler Roma",
    culture: "Historic architecture, art, family values.",
    food: "Pizza, Pasta, Gelato"
  },
  {
    name: "New York",
    location: "USA",
    time: "September – November",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtR25tXJVpr1T-oYjzSt9iJTW3v66sQxjgsA&s",
    desc: "New York is the city that never sleeps with endless entertainment.",
    hotels: "The Plaza, The Ritz-Carlton",
    culture: "Fast-paced lifestyle, diversity, innovation.",
    food: "Burgers, Bagels, Cheesecake"
  },
  {
    name: "Santorini",
    location: "Greece",
    time: "May – September",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8KaeRn41C7M0jhwfsq5zN_MX93iRxcGorEg&s",
    desc: "Santorini is famous for white houses, blue domes & sunsets.",
    hotels: "Canaves Oia, Katikies Hotel",
    culture: "Greek island traditions & relaxed lifestyle.",
    food: "Greek Salad, Moussaka, Seafood"
  },
  {
    name: "Jaipur",
    location: "India",
    time: "October – March",
    img: "https://images.unsplash.com/photo-1602643163983-ed0babc39797",
    desc: "Jaipur showcases royal palaces and vibrant Rajasthani culture.",
    hotels: "Rambagh Palace, Jai Mahal Palace",
    culture: "Royal heritage, folk music, colorful festivals.",
    food: "Dal Baati Churma, Ghewar"
  },
  {
    name: "Maldives",
    location: "Indian Ocean",
    time: "November – April",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc: "Maldives is a luxury island paradise with crystal-clear waters.",
    hotels: "Soneva Fushi, Taj Exotica, Anantara",
    culture: "Island life, fishing traditions, ocean culture.",
    food: "Seafood curry, Coconut-based dishes"
  }
];

const grid = document.getElementById("grid");
const modal = document.getElementById("modal");

destinations.forEach(d => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${d.img}">
    <div class="card-info">
      <h3>${d.name}</h3>
      <p>${d.location}</p>
    </div>
  `;
  card.onclick = () => openModal(d);
  grid.appendChild(card);
});

function openModal(d) {
  modal.style.display = "flex";
  document.getElementById("modalImg").src = d.img;
  document.getElementById("modalTitle").innerText = d.name;
  document.getElementById("modalDesc").innerHTML = `
    <p>${d.desc}</p>
    <p><strong>🏨 Hotels:</strong> ${d.hotels}</p>
    <p><strong>🎭 Culture:</strong> ${d.culture}</p>
    <p><strong>🍽 Food:</strong> ${d.food}</p>
    <p><strong>🗓 Best Time:</strong> ${d.time}</p>
  `;
}

document.querySelector(".close").onclick = () => modal.style.display = "none";

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for joining Wanderlust 🌍✨");
});
