import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const articleCard = document.createElement("div");
  const headlineElement = document.createElement("div");
  const authorElement = document.createElement("div");
  const imgContainer = document.createElement("div");
  const authorImg = document.createElement("img");
  const authorName = document.createElement("span");

  articleCard.classList.add("card");
  headlineElement.classList.add("headline");
  authorElement.classList.add("author");
  imgContainer.classList.add("img-container");

  headlineElement.textContent = article.headline;
  authorImg.alt = "Author Image";
  authorImg.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  imgContainer.appendChild(authorImg);
  authorElement.appendChild(imgContainer);
  authorElement.appendChild(authorName);
  articleCard.appendChild(headlineElement);
  articleCard.appendChild(authorElement);

  articleCard.addEventListener("click", () => {
    console.log(article.headline);
  });

  return articleCard;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const articleContainer = document.querySelector(selector);

  axios
    .get("http://localhost:5001/api/articles")
    .then((res) => {
      const obj = res.data.articles;
      Object.values(obj).forEach((section) => {
        section.forEach((article) => {
          const card = Card(article);
          articleContainer.appendChild(card);
        })
      });
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("Done!!");
    });

  return articleContainer;
};

export { Card, cardAppender };
