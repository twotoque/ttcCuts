function routeFinder (value) {
    // Searches HTML document for ID containing "searchContainerID". Gets it's value
    var routeSelectedCapitalize = document.getElementById("searchContainerID").value;
    var routeSelected = routeSelectedCapitalize.toLowerCase();

    // This function basically searches for the value of the routeSelected to the array "routesConst"
    function routesConstFinder (routesConst) {
        
        if (routesConst.search === routeSelected) {
            return routesConst.search === routeSelected;
        } else {
            return routesConst.searchNum === routeSelected;
        }
        
    }
    
    // Assigns data found in above fucntion to variables
    let routeName = routesConst.find(routesConstFinder).name;
    let MFincreaseEM= routesConst.find(routesConstFinder).MFincreaseEM;
    let MFfreqEM= routesConst.find(routesConstFinder).MFfreqEM;
    let SincreaseEM= routesConst.find(routesConstFinder).SincreaseEM;
    let SfreqEM= routesConst.find(routesConstFinder).SfreqEM;
    let SHincreaseEM= routesConst.find(routesConstFinder).SHincreaseEM;
    let SHfreqEM= routesConst.find(routesConstFinder).SHfreqEM;

    let MFincreaseEP= routesConst.find(routesConstFinder).MFincreaseEP;
    let MFfreqEP= routesConst.find(routesConstFinder).MFfreqEP;
    let SincreaseEP= routesConst.find(routesConstFinder).SincreaseEP;
    let SfreqEP= routesConst.find(routesConstFinder).SfreqEP;
    let SHincreaseEP= routesConst.find(routesConstFinder).SHincreaseEP;
    let SHfreqEP= routesConst.find(routesConstFinder).SHfreqEP;

    let MFincreaseLM= routesConst.find(routesConstFinder).MFincreaseLM;
    let MFfreqLM= routesConst.find(routesConstFinder).MFfreqLM;
    let SincreaseLM= routesConst.find(routesConstFinder).SincreaseLM;
    let SfreqLM= routesConst.find(routesConstFinder).SfreqEP;
    let SHincreaseLM= routesConst.find(routesConstFinder).SHincreaseLM;
    let SHfreqLM= routesConst.find(routesConstFinder).SHfreqLM;

    let MFincreaseEA= routesConst.find(routesConstFinder).MFincreaseEA;
    let MFfreqEA= routesConst.find(routesConstFinder).MFfreqEA;
    let SincreaseEA= routesConst.find(routesConstFinder).SincreaseEA;
    let SfreqEA= routesConst.find(routesConstFinder).SfreqEA;
    let SHincreaseEA= routesConst.find(routesConstFinder).SHincreaseEA;
    let SHfreqEA= routesConst.find(routesConstFinder).SHfreqEA;

    let MFincreaseAP= routesConst.find(routesConstFinder).MFincreaseAP;
    let MFfreqAP= routesConst.find(routesConstFinder).MFfreqAP;
    let SincreaseAP= routesConst.find(routesConstFinder).SincreaseAP;
    let SfreqAP= routesConst.find(routesConstFinder).SfreqAP;
    let SHincreaseAP= routesConst.find(routesConstFinder).SHincreaseAP;
    let SHfreqAP= routesConst.find(routesConstFinder).SHfreqAP;

    let MFincreaseEE= routesConst.find(routesConstFinder).MFincreaseEE;
    let MFfreqEE= routesConst.find(routesConstFinder).MFfreqEE;
    let SincreaseEE= routesConst.find(routesConstFinder).SincreaseEE;
    let SfreqEE= routesConst.find(routesConstFinder).SfreqEE;
    let SHincreaseEE= routesConst.find(routesConstFinder).SHincreaseEE;
    let SHfreqEE= routesConst.find(routesConstFinder).SHfreqEE;

    let MFincreaseLE= routesConst.find(routesConstFinder).MFincreaseLE;
    let MFfreqLE= routesConst.find(routesConstFinder).MFfreqLE;
    let SincreaseLE= routesConst.find(routesConstFinder).SincreaseLE;
    let SfreqLE= routesConst.find(routesConstFinder).SfreqLE;
    let SHincreaseLE= routesConst.find(routesConstFinder).SHincreaseLE;
    let SHfreqLE= routesConst.find(routesConstFinder).SHfreqLE;

    let MFincreaseMD= routesConst.find(routesConstFinder).MFincreaseMD;
    let MFfreqMD= routesConst.find(routesConstFinder).MFfreqMD;
    let SincreaseMD= routesConst.find(routesConstFinder).SincreaseMD;
    let SfreqMD= routesConst.find(routesConstFinder).SfreqMD;
    let SHincreaseMD= routesConst.find(routesConstFinder).SHincreaseMD;
    let SHfreqMD= routesConst.find(routesConstFinder).SHfreqMD;
    
    let MFincreaseON =routesConst.find(routesConstFinder).MFincreaseON;
    let MFfreqON= routesConst.find(routesConstFinder).MFfreqON;
    let SincreaseON= routesConst.find(routesConstFinder).SincreaseON;
    let SfreqON= routesConst.find(routesConstFinder).SfreqON;
    let SHincreaseON= routesConst.find(routesConstFinder).SHincreaseON;
    let SHfreqON= routesConst.find(routesConstFinder).SHfreqON;

    let routeNotes= routesConst.find(routesConstFinder).notes;
    let cuts= routesConst.find(routesConstFinder).cuts;
    let rapidTO= routesConst.find(routesConstFinder).rapidTO;

    // Replaces body text with updated data
    document.getElementById("routeNameHTML").innerHTML = routeName;
    document.getElementById("MFfreqEM").innerHTML = "Every " + MFfreqEM;
    document.getElementById("MFincreaseEM").innerHTML = MFincreaseEM;
    document.getElementById("SfreqEM").innerHTML = "Every " + SfreqEM;
    document.getElementById("SincreaseEM").innerHTML = SincreaseEM;
    document.getElementById("SHfreqEM").innerHTML = "Every " + SHfreqEM;
    document.getElementById("SHincreaseEM").innerHTML = SHincreaseEM;

    document.getElementById("MFfreqEP").innerHTML = "Every " + MFfreqEP;
    document.getElementById("MFincreaseEP").innerHTML = MFincreaseEP;
    document.getElementById("SfreqEP").innerHTML = "Every " + SfreqEP;
    document.getElementById("SincreaseEP").innerHTML = SincreaseEP;
    document.getElementById("SHfreqEP").innerHTML = "Every " + SHfreqEP;
    document.getElementById("SHincreaseEP").innerHTML = SHincreaseEP;

    document.getElementById("MFfreqEA").innerHTML = "Every " + MFfreqEA;
    document.getElementById("MFincreaseEA").innerHTML = MFincreaseEA;
    document.getElementById("SfreqEA").innerHTML = "Every " + SfreqEA;
    document.getElementById("SincreaseEA").innerHTML = SincreaseEA;
    document.getElementById("SHfreqEA").innerHTML = "Every " + SHfreqEA;
    document.getElementById("SHincreaseEA").innerHTML = SHincreaseEA;

    document.getElementById("MFfreqAP").innerHTML = "Every " + MFfreqAP;
    document.getElementById("MFincreaseAP").innerHTML = MFincreaseAP;
    document.getElementById("SfreqAP").innerHTML = "Every " + SfreqAP;
    document.getElementById("SincreaseAP").innerHTML = SincreaseAP;
    document.getElementById("SHfreqAP").innerHTML = "Every " + SHfreqAP;
    document.getElementById("SHincreaseAP").innerHTML = SHincreaseAP;

    document.getElementById("MFfreqEE").innerHTML = "Every " + MFfreqEE;
    document.getElementById("MFincreaseEE").innerHTML = MFincreaseEE;
    document.getElementById("SfreqEE").innerHTML = "Every " + SfreqEE;
    document.getElementById("SincreaseEE").innerHTML = SincreaseEE;
    document.getElementById("SHfreqEE").innerHTML = "Every " + SHfreqEE;
    document.getElementById("SHincreaseEE").innerHTML = SHincreaseEE;
    
    document.getElementById("MFfreqLE").innerHTML = "Every " + MFfreqLE;
    document.getElementById("MFincreaseLE").innerHTML = MFincreaseLE;
    document.getElementById("SfreqLE").innerHTML = "Every " + SfreqLE;
    document.getElementById("SincreaseLE").innerHTML = SincreaseLE;
    document.getElementById("SHfreqLE").innerHTML = "Every " + SHfreqLE;
    document.getElementById("SHincreaseLE").innerHTML = SHincreaseLE;
        
    document.getElementById("MFfreqMD").innerHTML = "Every " + MFfreqMD;
    document.getElementById("MFincreaseMD").innerHTML = MFincreaseMD;
    document.getElementById("SfreqMD").innerHTML = "Every " + SfreqMD;
    document.getElementById("SincreaseMD").innerHTML = SincreaseMD;
    document.getElementById("SHfreqMD").innerHTML = "Every " + SHfreqMD;
    document.getElementById("SHincreaseMD").innerHTML = SHincreaseMD;

    document.getElementById("MFfreqON").innerHTML = "Every " + MFfreqON;
    document.getElementById("MFincreaseON").innerHTML = MFincreaseON;
    document.getElementById("SfreqON").innerHTML = "Every " + SfreqON;
    document.getElementById("SincreaseON").innerHTML = SincreaseON;
    document.getElementById("SHfreqON").innerHTML = "Every " + SHfreqON;
    document.getElementById("SHincreaseON").innerHTML = SHincreaseON;

    document.getElementById("notes").innerHTML = routeNotes;
    

    // Checks if the values are fulfilled to show intended time bubble

    if (MFfreqEM == null || MFincreaseEM == null) {
        document.getElementById('earlyMorning').style.display = 'none';
    } else {
        document.getElementById('earlyMorning').style.display = '';
    }

    if (MFfreqEP == null || MFincreaseEP == null) {
        document.getElementById('morningPeak').style.display = 'none';
    } else {
        document.getElementById('morningPeak').style.display = '';
    }

    if (MFfreqEA == null || MFincreaseEA == null) {
        document.getElementById('earlyAfternoon').style.display = 'none';
    } else {
        document.getElementById('earlyAfternoon').style.display = '';
    }
    
    if (MFfreqAP == null || MFincreaseAP == null) {
        document.getElementById('afternoonPeak').style.display = 'none';
    } else {
        document.getElementById('afternoonPeak').style.display = '';
    }
    
    if (MFfreqEE == null || MFincreaseEE == null) {
        document.getElementById('earlyEvening').style.display = 'none';
    } else {
        document.getElementById('earlyEvening').style.display = '';
    }
    
    if (MFfreqLE == null || MFincreaseLE == null) {
        document.getElementById('lateEvening').style.display = 'none';
    } else {
        document.getElementById('lateEvening').style.display = '';
    }
    
    if (MFfreqON == null || MFincreaseON == null) {
        document.getElementById('overnight').style.display = 'none';
    } else {
        document.getElementById('overnight').style.display = '';
    }
    
    if (MFfreqMD == null || MFincreaseMD == null) {
        document.getElementById('midday').style.display = 'none';
    } else {
        document.getElementById('midday').style.display = '';
    }

    if (cuts == "no") {
        document.getElementById('noCuts').style.display = '';
    } else {
        document.getElementById('noCuts').style.display = 'none';
    }

    if (cuts == "line3") {
        document.getElementById('SRT').style.display = '';
    } else {
        document.getElementById('SRT').style.display = 'none';
    }

    if (rapidTO == "yes") {
        document.getElementById('rapidTO').style.display = '';
    } else {
        document.getElementById('rapidTO').style.display = 'none';
    }
    
    if (routeNotes == null) {
        document.getElementById('notes').style.display = 'none';
    } else {
        document.getElementById('notes').style.display = '';
    }

}


// Function to hide bubble elements if no value is selected
window.onload = function() {
    var MFfreqEM, MFincreaseEM, MFfreqEP, MFincreaseEP, MFfreqEA, MFincreaseEA,MFfreqAP, MFincreaseAP, MFfreqEP, MFincreaseEP, MFfreqEE, MFincreaseEE, MFfreqLE, MFincreaseLE, MFfreqON, MFincreaseON, MFfreqMD, MFincreaseMD, cuts, rapidTO, routeNotes  = null;

    if (MFfreqEM == null || MFincreaseEM == null) {
        document.getElementById('earlyMorning').style.display = 'none';
    } else {
        document.getElementById('earlyMorning').style.display = '';
    }

    if (MFfreqEP == null || MFincreaseEP == null) {
        document.getElementById('morningPeak').style.display = 'none';
    } else {
        document.getElementById('morningPeak').style.display = '';
    }

    if (MFfreqEA == null || MFincreaseEA == null) {
        document.getElementById('earlyAfternoon').style.display = 'none';
    } else {
        document.getElementById('earlyAfternoon').style.display = '';
    }
    
    if (MFfreqAP == null || MFincreaseAP == null) {
        document.getElementById('afternoonPeak').style.display = 'none';
    } else {
        document.getElementById('afternoonPeak').style.display = '';
    }
    
    if (MFfreqEE == null || MFincreaseEE == null) {
        document.getElementById('earlyEvening').style.display = 'none';
    } else {
        document.getElementById('earlyEvening').style.display = '';
    }
    
    if (MFfreqLE == null || MFincreaseLE == null) {
        document.getElementById('lateEvening').style.display = 'none';
    } else {
        document.getElementById('lateEvening').style.display = '';
    }
    
    if (MFfreqON == null || MFincreaseON == null) {
        document.getElementById('overnight').style.display = 'none';
    } else {
        document.getElementById('overnight').style.display = '';
    }
    
    if (MFfreqMD == null || MFincreaseMD == null) {
        document.getElementById('midday').style.display = 'none';
    } else {
        document.getElementById('midday').style.display = '';
    }

    if (cuts == "no" || cuts == null) {
        document.getElementById('noCuts').style.display = 'none';
    } else {
        document.getElementById('noCuts').style.display = '';
    }

    if (cuts == "line3"|| cuts == null) {
        document.getElementById('SRT').style.display = 'none';
    } else {
        document.getElementById('SRT').style.display = '';
    }
    
    if (rapidTO == "no"|| rapidTO == null) {
        document.getElementById('rapidTO').style.display = 'none';
    } else {
        document.getElementById('rapidTO').style.display = '';
    }

    if (routeNotes == null) {
        document.getElementById('notes').style.display = 'none';
    } else {
        document.getElementById('notes').style.display = '';
    }

}
