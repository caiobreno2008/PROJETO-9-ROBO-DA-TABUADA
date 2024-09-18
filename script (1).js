const number = parseInt(prompt("Digite um número entre 1 e 20:")) 
let results = ""

if (number < 1 || number > 20) {
    alert("Por favor, insira um número válido entre 1 e 20.")
} else {
   
    for (let i = 1; i <= 20; i++) {
        results += `${number} x ${i} = ${number * i}\n`; // 
    }

    alert(`Tabuada do ${number}:\n${results}`)
}
