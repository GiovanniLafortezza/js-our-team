// ----------------------- OUR TEAM -------------------------------

let ourTeam = [
    {
        name : "Wayne",
        surname : "Barnett",
        role : "Founder & CEO",
        image : "wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela",
        surname : "Caroll",
        role : "Chief Editor",
        image : "angela-caroll-chief-editor.jpg"
    },
    {
        name : "Walter",
        surname : "Gordon",
        role : "Office Menager",
        image : "walter-gordon-office-menager.jpg"
    },
    {
        name : "Angela",
        surname : "Lopez",
        role : "Social Media Menager",
        image : "angela-lopez-social-media-menager.jpg"
    },
    {
        name : "Scott",
        surname : "Estrada",
        role : "Developer",
        image : "scott-estrada-developer.jpg"
    },
    {
        name : "Barbara",
        surname : "Ramos",
        role : "Graphic Designer",
        image : "barbara-ramos-graphic-designer.jpg"
    }

];

printArrayTeam(ourTeam);


// ----------------- FUNZIONI -------------------------------

function printObject(object) {
    let string = "";

    string += "{\n";

    for (let key in object) {
        string += "\t " + key + ": " + object[key] + "\n";
    }

    string += "}";

    console.log(string);

}


function printArrayTeam(arrayTeam) {
    for (let i = 0; i < arrayTeam.length; i++) {

        let member = arrayTeam[i];

        console.log("Il membro n° " + (i + 1) + " è:");
        printObject(member);
    }
}