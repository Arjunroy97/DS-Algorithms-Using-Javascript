console.clear();
/** Checking of number first Cupple of sum Zero*/
function cuppleOfSumZero(arr){
    for(let num of arr){
       for(let j = 1; j < arr.length;j++){
           if(num + arr[j] === 0){
               return [num, arr[j]]
           }
       }
    }
}

// const cosz = cuppleOfSumZero([-5,-4,-3,-2,0,2,4,6,8])
// console.log(cosz);


// 2nd method
function sumOfPair(arr){
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        let sum = arr[left]+ arr[right];
        if(sum === 0){
            return [arr[left], arr[right]]
        }else if(sum > 0){
            right--
        }else{
            left++
        }
    }
}

const cosz = sumOfPair([-5,-4,-3,-2,0,2,4,6,8])
// console.log(cosz);