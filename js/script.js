let keyOn = document.querySelector("#write");
let mouseOn = document.querySelector("#write-mouse");
let capsL = document.querySelector("#caps");
let countChangeLang = 0;
let selectTypeOfInput = 'mouse'

const li = document.querySelectorAll("li");
const letter = document.querySelectorAll(".lett");
const sym = document.querySelectorAll(".sym");
const symbol = Array.from(letter).concat(Array.from(sym));
const keyboard = document.querySelector('ul')
const offKey = document.querySelectorAll('.off')
const out = [];
const outKey = [];
const ruLang = "ёйцукенгшщзхъфывапролджэячсмитьбю3ЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ".split(
  ""
);
const outWindow = [];
const outCode = [];
const numbSym = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "+",
  "_",
  "=",
  "!",
  '"',
  ";",
  "%",
  ":",
  "?",
  "*",
  "(",
  ")",
  "/",
  "\\",
  ",",
  "'",
  "."
];
const engSym = [
  "`",
  "@",
  "#",
  "|",
  "<",
  ">",
  "&",
  "^",
  "$",
  "{",
  "}",
  "[",
  "]"
];
const manipKey = [
  "Tab",
  "CapsLock",
  "Shift",
  "Control",
  "Alt",
  "Space",
  "Enter",
  "Backspace",
  "Delete",
  ""
];



const radio = document.getElementsByName('select')
radio.forEach(el => {
  el.addEventListener('change', function(event) {
    if (event.target.value === 'mouse') {
      selectTypeOfInput = 'mouse'
      keyboard.classList.remove('nonactive')
      keyOn.setAttribute("hidden", 'hidden')
      mouseOn.removeAttribute("hidden", 'hidden')                 // не активно поле ввода
      if (capsL.classList.contains('onCapsLock')) {               // выкл подсветки клавиши CapsLock
        capsL.classList.remove('onCapsLock')
        letter.forEach(let => let.classList.toggle('capsl'));     // перекл на нижний регистр
      }                     
      offKey.forEach(key => key.classList.add('off'));            // выкл неиспользуемые клавиши
      offKey.forEach(key => key.classList.add('delKeySym'));
      offKey.forEach(key => key.classList.add('nonactive'))
      symbol.forEach(sym => {                                     // вкл русские символы, англ. красным
        sym.classList.remove('off');
        if (sym.classList.contains('en')){
          sym.classList.add('red');
        } else {
          sym.classList.remove('off');
        }
      })
      countCapsOn = 0;
    } else {
      console.log();
      selectTypeOfInput = 'keyboard'
      keyboard.classList.add('nonactive')                         // не активна экранная клавиатура
      keyOn.removeAttribute("hidden", 'hidden')                   
      mouseOn.setAttribute("hidden", 'hidden')                    
      keyOn.focus();                                              // фокус в поле ввода
      countCapsOn = 0;
      countChangeLang = 0;
      outWindow.splice(0, outWindow.length);
      outCode.splice(0, outCode.length);
      keyOn.textContent = outKey.join('')                         // вывод уже введенного текста с клавиатуры
      if (capsL.classList.contains('onCapsLock')) {               // выкл подсветки клавиши CapsLock
        capsL.classList.remove('onCapsLock')
        letter.forEach(let => let.classList.toggle('capsl'))      // перекл на нижний регистр
      }
      offKey.forEach(key => key.classList.remove('off'))          // выкл неиспользуемые клавиши
      offKey.forEach(key => key.classList.remove('nonactive'))
      offKey.forEach(key => key.classList.remove('delKeySym'));
      symbol.forEach(sym => {
        sym.classList.remove('red')                               // выкл русские символы, англ. черным
        if (sym.classList.contains('ru')){ 
          sym.classList.add('off')   
        }
      })
    }
  })
})


function changeLanguageFromInput() {                              // Проверка раскладки 
  console.log('countChangeLang;', countChangeLang);
  if (outWindow.length == 1 && outWindow[0] !== outCode[0]) {
    changeLanguage();
  } else if (outWindow.length > 1) {
    if (
      (outWindow[outWindow.length - 1] !== outCode[outCode.length - 1] &&
        outWindow[outWindow.length - 2] === outCode[outCode.length - 2]) ||
      (outWindow[outWindow.length - 1] === outCode[outCode.length - 1] &&
        outWindow[outWindow.length - 2] !== outCode[outCode.length - 2])
    ) {
      testChangeLanguage();
    }
  }
}

function pushKey(event) {
  const eK = event.key;
  console.log('event.key', eK);
  const eC = event.code;
  console.log('event.code', eC);
  const eCode = event.code.slice(-1);
  console.log('eCode', eCode);
  

  if (!manipKey.includes(eK) && !numbSym.includes(eK)) {
    outWindow.push(eK.toLowerCase());
    outCode.push(eCode.toLowerCase());
    console.log('outWindow', outWindow);
    console.log('outCode', outCode);
  } 

  if (!numbSym.includes(eK) && !manipKey.includes(eK) && !engSym.includes(eK)) {
    changeLanguageFromInput();
  }

  if (!manipKey.includes(eK)){
    outKey.push(eK)
  }
  

  for (let i of li) {                                                   // Эмуляция нажатия клавиш
    if (i.classList.contains(eK) || i.classList.contains(eC)) {
      i.classList.add("active");
      setTimeout(function() {
        i.classList.remove("active");
      }, 200);
    }
  }
}

keyOn.onkeydown = pushKey;

