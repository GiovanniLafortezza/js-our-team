// ----------------------- OUR TEAM -------------------------------

let ourTeam = [
    {
        name : "Wayne",
        surname : "Barnett",
        role : "Founder & CEO",
        image : "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela",
        surname : "Caroll",
        role : "Chief Editor",
        image : "./img/angela-caroll-chief-editor.jpg"
    },
    {
        name : "Walter",
        surname : "Gordon",
        role : "Office Manager",
        image : "./img/walter-gordon-office-manager.jpg"
    },
    {
        name : "Angela",
        surname : "Lopez",
        role : "Social Media Manager",
        image : "./img/angela-lopez-social-media-manager.jpg"
    },
    {
        name : "Scott",
        surname : "Estrada",
        role : "Developer",
        image : "./img/scott-estrada-developer.jpg"
    },
    {
        name : "Barbara",
        surname : "Ramos",
        role : "Graphic Designer",
        image : "./img/barbara-ramos-graphic-designer.jpg"
    }

];

for (let i = 0; i < ourTeam.length; i++) {

    let member = ourTeam[i];

    console.log("Il membro n° " + (i + 1) + " è:");
    printObject(member);


    let memberCard =
            `<div class="col-4">
                <div class="card rounded-0 border-0 shadow w-75">
                    <img src="${member.image}" class="img-fluid card-img-top rounded-0" alt="team-member">
                    <div class="card-body text-center">
                        <h4 class="card-title fw-bold">${member.name} \t ${member.surname}</h4>
                        <p class="card-text fs-5">${member.role}</p>
                    </div>
                </div>
            </div>`;

    let container = document.getElementById("container_card");
    container.insertAdjacentHTML('beforeend', memberCard);
}



// ----------------- FUNZIONI -------------------------------


// ---------------- stampa un oggetto -----------------------
function printObject(object) {
    let string = "";

    string += "{\n";

    for (let key in object) {
        string += "\t " + key + ": " + object[key] + "\n";
    }

    string += "}";

    console.log(string);

}

// ---------------- stampa un array di oggetti -----------------------
function printArrayTeam(arrayTeam) {
    for (let i = 0; i < arrayTeam.length; i++) {

        let member = arrayTeam[i];

        console.log("Il membro n° " + (i + 1) + " è:");
        printObject(member);
    }
}


