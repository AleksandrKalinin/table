function updateUsers(e) {
  if (e.target.tagName.toLowerCase() === 'input') {
    let initialValue = e.target.value;
    let id = e.target.parentElement.parentElement.getAttribute('dataId');       
    e.target.addEventListener('focusout', function(event){
      let newValue = event.target.value;
      if ( newValue !== initialValue ) {
        let index = users.findIndex(el => el.id === Number(id));
        let attr = e.target.parentElement.getAttribute('name');
        users[index][attr] = newValue;
      }
    })
  }      
}