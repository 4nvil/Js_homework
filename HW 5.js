function drawTriangle(height, symbol){
    for (let i = 1; i <= height; i++){
        let row = "";
        for (let j = 1; j <= i; j++){
            row = row + symbol;
        }
    console.log(row)
    }
}

drawTriangle(5, '*');


function drawTriangle2(height, symbol){
    let row = "";
    for(let i = 1; i <= height; i++){       
        row += symbol;
        console.log(row);
    }
}

drawTriangle2(10, '*');