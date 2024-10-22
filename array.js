const alunos = [
    {nome: "Rodrigo", nota: 4},
    {nome: "Gustavo", nota: 5},
    {nome: "Anna", nota: 8},
    {nome: "Isabella", nota: 10},
]


function filtrarNotas(alunos){
    return alunos.nota >= 6;
}


const filtrarAlunos = alunos.filter(filtrarNotas)

console.log(filtrarAlunos)