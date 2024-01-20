function mouseClick(event) {
  let klickMouse = event.target.textContent;
  const result = [];
   
  if (klickMouse ===  "Tab") {
    result.push("  ");
  } else if (klickMouse === "Caps Lock") {
    event.target.classList.toggle("onCapsLock");
    changeSizeLetter(1, true);
    result.push('');
  } else if (klickMouse === "Shift" || klickMouse === "Alt" || klickMouse ==="Ctrl" || klickMouse === "Del"){
    result.push('');
  } else if (klickMouse === "Enter ⎆") {
    result.push(" \n");
  } else if (klickMouse === "Backspace") {
    out.pop(); 
  } else if (klickMouse === "&nbsp;") {
    result.push(' ');
  } else if (klickMouse.length > 3){
    result.push('');
  } else {
  result.push(klickMouse)
  }

  
  if (result[0] !== '') {
    out.push(result.join())
  }
  mouseOn.textContent = out.join('');
}

document.querySelector("ul").addEventListener("click", mouseClick);

