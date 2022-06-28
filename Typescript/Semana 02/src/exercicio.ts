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


interface Pessoa {
   nome: string,
   profissao: string,
   idade: number,
   interesse: string[],
}
/* 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.*/

const dadosPessoais: Pessoa = {
   nome: "Brenda",
   profissao: "desenvolvedora",
   idade: 28,
   interesse: ["programação", "amizade", "culinária", "pets"]
}

/* 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
 e retorne somente a lista de assuntos do objeto.
 * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.*/

function interesse(pessoa: Pessoa) :string[] {
   return pessoa.interesse
}
/* 
 * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)*/
enum Curso {
   Angular = "Angular",
   Typescript = "Typescript",
   Git = "Git"
}

/* 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.*/
interface Professor {
   nome: string,
   curso: Curso[]
}
/* 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
   * Nathan = Angular e Git, Alan = Angular, Typescript e Git */

const Alan: Professor = {
   nome: "Alan",
   curso: [
      Curso.Angular,
      Curso.Typescript,
      Curso.Git
   ]
}

const Nathan: Professor = {
   nome: "Nathan",
   curso: [
      Curso.Angular,
      Curso.Typescript,
   ]
}

   /* 8 - Declare e popule um array com os objetos do exercício 7.*/
   const professores:Professor[] = [Alan, Nathan]

   /* 9 - Faça uma função que receba um argumento de array de Professor 
   * e retorne um novo array de strings contendo somente os nomes dos professores.*/

  const nomeProfessores = (professor: Professor[]): string[] => {
   return professores.map(professor => professor.nome)
}


   /* 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.*/

const professorCurso = ( professor: Professor[]) => {
   const cursos: Array<Curso> = [];
   professores.forEach (function (professor: Professor) {
      professor.curso.forEach (function (curso) {
         cursos.push(curso);
    })
   })
return cursos;
}

/* 11 - Faça uma função que receba um argumento de array de Professores e
* retorne o primeiro Professor encontrado que dê aula de Typescript.
*/
 
const  ProfessorTypescript = (Professor:Professor []) =>{
   const professor.find (professor = professor.cursos.includes(Curso.Typescript))
}
