document.getElementById('start').onclick = function (){
    let element = document.getElementById('block-inner');
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame(){
        if(pos == 450){
            clearInterval(id);
        }else{
            pos++;
            element.style.top = pos + 'px';
            element.style.left = pos + 'px';
        }
    }
}