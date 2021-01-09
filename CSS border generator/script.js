function func1(){
    let tl = document.getElementsByName('tl')[0].value;
    let tr = document.getElementsByName('tr')[0].value;
    let br = document.getElementsByName('br')[0].value;
    let bl = document.getElementsByName('bl')[0].value;

    let t1 = document.getElementsByName('t1')[0];
    let t2 = document.getElementsByName('t2')[0];
    let t3 = document.getElementsByName('t3')[0];
    let t4 = document.getElementsByName('t4')[0];

    let div = document.getElementsByClassName('block')[0];

    t1.value = tl;
    t2.value = tr;
    t3.value = br;
    t4.value = bl;

    div.style.borderRadius = tl + 'px ' + tr + 'px ' + br + 'px ' + bl + 'px';
}