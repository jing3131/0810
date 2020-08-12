function longTimeWork(workFine = true, errorMessage = "test") {
    return new Promise( (resolve, reject) => {                          // Promise 做完A然後做B(優化非同步，讓結構類似同步) -> 多序
                                                                        // resolve, reject 成功或失敗時做什麼
        setTimeout( () => {
            (workFine) ? resolve(1) : reject(errorMessage);             // resolve, reject 裡面只能傳一個參數 or function(){}
        }, 1000);
    })
}

function usingLongTimeWork() {
    longTimeWork(true, "false_test")  // try true/false                 // true 執行then，false 執行catch(顯示) "" 裡的內容
    .then(function (e) {
        console.log(e);
    })
    .catch(function (e) {
        console.log(e);
    })
}

usingLongTimeWork();
