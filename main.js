// Creando la Clase Comentario
class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    })
    {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }
    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
        //Charles(Estudiante)
    }
}

// Creando prototimos con sintaxis de clases
class Course{
    constructor({
        name,
        classes =[],
        isFree = false,
        lang = "spanish"
    })
    {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this._lang = lang;
    }
    get name(){
        return this._name;
    }
    set name(nuevoNombrecito){
        if(nuevoNombrecito.length <15){
            console.error("Intente nuevamente");
        }else{
        this._name = nuevoNombrecito;
        }
    }
    get lang(){
        return this._lang;
    }
    set lang(newLang){
    if (newLang =="Spanish" || newLang == "English"){
        this._lang = newLang;
    }else{
        console.log("Ingrese un idioma valido")
    }
    }

    changeName(nuevoNombrecito){
        this._name = nuevoNombrecito;
    }
    addClass(newClass){
        this.classes.push(newClass)
    
    }
};
class LearningPath{
    constructor({
        name,
        courses = []
    })
    {
        this._name = name;
        this.courses = courses;
    }
    addCourse(newCourse){
        this.courses.push(newCourse)
    }
};
class Student{
    constructor({
        name,
        username,
        points,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    })
    {
        this.name = name;
        this.username = username;
        this.points = points;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar()
    }
};

// Heredando atributos de Students a Free,Basic y Expert
class FreeStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse)
        }else{
            console.warn("Lo sentimos "+ this.name +" el curso no es gratuito")
        }
    }
};
class BasicStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        if (newCourse.lang === "English"){
            console.warn("Lo sentimos " +this.name + " no puedes tomar cursos en ingles");
        }else{
            this.approvedCourses.push(newCourse);
        }
    }
};
class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};

//Polimorfismo 
class TeacherStudents extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
    //Polimorfismo 
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Teacher",
        })
        comment.publicar()
    }
};


// Creando instancias de objeto Course
const cursoProgBasica = new Course({
    name: "Curso gratis de programacion basica",
    isFree: true,
});
const cursoPracticoHTML = new Course({
    name: "Curso practico de HTML y CSS",
});
const cursoDefinitivoHTML = new Course({
    name: "Curso definitivo de HTML y CSS",
});
const cursoPostgreSQL = new Course({
    name: "Curso de PostgreSQL",
});
const cursoProfPyhton = new Course({
    name: "Curso profesional de Python",
});
const cursoResponsiveDesign = new Course({
    name: "Curso de responsive Design",
});
const cursoUnrealEngine = new Course({
    name: "Curso de Unreal Engine",
});
const cursoUnity3d = new Course({
    name: "Curso de Unity en 3d",
});
const cursoEnglish = new Course({
    name: "Curso de introduccion al ingles laboral",
    lang: "English"
})


// Instancias de objeto LearningPath/ Creando escuelas de aprendizaje
const escDataScience = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        cursoProfPyhton,
        cursoPostgreSQL,
    ]
});

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoPracticoHTML,
        cursoResponsiveDesign,
    ]
});

const escuelaVideojuegos = new LearningPath({
    name: "Escuela de Videojuegos",
    courses:[
        cursoProgBasica,
        cursoUnrealEngine,
        cursoUnity3d,
    ]
});


// Instancias de objeto Student / Creando estudiantes
const juan = new ExpertStudent({
    name: "JuanDC",
    username : "juandc",
    points: 100,
    email: "juanito@gmail.com",
    approvedCourses: [
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
    twitter: "juandc" 
    });
const charles = new BasicStudent({
    name: "Charles",
    username : "chwilliams",
    points: 20000,
    email: "charles@gmail.com",
    approvedCourses: [
        cursoProgBasica,
        cursoPracticoHTML,
    ],
    twitter: "chwilliams",
    learningPaths: [
        escuelaWeb,
        escDataScience,
    ]
});

const pepe = new FreeStudent({
    name: "Pepe",
    username: "josejose"
})

const freddy = new TeacherStudents({
    name: "Freddy Vega",
    username: "freddier",
    instagram : "freddier",
    email: "freddyvega@gmail.com"
})