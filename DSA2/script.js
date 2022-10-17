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

// cant full solve it, it has a bug in the code. the bug is that it doesn't fully satisfy or pass the test cases.  
// It has to do with the reverse function, I need to find a way map from behind to front. and then compare the two arrays.