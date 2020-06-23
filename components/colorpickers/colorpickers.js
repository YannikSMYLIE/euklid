const colors = {
    red: ['red', 'darkred'],
    blue: ['blue', 'darkblue'],
    green: ['green', 'darkgreen'],
    orange: ['orange', 'darkorange']
}

let color = Object.keys(colors)[0];
$(document).ready(function() {
    let cssDefinition = "";

    // Colorpicker anlegen
    for(let key in colors) {
        const color = colors[key];

        // Colorpicker zur auswahl anzeigen
        const colorpicker = $("<div>");
        colorpicker.addClass("colorpicker");
        colorpicker.attr("data-color", key);
        $('.colorpickers').append(colorpicker);

        // CSS-Definitionen speichern
        cssDefinition += '[data-color="' + key + '"] { background: ' + color[0] + '; border-color: ' + color[1] + '; }'+  "\n";
    }

    // Ersten Colorpicker auswählen
    $('.colorpickers .colorpicker').first().css("opacity", "1");

    // CSS anlegen
    const css = $("<style>");
    css.html(cssDefinition);
    $('head').append(css);

}).on('click', '.colorpicker', function() {
    $(document).find('.colorpicker').css("opacity", "");
    $(this).css("opacity", 1);
    color = $(this).attr("data-color");
});

function getColorKey(index) {
    let i = 0;
    for(let key in colors) {
        if(i == index) {
            return key;
        }
        i++;
    }
    return getColorKey(index % i);
}