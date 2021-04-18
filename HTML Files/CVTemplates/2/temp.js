function addnewWEField() {
    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("weField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder", 'Enter here')

    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton")
    weOb.insertBefore(newNode, weAddButtonOb)
}

function addNewAQField() {
    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("aqField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder", 'Enter here')

    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton")
    aqOb.insertBefore(newNode, aqAddButtonOb)
}
function addNewTSField(){
    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("tsField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder", 'Enter here')

    let tsOb = document.getElementById("ts")
    let tsAddButtonOb = document.getElementById("tsAddButton")
    tsOb.insertBefore(newNode, tsAddButtonOb)
}

function generateCV() {
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    let nameT2 = document.getElementById("nameT2");
    nameT1.innerHTML = nameField;
    nameT2.innerHTML = nameField;

    //direct
    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    //social links
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
    //objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    //work experience
    let wes = document.getElementsByClassName('weField')
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;

    //Academic Qualification
    let aqs = document.getElementsByClassName('aqField')
    let str1 = "";
    for (let e1 of aqs) {
        str1 = str1 + `<li> ${e1.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = str1;

    //Technical skills
    let tss = document.getElementsByClassName('tsField')
    let str2 = "";
    for (let e2 of tss) {
        str2 = str2 + `<li> ${e2.value} </li>`;
    }
    document.getElementById('tsT').innerHTML = str2;


    //profile picture
    let file = document.getElementById("imageField").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    //set the image to template
    reader.onloadend = function () {
        document.getElementById("imageT").src = reader.result;
    }

    document.getElementById("cv-form1").style.display = 'none';
    document.getElementById("cv-form2").style.display = 'none';
    document.getElementById("cv-template2").style.display = 'block';

}
let nextbtn = document.getElementById('next-btn')
nextbtn.onclick = function() {
    document.getElementById('cv-form2').style.display = 'block';
    document.getElementById('cv-form1').style.display = 'none';
}
function backButton(){
    document.getElementById('cv-form2').style.display = 'none';
    document.getElementById('cv-form1').style.display = 'block';
}

function printCV() {
    document.getElementById("print-btn").style.display = 'none';
    window.print();
}