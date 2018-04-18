var $canvas1 = $('#canvas1');
var $canvas2 = $('#canvas2');

/*var canvas1_context = canvas1[0].getContext('2d');
 var canvas2_context = canvas2[0].getContext('2d');*/

var randomColor1 = generateRandomRGBColor();
var randomColor2 = generateRandomRGBColor();

colorize($canvas1, randomColor1.red, randomColor1.green, randomColor1.blue);
colorize($canvas2, randomColor2.red, randomColor2.green, randomColor2.blue);

var range_red = $('#range_red');
var range_green = $('#range_green');
var range_blue = $('#range_blue');
var colorDistance = $('#colorDistance');

$('input[type="range"]').on('input', function () {
    colorize($canvas1, range_red.val(), range_green.val(), range_blue.val());
    colorDistance.val(computeColorDistance($canvas1.color, randomColor2))
});

/***********************************************/

function generateRandomRGBColor() {
    return {
        red: Math.round(Math.random() * 255),
        green: Math.round(Math.random() * 255),
        blue: Math.round(Math.random() * 255)
    };
}

function colorize($canvas, color_red, color_green, color_blue) {
    $canvas.css('background-color',
        'rgb(' + color_red + ', ' + color_green + ', ' + color_blue + ')')

    $canvas.color = {
        red: color_red,
        green: color_green,
        blue: color_blue
    };
}

function computeColorDistance(color1, color2) {
    return Math.abs(color1.red - color2.red)
        + Math.abs(color1.green - color2.green)
        + Math.abs(color1.blue - color2.blue)
}