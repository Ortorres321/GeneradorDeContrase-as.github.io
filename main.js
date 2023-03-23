
const contraseñaSegura = (cantidad,imprimir)=>{
    const contraseña = `ABCDEFabcdefgGH012345NOPQRSTUVWXY${imprimir}ZhijkIJKLMlmn!@#$%opqrstuvwxyz6789&*_+-=<>?`;
    let segura = "";
    for (let i=1; i<=cantidad; i++){
     segura+= contraseña.charAt(Math.floor(Math.random() * contraseña.length));
    }
    return segura;
}

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
let generar = document.querySelector(".escritura");

btn1.addEventListener("click",(e)=>{
    const miPalabra = document.getElementById("meter").value;
    generar.innerHTML = "espera";
    setTimeout(()=>{
        let resultado = contraseñaSegura(12,miPalabra);
        generar.textContent= resultado.length ==12 ? resultado : "hubo un error al generar";
    },500)
})

btn2.addEventListener("click",(e)=>{
    const miPalabra1 = document.getElementById("meter").value;
    generar.textContent = "espera";
    let resultado2 = contraseñaSegura(16,miPalabra1);
    setTimeout(()=>{
        generar.textContent= resultado2.length==16 ? resultado2 : "hubo un error al generar";
    },500)
})

btn3.addEventListener("click",(e)=>{
    const miPalabra2 = document.getElementById("meter").value;
    generar.textContent = "espera";
    setTimeout(()=>{
        let resultado3 = contraseñaSegura(20,miPalabra2);
        generar.textContent= resultado3.length==20 ? resultado3: "hubo un error al generar";
    },500)
})



