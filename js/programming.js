let languagesDiv = document.getElementById("programming");

let languages = [
    {
        name: "Javascript",
        logo: "",
        skill: ""
    },
    {
        name: "React.js",
        logo: "",
        skill: ""
    },
    {
        name: "Express.js",
        logo: "",
        skill: ""
    },
    {
        name: "Node.js",
        logo: "",
        skill: ""
    },
    {
        name: "Jquery",
        logo: "",
        skill: ""
    },
    {
        name: "MongoDB",
        logo: "",
        skill: ""
    },
    {
        name: "Typescript",
        logo: "",
        skill: ""
    },
    {
        name: "PHP",
        logo: "",
        skill: ""
    },
    {
        name: "Laravel",
        logo: "",
        skill: ""
    },
    {
        name: "MySQL",
        logo: "",
        skill: ""
    },
    {
        name: "Python",
        logo: "",
        skill: ""
    },
    {
        name: "HTML",
        logo: "",
        skill: ""
    },
    {
        name: "CSS",
        logo: "",
        skill: ""
    },
    {
        name: "Bootstrap",
        logo: "",
        skill: ""
    }
]

function addLanguage() {
    for (l of languages) {
        let languageDiv = document.createElement("div");

        let title = document.createElement("h3");
        title.innerHTML = l.name;

        let skill = document.createElement("p");
        skill.innerHTML = l.skill;

        languageDiv.appendChild(title);
        languageDiv.appendChild(skill);

        languagesDiv.appendChild(languageDiv);
    }
}

addLanguage();