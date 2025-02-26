function insert(num)
        {
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
        {
            document.getElementById('resultado').innerHTML = eval(resultado)
        }
    else
    {
        document.getElementById('resultado').innerHTML = "Impossível calcular"
    }
}
function raiz(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado < 0){
        document.getElementById('resultado').innerHTML = "Impossível calcular"
    }
    if(resultado >= 0){
        document.getElementById('resultado').innerHTML = resultado ** (1/2)
    }

}
function fatorial(){
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado < 0) {
        document.getElementById('resultado').innerHTML = "Impossível calcular";
    }
    if (resultado == 0) {
        document.getElementById('resultado').innerHTML = 1;
    }
    let fatorial = 1;
    for (let i = 1; i <= resultado; i++) {
        fatorial *= i;
    }
    document.getElementById('resultado').innerHTML = fatorial;
}