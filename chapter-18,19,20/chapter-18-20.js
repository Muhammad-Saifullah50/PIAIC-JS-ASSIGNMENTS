let courses = [];

for (let i = 1; i <= 5; i++) {
    let courseName = prompt(`Enter course ${i} name`, "");
    courses.push(courseName)
}

alert(courses)

for (let i = 0; i <= 4; i++) {
    let courseNameEdit = prompt(`Edit course ${i} name`, "");
    courses.splice(i, 1, courseNameEdit);

}

alert(courses)
