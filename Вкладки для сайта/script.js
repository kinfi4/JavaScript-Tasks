let tab;
let tabContent;

window.onload = function (){
    tab = document.getElementsByClassName('tab');
    tabContent = document.getElementsByClassName('tab-content');
    hideTabs(1);
}

function hideTabs(start_index){
    for (let i = start_index; i < tab.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('chosen')
    }
}

document.getElementById('tabs').onclick = function (event){
    let target = event.target;
    for (let i = 0; i < tab.length; i++) {
        if(target == tab[i]){
            showTab(i);
            break;
        }
    }
}

function showTab(index){
    hideTabs(0);

    tabContent[index].classList.remove('hide');
    tabContent[index].classList.add('show');
    tab[index].classList.add('chosen');
}