const text = document.querySelector("textarea");
const btn = document.querySelector("button");
const h1 = document.createElement("h1");
document.body.appendChild(h1);

btn.addEventListener("click", function () {
  if (text.value.length > 100) {
    h1.innerText = "done";
  } else {
    h1.innerText = "text is too short, at least 100 digits required!";
  }
});
