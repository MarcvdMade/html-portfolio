let skillsDiv = document.getElementById("skills");

let skills = [
    {
        name: "Adobe Photoshop",
        logo: "",
        skill: ""
    },
    {
        name: "Adobe XD",
        logo: "",
        skill: ""
    },
    {
        name: "Adobe Premiére",
        logo: "",
        skill: ""
    },
    {
        name: "UX design",
        logo: "",
        skill: ""
    },
    {
        name: "Scrum",
        logo: "",
        skill: ""
    },
    {
        name: "Web Develepment",
        logo: "",
        skill: ""
    },
    {
        name: "Game Develepment",
        logo: "",
        skill: ""
    },
    {
        name: "Machine learning",
        logo: "",
        skill: ""
    },
    {
        name: "Github",
        logo: "",
        skill: ""
    }
]

function addSkills() {
    for (s of skills) {
        let skillDiv = document.createElement("div");

        let title = document.createElement("h3");
        title.innerHTML = s.name;

        let skill = document.createElement("p");
        skill.innerHTML = s.skill;

        skillDiv.appendChild(title);
        skillDiv.appendChild(skill);

        skillsDiv.appendChild(skillDiv);
    }
}

addSkills();