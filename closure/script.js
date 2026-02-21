 function criaFuncoes() {
    let funcoes = [];
    for (i=0; i < 3; i++) {
        let j = i;
        funcoes.push( function() {
            console.log(j);
        });
    }
    return funcoes;
} 

 let fn = criaFuncoes();
 fn[0](); // 0
 fn[1](); // 1
 fn[2](); // 2
 