'use strict';

var CANVAS_DATA = {
  top: 20,
  left: 110,
  width: 420,
  height: 270,
  shadowOffset: 10,
  textOffset: 20,
  font: '16px PT Mono',
  you: 'Вы',
  win: 'Ура вы победили!',
  resultList: 'Список результатов:'
}

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CANVAS_DATA.left, CANVAS_DATA.top, CANVAS_DATA.width, CANVAS_DATA.height);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(CANVAS_DATA.left - CANVAS_DATA.shadowOffset, CANVAS_DATA.top - CANVAS_DATA.shadowOffset, CANVAS_DATA.width, CANVAS_DATA.height);

  ctx.fillStyle = '#000';
  ctx.font = CANVAS_DATA.font;

  ctx.fillText(CANVAS_DATA.win, CANVAS_DATA.left + CANVAS_DATA.shadowOffset, CANVAS_DATA.top + CANVAS_DATA.textOffset);
  ctx.fillText(CANVAS_DATA.resultList, CANVAS_DATA.left + CANVAS_DATA.shadowOffset, CANVAS_DATA.top + CANVAS_DATA.textOffset * 2);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramWidth = 150;
  var step = histogramWidth / (max - 0);
  var opac;
  var barHeigth = 40;
  var indent = 90;
  var initialX = 250;
  var initialY = 120;

  ctx.textBaseline = 'top';
  for (var i = 0; i < times.length; i++) {
    opac = Math.floor(Math.random() * 100) / 100;
    drawBar(ctx, step, names, times, initialY, initialX, indent, i, opac, barHeigth);
  }
}

function drawBar(ctx, step, names, times, initialY, initialX, indent, i, opac, barHeigth) {
  ctx.fillStyle = '#000';
  ctx.fillText(Math.floor(times[i]), initialY + indent * i, -(times[i] * step) + initialX - CANVAS_DATA.textOffset);
  ctx.fillText(names[i], initialY + indent * i, initialX);
  if (names[i] === CANVAS_DATA.you) {
    ctx.fillStyle = 'rgba(255, 0, 0, 1.0)';
  } else {
    ctx.fillStyle = 'rgba(0, 0, 255,' + opac + ')';
  }
  ctx.fillRect(initialY + indent * i, initialX, barHeigth, -(times[i] * step));
}
