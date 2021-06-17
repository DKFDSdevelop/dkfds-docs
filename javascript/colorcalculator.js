import * as DKFDS from "dkfds";
import Color from "color"
const darkColorsAmount = 41;
const darkestAmount = 80;
const darkColorsMixRotate = 10;
const darkSaturation = 100;
const lightColorsAmount = 48;
const lightestAmount = 99;
const lightColorsMixRotate = 10;
const lightSaturation = 100;
const colorIndex = [1,2,4,6,9,12,16,20,25,30,36,42,49,56,64,72,81,90];

let themeName = "custom";
document.addEventListener("DOMContentLoaded", function(){
  if(document.getElementsByTagName('body')[0].classList.contains('page-farveberegner') && document.getElementsByTagName('body')[0].classList.contains('layout-styleguide-nosidebar')){

    // On submit new name for color scale
    document.getElementById('name-form').addEventListener('submit', function(e){
      e.preventDefault();
      let newName = document.getElementById('new-name').value.toLowerCase();
      if(newName !== "" && /^[a-zA-Z]+$/.test(newName)){
        themeName = newName;
        let namePlaceholders = document.getElementsByClassName('color-custom-name');
        for(let i = 0; i < namePlaceholders.length; i++){
          namePlaceholders[i].innerText = newName;
        }
        document.getElementById('new-name-error').classList.add('d-none');
        document.getElementById('new-name-error').parentNode.classList.remove('form-error');
        document.getElementById('new-name').setAttribute('aria-describedby', document.getElementById('new-name').getAttribute('aria-describedby').replace(' new-name-error', ''));
        let toast = new DKFDS.Toast(document.getElementById('name-change-toast'));
        toast.show();
      } else if(!/^[a-zA-Z]+$/.test(newName)){
        document.getElementById('new-name-error').classList.remove('d-none');
        document.getElementById('new-name-error').parentNode.classList.add('form-error');
        document.getElementById('new-name').setAttribute('aria-describedby', document.getElementById('new-name').getAttribute('aria-describedby')+' new-name-error');
      }
    });
    
    // On submit new hex value
    document.getElementById('color-form').addEventListener('submit', function(e){
      e.preventDefault();
      let mainColor = document.getElementById('color').value.replace('#', '').toUpperCase();
      if(!isValidHex(mainColor)){
        document.getElementById('color-input-error').classList.remove('d-none');
        document.getElementById('color-input-error').parentNode.classList.add('form-error');
        document.getElementById('color').setAttribute('aria-describedby', document.getElementById('color').getAttribute('aria-describedby')+' color-input-error');
      } else{
        document.getElementById('color-input-error').classList.add('d-none');
        document.getElementById('color-input-error').parentNode.classList.remove('form-error');
        document.getElementById('color').setAttribute('aria-describedby', document.getElementById('color').getAttribute('aria-describedby').replace(' color-input-error', ''));
        doColors();
      }
    });

    // Check if hex is defined in url
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.has('color')){
      document.getElementById('color').value = urlParams.get('color').replace('%23', '#');
      doColors();
    }
  }
});

/**
 * Get new color scale and add colors to page
 */
function doColors(){
  // hex value from input
  let mainColor = document.getElementById('color').value.replace('#', '').toUpperCase();
  
  // set new hex value in url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  urlParams.set('color', '#'+mainColor);
  window.history.pushState('', '', window.location.pathname+'?'+urlParams.toString());

  mainColor = mainColor.replace('#', '');
  
  let darkColors = getColorsList(darkColorsAmount, darkestAmount, 'black', darkColorsMixRotate, darkSaturation, mainColor).map((color) => (color));
  let lightColors = getColorsList(lightColorsAmount, lightestAmount, 'white', lightColorsMixRotate, lightSaturation, mainColor).reverse().map((color) => (color));

  // package entire scale including main color
  let allColors = lightColors;
  allColors.push(Color('#'+mainColor).rgb().toString());
  allColors = allColors.concat(darkColors);
  
  // get colors from chosen index
  let chosenColors = [];     
  let id = 100;
  let step = 50; 
  for(let c = 0; c < colorIndex.length; c++){
    let index = colorIndex[c]-1;
    let color = Color(allColors[index]).hex();

    // set text color accordion to WCAG requirements
    let textColor = '#ffffff';
    let contrastWhite = Color(color).contrast(Color("white"));
    if(contrastWhite < 4.5){
      textColor = '#1a1a1a';
    }
    chosenColors.push({'hex': color, 'text': textColor, 'id': id});
    id = id + step;
  }

  // reverse scale == dark to light
  chosenColors = chosenColors.reverse();
  
  // main color scale list
  let list = document.getElementById('color-scheme');

  // extra color scale list
  let exstraList = document.getElementById('extra-color-scheme');

  // entire color scale list
  let allList = document.getElementById('all-color-scheme');

  // empty lists
  list.innerHTML = "";
  exstraList.innerHTML = "";
  allList.innerHTML = "";

  // loop colors and add them as color blocks to correct lists
  for(let c = 0; c < chosenColors.length; c++){
    let color = chosenColors[c];
    if(isOdd(c)){
      let liColor = createColorBlock(color, mainColor);
      list.appendChild(liColor);
    }
    if(!isOdd(c)){
      let liColorExtra = createColorBlock(color, mainColor);
      exstraList.appendChild(liColorExtra);
    }
    
    let liColorAll = createColorBlock(color, mainColor, true);
    allList.appendChild(liColorAll);

    // if a color scale name has been set change everywhere
    let placeholders = document.getElementsByClassName('custom-color-'+color.id+'-hex');
    for(let p = 0; p < placeholders.length; p++) {
      placeholders[p].innerText = color.hex;
    }
  }
  // Show color section
  document.getElementById('farveskema').classList.remove('d-none');
}

function createColorBlock(color, mainColor, small = false){
  let li = document.createElement('li');
  if(color.hex === '#'+mainColor){
    li.classList.add('main-color');
  }
  let button = document.createElement('button');
  button.style.backgroundColor = color.hex;
  button.setAttribute('data-color-hex', color.hex);
  button.setAttribute('data-color-id', 'custom-'+color.id);
  button.setAttribute('aria-label', 'Hovedfarve:'+color.hex);
  
  button.style.color = color.text;
  
  let span = document.createElement('span');
  if(small){
    let srOnly = document.createElement('span');
    srOnly.classList.add('sr-only');
    srOnly.innerText = color.hex;;
    button.appendChild(srOnly);
    
    span.innerText = color.id;
  } else {
    span.innerHTML = '<span class="color-custom-name">'+themeName+'</span>-'+color.id;
    button.innerText = color.hex;
  }
  
  li.appendChild(button);
  li.appendChild(span);
  return li;
}

function isOdd(num) { return num % 2;}

export const numberToHex = (number) => '#' + number
export const hexToNumber = (number) => number.substr(1, number.length)

export const initialColor = '1D9A6C'

export const defaultState = {
  darkColorsAmount: 4,
  lightColorsAmount: 6,

  darkestAmount: 50,
  lightestAmount: 80,

  darkColorsMixRotate: -51,
  lightColorsMixRotate: 67,

  lightSaturation: 20,
  darkSaturation: 14,

  mainColor: initialColor,
  r: Color(numberToHex(initialColor)).rgb().red(),
  g: Color(numberToHex(initialColor)).rgb().green(),
  b: Color(numberToHex(initialColor)).rgb().blue(),

  bgColor: 'white',
}

export const errorColor = 'transparent'

export const isValidHex = (color) => {
  if (!color || typeof color !== 'string') return false

  if (color.substring(0, 1) === '#') color = color.substring(1)

  switch (color.length) {
    case 3: return /^[0-9A-F]{3}$/i.test(color)
    case 6: return /^[0-9A-F]{6}$/i.test(color)
    case 8: return /^[0-9A-F]{8}$/i.test(color)
    default: return false
  }
}

export const hashToObject = (hash) => {
  if (hash) {
    const stateKeysArray = Object.keys(defaultState)
    const hashValuesArray = hash.substr(1, hash.length).split(['/'])

    const getHashObject = () => {
      var hashObject = {}
      stateKeysArray.forEach((key, i) => hashObject[key] = hashValuesArray[i])

      return hashObject
    }

    return getHashObject()
  }

  return null
}

export const getColorsList = (colorsAmount, colorsShiftAmount, mixColor, rotate, saturation, mainColor) => {
  const colorsList = []
  const givenColor = isValidHex(numberToHex(mainColor)) ? numberToHex(mainColor) : errorColor

  let step
  for (step = 0; step < colorsAmount; step++) {
    if (isValidHex(numberToHex(mainColor))) {
      colorsList.push(Color(givenColor).rotate((step + 1) / colorsAmount * -rotate).saturate((step + 1) / colorsAmount * (saturation / 100)).mix(Color(mixColor), (colorsShiftAmount / 100) * (step + 1) / colorsAmount).string())
    } else {
      colorsList.push(errorColor)
    }
  }

  return colorsList
}

