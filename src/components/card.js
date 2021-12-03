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

  const card = document.createElement('div');
  const cardHead = document.createElement('div');
  const cardAuthor = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const nameSpan = document.createElement('span');

  card.classList.add('card');
  cardHead.classList.add('headline');
  cardAuthor.classList.add('author');
  imgContainer.classList.add('img-container');

  cardHead.textContent = article.headline;
  img.src = article.authorPhoto;
  nameSpan.textContent = `By ${article.authorName}`;

  card.appendChild(cardHead);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(imgContainer);
  cardAuthor.appendChild(nameSpan);
  imgContainer.appendChild(img);

  card.addEventListener('click', () => {
    console.log(cardHead.textContent);
  });
  
  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/articles')
    .then(resp => {
      const select = document.querySelector(selector);

      resp.data.articles.bootstrap.forEach(element => {
        select.appendChild(Card(element));
      });

      resp.data.articles.javascript.forEach(element => {
        select.appendChild(Card(element));
      });

      resp.data.articles.jquery.forEach(element => {
        select.appendChild(Card(element));
      });

      resp.data.articles.node.forEach(element => {
        select.appendChild(Card(element));
      });

      resp.data.articles.technology.forEach(element => {
        select.appendChild(Card(element));
      });

    })
    .catch(err => {console.log(err);})
}

export { Card, cardAppender }
