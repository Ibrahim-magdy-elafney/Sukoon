const buttons = document.querySelectorAll(".tasbeeh-btn");

buttons.forEach(function (button) {

    let count = 0;

    button.addEventListener("click", function () {

        count++;

        button.querySelector("span").innerText = count;

    });

});