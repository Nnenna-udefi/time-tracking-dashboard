//we want to change the data of the 6 badges when we click on the different 
//timeframes : daily, weekly and monthly
// if i say let data = [
//if (daily = 0) {}

let data = [
    {
        "title": "Work",
        "timeframes": {
          "daily": {
            "current": 5,
            "previous": 7
          },
          "weekly": {
            "current": 32,
            "previous": 36
          },
          "monthly": {
            "current": 103,
            "previous": 128
          }
        }
      },
      {
        "title": "Play",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 2
          },
          "weekly": {
            "current": 10,
            "previous": 8
          },
          "monthly": {
            "current": 23,
            "previous": 29
          }
        }
      },
      {
        "title": "Study",
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 7
          },
          "monthly": {
            "current": 13,
            "previous": 19
          }
        }
      },
      {
        "title": "Exercise",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 5
          },
          "monthly": {
            "current": 11,
            "previous": 18
          }
        }
      },
      {
        "title": "Social",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 3
          },
          "weekly": {
            "current": 5,
            "previous": 10
          },
          "monthly": {
            "current": 21,
            "previous": 23
          }
        }
      },
      {
        "title": "Self Care",
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 2,
            "previous": 2
          },
          "monthly": {
            "current": 7,
            "previous": 11
          }
        }
      }

]


const dailyBtn = document.querySelector('#daily-btn');
const weeklyBtn = document.querySelector('#weekly-btn');
const mothlyBtn = document.querySelector('#monthly-btn');

const hours = document.querySelectorAll('.hours');
const lastTime = document.querySelectorAll('.last-time');

function dailyData(){
    fetch('https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
                lastTime[i].innerHTML = 'Last Daily - ' + data[i].timeframes.daily.previous + 'hrs';
            })
        })
}

function weeklyData(){
    fetch('https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Weekly - ' + data[i].timeframes.weekly.previous + 'hrs'
            })
        })
}

function mothlyData(){
    fetch('https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Monthly - ' + data[i].timeframes.monthly.previous + 'hrs'
            })
        })
}


dailyBtn.addEventListener('click', () => {
    dailyBtn.classList.remove('activity-option')
    weeklyBtn.classList.add('activity-option')
    mothlyBtn.classList.add('activity-option')
    dailyData()
})

weeklyBtn.addEventListener('click', () => {
    weeklyBtn.classList.remove('activity-option')
    mothlyBtn.classList.add('activity-option')
    dailyBtn.classList.add('activity-option')
    weeklyData()
})

mothlyBtn.addEventListener('click', () => {
    mothlyBtn.classList.remove('activity-option')
    dailyBtn.classList.add('activity-option')
    weeklyBtn.classList.add('activity-option')
    mothlyData()
})