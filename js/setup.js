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

var fireballsColor = [
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

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && document.activeElement !== inputName) {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }
};

setupOpen.addEventListener('click', function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }
});

setupClose.addEventListener('click', function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }
});

var elementFireballColor = 0;
var elementJacketColor = 0;
var elementEyesColor = 0;

setupFireball.addEventListener('click', function () {
  elementFireballColor++;
  if (elementFireballColor >= fireballsColor.length) {
    elementFireballColor = 0;
  }
  setupFireball.style.backgroundColor = fireballsColor[elementFireballColor];
});

setupCoat.addEventListener('click', function () {
  elementJacketColor++;
  if (elementJacketColor >= fireballsColor.length) {
    elementJacketColor = 0;
  }
  setupCoat.style.fill = jacket[elementJacketColor];
});

setupEyes.addEventListener('click', function () {
  elementEyesColor++;
  if (elementEyesColor >= fireballsColor.length) {
    elementEyesColor = 0;
  }
  setupEyes.style.fill = eyesColor[elementEyesColor];
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
