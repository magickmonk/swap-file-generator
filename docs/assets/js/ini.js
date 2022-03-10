// Website: https://swapon.linuxflex.com/
// Code: https://github.com/yellucs/swap-file-generator
// License: https://github.com/yellucs/swap-file-generator/blob/master/LICENSE

function iniHome() {
    var getElemId = [document.getElementById("footer"),document.getElementById("status")]
    var homeMarkup = ['<p><h4>Easily generate unique codes to create custom swap files.</h4></p>']
    getElemId[1].innerHTML = homeMarkup[0]
    var footerMarkup = [
                       '&copy; <span id="year">2020</span></br>',
                       '<a class="github-button" href="https://github.com/yellucs/swap-file-generator/subscription" data-show-count="false" aria-label="Watch yellucs/swap-file-generator on GitHub">Watch</a>', 
                       '<a class="github-button" href="https://github.com/yellucs/swap-file-generator" data-show-count="false" aria-label="Star yellucs/swap-file-generator on GitHub">Star</a>',
                       '<a class="github-button" href="https://github.com/yellucs" data-show-count="false" aria-label="Follow @yellucs on GitHub">Follow @yellucs</a>'
                       ]
 
    getElemId[0].innerHTML = footerMarkup[0]+footerMarkup[1]+footerMarkup[2]+footerMarkup[3]
    document.getElementById("year").innerHTML = '2020 - '+new Date().getFullYear()+' <a href="https://swapon.linuxflex.com">swapon.linuxflex.com</a>'
}

function homeBtn() {
    var getElemId = document.getElementById("status")
    var homeMarkup = ['<p><h4>Easily generate unique codes to create custom swap files</h4></p>']
    getElemId.innerHTML = homeMarkup[0]
}

function iniLin() {
    var getElemId = [
        document.getElementById("status"),
    ];
    var linuxMarkup = [
        '<h2>Linux Swap File Generator</h2>',
        '<form action="">',
        '<input type="text" name="swapFileNameLocation" id="swapFileNameLocation" value="/swapon.linuxflex.com"> Swap File Name & Location<br>',
        '<input type="number" name="swapFileSize" id="swapFileSize" value="1"> Swap File Size (GB)<br>',
        //'<input type="number" name="multiSwap" id="multiSwap" value="1"> Swap File Size<br>',
        '<input type="number" name="swapiness" id="swapiness" value="20"> Swapiness<br>',
        '<input type="number" name="bs" id="bs" value="1024"> Byte Size<br></br>',
        '<input type="checkbox" name="isRoot" id="isRootCheckbox"> No Root',
        '<input type="checkbox" name="isFallocate" id="isFallocate"> Fallocate',
        '<input type="checkbox" name="isSwapiness" id="isSwapiness"> Swapiness',
        '<input type="checkbox" name="surviveReboot" id="surviveReboot" checked="true"> Survive Reboot<br>',
        '<br><textarea name="generatorCode" id="generatorCode" rows="14" cols="10" wrap="soft">Choose your settings...</textarea><br>',
        '</form>',
        '<div id="buttons">',
        '<button id="defBtn" onclick="restDef()"> Default </button>',
        '<button id="linGen" onclick="linGen()"> Generate </button>',
        '<button id="copyBtn" onclick="copyGen()"> Copy </button> </div>'
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
        '<div> <h3>Quick start guide</h3><p>Step 1.) Select the Generator tab from above to load the generator. </br>Step 2.) Enter your settings, if any (defaults are usually fine). Click generate.</br>Step 3.) Copy/paste your generated code into a terminal session and hit enter. </br> Step 4.) Watch the magic happen!</p>',
        "<h3>What is a 'Swap file'?</h3><p> A swap file, sometimes called a page file or paging file, is space on a hard drive used as a temporary location to store information when RAM is fully utilized. By using a swap file, a computer can use more memory than what is physically installed in the computer.</p>",
        '<h3>Why do I need a code to make a Swap file?</h3> <p>There are a few different ways to create a swap file, each using different steps and multiple commands with a command prompt, if you are not familiar with commands it can be confusing so we created this tool that autogenerates a single command using the provided settings.</p></div>',
        '<h3>Settings Breakdown</h3><table style="width:100%">',
        '<tr><th>Setting</th><th>Description</th><th>Required</th></tr>',
        '<tr><td>Swap File Name and Location</td><td>Enter the location your swapfile will be stored in</td><td>X</td></tr>',
        '<tr><td>Swapiness</td><td>Select the desired swapiness in the input box, or use the checkbox to disable setting the swappiness.</td><td></td></tr>',
        '<tr><td>Byte size</td><td>Recommended only for advanced users</td><td>X</td></tr>',
        '<tr><td>Swap File Size</td><td>Swap file size in gigabytes</td><td>X</td></tr>',
        '<tr><td>No Root</td><td>Select if using a root account (sudo)</td><td></td></tr>',
        '<tr><td>Fallocate</td><td>Uses Linux fallocate command to preallocate emtpy information to the swapfile </td><td></td></tr>',
        '<tr><td>Survive Reboot</td><td>Select if the swap file will remain after a system reboot. Deselect if you only need a swap file temporarily.</td><td></td></tr>',
        '</table> ',
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
        faqMarkup[12] 
}





