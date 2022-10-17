let number = 1000021;
let numberArr = Array.from(String(number), Number);
let forward, backward;
function isPanlindrome(){
    numberArr.map((num) => {
        forward = num;
        console.log(forward)
    })

    let backwardtemp = numberArr.slice(0).reverse().map((num) => {
        backward = num
        console.log(backward)
    });
    if(forward === backward){
        console.log("true")
    }else{
        console.log("false")
    }
}

isPanlindrome();
