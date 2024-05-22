document.getElementById("studentForm").addEventListener("submit",formSubmit);
function formSubmit(e){
    e.preventDefault();
    const studentName = document.querySelector("#name").value;
    console.log(studentName);
    const studentId = document.querySelector("#studentId").value;
    console.log(studentId);
    const contact = document.querySelector("#contact").value;
    console.log(contact);
    const emailId = document.querySelector("#email").value;
    console.log(emailId);
    const submitButton = document.querySelector("#submit");

    if(studentName,studentId,contact,emailId === ''){
        return;
    }

    //Creating new row
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.className='newRow';

    const name = newRow.insertCell(0);
    name.textContent = studentName;
    name.className = 'data';
    const id = newRow.insertCell(1);
    id.textContent = studentId;
    id.className = 'data';
    const ncontact = newRow.insertCell(2);
    ncontact.textContent = contact;
    ncontact.className = 'data';
    const nEmailId = newRow.insertCell(3);
    nEmailId.textContent = emailId;
    nEmailId.className = 'data';
    const buttonCell = newRow.insertCell(4);
    buttonCell.className = 'buttonCell';
    
    //To reset the form
    if(document.querySelector("#name").value = ''){return;}
    if(document.querySelector("#studentId").value = ''){return;}
    if(document.querySelector("#contact").value = ''){return;}
    if(document.querySelector("#email").value= ''){return;}
    
    //Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    deleteButton.addEventListener('click',deleteFunction);
    buttonCell.appendChild(deleteButton);

    //Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'editButton';
    editButton.addEventListener('click',editFunction);
    buttonCell.appendChild(editButton);

}
function deleteFunction(e){
    const row = e.target;
    console.log(row);
    if(row.classList.contains("deleteButton")){
        const parent = row.parentElement.parentElement;
        parent.remove();
    }

}
function editFunction(e){
    const row = e.target;
    console.log(row);
    if(row.classList.contains("editButton")){
        const parent = row.parentElement.parentElement;
        console.log(parent);
        const cell = parent.querySelectorAll('.data');
        console.log(cell);
        const newStudentname = prompt("Enter New Stutent Name",cell[0].innerHTML);
        const newStudentId = prompt("Enter New Id",cell[1].innerHTML);
        const newStudentContact = prompt("Enter New Contact",cell[2].innerHTML);
        const newStudentemailId = prompt("Enter New Email Id",cell[3].innerHTML);

        cell[0].innerHTML = newStudentname;
        cell[1].innerHTML = newStudentId;
        cell[2].innerHTML = newStudentContact;
        cell[3].innerHTML = newStudentemailId;
         
    }
}
    
