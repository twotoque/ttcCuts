const routesConst = [
    {
        search: "line 1 yonge-university",
        searchNum: "1",
        name: "Line 1 Yonge-University",
        cuts: "no",
        rapidTO: "no",
    },
    {
        search: "line 2 bloor-danforth",
        searchNum: "2",
        name: "Line 2 Bloor-Danforth",
        cuts: "yes",
        rapidTO: "no",    
        //Morning Peak
            MFfreqEP: "2 minutes, 45 seconds",
            MFincreaseEP: "-0 minutes, 15 seconds",
            SfreqEP: "No change",
            SincreaseEP: "N/A",
            SHfreqEP: "No change",
            SHincreaseEP: "N/A",    
        //Midday
            MFfreqMD: "4 minutes, 35 seconds",
            MFincreaseMD: "+0 minutes, 51 seconds",
            SfreqMD: "No change",
            SincreaseMD: "N/A",
            SHfreqMD: "No change",
            SHincreaseMD: "N/A",
        // Afternoon Peak
            MFfreqAP: "3 minutes, 47 seconds",
            MFincreaseAP: "+0 minutes, 47 seconds",
            SfreqAP: "No change",
            SincreaseAP: "N/A",
            SHfreqAP: "No change",
            SHincreaseAP: "N/A",
        //Early Evening
            MFfreqEE: "5 minutes, 38 seconds",
            MFincreaseEE: "+0 minutes, 37 seconds",
            SfreqEE: "No change",
            SincreaseEE: "N/A",
            SHfreqEE: "No change",
            SHincreaseEE: "N/A",
        //Late Evening
            MFfreqLE: "+8 minutes, 5 seconds",
            MFincreaseLE: "+3 minutes, 14 seconds",
            SfreqLE: "No change",
            SincreaseLE: "N/A",
            SHfreqLE: "No change",
            SHincreaseLE: "N/A",
            
    },
    {
        search: "line 3 scarborough",
        searchNum: "3",
        name: "Line 3 Scarborough",
        cuts: "line3",
        rapidTO: "no",
    },
    {
        search: "35 jane",
        searchNum: "35",
        name: "35 Jane",
        cuts: "yes",
        rapidTO: "yes",
        //Early Morning
            MFfreqEM: "5 minutes, 30 seconds",
            MFincreaseEM: "~+0 minute, 45 seconds",
            SfreqEM: "+1 minute, 0 seconds",
            SincreaseEM: "+1 minute, 0 seconds",
            SHfreqEM: "+1 minute, 0 seconds",
            SHincreaseEM: "+1 minute, 0 seconds",
    
        //Morning Peak
            MFfreqEP: "5 minutes, 30 seconds",
            MFincreaseEP: "~+0 minute, 45 seconds",
            SfreqEP: "+1 minute, 0 seconds",
            SincreaseEP: "+1 minute, 0 seconds",
            SHfreqEP: "+1 minute, 0 seconds",
            SHincreaseEP: "+1 minute, 0 seconds",
    },
    {
        search: "36 finch west",
        searchNum: "36",
        name: "36 Finch West",
        cuts: "yes",
        rapidTO: "no",
        

    // ---- MORNING ----

    //Early Morning
        MFfreqEM: "5 minutes, 30 seconds",
        MFincreaseEM: "~+0 minute, 45 seconds",
        SfreqEM: "+1 minute, 0 seconds",
        SincreaseEM: "+1 minute, 0 seconds",
        SHfreqEM: "+1 minute, 0 seconds",
        SHincreaseEM: "+1 minute, 0 seconds",

    //Morning Peak
        MFfreqEP: "5 minutes, 30 seconds",
        MFincreaseEP: "~+0 minute, 45 seconds",
        SfreqEP: "+1 minute, 0 seconds",
        SincreaseEP: "+1 minute, 0 seconds",
        SHfreqEP: "+1 minute, 0 seconds",
        SHincreaseEP: "+1 minute, 0 seconds",
    
    //Late Morning
        MFfreqLM: "+1 minute, 0 seconds",
        MFincreaseLM: "+1 minute, 0 seconds",
        SfreqLM: "+1 minute, 0 seconds",
        SincreaseLM: "+1 minute, 0 seconds",
        SHfreqLM: "+1 minute, 0 seconds",
        SHincreaseLM: "+1 minute, 0 seconds",

    // ---- AFTERNOON ----

    //Early Afternoon
        MFfreqEA: "5 minutes, 30 seconds",
        MFincreaseEA: "~0 minute, 45 seconds",
        SfreqEA: "+1 minute, 0 seconds",
        SincreaseEA: "+1 minute, 0 seconds",
        SHfreqEA: "+1 minute, 0 seconds",
        SHincreaseEA: "+1 minute, 0 seconds",

    // Afternoon Peak
        MFfreqAP: "+1 minute, 0 seconds",
        MFincreaseAP: "+1 minute, 0 seconds",
        SfreqAP: "+1 minute, 0 seconds",
        SincreaseAP: "+1 minute, 0 seconds",
        SHfreqAP: "+1 minute, 0 seconds",
        SHincreaseAP: "+1 minute, 0 seconds",

        
    // ---- NIGHT ----

    //Early Evening
        MFfreqEE: "5 minutes, 30 seconds",
        MFincreaseEE: "~0 minute, 45 seconds",
        SfreqEE: "+1 minute, 0 seconds",
        SincreaseEE: "+1 minute, 0 seconds",
        SHfreqEE: "+1 minute, 0 seconds",
        SHincreaseEE: "+1 minute, 0 seconds",

    //Late Evening
        MFfreqLE: "+1 minute, 0 seconds",
        MFincreaseLE: "+1 minute, 0 seconds",
        SfreqLE: "+1 minute, 0 seconds",
        SincreaseLE: "+1 minute, 0 seconds",
        SHfreqLE: "+1 minute, 0 seconds",
        SHincreaseLE: "+1 minute, 0 seconds",

    
    // ---- MISC ----

    //Midday
        MFfreqMD: "~6 minutes, 15 seconds",
        MFincreaseMD: "~+0 minutes, 30 seconds",
        SfreqMD: "+1 minute, 0 seconds",
        SincreaseMD: "+1 minute, 0 seconds",
        SHfreqMD: "+1 minute, 0 seconds",
        SHincreaseMD: "+1 minute, 0 seconds",

        
    //Overnight
        MFfreqON: "~6 minutes, 15 seconds",
        MFincreaseON: "~+0 minutes, 30 seconds",
        SfreqON: "+1 minute, 0 seconds",
        SincreaseON: "+1 minute, 0 seconds",
        SHfreqON: "+1 minute, 0 seconds",
        SHincreaseON: "+1 minute, 0 seconds",

    //Notes
        notes: "Some cuts (speicifcally Monday-Friday at morning peak, midday, afternoon peak, early evening, and Sunday/Holiday morning and afternoon are dependent on if the bus is east or west of Finch West station. The specific times are as follows: 5minutes 30 seconds east of Finch West",
    },
    {
        search: "39 finch east",
        name: "39 Finch East",
        cuts: "no",
        f: 3,
    },
    {
        search: "34",
        f: 34,
    },
    {
        search: "51",
        f: 5,
    }
];
