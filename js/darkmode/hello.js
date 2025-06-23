const themeButton = window.document.getElementById("themeButton");
const h1text = document.getElementById("heading");
themeButton.addEventListener("click", () => {
  if (themeButton.innerText == "Dark Mode") {
    document.body.style.backgroundColor = "black";
    themeButton.innerText = "Light Mode";
    document.body.style.color = "white";
    h1text.innerText = "Dark Mode Activated";
  } else {
    document.body.style.backgroundColor = "white";
    themeButton.innerText = "Dark Mode";
    document.body.style.color = "black";
    h1text.innerText = "Light Mode Activated";
  }
});
