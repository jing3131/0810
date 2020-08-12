function longTimeWork(workFine = true, errorMessage = "test") {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            (workFine) ? resolve(200) : reject(errorMessage);
        }, 1000);
    })
}

// async function usingLongTimeWork() {
//     var result = await longTimeWork(true, "test");
//     console.log(result);
// }


async function usingLongTimeWork() {                                // 如果要建立一個 await ，就需要在function前加 async
    try {
        var result = await longTimeWork(false, "test");             // await 可將Promise的回傳值傳遞進來
        console.log(result);
    }
    catch (e) {
        console.log(e);
    }
    
}

usingLongTimeWork();
