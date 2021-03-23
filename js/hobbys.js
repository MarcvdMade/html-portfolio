let hobbysDiv = document.getElementById("hobbys")

let hobbys = [
    {
        name: "Programming👨‍💻",
        desc: `I started programming when I was in high school. I've learned a lot since then and always liked fixing bugs.`,
        img: "",
    },
    {
        name: "Skateboarding🛹",
        desc: `I been skating since I was young. For me skating is a way to clear my mind.`,
        img: "",
    },
    {
        name: "Drawing🎨",
        desc: `Sometimes I start on a drawing. I'm trying to improve this skill.`,
        img: "",
    },
    {
        name: "Music🎶",
        desc: `
                Everybody likes music. I mostly listen to rock and metal. But sometimes different types of genres like nightcore.
                I also tried playing different instruments. I started with drums and guitar.`,
        img: "",
    },
    {
        name: "Gaming🎮",
        desc: `
                I've been gaming my whole life. Games for me are a way to relax and get inspired. That's why I'm really interessted 
                in game development.
                `,
        img: "",
    },
]

function addHobbys() {
    for (hobby of hobbys) {
        let hobbyDiv = document.createElement("div");
        hobbyDiv.setAttribute("class", "hobbyDiv")

        let title = document.createElement("h3");
        title.innerHTML = hobby.name;

        // let img = document.createElement("img");

        let desc = document.createElement("p");
        desc.innerHTML = hobby.desc;

        hobbyDiv.appendChild(title);
        hobbyDiv.appendChild(desc);

        hobbysDiv.appendChild(hobbyDiv);
    }
}

addHobbys();