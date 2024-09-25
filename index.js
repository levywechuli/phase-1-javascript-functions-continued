// code your solution here
function saturdayFun(activity=`roller-skate`){
    return ('This Saturday, I want to roller-skate!')
}


function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


console.log(saturdayFun()); 
console.log(saturdayFun("bathe my dog"));


const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};


console.log(mondayWork()); 
console.log(mondayWork("work from home"));


function wrapAdjective(wrapper) {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}


const emphasize = wrapAdjective('*');
console.log(emphasize("awesome")); 

const highlight = wrapAdjective('||');
console.log(highlight("fantastic"));





