// Your code here

function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`);
}

mondayWork = function(activity="go to the office"){
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(caracEsp="*"){
    return function(def="special"){
        return `You are ${caracEsp}${def}${caracEsp}!`;
    }
}

const Calculator = {
    add: function(number1,number2){
        return number1 + number2;
    },
    subtract: function(number1,number2){
        return number1 - number2;
    },
    multiply: function(number1,number2){
        return number1 * number2;
    },
    divide: function(number1,number2){
        return number1 / number2;
    }
}

console.log(typeof(Calculator));

function actionApplyer(par1,arrayOfTransforms=[]){
    if (arrayOfTransforms.length===0){
        return par1;
    }
    else{
        arrayOfTransforms = [
            function(par1){ return par1 * 2 },
            function(par1){ return par1 + 1000},
            function(par1){ return par1 % 7 }
        ];
        return 4;
    }
}




 









