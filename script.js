// General Variables
const myButton = document.querySelector('.button');
const clrButton = document.querySelector('.clearBtn');
let text = document.querySelector('#text');
let mainSection = document.querySelector('.main-sec')
let nStorageLength = localStorage.length;
let nStorage = nStorageLength.toString();

// HTML
const section = document.querySelectorAll('.left-sec');

// Array
let dataArray = {};


renderStorage()

myButton.addEventListener('click', () => {
    let textValue = text.value;
    let backgroundValue = 'placeholder';
    let indexValue = nStorageLength + 1;

    let data = new Object();
    data.index = indexValue;
    data.text = textValue;
    data.background = backgroundValue

    myPostIt(data);
    nStorageLength++;
})


clrButton.addEventListener('click', () => {
    console.log('clearing local storage');
    localStorage.clear();
})


mainSection.addEventListener('click', function (e) {
    if (e.target.classList.contains('deletePost')) {
        if (e.target.getAttribute('data-id') === e.target.parentNode.parentNode.getAttribute('data-id')) {

            let retrieveData = localStorage.getItem(e.target.getAttribute('data-id'));
            let retrieveObject = JSON.parse(retrieveData);

            localStorage.setItem(e.target.getAttribute('data-id'), JSON.stringify(retrieveObject));
            localStorage.removeItem(e.target.getAttribute('data-id'));

            e.target.parentNode.parentNode.remove();
        }
    }
})


mainSection.addEventListener('click', function (e) {
    if (e.target.classList.contains('optionButton') && e.target.parentNode.parentNode.querySelector('.modalColor').style.display == 'none') {
        e.target.parentNode.parentNode.querySelector('.modalColor').style.display = 'flex';

    } else {
        e.target.parentNode.parentNode.querySelector('.modalColor').style.display = 'none';
    }
})


mainSection.addEventListener('click', function (e) {
    if (e.target.classList.contains('color')) {

        let color = e.target.classList[1];

        switch (color) {
            case 'c1':
                e.target.parentNode.parentNode.style.background = 'green';
                e.target.parentNode.parentNode.firstElementChild.style.backgroundColor = 'green';
                e.target.parentNode.previousElementSibling.style.backgroundColor = 'green';
                break;
            case 'c2':
                e.target.parentNode.parentNode.style.background = 'rgb(246, 184, 70)';
                e.target.parentNode.parentNode.firstElementChild.style.backgroundColor = 'rgb(246, 184, 70)';
                e.target.parentNode.previousElementSibling.style.backgroundColor = 'rgb(246, 184, 70)';
                e.target.parentNode.parentNode.firstElementChild.style.color = '#333'
                break;
            case 'c3':
                e.target.parentNode.parentNode.style.background = 'rgb(153, 102, 255)';
                e.target.parentNode.parentNode.firstElementChild.style.backgroundColor = 'rgb(153, 102, 255)';
                e.target.parentNode.previousElementSibling.style.backgroundColor = 'rgb(153, 102, 255)';
                break;
            case 'c4':
                e.target.parentNode.parentNode.style.background = 'rgb(240, 61, 61)';
                e.target.parentNode.parentNode.firstElementChild.style.backgroundColor = 'rgb(240, 61, 61)';
                e.target.parentNode.previousElementSibling.style.backgroundColor = 'rgb(240, 61, 61)';
                break;
            case 'c5':
                e.target.parentNode.parentNode.style.background = 'blue';
                e.target.parentNode.parentNode.firstElementChild.style.backgroundColor = 'blue';
                e.target.parentNode.previousElementSibling.style.backgroundColor = 'blue';
                break;
            case 'c6':
                e.target.parentNode.parentNode.style.background = 'white';
                e.target.parentNode.parentNode.firstElementChild.style.backgroundColor = 'white';
                e.target.parentNode.previousElementSibling.style.backgroundColor = 'white';
                break;
            default:
                alert('error');
        }
    }
})


function myPostIt(data) {


    mainSection.innerHTML += `<section class='msec left-sec' data-id='${data.index}'>
                                <h3 class='h3'>${data.text}</h3>
                                <div class='bottomDiv'>
                                    <button class='optionButton'>Color</button>
                                    <button class='deletePost' data-id=${data.index}>Delete</button>
                                </div>
                                    <div class="modalColor">
                                        <div class="color c1">    </div>
                                        <div class="color c2">    </div>
                                        <div class="color c3">    </div>
                                        <div class="color c4">    </div>
                                        <div class="color c5">    </div>
                                        <div class="color c6">    </div>
                                    </div>
                             </section>`

    let truncDifferenceLength = nStorageLength + 1;
    localStorage.setItem(truncDifferenceLength, JSON.stringify(data));
}



function renderStorage() {

    for (let i = 0; i <= localStorage.length; i++) {
        if (localStorage.getItem(i) != null) {
            let retrieveData = localStorage.getItem(i);
            let retrieveObject = JSON.parse(retrieveData);

            mainSection.innerHTML += `<section class='msec left-sec' data-id='${retrieveObject.index}'>
                                                    <h3 class='h3'>${retrieveObject.text}</h3>
                                                    <div class='bottomDiv'>
                                                        <button class='optionButton'>Color</button>
                                                        <button class='deletePost' data-id='${retrieveObject.index}'>Delete</button>
                                                    </div>
                                                        <div class="modalColor">
                                                            <div class="color c1">    </div>
                                                            <div class="color c2">    </div>
                                                            <div class="color c3">    </div>
                                                            <div class="color c4">    </div>
                                                            <div class="color c5">    </div>
                                                            <div class="color c6">    </div>
                                                        </div>
                                                </section>`
        }
    }
}