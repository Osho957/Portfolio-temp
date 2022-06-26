let allProjects = document.querySelectorAll(".project");
let allBgHovers = document.querySelectorAll(".bg-hover");
let techStackIcon = document.querySelector(".tech-stack-icon");
let allTechStackCont = document.querySelectorAll(".tech-stack-cont");
let treeGitIcon = document.querySelector(".tree-git-icon");
let excelGitIcon = document.querySelector(".excel-git-icon");
let todoGitIcon = document.querySelector(".todo-git-icon");
let automationGitIcon = document.querySelector(".automation-git-icon");
let mailContactIcon = document.querySelector(".mail-contact-icon");
let githubContactIcon = document.querySelector(".github-contact-icon");
let linkedinContactIcon = document.querySelector(".linkedin-contact-icon");
let resumeContactIcon = document.querySelector(".resume-contact-icon");

for (let i = 0;i < allProjects.length;i++) {
    allProjects[i].addEventListener("mouseenter", e => {
        if (!allBgHovers[i].classList.contains("bg-animation-in")) allBgHovers[i].classList.add("bg-animation-in");
        if (allBgHovers[i].classList.contains("bg-animation-out")) allBgHovers[i].classList.remove("bg-animation-out");
    })
    allProjects[i].addEventListener("mouseleave", e => {
        if (allBgHovers[i].classList.contains("bg-animation-in")) allBgHovers[i].classList.remove("bg-animation-in");
        if (!allBgHovers[i].classList.contains("bg-animation-out")) allBgHovers[i].classList.add("bg-animation-out");
    })
}
for (let i = 0;i < allTechStackCont.length;i++) {
    let icons = allTechStackCont[i].querySelectorAll(".icon");
    allTechStackCont[i].addEventListener("mouseenter", e => {
        icons.forEach(icon => {
            if (icon.classList.contains("icon-pop-in")) icon.classList.remove("icon-pop-in");
            if (!icon.classList.contains("icon-pop-out")) icon.classList.add("icon-pop-out");  
        })
        if (allTechStackCont[i].classList.contains("icon-list-pop-in")) allTechStackCont[i].classList.remove("icon-list-pop-in");
        if (!allTechStackCont[i].classList.contains("icon-list-pop-out")) allTechStackCont[i].classList.add("icon-list-pop-out");
    })
    allTechStackCont[i].addEventListener("mouseleave", e => {
        icons.forEach(icon => {
            if (!icon.classList.contains("icon-pop-in")) icon.classList.add("icon-pop-in");
            if (icon.classList.contains("icon-pop-out")) icon.classList.remove("icon-pop-out");
        })
        if (!allTechStackCont[i].classList.contains("icon-list-pop-in")) allTechStackCont[i].classList.add("icon-list-pop-in");
        if (allTechStackCont[i].classList.contains("icon-list-pop-out")) allTechStackCont[i].classList.remove("icon-list-pop-out");
    })
}

treeGitIcon.addEventListener("click", e => {
    let a = document.createElement("a");
    a.href = "https://github.com/Osho957/News_App/";
    a.target = "_blank";
    a.click();
    a.remove();
})
excelGitIcon.addEventListener("click", e => {
    let a = document.createElement("a");
    a.href = "https://osho957.github.io/Excel-Book/";
    a.target = "_blank";
    a.click();
    a.remove();
})
todoGitIcon.addEventListener("click", e => {
    let a = document.createElement("a");
    a.href = "https://github.com/Osho957/Delivery-Site/";
    a.target = "_blank";
    a.click();
    a.remove();
})


mailContactIcon.addEventListener("click", e => {
    let a = document.createElement("a");
    a.href = "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=oshorajneesh453@gmail.com";
    a.target = "_blank";
    a.click();
    a.remove();
})
linkedinContactIcon.addEventListener("click", e => {
    let a = document.createElement("a");
    a.href = "https://www.linkedin.com/in/osho-pandey/";
    a.target = "_blank";
    a.click();
    a.remove();
})
githubContactIcon.addEventListener("click", e => {
    let a = document.createElement("a");
    a.href = "https://github.com/Osho957";
    a.target = "_blank";
    a.click();
    a.remove();
})
resumeContactIcon.addEventListener("click", e => {
    let a = document.createElement("a");
    a.href = "./views/OSHOPANDEY_2022.pdf";
    a.download = "Osho Pandey";
    a.click();
    a.remove();
})