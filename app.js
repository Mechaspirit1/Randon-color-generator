const btn = document.querySelector("#btn");
const rgb = document.querySelector("#sub");

btn.addEventListener("click", ()=>{
    //geração de numeros que servem como valores rgb toda vez que o botão for pressionado
    let num1 = Math.floor(Math.random()*256);
    let num2 = Math.floor(Math.random()*256);
    let num3 = Math.floor(Math.random()*256);

    console.log(num1);
    console.log(num2);
    console.log(num3);

    rgb.textContent = `rgb(${num1}, ${num2}, ${num3})` //muda o conteudo do h2 para o valor rgb
    document.body.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})` //muda a cor de fundo da pagina

})