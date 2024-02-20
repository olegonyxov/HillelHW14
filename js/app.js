varToCount = 0;

function outerFunc(){
    let targetVar = varToCount;
    // let someVar = varToRemember;
    return function innerFunc(newPar = 0){
        targetVar+= newPar
        console.log(targetVar)
    }
}

const sumFunc = outerFunc()
sumFunc(3)
sumFunc(5)
sumFunc(20)