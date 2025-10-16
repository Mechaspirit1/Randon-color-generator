const title = document.querySelector("h1");
const btn = document.querySelector("#btn");
const rgb = document.querySelector("#sub");

btn.addEventListener("click", ()=>{
    //geração de numeros que servem como valores rgb toda vez que o botão for pressionado
    let num1 = Math.floor(Math.random()*256);
    let num2 = Math.floor(Math.random()*256);
    let num3 = Math.floor(Math.random()*256);

    //calculo para determinar se a cor de fundo é clara ou excura
    let bright = num1*0.2126 + num2*0.7152 + num3*0.0722

    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(bright);

    rgb.textContent = `rgb(${num1}, ${num2}, ${num3})` //muda o conteudo do h2 para o valor rgb
    document.body.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})` //muda a cor de fundo da pagina

    //se o calculo resultar em um numero menor que 128 a cor é considerada escura e a cor do text é atualizada de acordo
    if(bright < 128){
        title.style.color = "white";
        rgb.style.color = "white";
    }
    else{
        title.style.color = "black";
        rgb.style.color="black";
    }

})
