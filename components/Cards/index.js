// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const newCard = document.querySelector(".cards-container");
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // console.log(response.data.articles);
    const articles = response.data.articles;
    Object.keys(articles).forEach(topic => {
      articles[topic].forEach(article => {
        newCard.appendChild(card(article));
      });
    });
  });

function card(obj) {
  const newCard = document.createElement("div"),
    headline = document.createElement("div"),
    author = document.createElement("div"),
    imgCont = document.createElement("div"),
    img = document.createElement("img"),
    by = document.createElement("span");

  newCard.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");
  img.src = obj.authorPhoto;

  newCard.appendChild(headline);
  newCard.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(img);
  author.appendChild(by);

  headline.textContent = obj.headline;
  author.textContent = obj.authorName;
  by.textContent = obj.authorName;

  return newCard;
}

// console.log(newCard);
