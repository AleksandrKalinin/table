function populateTable(data) {
  for (var i = 0; i < data.length; i++) {
    let root = document.getElementById('root');
    let row = document.createElement('tr');
    let id = document.createElement('td');
    let firstname = document.createElement('td');
    firstname.setAttribute('name', "firstname");
    let firstnameContent = document.createElement('input');
    let lastname = document.createElement('td');
    lastname.setAttribute('name', "lastname");
    let lastnameContent = document.createElement('input');
    id.innerText = data[i].id;
    firstnameContent.value = data[i].firstname;
    firstname.appendChild(firstnameContent);
    lastnameContent.value = data[i].lastname;
    lastname.appendChild(lastnameContent);
    row.setAttribute('dataId', data[i].id);
    row.appendChild(id);
    row.appendChild(firstname);
    row.appendChild(lastname);
    root.appendChild(row);
  } 
}