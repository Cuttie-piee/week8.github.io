let arr = ['*',5,4,2,8,1,6,9,4];
function am(arg) {
    let l = arg.length;
    if (l<3)
    return (-1);
    if (arg[0] == '+')
    add(arg);
    else
    mul(arg);
}
function mul(item) {
    let res = 1;
    for (let i = 1; i < item.length; i++ ) {
        res = res * item[i];
    }
    document.write(res);
}
function add(item) {
    let res = 0;
    for (let i = 1; i < item.length; i++ ) {
        res = res + item[i];
    }
    document.write(res);
}
am(arr);