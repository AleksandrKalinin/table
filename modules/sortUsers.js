function sortUsers(e) {
  let val = e.target.getAttribute('val');
  let newUsers = users.sort((a,b) => a[val].localeCompare(b[val]));
  let root = document.getElementById('root');
  while (root.firstChild) {
      root.removeChild(root.firstChild);
  }     
  populateTable(newUsers);  
}