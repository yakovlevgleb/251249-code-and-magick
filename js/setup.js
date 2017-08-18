'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizadName = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var wizardSname = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var jaketColor = [
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



function getWizardName(wizadName, wizardSname) {
  return wizadName[Math.floor(Math.random() * wizadName.length)] + ' ' + wizardSname[Math.floor(Math.random() * wizardSname.length)];
}

function getColorJaket(jaketColor) {
  return jaketColor[Math.floor(Math.random() * jaketColor.length)];
}

function getEyesColor(eyesColor) {
  return eyesColor[Math.floor(Math.random() * eyesColor.length)];
}

var howManyWizards = 4;
var wizards = [];
for (var i = 0; i < howManyWizards; i++) {
  wizards[i] = {
    name: getWizardName(wizadName, wizardSname),
    coatColor: getColorJaket(jaketColor),
    eyesColor: getEyesColor(eyesColor)
  };
}

  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  }

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
