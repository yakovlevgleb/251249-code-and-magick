'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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

var jaket = [
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

var selectors = {
  label: '.setup-similar-label',
  coat: '.wizard-coat',
  eyes: '.wizard-eyes'
};


function getRandom(data) {
  return data[Math.floor(Math.random() * data.length)];
}

var wizardsCount = 4;
var wizards = [];
for (var i = 0; i < wizardsCount; i++) {
  wizards[i] = {
    name: getRandom(wizardFirstName) + ' ' + getRandom(wizardsSecondName),
    coatColor: getRandom(jaket),
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

}

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');