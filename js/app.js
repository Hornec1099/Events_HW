const contentLoaded = document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript Loaded')

    const form = document.querySelector('#new-review-form');
    form.addEventListener('submit' , handleFormSubmit);

});

const handleFormSubmit = function(event) {
        event.preventDefault();

        const theForm = document.querySelector('#new-review-form');

        const newElementLists = document.querySelector('#review-list');

        const createdEvent = createItem(event);

        newElementLists.appendChild(createdEvent)

        theForm.reset();
   
}

const createItem  = (form) => {
    const newListItem = document.createElement('li')
    newElementLists.appendChild(newListItem);
    
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
    newName.textContent = ` User:${form.firstName.value}  ${form.lastName.value}`;
    newListItem.appendChild(newName);
}