// // Creando un objeto literal
// const natalia = {
//     name: "Natalia",
//     age: 30,
//     cursosAprobados: [
//     "Curso definitivo de HTML y CSS",
//     "Curso practico de HTML y CSS",
//     ],
//     //creando funcion para aprobar un curso
//     aprobarCurso(nuevoCursito) {
//         this.cursosAprobados.push(nuevoCursito);
//     },
// }
// // Hacer que natalia apruebe otro curso.
// natalia.cursosAprobados.push("Curso de Responsive Design");

/*---------------------------Creando nuestro primer prototipo Student---------------------------------------*/

function Student(name,age,cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCursito){
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}

Student.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}
Student.prototype.removeCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita",
    25,
    [
    "Curso de programacion basica",
    "Curso de javascript"
    ],
)

/*---------------------------Creando el prototipo con la sintaxis de Clases---------------------------------------*/

class Student2 {
    constructor({
        name,
        age,
        cursosAprobados = [],
        email,
        facebook,
        instagram,
    })
    {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
        this.facebook = facebook;
        this.instagram = instagram;
        
    }
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    };
}

const roberto = new Student2({
    email: "roberto@gmail.com",
    name :"Roberto",
    age :35,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS",
    ],

}
);

roberto.aprobarCurso("Curso de programacion basica")