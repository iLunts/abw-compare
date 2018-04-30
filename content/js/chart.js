var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        datasets: [
        {
            label: 'Audi A6',
            data: [3000, 3100, 2900, 2850, 2920, 3000, 3100, 3050, 3020, 2980, 3010, 2900],
            backgroundColor: '#FF5400',
            borderColor: '#FF5400',
            borderWidth: 2,
            pointBorderWidth: 4,
            fill: false
        },
        {
            label: 'Volkswagen Polo',
            data: [3100, 3100, 2980, 2950, 2940, 3100, 2900, 2900, 2900, 3000, 3100, 3050],
            backgroundColor: '#9E0059',
            borderColor: '#9E0059',
            borderWidth: 2,
            pointBorderWidth: 4,
            fill: false
        },
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});