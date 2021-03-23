let projectsDiv = document.getElementById("projects")

let projects = [
    {
        name: "Gameshot",
        desc: "A social media made with the Laravel framework.",
        vid: "",
        img: ""
    },
    {
        name: "Emote my gestures!😊",
        desc: "A project made with a handpose api and Knearest neighbour.",
        vid: "",
        img: ""
    },
    {
        name: "Wyrms",
        desc: "A platformer game made with a team. The game is made with Typescript Phaser.",
        vid: "",
        img: ""
    },
    {
        name: "Spotify player",
        desc: "A React web app using the spotify api.",
        vid: "",
        img: ""
    },
    {
        name: "MERN stack app",
        desc: "A MERN stack app for rating my favorite bands.",
        vid: "",
        img: "",
    }
]

function addProjects() {
    for (project of projects) {
        let projectDiv = document.createElement("div");

        let title = document.createElement("h3");
        title.innerHTML = project.name;

        // let img = document.createElement("img");

        let desc = document.createElement("p");
        desc.innerHTML = project.desc;

        projectDiv.appendChild(title);
        projectDiv.appendChild(desc);

        projectsDiv.appendChild(projectDiv);
    }
}

addProjects();