function iniLin() {



    var getElemId = [
        document.getElementById("status"),

    ];

 

    var linuxMarkup = [
        '<h2>Linux Swapfile Generator</h2>',
        '<form action="">',
        '<input type="text" name="swapFileNameLocation" id="swapFileNameLocation" value="/swapfilecode.com"> Swap File Name and Location<br>', 
        '<input type="number" name="swapFileSize" id="swapFileSize" value="1"> Swap File Size<br>',
        '<input type="number" name="multiSwap" id="multiSwap" value="1"> Swap File Size<br>',
        '<input type="number" name="swapiness" id="swapiness" value="20"> Swapiness<br>',
        '<input type="number" name="bs" id="bs" value="1024"> BS<br>',
        '<input type="checkbox" name="isRoot" id="isRootCheckbox"> Are you root?',
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
            linuxMarkup[15] +
            linuxMarkup[16]

}




function iniWin() {
    document.getElementById("wrapper").innerHTML = "Windows Markup"

}







