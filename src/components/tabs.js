/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.1.5 web-sprint-challenge-applied-javascript
 * 7/9/2021
 * tabs.js
 **/

// TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

//Axios import statement
import axios from "axios";


//Function definition, parameter topics
const Tabs = (topics) => 
{
  //Create div element, assign to divClassTopics 
  const divClassTopics = document.createElement("div");
  //Add topics to divClassTopics
  divClassTopics.classList.add("topics");

  //For each element in topics
  topics.forEach(element => 
  {
    //create a div, assign to divTabs...
    const divTabs = document.createElement("div");
    //add each new element to "tab" class
    divTabs.classList.add("tab");
    //assign the text content to the tabs
    divTabs.textContent = element;
    //append to divClassTopics
    divClassTopics.append(divTabs);
  });
  
  //Function return statement, return divClassTopics
  return divClassTopics;
}


// TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //


const tabsAppender = (selector) => 
{
  //Axios.get points to the url
  axios
  .get("https://lambda-times-api.herokuapp.com/topics")

  //If the promise is returned...
  .then(res => 
  {
    //Query selector selects the selector and assigns to tabsShmabs
    const tabsShmabs = document.querySelector(selector);

    //Execute Tabs() function
    tabsShmabs.appendChild(Tabs(res.data.topics));
  })
  
  //If there is an error...
  .catch(error => 
  {
    //...log the error message
    console.log(error);
  })

  //.finally runs regardless of outcome
  .finally(() => 
  {
    console.log("Finally, it's done!");
  });
  
}

//Export statement
export { Tabs, tabsAppender }
