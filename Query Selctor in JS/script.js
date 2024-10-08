//query selector - First Element
      /*
            selectors
            - tag name
            - id #
            - class .
        */

      const body = document.querySelector("body");
      console.log(body.innerHTML);

      const code = document.querySelector("code");
      code.innerHTML = "<h1>This is an alert!!</h1>";

      const username = document.querySelector("#username");
      username.innerText = "John Doe";


      //querySelectorAll - Selects all element
      const paragraph = document.querySelectorAll(".paragraph");
      console.log(paragraph);

      paragraph.forEach((p) => {
        console.log(p.innerText);
      });

      //select Element by Id
      const el = document.getElementById("username");
      console.log(el.innerText);
      el.classList.add("red-color", "underline"); //add class to the element
      el.style.fontSize = "1.5rem";               //add inline styles to the element
      el.parentElement.style.background = "grey"; //control the parentElement
      el.setAttribute("aria", "123");             //add attributes to the element
      console.log(el); 
      
      //select Element by class
      const elements = document.getElementsByClassName("block"); //returns elements not a single element
      for(let i = 0; i < elements.length; i++) {
        elements[i].style.background = "blue";
      }


      const rmv = document.getElementsByClassName('rmv');
      for( let i=0 ; i < rmv.length ; i++){
        rmv[i].remove('rmv');
      }


//Example 1:
const p = document.querySelector("p");
console.log(p.innerHTML);
p.innerHTML = "This code is Hacked!"
p.style.textDecoration = "gray underline"

//Example 2:
let appear = document.getElementById("container")
appear.style.color = "white"
appear.style.fontSize = "2rem"

//Example 3:
let nav = document.querySelector('nav');
nav.classList.add("flex");
console.log(body.innerHTML)


 const para = document.getElementsByClassName("paragraph");
      console.log(para);
       for(let i = 0; i < para.length; i++) {
        para[i].innerHTML = "The paragraph has been changed";
        console.log(para[i]);
      } 