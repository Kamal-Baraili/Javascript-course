const user = document.getElementById("input_username");
const button = document.getElementById("search_button");

const username = document.getElementById("username");

button.addEventListener("click", () => {
    const value = user.value;
    localStorage.setItem("name", value);
    location.reload();
});

window.addEventListener("load", () => {
    const val = localStorage.getItem("name");
    username.innerText = val;
});