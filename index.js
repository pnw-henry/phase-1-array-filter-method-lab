function findMatching(drivers, name){
    let result = drivers.filter(function(value){
        return value === name || value === name.toLowerCase()
    });
    return result;
}

function fuzzyMatch(drivers, letters){
    let result = drivers.filter(function(value){
        return value.startsWith(letters);
    })
    return result;
    }

function matchName(drivers, string){
    let driverInfo = drivers.filter(function(value){
        return value.name === string;
    })
    return driverInfo;
}