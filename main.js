
//
var parametersPercentage = ["10%","30%", "50%", "65%", "70%", "80%", "98%"];
var enviroment =["80%", "60%", "50%", "90%", "full", "Zero" ];
var supplies =["80%", "60%", "50%", "90%", "full", "Zero" ];
var metrics = ["7247445", "42069","69420", "0", "null", "142015" ];


function paraFunction (){

    var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];

    document.getElementById("parameters").innerHTML = parametersResult

    var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];

    document.getElementById("throttle").innerHTML = parametersResult
    
    var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];

    document.getElementById("speed").innerHTML = parametersResult

    var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];

    document.getElementById("acceleration").innerHTML = parametersResult

};
paraFunction();



