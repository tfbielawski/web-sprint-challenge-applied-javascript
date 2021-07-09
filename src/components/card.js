/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.1.5 web-sprint-challenge-applied-javascript
 * 7/9/2021
 * cards.js
 **/

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

//Axios import statement
import axios from "axios";

//Define the function, pass in article object as parameter
const Card = (article) => 
{
  //---Create the elements--//
  //Create div tag element, assign to divClassCard
  const divClassCard = document.createElement("div"); 
  //Create div tag element, assign to divClassHeadline
  const divClassHeadline = document.createElement("div");
  //Create div tag element, assign to divClassAuthor
  const divClassAuthor = document.createElement("div"); 
  //Create div tag element, assign to divClassImgSr
  const divClassImgSrc = document.createElement("div");
  //Create img tag element, assign to imgSrc
  const imgSrc = document.createElement("img"); 
  //Create span tag element, assign to authorNameSpan
  const authorNameSpan = document.createElement("span");

  //---Assign the classes---//
  //Assign card class to divClassCard
  divClassCard.classList.add("card");
  //Assign headline class to divClassHeadline
  divClassHeadline.classList.add("headline");
  //Assign author class to divClassAuthor
  divClassAuthor.classList.add("author");
  //Assign img-container class to divClassImgSrc 
  divClassImgSrc.classList.add("img-container"); 


  //---Append children---//
  //Append divClassHeadLine and divClassAuthor to divClassCard
  divClassCard.appendChild(divClassHeadline);
  divClassCard.appendChild(divClassAuthor);

  //Append the divClassImgSrc, authorNameSpan to divClassAuthor
  divClassAuthor.appendChild(divClassImgSrc);
  divClassAuthor.appendChild(authorNameSpan);
  //Append imgSrc to divClassImgSrc
  divClassImgSrc.appendChild(imgSrc); 


  //---Apply the properties---//
  //Apply article.headline to divClasHeadline
  divClassHeadline.textContent = `${article.headline}`; 
  //Apply article.authorname to authorNameSpan
  authorNameSpan.textContent = ` By ${article.authorName}`; 
  //Assign the authorPhoto property to the img
  imgSrc.setAttribute("src", `${article.authorPhoto}`); 

  //---Event listener---//
  //Event listener of type "click", function(), display text on click
  divClassCard.addEventListener("click", () => { console.log(divClassHeadline); });

   //Return statement, return divClassCard
   return divClassCard;


  
}

// TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


const cardAppender = (selector) => 
{
  
}

//Export statement
export { Card, cardAppender }
