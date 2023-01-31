let sphere_list = document.getElementsByClassName("life_sphere_box_top_layer");
const daily = document.getElementById("daily_btn")
const weekly = document.getElementById("weekly_btn")
const monthly = document.getElementById("monthly_btn")

daily.addEventListener("click", () => {
  period_data('day');
});
weekly.addEventListener("click", () => {
  period_data('week');
});
monthly.addEventListener("click", () => {
  period_data('month');
});

function period_data (period) {
  let current_data = [];
  let previous_data = [];
    if (period == "day") {
          daily.classList.add('white_color');
          weekly.classList.remove('white_color');
          monthly.classList.remove('white_color');
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
    } else if (period == "week") {
          daily.classList.remove('white_color');
          weekly.classList.add('white_color');
          monthly.classList.remove('white_color');
          fetch('data.json')
              .then(res => res.json())
              .then(data => {
                for(let item of data) {
                   current_data.push(item.timeframes.weekly.current);
                   previous_data.push(item.timeframes.weekly.previous);
                let count = 0
                for (let item of sphere_list) {
                   item.querySelector(".top_layer_units").innerHTML = `<p class="top_layer_units">${current_data[count]}hrs</p>`;
                   item.querySelector(".top_layer_previous_value").innerHTML = `<p class="top_layer_previous_value">Last Week - ${previous_data[count]}hrs</p>`;
                   count+=1;
                  };
                  }
                });
    } else if (period == "month") {
          daily.classList.remove('white_color');
          weekly.classList.remove('white_color');
          monthly.classList.add('white_color');
          fetch('data.json')
              .then(res => res.json())
              .then(data => {
                for(let item of data) {
                   current_data.push(item.timeframes.monthly.current);
                   previous_data.push(item.timeframes.monthly.previous);
                let count = 0
                for (let item of sphere_list) {
                   item.querySelector(".top_layer_units").innerHTML = `<p class="top_layer_units">${current_data[count]}hrs</p>`;
                   item.querySelector(".top_layer_previous_value").innerHTML = `<p class="top_layer_previous_value">Last Month - ${previous_data[count]}hrs</p>`;
                   count+=1;
                  };
                  }
                });
    }
};
period_data('day');