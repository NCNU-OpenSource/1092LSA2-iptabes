// basic command 顯示
function ActionForBasic() {
    var BasicCommand = document.getElementById("BasicCommand");
    if (BasicCommand.value == "Show IPtables") {
        document.getElementById("tableB").style.display="inline";
        document.getElementById("chainB").style.display="none";
        document.getElementById("actionB").style.display="none";
    } else if (BasicCommand.value == "Delete all rules") {
        document.getElementById("tableB").style.display="inline";
        document.getElementById("chainB").style.display="none";
        document.getElementById("actionB").style.display="none";
    } else if (BasicCommand.value == "Delete user-specified rules") {
        document.getElementById("tableB").style.display="inline";
        document.getElementById("chainB").style.display="none";
        document.getElementById("actionB").style.display="none";
    } else { // Change Policy
        document.getElementById("tableB").style.display="inline";
        document.getElementById("chainB").style.display="inline";
        document.getElementById("actionB").style.display="inline";
    }
}

// 處理 basic command 
function GetBasicData() {
    var BasicCommand = document.getElementById("BasicCommand").value;
    var chainB = document.getElementById("chainB").value;
    var actionB = document.getElementById("actionB").value;
    var tableB = document.getElementById("tableB").value;

    if (tableB == "all tables") {
        tableB = " ";
    } else {
        tableB = " -t " + tableB;
    }
    // 判斷 add/delete/insert/show
    if (BasicCommand == "Show IPtables") { 
        BasicCommand = "-L";
        var p = document.getElementById("output");
        p.innerHTML = "iptables " + tableB + " " + BasicCommand;
    }else if (BasicCommand == "Delete all rules") { 
        BasicCommand = "-F";
        var p = document.getElementById("output");
        p.innerHTML = "iptables " + tableB + " " + BasicCommand; 
    }else if (BasicCommand == "Delete user-specified rules") { 
        BasicCommand = "-X";
        var p = document.getElementById("output");
        p.innerHTML = "iptables " + tableB + " " + BasicCommand;  
    }else { 
        BasicCommand = "-P";
        var p = document.getElementById("output");
        p.innerHTML = "iptables" + tableB + " " + BasicCommand + " " + chainB + " " + actionB;  
    }
}

// rule 顯示
function action() {
    var ActionToRule = document.getElementById("ActionToRule").value;
    document.getElementById("rule_number").style.display="none";
    document.getElementById("chain").style.display="none";
    document.getElementById("protocal").style.display="none";
    document.getElementById("sport").style.display="none";
    document.getElementById("dport").style.display="none";       
    document.getElementById("src").style.display="none";
    document.getElementById("dest").style.display="none";
    document.getElementById("action").style.display="none";
    document.getElementById("IncomingInterface").style.display="none";
    document.getElementById("OutgoingInterface").style.display="none";
    if (ActionToRule == "Add") {
        document.getElementById("chain").style.display="inline";
        document.getElementById("protocal").style.display="inline";
        document.getElementById("sport").style.display="inline";
        document.getElementById("dport").style.display="inline";       
        document.getElementById("src").style.display="inline";
        document.getElementById("dest").style.display="inline";
        document.getElementById("action").style.display="inline";
        document.getElementById("IncomingInterface").style.display="inline";
        document.getElementById("OutgoingInterface").style.display="inline";
    }else if (ActionToRule == "Delete") {
        alert("請先確認 iptables 的內容 (可以使用 Show iptables 確認)");
        document.getElementById("chain").style.display="inline";
        document.getElementById("rule_number").style.display="inline";
    }else { //insert
        alert("請先確認 iptables 的內容~ (可以使用 Show iptables 確認)");
        document.getElementById("rule_number").style.display="inline";
        document.getElementById("chain").style.display="inline";
        document.getElementById("protocal").style.display="inline";
        document.getElementById("sport").style.display="inline";
        document.getElementById("dport").style.display="inline";
        document.getElementById("src").style.display="inline";
        document.getElementById("dest").style.display="inline";
        document.getElementById("action").style.display="inline";
        document.getElementById("IncomingInterface").style.display="inline";
        document.getElementById("OutgoingInterface").style.display="inline";
    }
}

// 處理 rule
function GetFormData() {
    var ActionToRule = document.getElementById("ActionToRule").value;
    var chain = document.getElementById("chain").value;
    var RuleNumber = document.getElementById("rule_number").value;
    var protocal = document.getElementById("protocal").value;
    var src = document.getElementById("src").value;
    var dest = document.getElementById("dest").value;
    var action = document.getElementById("action").value;
    var sport = document.getElementById("sport").value;
    var dport = document.getElementById("dport").value;
    var OutgoingInterface = document.getElementById("OutgoingInterface").value;
    var IncomingInterface = document.getElementById("IncomingInterface").value;

    // 判斷&處理 sport&dport
    if (sport == "") {
        sport = " "; 
    } else {
        if (protocal == "udp" || protocal == "tcp") {
            sport = " --sport " + sport;
        }else {
            alert("protocal should be udp or tcp");
            return;
        }
    }
    if (dport == "") {
        dport = " ";
    } else {
        if (protocal == "udp" || protocal == "tcp") {
            dport = " --dport " + dport;
        }else {
            alert("protical should be udp or tcp");
            return;
        }
    }
    // 判斷&處理 protocal
    if (protocal == "") {
        protocal = " ";
    } else {
        protocal = " -p " + protocal; 
    }
    // 判斷&處理 src
    if (src == "") {
        src = " ";
    } else {
        src = " -s " + src;
    }
    // 判斷&處理 dest
    if (dest == "") {
        dest = " ";
    } else {
        dest = " -d " + dest;
    }
    // 判斷&處理 interface
    if (IncomingInterface == "") {
        IncomingInterface = " ";
    } else {
        IncomingInterface = " -i " + IncomingInterface;
    }
    if (OutgoingInterface == "") {
        OutgoingInterface = " ";
    } else {
        OutgoingInterface = " -o " + OutgoingInterface;
    }
    // 判斷 add/delete/insert
    if (ActionToRule == "Add") { 
        ActionToRule = "-A";
        var p = document.getElementById("output2");
        p.innerHTML = "iptables " + ActionToRule + " " + chain + protocal + IncomingInterface + src + sport + OutgoingInterface + dest + dport + " -j " + action; 
    }else if (ActionToRule == "Insert") { 
        ActionToRule = "-I";
        var p = document.getElementById("output2");
        p.innerHTML = "iptables " + ActionToRule + " " + chain + " " + RuleNumber + protocal + IncomingInterface + src + sport + OutgoingInterface + dest + dport + " -j " + action; 
    }else {// delete 
        ActionToRule = "-D";
        var p = document.getElementById("output2");
        p.innerHTML = "iptables " + ActionToRule + " " + chain + " " + RuleNumber;
    }
}

// 加 rule 到圖像化框框
function GetPictureData() {
    var data = document.getElementById("output2");
    var li = document.createElement("li"); 
    var txtNode = document.createTextNode(data.innerHTML); 
    li.appendChild(txtNode); 
    
    // delete button
    var deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.className = "button";
    deleteButton.value = "Delete";
    deleteButton.onclick = function() {
        deleteButton.parentNode.remove();
    };
    li.appendChild(deleteButton);

    var put = document.getElementById("CommandForPicture"); 
    put.appendChild(li); 
}

// 一鍵複製
function copy(id) {
	window.getSelection().selectAllChildren(id);
	document.execCommand("Copy");
}

function clean(){
    document.getElementById("CommandForPicture").innerHTML = "";
}
