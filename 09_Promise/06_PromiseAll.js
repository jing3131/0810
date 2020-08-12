function happy(data, timeCount) {
    return new Promise( function (resolve, reject) {
        setTimeout(function () {
            resolve(data);
        }, timeCount)
    })
}

function sad(data, timeCount) {
    return new Promise( function (resolve, reject) {
        setTimeout(function () {
            resolve(data);
        }, timeCount)
    })
}


async function living() {
    var promise1 = happy(200, 2000);
    var promise2 = sad(-100, 3000);
    let [result1, result2] = 
      await Promise.all([promise1, promise2]);              // Promise.all([P1],[P2],...) 可同時操作多個await，將回傳值放入陣列

    var total = result1 + result2;
    console.log("total:", total);
}

living();

