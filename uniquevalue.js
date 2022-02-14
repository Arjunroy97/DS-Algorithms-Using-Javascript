//             i j                                             
// conditon : [1,1,2,2,3,3,4,4,5,5,6,6,7,7]

function countUniqueValue(arr){
    if(arr.length > 0){
        let i = 0;
        for(let j =1; j < arr.length;j++){
            if(arr[i] !== arr[j]){
                i++
                arr[i] = arr[j]
            }
        }
        return i + 1
    }
}
const unique = countUniqueValue([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,9])
console.log(unique);
// time complecity O(n)