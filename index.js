let id = document.getElementById("id");
fetch("https://api.adviceslip.com/advice")
  .then((e) => e.json())
  .then((data) => data.slip.id)
  .then((a) => {
    id.innerHTML = a;
  });

let advice = document.querySelector(".advice");
fetch("https://api.adviceslip.com/advice")
  .then((e) => e.json())
  .then((data) => data.slip.advice)
  .then((a) => {
    advice.innerHTML = `"${a}"`;
  });

let btn = document.querySelector("button");

btn.onclick = function () {
  location.reload();
};
