let users = [
  {
    naam:"lionel messi",
    pic:"https://i.pinimg.com/736x/aa/67/f1/aa67f1b06d44a4b39f4bec7b424e3b4e.jpg",
    bio:"football goat",
  },
  {
    naam:"cristiano ronaldo",
    pic:"https://i.pinimg.com/736x/a4/bc/07/a4bc074169928a3b36861738fda8f542.jpg",
    bio:"football robot",
  }
];

const container = document.getElementById('card-container');

users.forEach(user => {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = user.pic;
  img.classList.add('bg-img');

  const blurredLayer = document.createElement('div');
  blurredLayer.classList.add('blurred-layer');
  blurredLayer.style.backgroundImage = `url(${user.pic})`;
  blurredLayer.style.backgroundSize = 'cover';
  blurredLayer.style.backgroundPosition = 'center';

  const content = document.createElement('div');
  content.classList.add('content');

  const h3 = document.createElement('h3');
  h3.textContent = user.naam;

  const p = document.createElement('p');
  p.textContent = user.bio;

  content.appendChild(h3);
  content.appendChild(p);

  card.appendChild(img);
  card.appendChild(blurredLayer);
  card.appendChild(content);

  container.appendChild(card);
});
