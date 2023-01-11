// open log in form sign up
function createAcc(){
    window.location.href = "Login.html";
}
// open home page 
function openHome(){
    window.location.href = "Home.html";
}

const body = document.querySelector("body");
    sidebar = body.querySelector(".sidebar");
    toggle = body.querySelector(".toggle");
    user_icon = body.querySelector(".fa-chevron-down");
    user_profile = body.querySelector(".profile_dd");
   


    // sidebar
    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    })
    //  user profile
    user_icon.addEventListener("click", () =>{
        user_profile.classList.toggle("show");
    })
    


    

