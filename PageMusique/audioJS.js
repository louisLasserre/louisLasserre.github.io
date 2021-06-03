function play() {
    var audio = document.getElementById("Back");
    audio.play();
}

function onload() {
    array = new Array()
    number = new Array()
    $('.audio').each(function(index) {
        $(this).attr('id', index)
        maxI = index
        console.log(maxI)
        array.push(this)
        number.push(index)


    })
}





function random() {
    $('.allaudios').empty()
    for (var i = 0; i < array.length; i++) {

        var nb = number[Math.floor(Math.random() * (number.length))]
        $('.allaudios').append(array[nb])
        var toremove = number.indexOf(nb)
        number.splice(toremove, 1)
    }
    onload()


}

/*var audio = document.getElementById("Back");
audio.addEventListener("ended", function() {
    audio.currentTime = 0;
    document.getElementById(2).play();
})*/