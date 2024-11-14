// Click-to-Show Sections
document.querySelectorAll('.clickable').forEach(section => {
    section.addEventListener('click', () => {
        section.classList.toggle('visible');
    });
});

// Student Management Functions
let count = 0;
const students = [];
let global_id;

function addStudent() {
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const ageValue = document.getElementById('age').value;
    const gradeValue = document.getElementById('grade').value;
    const degreeValue = document.getElementById('degree').value;

    if (document.getElementById("submit").innerText === "Edit Student") {
        const student = students.find(s => s.ID === global_id);
        Object.assign(student, { name: nameValue, email: emailValue, age: ageValue, grade: gradeValue, degree: degreeValue });
        document.getElementById("submit").innerText = "Add Student";
    } else {
        count++;
        students.push({ ID: count, name: nameValue, email: emailValue, age: ageValue, grade: gradeValue, degree: degreeValue });
    }

    resetFields();
    showTable();
}

function resetFields() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('age').value = "";
    document.getElementById('grade').value = "";
    document.getElementById('degree').value = "";
}

function showTable() {
    const table = document.getElementById('tbody');
    table.innerHTML = "";

    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.ID}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td class="degree">
                <div>${student.degree}</div>
                <div class="icons">
                    <a onclick="edit(${student.ID})" class="fa">&#xf044;</a>
                    <a onclick="del(${student.ID})" class="fa">&#xf1f8;</a>
                </div>
            </td>
        `;
        table.appendChild(row);
    });
}

function search() {
    const filter = document.getElementById("search").value.toUpperCase();
    const rows = document.getElementById("tbody").getElementsByTagName("tr");

    Array.from(rows).forEach(row => {
        const [nameCell, emailCell, degreeCell] = row.getElementsByTagName("td");
        const isVisible = [nameCell, emailCell, degreeCell].some(cell => cell.innerText.toUpperCase().includes(filter));
        row.style.display = isVisible ? "" : "none";
    });
}

function edit(id) {
    const student = students.find(s => s.ID === id);
    global_id = id;

    document.getElementById('name').value = student.name;
    document.getElementById('email').value = student.email;
    document.getElementById('age').value = student.age;
    document.getElementById('grade').value = student.grade;
    document.getElementById('degree').value = student.degree;
    document.getElementById("submit").innerText = "Edit Student";
}

function del(id) {
    const index = students.findIndex(s => s.ID === id);
    students.splice(index, 1);
    showTable();
}
