// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if(blocks > 42){
        return blocks - 42
    }
    else{
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks){
    let feet = distanceFromHqInBlocks(blocks);
    return feet * 264;
}

function distanceTravelledInFeet(start, destination){
    let travel = Math.abs(destination - start);
    return travel * 264;
}

function calculatesFarePrice(start, destination){
    //let travel = Math.abs(destination - start);
    let travel = distanceTravelledInFeet(start, destination);

    if( travel <= 400){
        return 0;
    }
    else if(travel > 400 && travel <= 2000){
        return (travel - 400) * 0.02;
    }
    else if( travel > 2000 && travel < 2500){
        return 25;
    }
    else if (travel >= 2500){
        return 'cannot travel that far'
    }
}