var string = function(s, indices) {
    var str = "";
    for ( var i = 0; i < indices.length ; i++) {
        str += s[indices[i]];
    }
    return str;
};
let s = "leetcode";
let arr = [4,5,6,7,0,2,1,3];
document.write(string(s,arr));