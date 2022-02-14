//             i j                                             
// conditon : [1,1,2,2,3,3,4,4,5,5,6,6,7,7]
/** 
 * থরি i = 0; এবং j = 1;
 * এখনে condition হল যদি i ও j এর মান সমান থাকে তাহলে j++ হবে
 * আর যদি i ও j এর মান সমান না থাকে তাহলে i++ হবে এবং j এর মান i এর মানে বসবে a.x : arr[i] = arr[j]
 */

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