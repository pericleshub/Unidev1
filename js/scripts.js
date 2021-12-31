const palavroes = ['merda', 'porra', 'corno', 'foder', 'desgraça', 'puto', 'cu']
var captar = [];

var campo = document.querySelector("textarea")
var but = document.querySelector("button")
const entrada = [];
var att = 0;

but.onclick = function(){
    entrada.push(campo.value);
    
    att++;
    if(att > 1){
        document.location.reload(true);
    }

    var resultado = String(entrada);
    var resultado1 = resultado.split(' ');

    var num = resultado1.length;

    for(var i = 0; i < num; i++){
        for(var j = 0; j < 7; j++){
            if(resultado1[i] == palavroes[j] | resultado1[i] == palavroes[j] + ',' |
            resultado1[i] == palavroes[j] + '.' | resultado1[i] == palavroes[j] + '\n' |
            resultado1[i] == palavroes[j] + '.\n'){
                resultado1[i] = '***';
            }else
                continue;
        }
    }
    resultado1 = resultado1.join(' ');
    document.querySelector("textarea").value = resultado1;
 }   