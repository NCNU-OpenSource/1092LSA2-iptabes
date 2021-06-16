function GetFormData() {
    var ActionToRule = document.getElementById("ActionToRule");
    var chain = document.getElementById("chain");
    var protocal = document.getElementById("protocal");
    var src = document.getElementById("src");
    var dest = document.getElementById("dest");
    var action = document.getElementById("action");

    if (ActionToRule.value == "Add") { ActionToRule = "-A"; }
    else if (ActionToRule.value == "Insert") { ActionToRule = "-I"; }
    else if (ActionToRule.value == "Delete") { ActionToRule = "-D"; }
    else { ActionToRule = "-R"}

    alert("iptables " + ActionToRule + " " + chain.value + " -p " + protocal.value + " -i " + src.value + " -o " + dest.value + " -j " + action.value);
}



