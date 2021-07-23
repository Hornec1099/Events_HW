const contentLoaded = document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript Loaded')

    const addForm = document.querySelector('#new-review-form');
    addForm.addEventListener('submit' , handleFormSubmit);

    const deleteForm = document.querySelector('#delete')
    deleteForm.addEventListener('click', handleDelete)

});


const handleDelete = function (event) {

    const theList = document.querySelector('#review-list');
    theList.textContent = ''

}

const handleFormSubmit = function(event) {
        event.preventDefault();

        const createdEvent = createItem(event.target);

        const newElementLists = document.querySelector('#review-list');

        newElementLists.appendChild(createdEvent);

        event.target.reset();
   
}

const createItem  = (form) => {
    const newListItem = document.createElement('li')
    
    
    const newGame = document.createElement('h4');
    newGame.textContent = ` Game: ${form.game.value}`;
    newListItem.appendChild(newGame);

    const newRating = document.createElement('p')
    newRating.textContent = ` Rating: ${form.rating.value}`;
    newListItem.appendChild(newRating);

    const newReason = document.createElement('p');
    newReason.textContent = ` Reason: ${form.reason.value}`;
    newListItem.appendChild(newReason);

    const newName = document.createElement('p');
    newName.textContent = ` User: ${form.firstName.value}  ${form.lastName.value}`;
    newListItem.appendChild(newName);

    return newListItem
}
