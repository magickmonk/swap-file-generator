function iniHome() {
    var getElemId = [
        document.getElementById("status"),

    ];

    var homeMarkup = ['<h2>Need a Swapfile fast?</h2>', '<p>Easily generate unique codes to create custom swapfiles on supported systems -</p>', '<div> Step 1.) Select an operating system from above to load a generator. </br> Step 2.) Enter your settings, if any (defaults are usually fine). Click generate.</br> Step 3.) Copy/paste your generated code into a terminal session and hit enter. </br> Step 4.) Watch the magic happen!</div>']
    getElemId[0].style.color = "#ffffff";
    getElemId[0].innerHTML =
        homeMarkup[0] +
        homeMarkup[1] +
        homeMarkup[2]
}


function iniLin() {
    var getElemId = [
        document.getElementById("status"),

    ];

    var linuxMarkup = [
        '<h2>Linux Swapfile Generator</h2>',
        '<form action="">',
        '<input type="text" name="swapFileNameLocation" id="swapFileNameLocation" value="/swapfilecode.com"> Swap File Name and Location<br>',
        '<input type="number" name="swapFileSize" id="swapFileSize" value="1"> Swap File Size<br>',
        //'<input type="number" name="multiSwap" id="multiSwap" value="1"> Swap File Size<br>',
        '<input type="number" name="swapiness" id="swapiness" value="20"> Swapiness<br>',
        '<input type="number" name="bs" id="bs" value="1024"> BS<br>',
        '<input type="checkbox" name="isRoot" id="isRootCheckbox"> No Root',
        '<input type="checkbox" name="isFallocate" id="isFallocate"> Fallocate',
        '<input type="checkbox" name="isSwapiness" id="isSwapiness"> Swapiness',
        '<input type="checkbox" name="surviveReboot" id="surviveReboot" checked="true"> Survive Reboot<br>',
        '<br><textarea name="generatorCode" id="generatorCode" rows="14" cols="10" wrap="soft">Choose your settings </textarea><br>',
        '</form>',
        '<div id="buttons">',
        '<button onclick="restDef()"> Restore Default </button>',
        '<button onclick="linGen()"> Generate </button>',
        '<button onclick="clearGen()"> Clear </button> </div>'
    ];


    getElemId[0].style.color = "#ffffff";
    getElemId[0].innerHTML =
        linuxMarkup[0] +
        linuxMarkup[1] +
        linuxMarkup[2] +
        linuxMarkup[3] +
        linuxMarkup[4] +
        linuxMarkup[5] +
        linuxMarkup[6] +
        linuxMarkup[7] +
        linuxMarkup[8] +
        linuxMarkup[9] +
        linuxMarkup[10] +
        linuxMarkup[11] +
        linuxMarkup[12] +
        linuxMarkup[13] +
        linuxMarkup[14] +
        linuxMarkup[15] //+
    //linuxMarkup[16]

}




function iniWin() {
    var getElemId = [
        document.getElementById("status"),
    ];

    var winMarkup = [
        '<h2>Windows Swapfile Generator</h2>',
        '<form action="">',
        '<input type="text" name="swapFileNameLocation" id="swapFileNameLocation" value="/swapfilecode.com"> Swap File Name and Location<br>',
        '<input type="number" name="swapFileSize" id="swapFileSize" value="1"> Swap File Size<br>',
        //'<input type="number" name="multiSwap" id="multiSwap" value="1"> Swap File Size<br>',
        '<input type="number" name="swapiness" id="swapiness" value="20"> Swapiness<br>',
        '<input type="number" name="bs" id="bs" value="1024"> BS<br>',
        '<input type="checkbox" name="isRoot" id="isRootCheckbox"> No Root',
        '<input type="checkbox" name="isFallocate" id="isFallocate"> Fallocate',
        '<input type="checkbox" name="isSwapiness" id="isSwapiness"> Swapiness',
        '<input type="checkbox" name="surviveReboot" id="surviveReboot" checked="true"> Survive Reboot<br>',
        '<br><textarea name="generatorCode" id="generatorCode" rows="14" cols="10" wrap="soft">Choose your settings </textarea><br>',
        '</form>',
        '<div id="buttons">',
        '<button onclick="restDef()"> Restore Default </button>', '<button onclick="linGen()"> Generate </button>', '<button onclick="clearGen()"> Clear </button> </div>'
    ];


    getElemId[0].style.color = "#ffffff";
    getElemId[0].innerHTML =
        winMarkup[0] +
        winMarkup[1] +
        winMarkup[2] +
        winMarkup[3] +
        winMarkup[4] +
        winMarkup[5] +
        winMarkup[6] +
        winMarkup[7] +
        winMarkup[8] +
        winMarkup[9] +
        winMarkup[10] +
        winMarkup[11] +
        winMarkup[12] +
        winMarkup[13] +
        winMarkup[14] +
        winMarkup[15] //+
    //winMarkup[16]




}