// General Variables
const myButton = document.querySelector('.button');
const clrButton = document.querySelector('.clearBtn');
const text = document.querySelector('#text');
const mainSection = document.querySelector('.main-sec')
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
    let indexValue = nStorageLength;

    let data = new Object();
    data.index = indexValue + 1;
    data.text = textValue;
    data.background = backgroundValue


    myPostIt(data);
    nStorageLength++
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

            e.target.parentNode.parentNode.remove();
            localStorage.setItem(e.target.getAttribute('data-id'), JSON.stringify(retrieveObject));
            localStorage.removeItem(e.target.getAttribute('data-id'));

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

        const background = e.target.parentNode.parentNode.classList;
        const backgroundColor = e.target.parentNode.parentNode.firstElementChild.classList;
        const colorCSS = e.target.parentNode.parentNode.firstElementChild.classList;

        const color = e.target.classList[1];

        switch (color) {
            case 'c1':
                background.replace(background[2], 'c-green');
                backgroundColor.replace(backgroundColor[1], 'c-green');
                colorCSS.replace(colorCSS[1], 'c-green');
                break;
            case 'c2':
                background.replace(background[2], 'c-orange');
                backgroundColor.replace(backgroundColor[1], 'c-orange');
                colorCSS.replace(colorCSS[1], 'c-orange');                
                break;
            case 'c3':
                background.replace(background[2], 'c-purple');
                backgroundColor.replace(backgroundColor[1], 'c-purple');
                colorCSS.replace(colorCSS[1], 'c-purple');  
                break;
            case 'c4':
                background.replace(background[2], 'c-red');
                backgroundColor.replace(backgroundColor[1], 'c-red');
                colorCSS.replace(colorCSS[1], 'c-red');  
                break;
            case 'c5':
                background.replace(background[2], 'c-blue');
                backgroundColor.replace(backgroundColor[1], 'c-blue');
                colorCSS.replace(colorCSS[1], 'c-blue');  
                break;
            case 'c6':
                background.replace(background[2], 'c-white');
                backgroundColor.replace(backgroundColor[1], 'c-white');
                colorCSS.replace(colorCSS[1], 'c-white');  
                break;
            default:
                alert('error');
        }
    }
})


function myPostIt(data) {


    mainSection.innerHTML += `<section class='msec left-sec c-default' data-id='${data.index}'>
                                <h3 class='h3'>${data.text}</h3>
                                <div class='bottomDiv c-grey'>
                                    <button class='optionButton'>Color</button>
                                    <button class='deletePost' data-id=${data.index}>Delete</button>
                                </div>
                                    <div class="modalColor" style="display: none">
                                        <div class="color c1">    </div>
                                        <div class="color c2">    </div>
                                        <div class="color c3">    </div>
                                        <div class="color c4">    </div>
                                        <div class="color c5">    </div>
                                        <div class="color c6">    </div>
                                    </div>
                             </section>`

    localStorage.setItem(nStorageLength + 1, JSON.stringify(data));
}



function renderStorage() {


    for (let i = 0; i <= localStorage.length; i++) {
        if (localStorage.getItem(i) !== null ) {
            let retrieveData = localStorage.getItem(i);
            let retrieveObject = JSON.parse(retrieveData);

            mainSection.innerHTML += `<section class='msec left-sec c-default' data-id='${retrieveObject.index}'>
                                                    <h3 class='h3 c-grey'>${retrieveObject.text}</h3>
                                                    <div class='bottomDiv c-grey'>
                                                        <button class='optionButton'>Color</button>
                                                        <button class='deletePost' data-id='${retrieveObject.index}'>Delete</button>
                                                    </div>
                                                        <div class="modalColor" style="display: none">
                                                            <div class="color c1">    </div>
                                                            <div class="color c2">    </div>
                                                            <div class="color c3">    </div>
                                                            <div class="color c4">    </div>
                                                            <div class="color c5">    </div>
                                                            <div class="color c6">    </div>
                                                        </div>
                                                </section>`
        } else if (localStorage.getItem(i) === -1) {
            console.log('error')
        }
    }
}