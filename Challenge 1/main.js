
// Arrays with data, that will be used to displayed to the html
var parametersPercentage = ["10%","30%", "50%", "41%", "19%",  "29%",  "65%", "70%", "80%", "98%"];
var enviroment =["80%", "60%", "50%", "90%", "At full Capacity", "0%" ];
var metrics = ["7247445", "42069","69420", "1000", "600.000.000", "142015" ];


function paraFunction (){
//making a function    

    var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
    //making a var that will randomly select an element from the first array 
    //using the Math.random to select an arbitrary number from 0-1 and then Math.floor to round the number, then multiple it by the lenth of the array
    document.getElementById("parameters").innerHTML = parametersResult
    //chaning the html element with "parameters" id, to the variable above

    var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
    document.getElementById("throttle").innerHTML = parametersResult
    //Throttle
    
    var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
    document.getElementById("speed").innerHTML = parametersResult
    //Speed

    var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
    document.getElementById("acceleration").innerHTML = parametersResult
    //Acceleration

    var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
    document.getElementById("power").innerHTML = parametersResult
    //power

    var enviromentResult = enviroment[Math.floor(Math.random()*enviroment.length)];
    //Making another variable for the next array
    document.getElementById("gravity").innerHTML = enviromentResult 
    //Gravity

    var enviromentResult = enviroment[Math.floor(Math.random()*enviroment.length)];
    document.getElementById("food").innerHTML = enviromentResult 
    //Food

    var enviromentResult = enviroment[Math.floor(Math.random()*enviroment.length)];
    document.getElementById("water").innerHTML = enviromentResult 
    //Water

    var metricsResult = metrics[Math.floor(Math.random()*metrics.length)];
    document.getElementById("gravity-con").innerHTML = metricsResult 
    //Gravity-Converter

    var metricsResult = metrics[Math.floor(Math.random()*metrics.length)];
    document.getElementById("mars").innerHTML = metricsResult 
    //Mars-Distance


};
paraFunction();
//calling the function





