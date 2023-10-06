var ctx= document.getElementById("myChart").getContext("2d");
var myChart= new Chart(ctx,{
    type:"bar",
    data:{
        labels:['Sencilla','Junior','Suite'],
        datasets:[{
                label:'Habitacion',
                data:[10,15,5],
                backgroundColor:[
                    'rgb(66, 134, 244,0.5)',
                    'rgb(74, 135, 72,0.5)',
                    'rgb(229, 89, 50,0.5)'
                ]
        }]
    },
    options:{
        scales:{
            yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
            }]
        }
    }
});

var ctx= document.getElementById("myChart2").getContext("2d");
var myChart2 = new Chart(ctx,{
    type:"bar",
    data:{
        labels:['Sencilla','Doble','Tripe','Cuadruple' ],
        datasets:[{
                label:'Habitacion',
                data:[10,15,5,9],
                backgroundColor:[
                    'rgb(66, 134, 244,0.5)',
                    'rgb(74, 135, 72,0.5)',
                    'rgb(229, 89, 50,0.5)'
                ]
        }]
    },
    options:{
        scales:{
            yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
            }]
        }
    }
});