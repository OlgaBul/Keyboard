let countCapsOn = 0;
let countCapsOff = 0;
let onC = false;

function capsOnColor(event) {
  let caps = event.getModifierState("CapsLock");
  if (caps) {
    capsL.classList.add("onCapsLock");
    countCapsOn++;
    countCapsOff = -1;
    onC = true;
    changeSizeLetter(countCapsOn, onC);
  } else {
    capsL.classList.remove("onCapsLock");
    countCapsOff++;
    countCapsOn = 0;
    onC = false;
    changeSizeLetter(countCapsOff, onC);
  }
}

keyOn.addEventListener("keyup", capsOnColor);

function changeSizeLetter(value, on) {
  if ((value === 1 && on) || (value === 0 && !on)) {
    letter.forEach(let => let.classList.toggle('capsl'))
  }
}