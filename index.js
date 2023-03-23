function routeFinder (value) {
    // Searches HTML document for ID containing "searchContainerID". Gets it's value
    var routeSelectedCapitalize = document.getElementById("searchContainerID").value;
    var routeSelected = routeSelectedCapitalize.toLowerCase();

    // This function basically searches for the value of the routeSelected to the array "routesConst"
    function routesConstFinder (routesConst) {
        return routesConst.search === routeSelected;
    }
    
    // Assigns data found in above fucntion to variables
    let routeName = routesConst.find(routesConstFinder).name;
    let MFincreaseEM= routesConst.find(routesConstFinder).MFincreaseEM;
    let MFfreqEM= routesConst.find(routesConstFinder).MFfreqEM;
    let SincreaseEM= routesConst.find(routesConstFinder).SincreaseEM;
    let SfreqEM= routesConst.find(routesConstFinder).SfreqEM;
    let SHincreaseEM= routesConst.find(routesConstFinder).SHincreaseEM;
    let SHfreqEM= routesConst.find(routesConstFinder).SHfreqEM;
    let routeNotes= routesConst.find(routesConstFinder).notes;
    let cuts= routesConst.find(routesConstFinder).cuts;

    // Replaces body text with updated data
    document.getElementById("routeNameHTML").innerHTML = routeName;
    document.getElementById("MFfreqEM").innerHTML = "Every " + MFfreqEM;
    document.getElementById("MFincreaseEM").innerHTML = MFincreaseEM;
    document.getElementById("SfreqEM").innerHTML = "Every " + SfreqEM;
    document.getElementById("SincreaseEM").innerHTML = SincreaseEM;
    document.getElementById("SHfreqEM").innerHTML = "Every " + SHfreqEM;
    document.getElementById("SHincreaseEM").innerHTML = SHincreaseEM;
    document.getElementById("notes").innerHTML = routeNotes;
    

    // Checks if the values are fulfilled to show intended time bubble
    if (MFfreqEM == null || MFincreaseEM == null) {
        document.getElementById('earlyMorning').style.display = 'none';
    } else {
        document.getElementById('earlyMorning').style.display = '';
    }

    if (cuts == "no") {
        document.getElementById('noCuts').style.display = '';
    } else {
        document.getElementById('noCuts').style.display = 'none';
    }
    


}


// Function to hide bubble elements if no value is selected
window.onload = function() {
    var MFfreqEM, MFincreaseEM, cuts  = null;

    if (MFfreqEM == null || MFincreaseEM == null) {
        document.getElementById('earlyMorning').style.display = 'none';
    } else {
        document.getElementById('earlyMorning').style.display = '';
    }

    if (cuts == "no") {
        document.getElementById('noCuts').style.display = '';
    } else {
        document.getElementById('noCuts').style.display = 'none';
    }
}
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    const results = searchArrayByName(searchTerm, myArray);
    resultsList.innerHTML = '';
    for (let i = 0; i < results.length; i++) {
      const li = document.createElement('li');
      li.textContent = results[i].name;
      resultsList.appendChild(li);
    }
  });
