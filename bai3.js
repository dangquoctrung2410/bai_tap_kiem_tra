let str1 = "efgh";
let str2 = "fdafeefgh";
function checkInclude(string1,string2){
    let check = false;
    let len1 = string1.length;
    let len2 = string2.length;
    for (let i = 0; i < len2 - len1 + 1; i++){
        let string2slice = string2.slice(i,i + len1);
        if (string1 == string2slice) {
            check = true;
            break;
        }
    }
    return check;
}
console.log(checkInclude(str1,str2));