
function iniHome() {
    var getElemId = [
        document.getElementById("status"),
    ];

    document.getElementById("year").innerHTML = new Date().getFullYear();

    var homeMarkup = ['<h2>Need a Swapfile fast?</h2>', '<p>Easily generate unique codes to create custom swapfiles on supported systems -</p>', '<div> Step 1.) Select the Generator tab from above to load the generator. </br></br> Step 2.) Enter your settings, if any (defaults are usually fine). Click generate.</br></br> Step 3.) Copy/paste your generated code into a terminal session and hit enter. </br></br> Step 4.) Watch the magic happen!</br></br></br></br></br></br></br></br></br></div>']
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
        '<br><textarea name="generatorCode" id="generatorCode" rows="14" cols="10" wrap="soft">^^ Choose your settings ^^</textarea><br>',
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
       // linuxMarkup[16]

}




function iniFaq() {
    var getElemId = [
        document.getElementById("status"),
    ];

    var faqMarkup = [
        "What is a 'Swapfile'? </br>A swap file, sometimes called a page file or paging file, is space on a hard drive used as a temporary location to store information when RAM is fully utilized. By using a swap file, a computer can use more memory than what is physically installed in the computer. </br></br>",
        '',
        'Swap File Name and Location</br>',
        '',
        'Swapiness</br>',
        '',
        'BS</br>',
        '',
        'Swap File Size</br>',
        '',
        'No Root</br>',
        'Fallocate</br>',
        'Swapiness</br>',
        'Survive Reboot</br>'
    ];


    getElemId[0].style.color = "#ffffff";
    getElemId[0].innerHTML =
        faqMarkup[0] +
        faqMarkup[1] +
        faqMarkup[2] +
        faqMarkup[3] +
        faqMarkup[4] +
        faqMarkup[5] +
        faqMarkup[6] +
        faqMarkup[7] +
        faqMarkup[8] +
        faqMarkup[9] +
        faqMarkup[10] +
        faqMarkup[11] +
        faqMarkup[12] +
        faqMarkup[13] +
        faqMarkup[14] +
        faqMarkup[15]




}
