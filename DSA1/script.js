let nums = [2,7,11,15]
let target = 9;

// let store = {};

// nums.map((num, index) => {
//         if(store[num] !== undefined) {
//             console.log([store[num], index])
//         }else {
//             console.log(store[target - num] = index);
//         }
// })


let store = {};
for (let [index, num] of nuns.entries()){
    if(store[num] !== undefined) {
        [store[num], index]
    }else {
        store[target - num] = index;
    }
}

// task 2 add two numbers
