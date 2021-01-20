screen = document.getElementById('screen');
screen.textContent = '';

function addNumber(n){
    screen.textContent += n;
}

function clearScreen(){
    screen.textContent = '';
}

function addAction(action){
    if(screen.textContent == ''){
        return;
    }

    truncateScreenEnd();
    screen.textContent += ` ${action} `
}

function calculate(){
    truncateScreenEnd();
    let strExpression = screen.textContent;
    let finalResult = 0;

    let blocks = strExpression.split(' ');
    let blocksWithoutMulDiv = strExpression.split(' ');

    // * and / are done
    for (let i = 1; i < blocks.length; i += 2) {
        if(blocks[i] === '*'){
            let res = makeAction(blocks[i-1], blocks[i+1], '*');
            blocksWithoutMulDiv = shiftBlocks(blocks, i-1, res);
        }

        if(blocks[i] === '/'){
            let res = makeAction(blocks[i-1], blocks[i+1], '/');
            blocksWithoutMulDiv = shiftBlocks(blocks, i-1, res);
        }
    }

    for (let i = 1; i < blocksWithoutMulDiv.length; i += 2) {
        if(blocksWithoutMulDiv[i] === '+'){
            let res = makeAction(blocks[i-1], blocks[i+1], '+');
            finalResult += res;
        }

        if(blocks[i] === '-'){
            let res = makeAction(blocks[i-1], blocks[i+1], '-');
            finalResult += res;
        }
    }

    if(blocksWithoutMulDiv.length === 1){
        finalResult = blocksWithoutMulDiv[0];
    }
    screen.textContent = finalResult;
}

function makeAction(a, b, action){
    if(action === '-'){
        return parseFloat(a) - parseFloat(b);
    }

    if(action === '+'){
        return parseFloat(a) + parseFloat(b);
    }

    if(action === '*'){
        return parseFloat(a) * parseFloat(b);
    }

    if(action === '/'){
        return parseFloat(a) / parseFloat(b);
    }
}

function truncateScreenEnd(){
    if(screen.textContent.endsWith(' ')){
        newValue = screen.textContent.substr(0, screen.textContent.length - 3);
        screen.textContent = newValue;
    }
}

function shiftBlocks(blocks, index, num){
    blocks.splice(index, 3);
    blocks.splice(index, 0, num);
    return blocks
}