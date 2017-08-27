'use strict';

var wizardFirstName = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var wizardsSecondName = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var jacket = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
];

var selectors = {
  label: '.setup-similar-label',
  coat: '.wizard-coat',
  eyes: '.wizard-eyes'
};

function getRandom(data) {
  return data[Math.floor(Math.random() * data.length)];
}

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var inputName = userDialog.querySelector('.setup-user-name');
var setupFireball = userDialog.querySelector('.setup-fireball-wrap');
var setupCoat = userDialog.querySelector(selectors.coat);
var setupEyes = userDialog.querySelector(selectors.eyes);
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

inputName.focused = false;

inputName.onfocus = function () {
  inputName.focused = true;
};

inputName.onblur = function () {
  inputName.focused = false;
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && inputName.focused === false) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupFireball.addEventListener('click', function () {
  setupFireball.style.backgroundColor = getRandom(fireballColor);
});

setupCoat.addEventListener('click', function () {
  setupCoat.style.fill = getRandom(jacket);
});

setupEyes.addEventListener('click', function () {
  setupEyes.style.fill = getRandom(eyesColor);
});

var wizardsCount = 4;
var wizards = [];
for (var i = 0; i < wizardsCount; i++) {
  wizards[i] = {
    name: getRandom(wizardFirstName) + ' ' + getRandom(wizardsSecondName),
    coatColor: getRandom(jacket),
    eyesColor: getRandom(eyesColor)
  };
}

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(selectors.label).textContent = wizard.name;
  wizardElement.querySelector(selectors.coat).style.fill = wizard.coatColor;
  wizardElement.querySelector(selectors.eyes).style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
