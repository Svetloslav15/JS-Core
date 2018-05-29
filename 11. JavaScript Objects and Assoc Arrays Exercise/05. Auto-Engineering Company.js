function company(input) {
    let catalog = {};
    for (let tokens of input) {
        let [carBrand, carModel, producedCars] = tokens.split(' | ');
        producedCars = Number(producedCars);
        if (catalog.hasOwnProperty(carBrand) === false) {
            catalog[carBrand] = {};
        }
        if (catalog[carBrand].hasOwnProperty(carModel)){
            catalog[carBrand][carModel] += producedCars;
        }
        else{
            catalog[carBrand][carModel] = producedCars;
        }
    }

    for (let brand in catalog) {
        console.log(brand);
        for (let model in catalog[brand]) {
            console.log(`###${model} -> ${catalog[brand][model]}`);
        }
    }
}