function linGen() {


    var sudoOrNot = 'sudo ';
    var surviveRebootSudo = '';
    var defaultLinuxCode = [
        'dd ',
        'if=/dev/zero',
        ' of=',
        ' bs=',
        ' count=',
        ' && ',
        '',
        '',
        ''
    ]

    var chmod = [
        'chmod',
        ' 600 '
    ]

    var makeSwap = 'mkswap '
    var swapon = [
        'swapon ',
        '--show'
    ]

    var fallocateCode = [
        'fallocate ',
        '-l '
    ]

    var markupValues = [
        document.getElementById("swapFileSize").value,
        '',
        document.getElementById("bs").value,
        document.getElementById("swapFileNameLocation").value
    ]

    var isFallocateLocation = '';
    var varLocation = markupValues[3];


    if (isRootCheckbox.checked) {
        sudoOrNot = ''
    }

    if (surviveReboot.checked) {
        defaultLinuxCode[6] = defaultLinuxCode[5],
            defaultLinuxCode[7] = 'swap swap defaults 0 0',
            surviveRebootSudo = 'sudo '

    }

    if (surviveReboot.checked && isRootCheckbox.checked) {
        surviveRebootSudo = ''
    }


    if (isFallocate.checked) {
        defaultLinuxCode[0] = fallocateCode[0],
            defaultLinuxCode[1] = fallocateCode[1],
            defaultLinuxCode[2] = '',
            defaultLinuxCode[3] = '',
            defaultLinuxCode[4] = '',
            markupValues[2] = '',
            markupValues[0] = markupValues[0] + 'G ',
            varLocation = ''
        isFallocateLocation = document.getElementById("swapFileNameLocation").value;
    } else {
        markupValues[0] = 1048576 * markupValues[0]
    }


    var swapCode = [
        '',
        '',
        '',
        ''
    ]
    
    if (isSwapiness.checked) {
        swapCode[0] = "sudo ",
            swapCode[1] = "sysctl ",
            swapCode[2] = "vm.swappiness=",
            markupValues[1] = document.getElementById("swapiness").value
    }
    if (isSwapiness.checked && isRootCheckbox.checked) {
        swapCode[0] = ""
    }
    if (isSwapiness.checked) {
        defaultLinuxCode[8] = " && "
    }
    if (isSwapiness.checked && surviveReboot.checked) {
        swapCode[3] = defaultLinuxCode[8] + " 'echo " + swapCode[2] + markupValues[1] + " >> /etc/sysctl.conf'"
    }

    document.getElementById("generatorCode").style.background = "#6f0000";
    document.getElementById("generatorCode").style.color = "white";

    //multiSwapLoop = [
    //   '',
    //    document.getElementById("multiSwap").value
    //]

    document.getElementById("generatorCode").value =
        sudoOrNot +
        defaultLinuxCode[0] +
        defaultLinuxCode[1] +
        defaultLinuxCode[2] + varLocation +
        defaultLinuxCode[3] + markupValues[2] +
        defaultLinuxCode[4] + markupValues[0] +
        isFallocateLocation +
        defaultLinuxCode[5] + sudoOrNot + chmod[0] + chmod[1] + markupValues[3] +
        defaultLinuxCode[5] + sudoOrNot + makeSwap + markupValues[3] +
        defaultLinuxCode[5] + sudoOrNot + swapon[0] + markupValues[3] +
        defaultLinuxCode[6] + surviveRebootSudo + defaultLinuxCode[7] +
        defaultLinuxCode[8] + swapCode[0] + swapCode[1] + swapCode[2] + markupValues[1] +
        swapCode[3] +
        defaultLinuxCode[5] + sudoOrNot + swapon[0] + swapon[1]
}



function clearGen() {
    document.getElementById("generatorCode").value = ''
    document.getElementById("generatorCode").style.color = "#33404e";

}

function restDef() {

    document.getElementById("swapFileNameLocation").value = "/swapfilecode.com",
        document.getElementById("swapFileSize").value = 1,
        document.getElementById("swapiness").value = 20,
        document.getElementById("bs").value = 1024,
        document.getElementById("isRootCheckbox").checked = false,
        document.getElementById("isFallocate").checked = false,
        document.getElementById("isSwapiness").checked = false,
        document.getElementById("surviveReboot").checked = true;
}