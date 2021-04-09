//Selectors
const nextbtnId = document.getElementById('next-btn');
const backbtnId = document.getElementById('back-btn');
const form_2 = document.getElementById('main-form-2');
const form_1 = document.getElementById('main-form-1');
const createbtn = document.getElementById('create-btn');
const form_3 = document.getElementById('main-form-3')
    //Event Listeners



//Functions

// console.log("Heyy")

nextbtnId.onclick = function() {
    event.preventDefault();
    form_2.style.display = 'block'
    form_1.style.display = 'none'
};



backbtnId.onclick = function() {
    event.preventDefault();
    form_2.style.display = 'block'
    form_1.style.display = 'none'
};



function addNewEduField() {
    // console.log('hello');

    // the node to inserted
    let newNode = document.createElement('textarea');

    // get a reference to the parent node
    let parentDiv = document.getElementById('eduAddBtn-1').parentNode



    newNode.classList.add('form-control');
    newNode.classList.add('eduField');
    newNode.classList.add('mt-2')


    // let eduOb = document.getElementById('edu')
    let eduAddBtnOb = document.getElementById('eduAddBtn-1');

    parentDiv.insertBefore(newNode, eduAddBtnOb);

}

function addNewTechField() {
    // the node to inserted
    let newNode = document.createElement('textarea');

    // get a reference to the parent node
    let parentDiv = document.getElementById('techAddBtn-1').parentNode



    newNode.classList.add('form-control');
    newNode.classList.add('tsField');
    newNode.classList.add('mt-2');


    // let eduOb = document.getElementById('edu')
    let eduAddBtnOb = document.getElementById('techAddBtn-1');

    parentDiv.insertBefore(newNode, eduAddBtnOb);

}


function addNewProfField() {
    // the node to inserted
    let newNode = document.createElement('textarea');

    // get a reference to the parent node
    let parentDiv = document.getElementById('proAddBtn-1').parentNode



    newNode.classList.add('form-control');
    newNode.classList.add('psField');
    newNode.classList.add('mt-2');


    // let eduOb = document.getElementById('edu')
    let eduAddBtnOb = document.getElementById('proAddBtn-1');

    parentDiv.insertBefore(newNode, eduAddBtnOb);
}

function addNewCoField() {
    // the node to inserted
    let newNode = document.createElement('textarea');

    // get a reference to the parent node
    let parentDiv = document.getElementById('coAddBtn-1').parentNode



    newNode.classList.add('form-control');
    newNode.classList.add('coField');
    newNode.classList.add('mt-2');


    // let eduOb = document.getElementById('edu')
    let eduAddBtnOb = document.getElementById('coAddBtn-1');

    parentDiv.insertBefore(newNode, eduAddBtnOb);
}



function addNewCertiField() {
    // the node to inserted
    let newNode = document.createElement('textarea');

    // get a reference to the parent node
    let parentDiv = document.getElementById('certiAddBtn-1').parentNode



    newNode.classList.add('form-control');
    newNode.classList.add('certiField');
    newNode.classList.add('mt-2');


    // let eduOb = document.getElementById('edu')
    let eduAddBtnOb = document.getElementById('certiAddBtn-1');

    parentDiv.insertBefore(newNode, eduAddBtnOb);
}

function addNewProjField() {
    // the node to inserted
    let newNode = document.createElement('textarea');

    // get a reference to the parent node
    let parentDiv = document.getElementById('projAddBtn-1').parentNode



    newNode.classList.add('form-control');
    newNode.classList.add('projField');
    newNode.classList.add('mt-2');


    // let eduOb = document.getElementById('edu')
    let eduAddBtnOb = document.getElementById('projAddBtn-1');

    parentDiv.insertBefore(newNode, eduAddBtnOb);
}


function addNewInternField() {
    // the node to inserted
    let newNode = document.createElement('textarea');

    // get a reference to the parent node
    let parentDiv = document.getElementById('internAddBtn-1').parentNode



    newNode.classList.add('form-control');
    newNode.classList.add('internField');
    newNode.classList.add('mt-2');


    // let eduOb = document.getElementById('edu')
    let eduAddBtnOb = document.getElementById('internAddBtn-1');

    parentDiv.insertBefore(newNode, eduAddBtnOb);
}