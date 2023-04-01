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

    let SincreaseEM= routesConst.find(routesConstFinder).SincreaseEM;
    let SfreqEM= routesConst.find(routesConstFinder).SfreqEM;
    let SHincreaseEM= routesConst.find(routesConstFinder).SHincreaseEM;
    let SHfreqEM= routesConst.find(routesConstFinder).SHfreqEM;

    let MFincreaseMP= routesConst.find(routesConstFinder).MFincreaseMP;
    let MFfreqMP= routesConst.find(routesConstFinder).MFfreqMP;

    let SincreaseMO= routesConst.find(routesConstFinder).SincreaseMO;
    let SfreqMO= routesConst.find(routesConstFinder).SfreqMO;
    let SHincreaseMO= routesConst.find(routesConstFinder).SHincreaseMO;
    let SHfreqMO= routesConst.find(routesConstFinder).SHfreqMO;

    let MFincreaseAP= routesConst.find(routesConstFinder).MFincreaseAP;
    let MFfreqAP= routesConst.find(routesConstFinder).MFfreqAP;

    let SincreaseAF= routesConst.find(routesConstFinder).SincreaseAF;
    let SfreqAF= routesConst.find(routesConstFinder).SfreqAF;
    let SHincreaseAF= routesConst.find(routesConstFinder).SHincreaseAF;
    let SHfreqAF= routesConst.find(routesConstFinder).SHfreqAF;

    let MFincreaseMD= routesConst.find(routesConstFinder).MFincreaseMD;
    let MFfreqMD= routesConst.find(routesConstFinder).MFfreqMD;

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

    document.getElementById("SfreqEM").innerHTML = "Every " + SfreqEM;
    document.getElementById("SincreaseEM").innerHTML = SincreaseEM;
    document.getElementById("SHfreqEM").innerHTML = "Every " + SHfreqEM;
    document.getElementById("SHincreaseEM").innerHTML = SHincreaseEM;

    document.getElementById("MFfreqMP").innerHTML = "Every " + MFfreqMP;
    document.getElementById("MFincreaseMP").innerHTML = MFincreaseMP;

    document.getElementById("SfreqMO").innerHTML = "Every " + SfreqMO;
    document.getElementById("SincreaseMO").innerHTML = SincreaseMO;
    document.getElementById("SHfreqMO").innerHTML = "Every " + SHfreqMO;
    document.getElementById("SHincreaseMO").innerHTML = SHincreaseMO;

    document.getElementById("MFfreqAP").innerHTML = "Every " + MFfreqAP;
    document.getElementById("MFincreaseAP").innerHTML = MFincreaseAP;

    document.getElementById("SfreqAF").innerHTML = "Every " + SfreqAF;
    document.getElementById("SincreaseAF").innerHTML = SincreaseAF;
    document.getElementById("SHfreqAF").innerHTML = "Every " + SHfreqAF;
    document.getElementById("SHincreaseAF").innerHTML = SHincreaseAF;

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

    document.getElementById("MFfreqON").innerHTML = "Every " + MFfreqON;
    document.getElementById("MFincreaseON").innerHTML = MFincreaseON;
    document.getElementById("SfreqON").innerHTML = "Every " + SfreqON;
    document.getElementById("SincreaseON").innerHTML = SincreaseON;
    document.getElementById("SHfreqON").innerHTML = "Every " + SHfreqON;
    document.getElementById("SHincreaseON").innerHTML = SHincreaseON;

    document.getElementById("notes").innerHTML = routeNotes;
    

    // Checks if the values are fulfilled to show intended time bubble

    if (SfreqEM == null || SincreaseEM == null) {
        document.getElementById('earlyMorning').style.display = 'none';
    } else {
        document.getElementById('earlyMorning').style.display = '';
    }

    if (MFfreqMP == null || MFincreaseMP == null) {
        document.getElementById('morningPeak').style.display = 'none';
    } else {
        document.getElementById('morningPeak').style.display = '';
    }

    if (SfreqMO == null || SincreaseMO == null) {
        document.getElementById('Morning').style.display = 'none';
    } else {
        document.getElementById('Morning').style.display = '';
    }

    if (SfreqAF == null || SincreaseAF == null) {
        document.getElementById('Afternoon').style.display = 'none';
    } else {
        document.getElementById('Afternoon').style.display = '';
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
    var SfreqEM, SincreaseEM, MFfreqMP, MFincreaseMP, SfreqMO, SincreaseMO, SfreqAF, MFfreqAP, MFincreaseAP, MFfreqMP, MFincreaseMP, MFfreqEE, MFincreaseEE, MFfreqLE, MFincreaseLE, MFfreqON, MFincreaseON, MFfreqMD, MFincreaseMD, cuts, rapidTO, routeNotes  = null;

    if (SfreqEM == null || SincreaseEM == null) {
        document.getElementById('earlyMorning').style.display = 'none';
    } else {
        document.getElementById('earlyMorning').style.display = '';
    }

    if (MFfreqMP == null || MFincreaseMP == null) {
        document.getElementById('morningPeak').style.display = 'none';
    } else {
        document.getElementById('morningPeak').style.display = '';
    }

    if (SfreqMO == null || SincreaseMO == null) {
        document.getElementById('Morning').style.display = 'none';
    } else {
        document.getElementById('Morning').style.display = '';
    }

    if (SfreqAF == null || SincreaseAF == null) {
        document.getElementById('Afternoon').style.display = 'none';
    } else {
        document.getElementById('Afternoon').style.display = '';
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
