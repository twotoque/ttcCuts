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

