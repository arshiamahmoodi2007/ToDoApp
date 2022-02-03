let Window_Width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let MainDiv = document.getElementById("main_div");

WindowsResize(Window_Width);

window.addEventListener("resize", function(){
    WindowsResize(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
});

function WindowsResize(width){
    if (width <= 575){
        MainDiv.style.margin = "0 auto";
        MainDiv.style.borderRadius = "0";
        MainDiv.style.minHeight = "100%";
    } else {
        MainDiv.style.margin = "30px auto";
        MainDiv.style.borderRadius = "5px";
        MainDiv.style.minHeight = "550px";
    }
}

let Groups_List = false;

function OpenGroups() {
    let SubmitBtn = document.getElementById("GroupsBtn");
    let PlusBtn = document.getElementById("submit_btn");
    let PlusIcon = document.getElementById("PlusIcon");

    // butten's for move
    let FreeTimeBtn = document.getElementById("free_time_btn");
    let WorkBtn = document.getElementById("work_btn");
    let LessonBtn = document.getElementById("lesson_btn");

    if (Groups_List == false) {
        SubmitBtn.style.width = "178px";
        PlusIcon.style.transform = "rotateZ(45deg)";

        // buttens's open move task
        FreeTimeBtn.style.marginLeft = "44px";
        WorkBtn.style.marginLeft = "88px";
        LessonBtn.style.marginLeft = "132px";

        // butten's border radius task
        PlusBtn.style.borderRadius = "20px 0 0 20px";
        FreeTimeBtn.style.borderRadius = "0";
        WorkBtn.style.borderRadius = "0";
        LessonBtn.style.borderRadius = "0 20px 20px 0";

        Groups_List = true;
    }
    else {
        SubmitBtn.style.width = "46px";
        PlusIcon.style.transform = "rotateZ(0deg)";

        // butten's close move tast
        FreeTimeBtn.style.marginLeft = "0";
        WorkBtn.style.marginLeft = "0";
        LessonBtn.style.marginLeft = "0";

        // butten's border radius task
        PlusBtn.style.borderRadius = "20px";
        FreeTimeBtn.style.borderRadius = "20px";
        WorkBtn.style.borderRadius = "20px";
        LessonBtn.style.borderRadius = "20px";

        Groups_List = false;
    }
}
