function roadRadar(input) {
    let speed = Number(input[0]);
    let area = input[1];
    let limit = getLimit(area);
    let difference = speed - limit;
    if (difference <= 0){

    }
    else if (difference <= 20 && difference >= 0){
        console.log('speeding');
    }
    else if (difference <= 40 && difference > 20){
        console.log('excessive speeding');
    }
    else{
        console.log('reckless driving');
    }
    function getLimit(area) {
        switch(area){
            case "motorway":return 130;break;
            case "interstate":return 90;break;
            case "city":return 50;break;
            case "residential":return 20;break;
        }
    }
}