![alt text](https://raw.githubusercontent.com/twotoque/ttcCuts/main/ArizonaBanner.svg)
# Welcome to Project Arizona!
Project Arizona is the codename given to an unnamed website aimed to increase the accessibility and awareness of upcoming cuts to the Toronto Transit Commission. This project, created for (but not exclusively for) the [2023 city budget campaign](https://www.ttcriders.ca/budget2023), allows riders to know how these cuts may impact them. Users can input their specific route and see how long they have to wait due to these changes. Additionally, it connects certain routes to another external campaign (e.g. Line 3 -> Line 3 decommissioning, 35 Jane -> RapidTO project). This uses data from Steve Munro and the Toronto Transit Commission. 

This project is based on a [Physics Radioactive Decay Calculator](https://decaycalculator.twotoque.com/) that I made back for [GryphHacks 2022 (University of Guelph's Hackathon)](https://gryphhacks-2022.devpost.com/).

# Contributing to Project Arizona's data entry
Project Arizona requires an exhaustive list in order to account for every route, however, due to the workload of such a task, we have decided to focus on the ones that will be affected by the 2023 budget. 

This website has two JavaScript files (i.e. the algorithm that runs the whole website). These are:
* `index.js`, which reads data from `routes.js` and communicates with the `index.html` file
* `routes.js`, which is a giant list (in more technical terms, an array) which contains every route, their frequencies, and the change in frequency.

We will be focusing on `routes.js`. **Volunteering to contribute to data entry does not require prior programming experience.** 

# Prerequisites and template

I strongly recommend downloading an integrated development environment (i.e. a fancy-pants notepad) such as [Visual Studio Code](https://code.visualstudio.com/) or [Replit](https://replit.com/~). If you are using Replit, I recommend setting the language in JavaScript. Alternatively, a your built in notepad app works fine. I strongly recommend **against** using your phone to complete this task; feel free to use a tablet with keyboard, desktop, or laptop to do data entry. 

I have also made a template for each route over [here](https://github.com/twotoque/ttcCuts/blob/main/TEMPLATE.md). 

# How to data entry

I will provide you with a source list of the upcoming cuts. This is usually made by the talented Steve Munro, and for this example, we will be using the [service changes for March 26, 2023](https://stevemunro.ca/2023/02/22/ttc-service-changes-for-march-26-2023-preliminary-version/). 

For this example, I will be doing the service changes for Line 2 Bloor-Danforth. 

# Understanding each variable

Looking at the `routes.js` file, it might look very complicated at first! But don't worry, it's pretty simple. 

## Route identification

This system uses 2 identifications to find a route:
* `search` is an **all lower case** full route name. (e.g. `39 Finch East` would be `39 finch east`. Ensuring that this is all lower caps is important or else inputting "39 FINCH EAST" at the HTML document will *not* work. For subway routes, use the common name, plus the word "Line" at the beginning (e.g. Line 2 would be `line 2 bloor-danforth`).
* `searchNum` is just the route number. (e.g. `39 Finch East` would be `39`). For subway routes, use the line number (e.g. `Line 2 Bloor-Danforth` would be `2`).

Moreover, `name` is the full route name with capitalization (e.g. `39 Finch East` would be `39 Finch East`).

## Route parameters

These are used to idetnify if a route is affected by the cuts or not. Additionally, the project also intergrates with various TTCriders campaigns- right now the decommissioning of Line 3 and RapidTO. 
* `cuts` has three possible values:
   - `cuts = "no",` means that route is **not affected by the cuts**
   - `cuts = "yes",` means that route is **affected by the cuts**
   - `cuts = "line3",` applies the Line 3 decommissioning campaign to the route. **This should only be used for Line 3 Scarborough**
* `rapidTO` has two possible values:
   - ``rapidTO: "no",`` means that this route is not being considered for RapidTO bus lanes
   - ``rapidTO: "yes",`` means that this route is being considered for RapidTO bus lanes

# Understanding the cut variable system

The next few variables would include the information of the cuts. All of these variables use a common system: ``[DATE][freq/increase][TIME]``

## Dates

TTC divides its service schedules based on three days:

* **Monday-Friday** would start with ``MF`` (**M**onday - **F**riday)
* **Saturday** would start with ``S`` (**S**aturday)
* **Sunday/Holidays** would start with ``SH`` (**S**unday - **H**olidays)

## Freq/Increase

This part depends on *what* the information is:

* Frequency is how long are you going to wait for the train/bus/streetcar (e.g. 4 minutes, 35 seconds). The "middle" part would be `...freq...`
* Increase is how how much time would you have to wait/save due to this change (e.g. +0 minutes, 51 seconds, -3 minutes, 23 seconds). The "middle" part would be `...increase...`

## Times

TTC divides its service schedules based on various times:

### Mondays - Fridays (starts with MF)
* **Early morning**, though rarely used and not referred in the official timetable, for the 2023 cuts this term was used for Monday-Friday also. It runs from ** 6AM-8AM** would end in ``EM`` (**E**arly **m**orning)
* **Morning peak**, only on Mondays-Fridays from **6AM-9AM** would end in ``MP`` (**M**orning **p**eak)
* **Midday**, only on Mondays-Fridays from **9AM-3PM** would end in ``MD`` (**M**id**d**ay)
* **Afternoon peak**, only on Mondays-Fridays from **3PM-7PM** would end in ``AP`` (**A**ternoon **p**eak)
* **Early evening**, from **7PM-10PM** would end in ``EE`` (**E**arly **e**vening)
* **Late evening**, from **10PM-1AM** would end in ``LE`` (**L**ate **e**vening)
* **Overnight**, from **1:30AM-5:30AM** would end in ``ON`` (**O**ver**n**ight)

### Saturdays and Sundays/Holidays (starts with S or SH respectively) 
* **Early morning**, **USUALLY** only on Saturdays and Sundays/Holidays from** 6AM-8AM** would end in ``EM`` (**E**arly **m**orning)
* **Morning**, only on Saturdays and Sundays/Holidays from **8AM-12PM** would end in ``MO`` (**Mo**rning)
* **Afternoon**, only on Saturdays and Sundays/Holidays from **12PM-7PM** would end in ``AF`` (**Af**ternoon)
* **Early evening**, from **7PM-10PM** would end in ``EE`` (**E**arly **e**vening)
* **Late evening**, from **10PM-1AM** would end in ``LE`` (**L**ate **e**vening)
* **Overnight**, from **1:30AM-5:30AM** would end in ``ON`` (**O**ver**n**ight)

## Putting it all together

Again, it should follow the template of ``[DATE][freq/increase][TIME]``. For example, a Monday-Friday frequency for Midday would have the following parameters:
* Date of Monday-Friday, therefore it should start with ``MF..``
* We want the frequency, therefore it should have ``..freq..`` in the middle
* And we want the time to be midday, therefore it should end with ``..MD``

**The final variable should be ``MFfreqMD``**.
