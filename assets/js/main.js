const projects = [
    {
        title: "Vercy Oversized Campaign",
        type: "Social Media Ad",
        description:
            "Building customer trust before the purchase through persuasive, objection-focused copy.",
        lines: [
            "كل مرة بتطلب تيشيرت...",
            "بتبقى قلقان إنه يطلع مش مقاسك؟",
            "علشان متعيشش نفس التجربة..."
        ],
        link: "projects/vercy.html"
    },

    {
        title: "Glow Skin Vitamin C",
        type: "Skincare Campaign",
        description:
            "Helping customers regain confidence through emotional storytelling.",
        lines: [
            "كل يوم أول ما تبصي في المراية...",
            "الثقة أهم من أي فلتر...",
            "ابدئي رحلتك لبشرة أنقى..."
        ],
        link: "projects/glow-skin.html"
    },

    {
        title: "Aurora Coffee",
        type: "Coffee Campaign",
        description:
            "Selling the experience before selling the drink.",
        lines: [
            "بعد يوم طويل...",
            "كل اللي محتاجه بريك...",
            "يمكن كل اللي ناقص يومك..."
        ],
        link: "projects/aurora-coffee.html"
    },

    {
        title: "Noir Essence",
        type: "Perfume Campaign",
        description:
            "Removing buying objections while building trust.",
        lines: [
            "كم مرة اشتريت عطر...",
            "العطر أول انطباع...",
            "وجودك يسبق كلامك..."
        ],
        link: "projects/noir-essence.html"
    }
];

let current = 0;

const title = document.getElementById("project-title");
const type = document.getElementById("project-type");
const description = document.getElementById("project-description");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const link = document.getElementById("project-link");

function updateCard() {

    current++;

    if (current >= projects.length)
        current = 0;

    const p = projects[current];

    title.textContent = p.title;
    type.textContent = p.type;
    description.textContent = p.description;

    line1.textContent = p.lines[0];
    line2.textContent = p.lines[1];
    line3.textContent = p.lines[2];

    link.href = p.link;

}

setInterval(updateCard, 4000);

/*==================== SCROLL ANIMATION ====================*/

const hiddenElements = document.querySelectorAll(
    ".hero, .about, .projects, .process, .contact, .footer"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

hiddenElements.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

/*==================== ACTIVE NAV LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive(){

    const scrollY = window.pageYOffset;

    sections.forEach(current=>{

        const sectionHeight = current.offsetHeight;

        const sectionTop = current.offsetTop - 120;

        const sectionId = current.getAttribute("id");

        const link = document.querySelector(
            '.nav__menu a[href*=' + sectionId + ']'
        );

        if(!link) return;

        if(scrollY > sectionTop &&
           scrollY <= sectionTop + sectionHeight){

            link.classList.add("active-link");

        }

        else{

            link.classList.remove("active-link");

        }

    });

}

window.addEventListener("scroll", scrollActive);