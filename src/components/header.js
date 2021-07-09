/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.1.5 web-sprint-challenge-applied-javascript
 * 7/9/2021
 * header.js
 **/

 // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

//Define the function, pass in title, date, temp parameters
const Header = (title, date, temp) => 
{
  //---Create elements---//
  //Create the div element and assign to divClassHeader
  const divClassHeader = document.createElement("div"); 

  //Create the span element and assign to spanClassDate
  const spanClassDate = document.createElement("span"); 

  //Create the h1 element and assign to h1Title
  const h1Title =  document.createElement("h1");

  //Create the next span element and assign to spanClassTemp
  const spanClassTemp = document.createElement("span");

  //---Assign the classes---//
  //Add header to divClassHeader
  divClassHeader.classList.add("header");

  //Add date and temp to spanClassDate
  spanClassDate.classList.add("date");
  spanClassTemp.classList.add("temp"); 

  //---Append child elements---//
  //Append spanClassDate, h1Title, spanClassTemp to divClassHeader
  divClassHeader.appendChild(spanClassDate); 
  divClassHeader.appendChild(h1Title);
  divClassHeader.appendChild(spanClassTemp); 

  //---Apply the values---//
  //Apply the date value to spanClassDate
  spanClassDate.textContent = `${date}`; 
  //Apply the title to h1Title
  h1Title.textContent = `${title}`; 
  //Apply the temp to spanClassTemp
  spanClassTemp.textContent = `${temp}`;

  //Function return statement, return divClassHeader
  return divClassHeader;

}

// TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  
//Define the function, accept selector parameter
const headerAppender = (selector) => 
{
  //Query selector selects the css and applies to sprintHeader
  const sprintHeader = document.querySelector(selector);
    
  //Call the Header function, pass in arguments
  sprintHeader.append(Header("Marine Corps", "10 November 1775", "1775 degrees"));
}

//Export statement
export { Header, headerAppender }
