function action() {
    var ActionToRule = document.getElementById("ActionToRule");
    if (ActionToRule.value == "Add") {
        document.getElementById("table").style.display="none";
        document.getElementById("rule_number").style.display="none";
        document.getElementById("chain").style.display="inline";
        document.getElementById("protocal").style.display="inline";
        document.getElementById("src").style.display="inline";
        document.getElementById("dest").style.display="inline";
        document.getElementById("action").style.display="inline";
    }else if (ActionToRule.value == "Delete") {
        alert("請先確認 iptables 的內容 (可以使用 Show iptables 確認)");
        document.getElementById("table").style.display="none";
        document.getElementById("chain").style.display="inline";
        document.getElementById("protocal").style.display="none";
        document.getElementById("src").style.display="none";
        document.getElementById("dest").style.display="none";
        document.getElementById("action").style.display="none";
        document.getElementById("rule_number").style.display="inline";
    }else if (ActionToRule.value == "Insert") {
        alert("請先確認 iptables 的內容~ (可以使用 Show iptables 確認)");
        document.getElementById("table").style.display="none";
        document.getElementById("rule_number").style.display="inline";
        document.getElementById("chain").style.display="inline";
        document.getElementById("protocal").style.display="inline";
        document.getElementById("src").style.display="inline";
        document.getElementById("dest").style.display="inline";
        document.getElementById("action").style.display="inline";
    }else {
        document.getElementById("table").style.display="inline";
        document.getElementById("chain").style.display="none";
        document.getElementById("rule_number").style.display="none";
        document.getElementById("protocal").style.display="none";
        document.getElementById("src").style.display="none";
        document.getElementById("dest").style.display="none";
        document.getElementById("action").style.display="none";
    }
}

function GetFormData() {
    var ActionToRule = document.getElementById("ActionToRule");
    var chain = document.getElementById("chain");
    var RuleNumber = document.getElementById("rule_number");
    var protocal = document.getElementById("protocal");
    var src = document.getElementById("src");
    var dest = document.getElementById("dest");
    var action = document.getElementById("action");

    // 判斷 add/delete/insert/show
    if (ActionToRule.value == "Add") { 
        ActionToRule = "-A";
        var p = document.getElementById("output");
        p.innerHTML = "iptables " + ActionToRule + " " + chain.value + " -p " + protocal.value + " -i " + src.value + " -o " + dest.value + " -j " + action.value; 
    }else if (ActionToRule.value == "Insert") { 
        ActionToRule = "-I";
        var p = document.getElementById("output");
        p.innerHTML = "iptables " + ActionToRule + " " + chain.value + " " + RuleNumber.value + " -p " + protocal.value + " -i " + src.value + " -o " + dest.value + " -j " + action.value; 
    }else if (ActionToRule.value == "Delete") { 
        ActionToRule = "-D";
        var p = document.getElementById("output");
        p.innerHTML = "iptables " + ActionToRule + " " + chain.value + " " + RuleNumber.value;  
    }else { 
        ActionToRule = "-L"
        var p = document.getElementById("output");
        p.innerHTML = "iptables" + " -t " + table.value + " " + ActionToRule;  
    }
}


