# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

Time tracking dashboard makes it possible to monitor and analyze the time spent in various areas of life. You can view data for a day, week, or month.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

HTML -> CSS -> JS. After creating HTML template and adding CSS styles the main task for me was to connect data from JSON file using "fetch". 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JS Fetch feature.

### What I learned

Basics of GRID. 

Fetch:
```js
function period_data (period) {
  let current_data = [];
  let previous_data = [];
    if (period == "day") {
            fetch('data.json')
              .then(res => res.json())
              .then(data => {
                for(let item of data) {
                   current_data.push(item.timeframes.daily.current);
                   previous_data.push(item.timeframes.daily.previous);
                let count = 0
                for (let item of sphere_list) {
                   item.querySelector(".top_layer_units").innerHTML = `<p class="top_layer_units">${current_data[count]}hrs</p>`;
                   item.querySelector(".top_layer_previous_value").innerHTML = `<p class="top_layer_previous_value">Yesterday - ${previous_data[count]}hrs</p>`;
                   count+=1;
                };
              }
            });
    } .........
```
