//create a const menu that has properties of name, price, image, and descritpion
const menu = [
  {
    id: 1,
    title: "Attack on Titan",
    category: "thriller",
    rating: 9.8,
    img: "./image/aot.jpeg",
    desc: "Humanity fights for survival against giant humanoid Titans who devour people without reason.",
  },
  {
    id: 2,
    title: "Demon Slayer",
    category: "action",
    rating: 8,
    img: "./image/Demon_Slayer_-_Kimetsu_no_Yaiba,_volume_1.jpeg",
    desc: `Tanjiro joins the Demon Slayer Corps to avenge his family and find a cure for his sister's demon transformation.`,
  },
  {
    id: 3,
    title: "Spy x Family",
    category: "comedy",
    rating: 7.5,
    img: "./image/spf.jpg",
    desc: `A spy must form a fake family to complete a mission but grows to care for them.`,
  },
  {
    id: 4,
    title: "One Piece",
    category: "adventure",
    rating: 6.5,
    img: "./image/op.jpeg",
    desc: `Pirate Monkey D. Luffy and his crew search for the ultimate treasure, One Piece, while facing enemies and making alliances.`,
  },
  {
    id: 5,
    title: "My Hero Academia",
    category: "action",
    rating: 4,
    img: "./image/mha.png",
    desc: `In a world where most people have superpowers, a boy without powers aims to become a hero.
    `,
  },
  {
    id: 6,
    title: "Naruto",
    category: "action",
    rating: 8.6,
    img: "./image/nar.jpg",
    desc: `Naruto Uzumaki aims to become the Hokage while making friends and facing threats to his village.`,
  },
  {
    id: 7,
    title: "Bleach",
    category: "action",
    rating: 7.5,
    img: "./image/blc.jpeg",
    desc: ` Ichigo Kurosaki becomes a Soul Reaper and protects humans and spirits from evil.`,
  },
  {
    id: 8,
    title: "Dragon Ball Z",
    category: "action",
    rating: 6.7,
    img: "./image/dbz.jpg",
    desc: `Goku and his friends' battles against powerful foes to protect the universe, featuring intense fights and transformations.`,
  },
  {
    id: 9,
    title: "Full Metal Alchemist",
    category: "adventure",
    rating: 10,
    img: "./image/fa.jpeg",
    desc: `Brothers Edward and Alphonse use alchemy to find the Philosopher's Stone and restore their bodies.`,
  },
  {
    id: 10,
    title: "Tokyo Ghoul",
    category: "thriller",
    rating: 6.9,
    img: "./image/64449.jpeg",
    desc: `Ken Kaneki becomes half-ghoul and must navigate both human and ghoul society.`,
  },
  {
    id: 11,
    title: "One Punch Man",
    category: "action",
    rating: 9,
    img: "./image/opm.jpeg",
    desc: `Saitama, a powerful hero, becomes bored with his invincibility until he meets other heroes and villains.`,
  },
  {
    id: 12,
    title: "A Silent Voice",
    category: "romance",
    rating: 7.7,
    img: "./image/asv.jpeg",
    desc: ` A former bully seeks redemption from a deaf girl he tormented.`,
  },
  {
    id: 13,
    title: "Death Note",
    category: "thriller",
    rating: 8.7,
    img: "./image/db.jpeg",
    desc: `A student finds a supernatural notebook that can kill anyone whose name is written in it.`,
  },
  {
    id: 14,
    title: "Your Name.",
    category: "romance",
    rating: 9.6,
    img: "./image/yn.jpeg",
    desc: `A boy and girl swap bodies and try to find each other, but a comet threatens to keep them apart.`,
  },
];

//select the section with the class of section-center
const sectionCenter = document.querySelector(".sectionCenter");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    console.log(category);
    const menuCategory = menu.filter(function (menuItems) {
      if (menuItems.category === category) {
        return menuItems;
      }
    });
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    //console.log(menuItems);
    return `<article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo">
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="rating">${item.rating}</h4>
        </header>
        <blockquote class="blockquote">
          <p class="item-text">${item.desc}</p>
          <p class="item-text">${item.category}</p>
        </blockquote>
      </div>
    </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
