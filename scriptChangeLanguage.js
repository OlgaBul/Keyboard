function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener("keydown", function(event) {
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();

    countChangeLang += 1;
    func();
  });

  document.addEventListener("keyup", function(event) {
    pressed.delete(event.code);
  });
}

function testChangeLanguage(value) {                          // Проверка необходимости смены раскладки
  if (countChangeLang > 0) {
    countChangeLang = 0;
  } else changeLanguage();
}

function changeLanguage() {                                   // Смена раскладки
  if (selectTypeOfInput === 'mouse') {
    return
  }
  symbol.forEach(item => item.classList.toggle("off"))
}


runOnKeys(() => changeLanguage(), "ShiftLeft", "AltLeft");
runOnKeys(() => changeLanguage(), "ShiftRight", "AltRight");
