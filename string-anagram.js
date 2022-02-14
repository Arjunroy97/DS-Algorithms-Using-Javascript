/** 'hello' => 'llhoe'
 * condition: 
 * stape -1 : string length same
 * stape -2 : string character same
 * stape -3 : using Map Object {}
 */

function strAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    let count = {};
    for(let num of str1){
        count[num] = (count[num] || 0) + 1;
    }
    for(let item of str2){
        if(!count[item]){
            return false;
        }
        count[item] -= 1;
    }
    return true;
}
const result = strAnagram("hello","llhoe")
// console.log(result);
