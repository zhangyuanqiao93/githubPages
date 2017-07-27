/**
 * Created by Bridge on 2017/7/25.
 */

    var canvas  = document.getElementById('canvas');
    context = canvas.getContent('2d');

    context.font = '38pt Arial';
    context.fillStyle = 'cornflowerblue';
    context.strokeStyle = 'blue';
    context.fillText('Hello Canvas',canvas.width/2-150,canvas.height+150);
    context.strokeText('Hello Canvas',canvas.width/2-150,canvas.height+150);

    var controlContext;
    function drawGrid(strokeStyle,fillStyle) {
        controlContext.fillStyle = fillStyle;
        controlContext.strokeStyle = strokeStyle;
        controlContext.restore();
    }


    var canvas  = document.getElementById('canvas').onfocus;