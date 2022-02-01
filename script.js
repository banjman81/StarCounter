let counter = 0

const removeButton = document.getElementById('remove-btn')
const addButton = document.getElementById('add-btn')
const starContainer = document.querySelector('.stars-container')


//component
const starComponent = () => {
    const starImage = document.createElement('div')
    starImage.innerHTML = `<img class="star-image" src="./star.png" alt="Star">`
    return starImage
}



const updateCounter = (input) => {
    document.getElementById('display-count').innerHTML = input
}

removeButton.addEventListener('click', function(){
    if(counter > 0){
        counter--
        updateCounter(counter)

        //remove star images to star container
        starContainer.removeChild(starContainer.lastElementChild)
    }
})

addButton.addEventListener('click', function(){
    counter++
    updateCounter(counter)

    //add star images to star container
    starContainer.appendChild(starComponent())
})

