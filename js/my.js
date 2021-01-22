$(document).ready(function () {


    $('#btnLangChange').on('click', function () {
        var text = $(this).text();

        if ($('.ENGText').hasClass('collapsing')) return
        if ($('.JPNText').hasClass('collapsing')) return
        //$('.collapse').collapse()


        if (text === "日本語") {
            $(this).html('English');

            $('.ENGText').collapse("toggle")
            $('.JPNText').collapse("toggle")
        } else {
            $(this).text('日本語');
            $('.ENGText').collapse("toggle")
            $('.JPNText').collapse("toggle")
        }

    });

    var minNumber = 0; // The minimum number you want
    var maxNumber = 10; // The maximum number you want
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    $('#reviewScore').html(randomnumber); // Sets content of <div> to number
    randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    $('#reviewScore2').html(randomnumber); // Sets content of <div> to number
    randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    $('#reviewScore3').html(randomnumber); // Sets content of <div> to number
    randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    $('#reviewScore4').html(randomnumber); // Sets content of <div> to number
    randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    $('#reviewScore5').html(randomnumber); // Sets content of <div> to number
    randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    $('#reviewScore6').html(randomnumber); // Sets content of <div> to number
    return false; // Returns false just to tidy everything up


});