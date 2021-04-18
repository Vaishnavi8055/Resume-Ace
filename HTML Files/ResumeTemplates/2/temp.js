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

function generateResume() {
    document.getElementById('body').style.background = 'none'

    document.getElementById("fnameT").innerHTML = document.getElementById("nameField").value;
    document.getElementById("snameT").innerHTML = document.getElementById("lnameField").value;
    document.getElementById("addT").innerHTML = document.getElementById("addField").value;
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
    document.getElementById("ldT").innerHTML = document.getElementById("ldField").value;
    document.getElementById("gitT").innerHTML = document.getElementById("gitField").value;
    document.getElementById("pnoT").innerHTML = document.getElementById("pnoField").value;

    //objective
    document.getElementById("objT").innerHTML = document.getElementById("objField").value;

    //internships and Training Experience
    let intern = document.getElementsByClassName('internField')
    let str = "";
    for (let e of intern) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('internT').innerHTML = str;

    //Education
    let edu = document.getElementsByClassName('eduField')
    let str1 = "";
    for (let e1 of edu) {
        str1 = str1 + `<li> ${e1.value} </li>`;
    }
    document.getElementById('eduT').innerHTML = str1;

    //projects
    let project = document.getElementsByClassName('projField')
    let str2 = "";
    for (let e2 of project) {
        str2 = str2 + `<li> ${e2.value} </li>`;
    }
    document.getElementById('projT').innerHTML = str2;

    //technical skill
    let tskill = document.getElementsByClassName('tsField')
    let str3 = "";
    for (let e3 of tskill) {
        str3 = str3 + `<li> ${e3.value} </li>`;
    }
    document.getElementById('tskillT').innerHTML = str3;

    //professional skill
    let pskill = document.getElementsByClassName('psField')
    let str4 = "";
    for (let e4 of pskill) {
        str4 = str4 + `<li> ${e4.value} </li>`;
    }
    document.getElementById('pskillT').innerHTML = str4;

    //extracoField
    let extraco = document.getElementsByClassName('coField')
    let str5 = "";
    for (let e5 of extraco) {
        str5 = str5 + `<li> ${e5.value} </li>`;
    }
    document.getElementById('extracoT').innerHTML = str5;

    //certificate
    let certi = document.getElementsByClassName('certiField')
    let str6 = "";
    for (let e5 of certi) {
        str6 = str6 + `<li> ${e5.value} </li>`;
    }
    document.getElementById('certiT').innerHTML = str6;

    document.getElementById('template').style.display = 'block';
    document.getElementById('main-form-2').style.display = 'none';
}


let nextbtn = document.getElementById('next-btn')
nextbtn.onclick = function () {
    document.getElementById('main-form-2').style.display = 'block';
    document.getElementById('main-form-1').style.display = 'none';
}

function backButton() {
    document.getElementById('main-form-2').style.display = 'none';
    document.getElementById('main-form-1').style.display = 'block';
}




function printResume() {
    document.getElementById('body').style.background = 'none';
    document.getElementById('print-btn').style.display = 'none';
    window.print();
}