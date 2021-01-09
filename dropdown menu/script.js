document.getElementsByTagName('nav')[0].onmouseover = function(event){
    let target = event.target;

    if(target.className == 'menu-item'){
        let sum_menu = target.getElementsByClassName('submenu-item');
        closeMenu();

        sum_menu[0].style.visibility = 'visible';
    }
}

document.onmouseover = function(event){
    let target = event.target;

    if (target.className != 'menu-item' && target.className != 'submenu-item'){
        closeMenu();
    }
}


function closeMenu(){
    let menu = document.getElementsByTagName('nav')[0];
    let sum_menu = menu.getElementsByClassName('submenu-item');

    for (let i = 0; i < sum_menu.length; i++) {
        sum_menu[i].style.visibility = 'hidden';
    }
}
