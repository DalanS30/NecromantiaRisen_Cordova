// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // Get Elements
        var gameText = document.getElementById("gameText");
        var choiceButton1 = document.getElementById("choiceButton1");
        var choiceButton2 = document.getElementById("choiceButton2");
        var choiceButton3 = document.getElementById("choiceButton3");
        var choiceButton4 = document.getElementById("choiceButton4");

        // Set Listeners
        choiceButton1.addEventListener('click', onButtonTap1, false);
        choiceButton2.addEventListener('click', onButtonTap2, false);
        choiceButton3.addEventListener('click', onButtonTap3, false);
        choiceButton4.addEventListener('click', onButtonTap4, false);

        window.resolveLocalFileSystemURL("~/www/text/0.txt", gotFile, fail);
    };

    function onButtonTap1(e) {
        gameText.textContent = 'You pressed button 1';
    };

    function onButtonTap2(e) {
        gameText.textContent = 'You pressed button 2';
    };

    function onButtonTap3(e) {
        gameText.textContent = 'You pressed button 3';
    };

    function onButtonTap4(e) {
        gameText.textContent = 'You pressed button 4';
    };

    function setGameText(text) {
        gameText.textContent = text;
    }

    function gotFile(fileEntry) {

        fileEntry.file(function (file) {
            var reader = new FileReader();

            reader.onloadend = function (e) {
                console.log("Text is: " + this.result);
                document.querySelector("#textArea").innerHTML = this.result;
            }

            reader.readAsText(file);
        });

    }

    function fail(e) {
        console.log("FileSystem Error");
        console.dir(e);
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();