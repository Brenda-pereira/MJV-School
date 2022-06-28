/**
 * EXERCÍCIOS
 *
 * Antes de começar, certifique-se de instalar as
 * dependências do projeto utilizando "npm install"
 *
 * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
 *
 * 1- Crie um tipo para representar um objeto que contenha as suas informações de
 * nome, profissão, idade e uma lista de assuntos de seu interesse. */
/* 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.*/
var dadosPessoais = {
    nome: "Brenda",
    profissao: "desenvolvedora",
    idade: 28,
    interesse: ["programação", "amizade", "culinária", "pets"]
};
/* 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1,
 e retorne somente a lista de assuntos do objeto.
 * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.*/
function interesse(pessoa) {
    return pessoa.interesse;
}
/*
 * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)*/
var Curso;
(function (Curso) {
    Curso["Angular"] = "Angular";
    Curso["Typescript"] = "Typescript";
    Curso["Git"] = "Git";
})(Curso || (Curso = {}));
/* 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6.
   * Nathan = Angular e Git, Alan = Angular, Typescript e Git */
var Alan = {
    nome: "Alan",
    curso: [
        Curso.Angular,
        Curso.Typescript,
        Curso.Git
    ]
};
var Nathan = {
    nome: "Nathan",
    curso: [
        Curso.Angular,
        Curso.Typescript,
    ]
};
/* 8 - Declare e popule um array com os objetos do exercício 7.*/
var professores = [Alan, Nathan];
/* 9 - Faça uma função que receba um argumento de array de Professor
* e retorne um novo array de strings contendo somente os nomes dos professores.*/
var nomeProfessores = function (professor) {
    return professores.map(function (professor) { return professor.nome; });
};
/* 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.*/
var professorCurso = function (professor) {
    var cursos = [];
    professores.forEach(function (professor) {
        professor.curso.forEach(function (curso) {
            cursos.push(curso);
        });
    });
    return cursos;
};
/* 11 - Faça uma função que receba um argumento de array de Professores e
* retorne o primeiro Professor encontrado que dê aula de Typescript.
*/
