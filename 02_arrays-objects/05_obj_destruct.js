// Object De-structure

const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "mdn"
}

//course.courseInstructor

const{courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);

// React de-structuring
const navbar = ({company}) => {

}

navbar(company = "Ink&Espresso")

