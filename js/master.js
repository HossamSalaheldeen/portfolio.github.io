

let maincolor = localStorage.getItem("color-option");
//alert(maincolor);

if(maincolor !== null) {

    document.documentElement.style.setProperty('--main-color', maincolor);

    document.querySelectorAll(".color-list li").forEach(item => {
        item.classList.remove("active");

        if(item.dataset.color === maincolor)
        {
            item.classList.add("active");
        }
    });  
}



/* setting button onclick
-----------------------
*/

let settingbutton = document.querySelector(".toggle-setting .fa-gear"); 


settingbutton.onclick = function() {

    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");


};

/*
---------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------
*/

const colorsLi = document.querySelectorAll(".color-list li");

colorsLi.forEach(colorLi => {
    colorLi.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem("color-option", e.target.dataset.color);


        e.target.parentElement.querySelectorAll(".active").forEach(item => {
            item.classList.remove("active");
        });

        e.target.classList.add("active");
    });
});




/* Random images slider
-----------------------
*/


//returns the first element that matches a specified CSS selector(s) in the document.
let landingPage = document.querySelector(".landing-page"); 

setInterval(() => {
    let arrimgs = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];
    let randNum = Math.floor(Math.random() * arrimgs.length);
    landingPage.style.backgroundImage = 'url("imgs/' + arrimgs[randNum] + '")';
}
,5000);

/*
---------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------
*/



let skills = document.querySelector(".skills");

window.onscroll = function() {

    let skillsOffsetTop = skills.offsetTop;
    let skillsOffsetHeight = skills.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowcroll = this.pageYOffset;

    let allskills = document.querySelectorAll(".skill-box .skill-progress span");
    if(windowcroll > (skillsOffsetTop + skillsOffsetHeight - windowHeight))
    {
        
        allskills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }

    else
    {
        allskills.forEach(skill => {
            skill.style.width = 0;
        });
    }
};