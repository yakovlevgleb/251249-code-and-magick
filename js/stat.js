'use strict';

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

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
  var barHeigth = 40; // px;
  var indent = 90; // px;
  var initialX = 250; // px;
  var initialY = 120; // px;

  ctx.textBaseline = 'top'; // Рисуем надпись от левого верхнего угла
  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), initialY + indent * i, -(times[i] * step) + initialX - 20);
    ctx.fillText(names[i], initialY + indent * i, initialX);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1.0)';
    } else {
      opac = Math.floor(Math.random() * 100)/100;
      ctx.fillStyle = 'rgba(0, 0, 255,'+ opac +')';
    }
    ctx.fillRect(initialY + indent * i, initialX, barHeigth, -(times[i] * step));
  }
}
