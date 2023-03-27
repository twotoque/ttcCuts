# Welcome to Project Arizona!
Project Arizona is the codename given to an unnamed website aimed to increase the accessibility and awareness of upcoming cuts to the Toronto Transit Commission. This project, created for (but not exclusively for) the [2023 city budget campaign](https://www.ttcriders.ca/budget2023), allows riders to know how these cuts may impact them. Users can input their specific route and see how long they have to wait due to these changes. Additionally, it connects certain routes to another external campaign (e.g. Line 3 -> Line 3 decommissioning, 35 Jane -> RapidTO project). This uses data from Steve Munro and the Toronto Transit Commission. 

This project is based on a [Physics Radioactive Decay Calculator](https://decaycalculator.twotoque.com/) that I made back for [GryphHacks 2022 (University of Guelph's Hackathon)](https://gryphhacks-2022.devpost.com/).

# Contributing to Project Arizona's data entry
Project Arizona requires an exhaustive list in order to account for every route, however, due to the workload of such a task, we have decided to focus on the ones that will be affected by the 2023 budget. 

This website has two JavaScript files (i.e. the algorithm that runs the whole website). These are:
* `index.js`, which reads data from `routes.js` and communicates with the `index.html` file
* `routes.js`, which is a giant list (in more technical terms, an array) which contains every route, their frequencies, and the change in frequency.

We will be focusing on `routes.js`. **Volunteering to contribute to data entry does not require prior programming experience.** 

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
