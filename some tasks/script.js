//  function func1(){
//     let check_box = document.getElementsByClassName('check');

//     if(check_box.checked){
//         alert('it is checked')
//     }else{
//         alert('it is not checked')
//     }
//  }


// function func2(){
//     let radio_buttons = document.getElementsByName('r1');
//     for (let i = 0; i < radio_buttons.length; i++) {
//         if(radio_buttons[i].checked){
//             alert(i + ' checked')
//         }        
//     }
// }


// function func3(){
//     let selected_index = document.getElementById('fruits').selectedIndex;
//     let options = document.getElementById('fruits').options;

//     alert('You chose ' + options[selected_index].text);
// }


function func4(){
    let range = document.getElementById('r1');
    let div = document.getElementsByClassName('block')[0]

    div.style.width = range.value + 'px';
    div.style.height = range.value + 'px';
}