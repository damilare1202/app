let student = [];

document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let score = parseFloat(document.getElementById("score").value);
    let studentClass = document.getElementById("studentClass").value.trim();
    //VALIDATION
    if (!name || isNaN(age) || isNaN(score) || !studentClass) {
        alert('Please fill in all fields');
        return;
    }

    //GRADING
    let grade = "";
    if (score >= 70) grade = "A";
    else if (score >= 60) grade = "B";
    else if (score >= 50) grade = "C";
    else grade = "F";
    //ADD TO ARRAY
    let student = { name, age, gender, score, studentClass, grade };
    student.push(student);

    displayStudents(student);
    updateSummary();
    this.reset();
});

//DISPLAY STUDENTS
function displayStudents(data) {
    let table =
        "<tr><th>Name</th><th>Age</th><th>Gender</th><th>Class</th><th>Score</th><th>Grade</th></tr>";
    for (let s of data) {
        table += `<tr>
            <td> ${s.name}</td>
            <td> ${s.age}</td>
            <td> ${s.gender}</td>
            <td> ${s.Class}</td>
            <td> ${s.score}</td>
            <td> ${s.grade}</td>
        </tr >`;
    }
    document.getElementById("studentTable").innerHTML = table;
}

//SUMMARY
function updateSummary() {
    let total = student.length;
    let avg = student.reduce((acc, cur) => acc + cur.score, 0) / total;
    document.getElementById(
        "summary"
    ).innerHTML = `Total Students: ${total} | Average Score: ${avg.toFixed(2)}`;
}

//SEARCH
document.getElementById("search").addEventListener("input", function () {
    let value = this.value.toLowerCase();
    let filtered = student.filter((s) => s.name.toLowerCase().includes(value));
    displayStudents(filtered);
})