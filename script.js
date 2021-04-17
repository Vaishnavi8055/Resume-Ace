//Selectors
const nextbtnId = document.getElementById('next-btn');
const nextbtnId2 = document.getElementById('back-btn');
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



// backbtnId.onclick = function() {
//     event.preventDefault();
//     form_2.style.display = 'block'
//     form_1.style.display = 'none'
// };



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


let photoId = document.getElementById('photo');
//Generate Resume button to move to CV or photo
nextbtnId2.onclick = function() {

    let temp1 = document.getElementById('cv-template1')
    photoId.style.display = 'block'
    temp1.style.display = 'none'
    form_1.style.display = 'none'
    form_2.style.display = 'none'
}


let grbtnId = document.getElementById('generateResume');


grbtnId.onclick = function() {
    let temp1 = document.getElementById('cv-template1')
    temp1.style.display = 'block'
    form_1.style.display = 'none'
    form_2.style.display = 'none'
    photoId.style.display = 'none'

    // console.log("hello")


    // Declaration
    // let nameField2 = document.getElementById('nameField').value
    // let nameT2 = document.getElementById('nameT2')

    let nameField = document.getElementById('nameField').value



    let pnoField = document.getElementById('pnoField').value

    let objField = document.getElementById('objField').value

    let addField = document.getElementById('addField').value

    let ldField = document.getElementById('ldField').value

    let gitField = document.getElementById('gitField').value

    let fnameField = document.getElementById('fnameField').value



    // let internField = document.getElementById('internField').value
    // let eduField = document.getElementById('eduField')

    // let nameField2 = document.getElementById('nameField').value
    // let nameT2 = document.getElementById('nameT2')

    document.getElementById('nameT2').innerHTML = nameField;
    document.getElementById('nameT1').innerHTML = nameField;
    document.getElementById('contactT').innerHTML = pnoField;
    document.getElementById('addressT').innerHTML = addField;
    document.getElementById('objectiveT').innerHTML = objField;
    document.getElementById('instaT').innerHTML = gitField;
    document.getElementById('fbT').innerHTML = ldField;
    document.getElementById('fnameT').innerHTML = fnameField;
    let file = document.getElementById('photoField').files[0];
    //  document.getElementById('weT').innerHTML = internField;
    // document.getElementById('aqT').innerHTML = eduField;


    //Internship/work experience
    let weTs = document.getElementsByClassName('internField');

    let str = "";
    for (let e of weTs) {
        str = str + `<li>${e.value}</li>`;
    }

    document.getElementById('weT').innerHTML = str;



    //Academic/Education
    let eduTs = document.getElementsByClassName('eduField');

    let str2 = "";
    for (let e of eduTs) {
        str2 = str2 + `<li>${e.value}</li>`;
    }

    document.getElementById('aqT').innerHTML = str2;

    //Reads the URL of photo
    let reader = new FileReader()
    reader.readAsDataURL(file);

    //set the image to template
    reader.onloadend = function() {
        document.getElementById('imgT').src = reader.result;
    }
}

// Assigning
// nameT2.innerHTML = nameField2;
// phoneT1.innerHTML = phoneField;
// nameT1.innerHTML = nameField;
// objectiveT.innerHTML = objField;
// addressT.innerHTML = addField;



// document.getElementById("cv-form").style.display = 'none';
// document.getElementById("cv-template1").style.display = 'block';



// let backprobtn = document.getElementById('back-pro-btn')
// backprobtn.onclick = function() {
//     form_1.style.display = 'block'
//     temp1.style.display = 'none'
//     form_2.style.display = 'none'
//     photoId.style.display = 'none'

// }

// let print = document.getElementById('print-btn');

// print.onclick = function() {
//     form_2.style.display = 'block'
//     temp1.style.display = 'none'
//     form_1.style.display = 'none'
// }


// ---------------------Generate CV Function---------------



// function generateCV() {
//     console.log("hello")

//     let nameField = document.getElementById('nameField').value
//     let nameT1 = document.getElementById('nameT1')


//     nameT1.innerHTML = nameField;

//     document.getElementById("cv-form").style.display = 'none';
//     document.getElementById("cv-template1").style.display = 'block';
// }

function printCV() {
    document.getElementById("print-btn").style.display = 'none';
    document.getElementById("navbarId").style.display = 'none';

    window.print();

}