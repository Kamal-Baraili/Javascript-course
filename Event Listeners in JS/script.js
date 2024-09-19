 function handleButtonClick() {
        console.log("I am clicked");
        alert("I am clicked");
      }

      const el = document.getElementById("clickButton");
      const nameblck = document.getElementById("name-block");

      el.onclick = function () {
        console.log("Hey! I am clicked");
      };

      const ele = document.getElementById("button");
      ele.addEventListener("click", () => {
        if (nameblck.style.color === "red") {
          nameblck.style.color = "blue";
        } else nameblck.style.color = "red";
      });

//Examples of Event listeners

//Example 1:
const bn = document.getElementById("button");
      bn.addEventListener("click", () => {
       bn.style.backgroundColor = "blue";
      });