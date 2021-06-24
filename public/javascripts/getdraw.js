function getDrawInfo(){
    let allrule = document.getElementById("CommandForPicture").innerHTML;
    // console.log(allrule);
    let rule = allrule.split("<br>");
    let inAllaccept = "";
    let inAlldrop = "";
    let inForwardD = "";
    let inForwardR = "";
    for (let i = 0; i < rule.length; i++){
        if (rule[i].includes('INPUT')){        // input
            if(rule[i].includes('ACCEPT')){ // accept
                let tmpData = rule[i].split(' ');
                let r = "";
                tmpData.forEach(element => {
                    if(!isNaN(parseInt(element))) {
                        if (r == ""){ // ip
                            r = r + element;
                        }else{ // port
                            r = r + ":" + element;
                        }
                    }
                })
                if (r != ""){
                    inAllaccept = r + "\n" + inAllaccept;
                }
            }else if((rule[i].includes('REJECT')) || (rule[i].includes('DROP'))){
                let tmpData = rule[i].split(' ');
                let r = "";
                tmpData.forEach(element => {
                    if(!isNaN(parseInt(element))) {
                        if (r == ""){ // ip
                            r = r + element;
                        }else{ // port
                            r = r + ":" + element;
                        }
                    }
                })
                if (r != ""){
                    inAlldrop = r + "\n" + inAlldrop;
                }
            }
        }else if (rule[i].includes('FORWARD')){        // input
            if(rule[i].includes('ACCEPT')){ // accept
                let tmpData = rule[i].split(' ');
                let r = "";
                let d = "";
                let count = 0;
                tmpData.forEach(element => {
                    if(!isNaN(parseInt(element))) {
                        if (element.includes('.')){ // ip
                            if (count == 1){
                                d = element; // 目標 ip
                            }else{
                                count += 1;
                                r = element; // 來源 ip
                            }
                        }else{ // port
                            if (d == ""){ // 還沒有目標 IP
                                r = r + ":" + element;
                            }else{
                                d = d + ":" + element;
                            }
                        }
                    }
                })
                if (r != ""){
                    inForwardR = r + "\n" + inForwardR;
                }
                if (d != ""){
                    inForwardD = r + "\n" + inForwardD;
                }
            }else if((rule[i].includes('REJECT')) || (rule[i].includes('DROP'))){
                let tmpData = rule[i].split(' ');
                let r = "";
                let count = 0;
                tmpData.forEach(element => {
                    if(!isNaN(parseInt(element))) {
                        if (element.includes('.')){ // ip
                            if (count == 1){
                                r = r + " d:" + element; // 目標 ip
                            }else{
                                count += 1;
                                r = "r:" + element; // 來源 ip
                            }
                        }else{ // port
                            r = r + ":" + element;
                        }
                    }
                })
                if (r != ""){
                    inAlldrop = r + "\n" + inAlldrop;
                }
            }
        }
    }
        // output
            // accept
            // drop
            // reject
    // console.log(nums);
    startDraw(inAllaccept, inAlldrop, inForwardR, inForwardD);
}