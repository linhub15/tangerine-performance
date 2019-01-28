// document.ready()
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}

function main() {
    const url = 'http://localhost:3000/data';
    fetch(url).then( response => {
        return response.json();
    }).then( data => {
        buildChart(data);
    });
}

function buildChart(data) {
    let ctx = document.getElementById('myChart');
    let myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: generateLabels(data),
            datasets: [{
                label: 'Equity Growth',
                data: justValue(data)
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        unit: 'month'
                    },
                    distribution: 'series',
                    bounds: 'data'
                }]
            }
        }
    });
}
function justValue(data) {
    values = [];
    for (const item of data) {
        let value = +item.v;
        values.push(value);
    }
    return values;
}

function generateLabels(data) {
    dates = [];
    for (const item of data) {
        let date = item.d;
        dates.push(date);
    }
    return dates;
}