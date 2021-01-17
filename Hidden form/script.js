let formBlock;
let input_body;

function hide_post_block(){
    document.getElementById('create_post').classList.remove('visible');
    document.getElementById('create_post').classList.add('hidden');
}

window.onload = function(){
    hide_post_block();
    formBlock = document.getElementById('form-block');
    input_body = document.getElementsByClassName('input-post-body')[0];
}

document.getElementsByClassName('show-form-btn')[0].onmousedown = function(event){
    let createPost = document.getElementById('create_post');
    createPost.classList.remove('hidden');
    createPost.classList.add('visible');
}

document.getElementById('create_post').onclick = function(event){
    let targer = event.target;
    if(targer == document.getElementById('create_post')){
        hide_post_block();
    }
}

document.getElementById('close').onclick = hide_post_block;

document.getElementsByClassName('input-post-body')[0].oninput = function(){
    
}
