let keyShift = false;
let keyCaps = false;
let keyOn = document.querySelector("#write");

const li = document.querySelectorAll("li");
const arLi = Array.from(li);

if (keyCaps || keyShift) {
  keyOn = keyOn.toUpperCase();
}

function pushKey(event) {
  const eK = event.key;
  const eC = event.code;
  for (let i of arLi) {
    if (i.classList.contains(eK) || i.classList.contains(eC)) {
      i.classList.add("active");
      setTimeout(function() {
        i.classList.remove("active");
      }, 200);
    }
  }
}
keyOn.onkeydown = pushKey;
