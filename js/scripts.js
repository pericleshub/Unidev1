const palavroes = ['merda', 'porra', 'corno', 'foder', 'desgraça', 'puto', 'cu'];

var campo = document.querySelector("textarea");
var but = document.querySelector("button");
const entrada = [];
var att = 0;

but.onclick = function(){
    entrada.push(campo.value);
    
    att++;
    if(att > 1){
        document.location.reload(true);
    }else

    var resultado = (String(entrada)).split(' ');

    var num = resultado.length;

    for(var i = 0; i < num; i++){
        for(var j = 0; j < 7; j++){
            if(resultado[i] == palavroes[j] |
            resultado[i] == palavroes[j] + ',' |
            resultado[i] == palavroes[j] + '.' |
            resultado[i] == palavroes[j] + '\n' |
            resultado[i] == palavroes[j] + '.\n'){
                resultado[i] = '***';
            }else
                continue;
        }
    }
    resultado = resultado.join(' ');
    document.querySelector("textarea").value = resultado;
 }   