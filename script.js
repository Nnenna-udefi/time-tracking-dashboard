const dailyBtn = document.querySelector('#daily');
const weeklyBtn = document.querySelector('#weekly');
const monthlyBtn = document.querySelector('#monthly');

const hours = document.querySelectorAll('.hrs');
const lastTime = document.querySelectorAll('.previous');

function dailyData(){
    fetch('https://raw.githubusercontent.com/Nnenna-udefi/time-tracking-dashboard/main/data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
                lastTime[i].innerHTML = 'Last Daily - ' + data[i].timeframes.daily.previous + 'hrs';
            })
        })
}

function weeklyData(){
    fetch('https://raw.githubusercontent.com/Nnenna-udefi/time-tracking-dashboard/main/data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Weekly - ' + data[i].timeframes.weekly.previous + 'hrs'
            })
        })
}

function monthlyData(){
    fetch('https://raw.githubusercontent.com/Nnenna-udefi/time-tracking-dashboard/main/data.json')
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
    monthlyBtn.classList.add('activity-option')
    dailyData()
})

weeklyBtn.addEventListener('click', () => {
    weeklyBtn.classList.remove('activity-option')
    monthlyBtn.classList.add('activity-option')
    dailyBtn.classList.add('activity-option')
    weeklyData()
})

monthlyBtn.addEventListener('click', () => {
    monthlyBtn.classList.remove('activity-option')
    dailyBtn.classList.add('activity-option')
    weeklyBtn.classList.add('activity-option')
    monthlyData()
})