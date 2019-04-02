
/*
* Prevents the user from inputting based on a regex.
* Does not work the same way af <input pattern="">, this pattern is only used for validation, not to prevent input. 
* Usecase: number input for date-component.
* Example - number only: <input type="text" data-input-regex="^\d*$">
*/
'use strict';
const behavior = require('../utils/behavior');

const modifierState = {
  shift: false,
  alt: false,
  ctrl: false,
  command: false
};

function inputRegexMask(event) {

    if(modifierState.ctrl || modifierState.command) {
        return;
    }
    var newChar = null;
    if(typeof event.key !== "undefined"){
        if(event.key.length === 1){
            newChar = event.key;
        }
    } else {
        if(!event.charCode){
            newChar = String.fromCharCode(event.keyCode);
        } else {
            newChar = String.fromCharCode(event.charCode);
        }
    }
    var element = null;
    if(event.target !== undefined){
        element = event.target;
    }
    if(newChar !== null && element !== null) {
        if(newChar.length > 0){
            if(element.type === "number"){
                var newValue = this.value;//Note input[type=number] does not have .selectionStart/End (Chrome).
            }else{
                var newValue = this.value.slice(0, element.selectionStart) + this.value.slice(element.selectionEnd) + newChar; //removes the numbers selected by the user, then adds new char. 
            }
            
            var regexStr = this.getAttribute("data-input-regex");
            var r = new RegExp(regexStr);
            if(r.exec(newValue) === null){
                if (event.preventDefault) {
                  event.preventDefault();
                } else {
                  event.returnValue = false;
                }
            }
        }
    }
}

module.exports = behavior({
  'keypress paste': {
    'input[data-input-regex]': inputRegexMask,
  }
});
