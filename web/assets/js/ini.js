function iniLin() {

    var getElemId = [
        document.getElementById("wrapper"),

    ];


    var linuxMarkup = [
        '<h2>Linux Swapfile Generator</h2>',
        '<form action="">',
        '<input type="radio" name="sizeOption" id="kbOption"> KB',
        '<input type="radio" name="sizeOption" id="gbOption" checked=""> GB<br>',
        'Swap File Name and Location: <input type="text" name="swapFileNameLocation" id="swapFileNameLocation" value="/swapfilecode.com"><br>', 
        'Swap File Size: <input type="number" name="swapFileSize" id="swapFileSize" value="1"><br>',
        'Swapiness: <input type="number" name="swapiness" id="swapiness" value="20"><br>',
        'BS: <input type="number" name="bs" id="bs" value="1024"><br>',
        '<input type="checkbox" name="isRoot" id="isRootCheckbox"> Are you root?',
        '<input type="checkbox" name="isFallocate" id="isFallocate"> Fallocate',
        '<input type="checkbox" name="isSwapiness" id="isSwapiness"> Swapiness',
        '<input type="checkbox" name="surviveReboot" id="surviveReboot" checked=""> Survive Reboot<br>',
        'Code: <br><textarea name="generatorCode" id="generatorCode" rows="14" cols="10" wrap="soft">Choose your settings </textarea><br>',
        '</form>',
        '<button onclick="linGen()">',
        'Generate',
        '</button>'
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







