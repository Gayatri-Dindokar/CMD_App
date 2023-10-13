import * as showHtmlModel from './model/showHtml.js';
// document.addEventListener('click', function(event) {
//     console.log(event.target);
// })

const userinput = document.querySelector(".input");
const main = document.querySelector(".main");
const help = document.querySelector(".help");
const enterCommand = document.querySelector(".enterCommand");
const container = document.querySelector(".container");
const paths = document.querySelectorAll(".paths");
const containerFluid = document.querySelector(".container-fluid");
const displayOutputContainer = document.querySelector(".display_output");
const maincon = document.querySelector(".maincon");
const resizeAtMinSize = document.getElementById("resize-at-minsize");
//min-max functionality
const minMaxBtn = document.getElementById("minmaxbtn");
const bottomDiv = document.querySelector(".bottom-div");
const resize = document.getElementById("resize");
const restore = document.getElementById("restore");
const resizeBigscreen = document.querySelector(".resize-bigscreen");
const crossbtn = document.querySelector(".crossbtn");
const cmdImg = document.getElementById("cmd");
const btnclose = document.querySelector(".btnclose");
const crossBtnBigScreen = document.getElementById("crossBtnBigScreen");
const bigScreenMinMaxBtn = document.getElementById("bigscreen-minmaxbtn");
const doubleRestore = document.getElementById("double-restore");
const mainconWidth = maincon.offsetWidth;
const mainconHeight = maincon.offsetHeight;
const hiddenNav = document.querySelector(".hidden-nav");
const bottomIcon = document.querySelector(".bottom-icon");
const desktopIcon = document.querySelector(".desktop-icon");
const navbar = document.querySelector(".navbar");
const mydivid = document.getElementById("mydiv");
const errorIcon = document.querySelector(".error-icon");
const test = document.querySelector(".test");
// const bottomDiv = document.querySelector(".bottom-div")
const bottomdivCover = document.getElementById("bottom-div-cover");

const path = () => {
    const newpath = document.createElement("p");
    newpath.classList.add("newgeneratedpath");
    newpath.innerHTML = `P<span>6</span>:\\user\\<input type="text" class="input input-field animated-input" autocomplete="off"  autofocus="autofocus"/>
`;
    displayOutputContainer.insertAdjacentElement("beforeend", newpath);
    const inputField = newpath.querySelector(".input-field");
    inputField.focus();
};
document.addEventListener("click", (event) => {
    const inputField = document.querySelectorAll(".input-field");
    inputField.forEach(input => {
        input.focus();
    });
    const inputField1 = document.querySelectorAll(".input_getquote");
    inputField1.forEach(input => {
        input.focus();
    })
});
path();
const addcommand = () => {
    const note = `<p class="note">This Command not found. </p>`;
    displayOutputContainer.insertAdjacentHTML("beforeend", note);
};

//when user type help command//
async function showHelp() {
    const html = await showHtmlModel.showHelp()
    displayOutputContainer.insertAdjacentHTML("beforeend", html);
};
//when user type home command//
const showHome = async() => {
    const html = await showHtmlModel.showHome();
    displayOutputContainer.insertAdjacentHTML("beforeend", html);
};
//when user type about command//
const showAbout = async() => {
    const html = await showHtmlModel.showAbout();
    displayOutputContainer.insertAdjacentHTML("beforeend", html);
};
//when user type projects command//
const showProjects = async() => {
    const html = await showHtmlModel.showprojects();
    displayOutputContainer.insertAdjacentHTML("beforeend", html);
};
//when user type contact command//
const showContact = async() => {
    const html = await showHtmlModel.showContact();
    displayOutputContainer.insertAdjacentHTML("beforeend", html);
};
//when user type jobs command//
const showJobs = async() => {
    const html = await showHtmlModel.showJobs();
    displayOutputContainer.insertAdjacentHTML("beforeend", html);
};
//when user type get quote command//
const get_quote = () => {
    const que1 = document.createElement("div");
    que1.innerHTML = `
    <form>
           <div id="question1" class="que1">
              <p class="q1"><span> > </span>what is your name?</p>
              <p><span>></span> 
              <input data-question-index="0" type="text" id="nameInput" class="input_getquote" autocomplete="off" required pattern="/^[A-Za-z\s]*$/"> </p>
       </div>

          <div id="question2" style="display: none;">
             <p><span> > </span> what is your email?</p>
             <p><span>></span> <input data-question-index="1" type="email" id="emailInput" class="input_getquote" autocomplete="off"> </p>
      </div>

          <div id="question3" style="display: none;">
              <p><span> > </span>what is your phone no?</p>
               <p> <span>></span><input data-question-index="2" type="tel"  inputmode="numeric"   maxlength="10" id="phoneInput" class="input_getquote num"> </p>
          </div>

         <div id="question4" style="display: none;">
           <p><span> > </span>What Do You Require?</p>
         <p> <span>></span><input data-question-index="3" type="text" id="requireInput" class="input_getquote"> </p>
       </div>

          <div id="question5" style="display: none;">
            <p><span> > </span>When Do You Require?</p>
             <p><span>></span><input type="date" id="whenInput" class="input_getquote"> </p>
       </div>

          <div id="question6" style="display: none;">
           <p><span> > </span>Project Brief</p>
           <p style="display:flex;"><span id="project-arrow-span">></span>
           <textarea id="Project-Brief" class="input_getquote textarea input" cols="80"></textarea>  </p>
      </div> 

       <div id="question7" style="display: none;">
           <p><span> > </span>Are you sure you want to submit? (y/n)</p>
          <p><span>></span><input type="text" id="submitInput" class="input_getquote"  ></p>

       </div>

           <div id="question8" style="display: none;">
              <p class='message'><span>></span><input type="text" id="messageYes" value="your response is successfully submitted" class="input_getquote"></p>
          </div>

          <div id="question9" style="display: none;">
               <p><span> > </span>Do you want to quit? (y/n)</p>
               <p class='message'><span>></span><input type="text" id="messageNo"  class="input_getquote"></p>
         </div>

         <div id="question10" style="display: none;">
               <p><span> > </span>Your Response is not submitted...</p>
                <p class='message'><input type="text" id="response-not-submitted"  class="input_getquote"></p>
        </div>

        <div id="question11" style="display: none;">
                <p><span>></span> Great! Let's continue with the form type 'Y' to submit it again</p>
                <p class='message'><span>></span><input type="text" id="resubmission"  class="input_getquote"></p>
       </div>

       <div id="question12" style="display: none;">
               <p class='message'><input type="text" id="successfull" value="your response is succesfully submmited" class="input_getquote"></p>
              <p class='message'><input type="text" id="resubmission-succesfull"  class="input_getquote"></p>
       </div>

       
           
           </form>`;

    displayOutputContainer.insertAdjacentElement("beforeend", que1);
    document.addEventListener("click", (event) => {
        // Check if the clicked element is an input field with the class "input_getquote"
        if (event.target.classList.contains("input_getquote")) {
            event.target.focus();
        }
    });
    const inputFieldsQuotes = que1.querySelectorAll(".input_getquote");
    const questions = [
        "question1",
        "question2",
        "question3",
        "question4",
        "question5",
        "question6",
        "question7",
        "question8",
        "question9",
        "question10",
        "question11",
        "question12",
    ];
    let currentIndex = 0;

    function showQuestion(index) {
        document.getElementById(questions[index]).style.display = "block";
    }

    function focusOnInputsOfCurrentQuestion(index) {
        const queInputs = document.getElementById(questions[index]).querySelectorAll(".input_getquote");
        if (queInputs.length > 0) {
            queInputs[0].focus();
        }
    }
    showQuestion(0);
    focusOnInputsOfCurrentQuestion(0);

    document.getElementById("nameInput").addEventListener("keyup", function(event) {
        let nameInput = document.getElementById("nameInput");
        let store = document.getElementById("nameInput").value;
        if (event.key === "Enter") {
            if (store.trim() == "") {
                alert("Enter a Name");
            } else if (store.length > 0) {
                let spli = store.split(" ");
                //    console.log(spli);
                const fullNamePattern = /^[A-Za-z\s']+$/;
                if (!store.match(fullNamePattern)) {
                    alert("invalid pattern only alphabets are allowed");
                    nameInput.value = "";
                } else {
                    showQuestion(1);
                    focusOnInputsOfCurrentQuestion(1);
                }
            }
        }
    });
    document.getElementById("emailInput").addEventListener("keyup", function(event) {
        let email = document.getElementById("emailInput").value;
        let emailInput = document.getElementById("emailInput");
        if (event.key === "Enter") {
            if (email.trim() == "") {
                alert("Enter a Email");
            }
            const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!email.match(emailPattern)) {
                console.log("incorrect email");
                alert("Incorrect Pattern Please Enter Correct Email Id");
                emailInput.value = "";
            } else {
                showQuestion(2);
                // showNextQuestion();
                focusOnInputsOfCurrentQuestion(2);
            }
        }
    });
    document.getElementById("phoneInput").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const phoneInput = document.getElementById("phoneInput");
            const numericValue = phoneInput.value.replace(/\D/g, "");

            if (numericValue.length !== 10) {
                alert("Enter a valid 10-digit number");
                phoneInput.value = "";
            } else {
                showQuestion(3);
                // showNextQuestion();
                focusOnInputsOfCurrentQuestion(3);
            }
        }
    });
    document.getElementById("requireInput").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const requireInput = document.getElementById("requireInput").value;
            showQuestion(4);
            focusOnInputsOfCurrentQuestion(4);
        }
    });
    document.getElementById("whenInput").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            showQuestion(5);
            focusOnInputsOfCurrentQuestion(5);
        }
    });
    document.getElementById("Project-Brief").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            showQuestion(6);
            focusOnInputsOfCurrentQuestion(6);
        }
    });
    document.getElementById("submitInput").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const submit = document.getElementById("submitInput").value;
            const conform = document.getElementById("submitInput").value;
            if (conform == "y") {
                submitInput.setAttribute("readonly", true);
                showQuestion(7);
                focusOnInputsOfCurrentQuestion(7);
                path();
                const formdata = {
                    name: document.getElementById("nameInput").value,
                    email: document.getElementById("emailInput").value,
                    phone: document.getElementById("phoneInput").value,
                    require: document.getElementById("requireInput").value,
                    when: document.getElementById("whenInput").value,
                    ProjectBrief: document.getElementById("Project-Brief").value,
                    submit: document.getElementById("submitInput").value,
                };
                sessionStorage.setItem("key", JSON.stringify(formdata));
            } else if (conform == "n") {
                submitInput.setAttribute("readonly", true);
                showQuestion(8);
                focusOnInputsOfCurrentQuestion(8);
            }
        }
    });
    document.getElementById("messageNo").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const conform = document.getElementById("messageNo").value;
            if (conform == "y") {
                messageNo.setAttribute("disabled", true);
                console.log("quit");
                showQuestion(9);
                focusOnInputsOfCurrentQuestion(9);
                document.getElementById(questions[9]).querySelector("input").focus();
                path();
                console.log("help");
            } else if (conform == "n") {
                messageNo.setAttribute("disabled", true);
                showQuestion(10);
                focusOnInputsOfCurrentQuestion(10);
                document.getElementById(questions[10]).querySelector("input").focus();
            }
        }
    });
    document.getElementById("resubmission").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const conform = document.getElementById("resubmission").value;
            if (conform == "y") {
                resubmission.setAttribute("readonly", true);
                showQuestion(11);
                path();
                const formdata = {
                    name: document.getElementById("nameInput").value,
                    email: document.getElementById("emailInput").value,
                    phone: document.getElementById("phoneInput").value,
                    require: document.getElementById("requireInput").value,
                    when: document.getElementById("whenInput").value,
                    ProjectBrief: document.getElementById("Project-Brief").value,
                    submit: document.getElementById("submitInput").value,
                };
                sessionStorage.setItem("key", JSON.stringify(formdata));

            }
        }
    });
};
// main function
container.addEventListener("keyup", async function(e) {
    // console.log(e.target);
    if (e.target.matches(".input")) {
        const userinput = e.target.value.trim();
        if (e.key === "Enter") {
            e.preventDefault();
            if (userinput && userinput == "get quote") {
                get_quote();
            } else {

                if (userinput == "help") {
                    showHelp();
                } else if (userinput == "home") {
                    showHome();
                } else if (userinput == "projects") {
                    showProjects();
                } else if (userinput == "about") {
                    showAbout();
                } else if (userinput == "jobs") {
                    showJobs();
                } else if (userinput == "contact") {
                    showContact();
                } else if (userinput == "exit") {
                    maincon.style.display = "none";
                } else {
                    if (userinput != '') {
                        addcommand();
                    }
                }
                setTimeout(() => {
                    path();
                }, 0)
            }
            e.target.setAttribute("readonly", true);
        }
    }
});
// function stopDragging() {
//     document.onmousemove = null;
//     document.onmouseup = null;
// }
function movingContainer() {
    mydiv.addEventListener('mousedown', function(e) {
        if (e.button === 0) {
            isDown = true;
            offset = [
                mydiv.offsetLeft - e.clientX,
                mydiv.offsetTop - e.clientY
            ];
        }
    }, true);
}
minMaxBtn.addEventListener("click", () => {
    mydivid.style.width = "254px";
    mydivid.style.height = "35px";
    mydivid.style.top = "98vh";
    mydivid.style.left = "238px";
    mydivid.style.overflow = "hidden";
    mydivheader.classList.add("color");
    mydivid.classList.add("hidden-scroll");
    mydivid.classList.add("transition");
    resizeAtMinSize.style.display = "block";
    resize.style.display = "none";
    mydivid.style.borderRadius = "0px";
    // mydivid.style.marginBottom = "-2px";
    mydiv.addEventListener("click", function(e) {
        if (e.target.matches('#mydivheader')) {
            mydivid.style.width = "800px";
            mydivid.style.height = "600px";
            mydivid.style.left = "50%";
            mydivid.style.top = "50%";
            mydivid.style.overflow = "auto";
            mydivid.classList.add("mydividHov");


        }
    });
    if (mydivid.style.width = "254px") {
        setTimeout(() => {
            mydivid.classList.toggle('hidden')
        }, 400)


    }

    mydiv.addEventListener('mousedown', function(e) {
        if (e.button === 0) {
            isDown = false;
            offset = [
                mydiv.offsetLeft - e.clientX,
                mydiv.offsetTop - e.clientY
            ];
        }
    }, true);
});




resizeBigscreen.addEventListener("click", () => {
    maincon.style.display = "block";
    bottomDiv.style.display = "none";
    mydivid.style.width = "800px";
    mydivid.style.height = "600px";
    mydivid.style.left = "50%";
    mydivid.style.top = "50%";
    mydivid.classList.add("show-scroll");
})
resize.addEventListener("click", () => {
    maincon.style.width = "100%";
    maincon.style.height = "100vh";
    maincon.style.left = "50%";
    maincon.style.top = "50%";
    maincon.style.backgroundSize = "cover";
    resize.style.display = 'none';
    restore.style.display = "block";
    crossBtnBigScreen.style.display = "block";
    btnclose.style.display = "none";
    bigScreenMinMaxBtn.style.display = "block";
    minMaxBtn.style.display = "none";
    mydivid.classList.add("show-scroll");
    movingContainer();
})
resizeAtMinSize.addEventListener("click", () => {
    mydivid.style.width = "800px";
    mydivid.style.height = "600px";
    mydivid.style.left = "50%";
    mydivid.style.top = "50%";
    resizeAtMinSize.style.display = "none";
    resize.style.display = "block";
    mydivid.style.overflow = "auto";
    mydivid.style.borderTopleftRadius = "15px";
    mydivid.style.borderTopRightRadius = "15px";
})
restore.addEventListener("click", () => {
    maincon.style.width = "800px";
    maincon.style.height = "600px";
    resize.style.display = 'block';
    restore.style.display = "none";
    mydivid.classList.add("show-scroll");
    movingContainer();
})

function closeContainer() {
    // maincon.style.left='-700px';
    maincon.style.display = 'none';
    // maincon.classList.add('fadeout');
    // maincon.classList.remove('fadeInAnimation');
    bottomDiv.style.display = "none";
    bottomdivCover.style.display = "none";

}

function openContainer() {
    location.reload();
    maincon.style.display = 'block';
    bottomdivCover.style.display = "block";
    bottomDiv.style.display = "none";
    maincon.style.width = "800px";
    maincon.style.height = "600px";
    maincon.style.left = "50%";
    maincon.style.top = "50%";
    resize.style.display = "block";
    resizeBigscreen.style.display = "none";
    restore.style.display = "none";
    mydivid.classList.add("show-scroll");
    movingContainer();
    minMaxBtn.style.display = "block";
    maincon.classList.remove('fadeout');
}
crossbtn.addEventListener("click", () => {
    bottomDiv.style.display = "none";
});

function mainconNone() {
    maincon.style.display = 'none';
    // bottomDiv.style.display = "none";
    bottomdivCover.style.display = "none";
}
btnclose.addEventListener("click", closeContainer);
cmdImg.addEventListener("click", openContainer)
crossBtnBigScreen.addEventListener("click", mainconNone);
bigScreenMinMaxBtn.addEventListener("click", () => {
    restore.style.display = "none";
    resize.style.display = "block";
    mydivid.style.width = "254px";
    mydivid.style.height = "35px";
    mydivid.style.top = "98vh";
    mydivid.style.left = "238px";
    mydivid.style.overflow = "hidden";
    mydivid.classList.add('minimized');
    mydivid.classList.add("hidden-scroll");
    resizeAtMinSize.style.display = "block";
    resize.style.display = "none";
    mydivid.classList.add("transition");
    mydiv.addEventListener('mousedown', function(e) {
        if (e.button === 0) {
            isDown = false;
            offset = [
                mydiv.offsetLeft - e.clientX,
                mydiv.offsetTop - e.clientY
            ];
        }
    }, true);
    if (mydivid.style.width = "254px") {
        setTimeout(() => {
            mydivid.classList.toggle('hidden')
        }, 500)


    }
});
doubleRestore.addEventListener("click", () => {
    maincon.style.display = 'block';
    bottomDiv.style.display = "none";
    console.log("hii")
})
var mousePosition;
var offset = [0, 0];
var isDown = false;
var mydiv = document.getElementById("mydiv");
var originalWidth = mydiv.style.width;
var originalHeight = mydiv.style.height;
mydiv.addEventListener('mousedown', function(e) {
    if (e.button === 0) {
        isDown = true;
        offset = [
            mydiv.offsetLeft - e.clientX,
            mydiv.offsetTop - e.clientY
        ];
    }
}, true);
mydiv.addEventListener('mouseup', function() {
    isDown = false;
}, true);
mydiv.addEventListener('mousemove', function(event) {
    event.preventDefault();

    if (isDown) {
        mousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        var pageWidth = window.innerWidth;
        var pageHeight = window.innerHeight;
        if ((mousePosition.x + offset[0]) > 0) {
            mydiv.style.left = (mousePosition.x + offset[0]) + 'px';
        }
        mydiv.style.top = (mousePosition.y + offset[1]) + 'px';
        if ((mousePosition.y + offset[1]) > (pageHeight - 600)) {}
    }
}, true);
const recy = document.getElementById("recyclebin");
recy.addEventListener("click", () => {
    alert("recycle bin is empty");
})

const anchr = document.querySelector(".anchr");
anchr.addEventListener("click", () => {
    // window.location. href="https://pixel6.co/";
    window.open("https://pixel6.co/", "_blank");
    console.log("khafukyweifyi")
});
const fetchTime = document.getElementById('fetch-time');

function time() {
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    fetchTime.textContent =
        ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2) + ampm;
}

setInterval(time, 1000);

// status bar operation
errorIcon.addEventListener("mouseover", () => {
    test.style.opacity = "1";
    setTimeout(() => {
        test.style.opacity = "0";
    }, 5000);

});


// const soundon = document.querySelector(".soundon")


// soundon.addEventListener("click", () => {

// test.style.opacity = "0";

// });

document.getElementById('bottom-div-cover').addEventListener('click', () => {
    // mydivid.style.width = "800px";
    // mydivid.style.height = "600px";
    // mydivid.style.left = "50%";
    // mydivid.style.top = "50%";

    // maincon.style.display = "block";
    // mydivid.classList.add("fff");
    mydivid.style.width = "254px";
    mydivid.style.height = "35px";
    mydivid.style.top = "98vh";
    mydivid.style.left = "238px";
    mydivid.style.overflow = "hidden";
    mydivid.classList.toggle("hidden");
    mydivid.classList.add("show-scroll");
    mydivid.classList.add("transition");
    setTimeout(() => {
        mydivid.style.width = "800px";
        mydivid.style.height = "600px";
        mydivid.style.left = "50%";
        mydivid.style.top = "50%";
    }, 0.1);


});

// function turnoff(){

// }
const modal = document.querySelector(".modal");
const modelWindow = document.querySelector(".model-window ");
const modALCancel = document.querySelector(".footer-button");
const startWindowpopup = document.querySelector(".startWindow-popup");
const startWindowImg = document.querySelector(".left-startWindow-img");
const logOf = document.getElementById("logOfPopup");
const modalLogOfContainer = document.querySelector(".modal_logof-container");
// const popup = document.querySelector('.startWindow-popup');



function forcancelbtn() {
    if (!startWindowpopup.classList.contains("popup-visible")) {

        startWindowpopup.style.display = "block";
        setTimeout(() => {
            startWindowpopup.classList.add("popup-visible");
        }, 0);
    } else {

        startWindowpopup.classList.remove("popup-visible");
        setTimeout(() => {
            startWindowpopup.style.display = "none";
        }, 300);
    }

}


document.getElementById("turn-off").addEventListener("click", () => {
    modelWindow.style.display = "block";
    maincon.style.display = "none";
    bottomdivCover.style.display = "none";
    startWindowpopup.style.display = "none";

});
modALCancel.addEventListener("click", () => {
    modelWindow.style.display = "none";
    startWindowpopup.style.display = "none";
    forcancelbtn();

});
document.querySelector(".modal_logoff-btn").addEventListener("click", () => {
    console.log("hgghhjhjghhhh");
    modalLogOfContainer.style.display = "none";
    startWindowpopup.style.display = "none";
    forcancelbtn();
});
logOf.addEventListener("click", () => {
    modalLogOfContainer.style.display = "block";
    maincon.style.display = "none";
    bottomdivCover.style.display = "none";
    startWindowpopup.style.display = "none";

});

startWindowImg.addEventListener("click", () => {
    console.log("mmmm");
    //startWindowpopup.style.display = "block";
    // if (startWindowpopup.style.display === "none" || startWindowpopup.classList.add("slide-out")) {
    //     startWindowpopup.style.display = "block";
    //     startWindowpopup.classList.add("slide-in");
    // } else {

    //     startWindowpopup.classList.add("slide-out");
    //     // startWindowpopup.style.display = "none";
    // }

    if (!startWindowpopup.classList.contains("popup-visible")) {

        startWindowpopup.style.display = "block";
        setTimeout(() => {
            startWindowpopup.classList.add("popup-visible");
        }, 0);
    } else {

        startWindowpopup.classList.remove("popup-visible");
        setTimeout(() => {
            startWindowpopup.style.display = "none";
        }, 300);
    }


});
const dropdownAllPrograms = document.querySelector(".dropdown_all-programs")
document.querySelector(".all-programs_tab").addEventListener("mouseover", () => {
    if (dropdownAllPrograms.style.display === "none") {
        dropdownAllPrograms.style.display = "block";
    }

});
document.querySelector(".all-programs_tab").addEventListener("mouseout", () => {
    if (dropdownAllPrograms.style.display === "block") {
        dropdownAllPrograms.style.display = "none";
    }

});
document.getElementById("games-text-ev").addEventListener("mouseover", () => {
    document.querySelector(".games-dropdown").style.display = "block";
});
document.getElementById("dice-dropdown-game").addEventListener("click", () => {
    console.log("dicegame")
    pigGame.style.display = "block";
    pigGame.style.left = "30%";
    pigGame.style.top = "30%";
    forcancelbtn();
    mydiv.style.display = "none";

});
document.getElementById("games-text-ev").addEventListener("mouseout", () => {
    document.querySelector(".games-dropdown").style.display = "none";
});
//   document.getElementById("cmd-command-ev").addEventListener("click",()=>{
//     setTimeout(() => {
//         mydivid.classList.toggle('hidden')
//     }, 100)
//   });

// popup icons//
document.getElementById("window_popup-pixel6-icon").addEventListener("click", () => {
    window.open("https://pixel6.co/", "_blank");
});
document.getElementById("pixel6-dropdown-all-programs").addEventListener("click", () => {
    window.open("https://pixel6.co/", "_blank");
});
document.getElementById("window_popup-cmd-icon").addEventListener("click", () => {

    // mydivid.style.display = "block";
    // mydivid.style.width = "800px";
    // mydivid.style.height = "600px";
    // mydivid.style.left = "50%";
    // mydivid.style.top = "50%";
    // mydivid.style.overflow = "auto";
    // mydivid.classList.add("mydividHov");
    location.reload();
    maincon.style.display = 'block';
    bottomdivCover.style.display = "block";
    bottomDiv.style.display = "none";
    maincon.style.width = "800px";
    maincon.style.height = "600px";
    maincon.style.left = "50%";
    maincon.style.top = "50%";
    resize.style.display = "block";
    resizeBigscreen.style.display = "none";
    restore.style.display = "none";
    mydivid.classList.add("show-scroll");
    movingContainer();
    minMaxBtn.style.display = "block";
    maincon.classList.remove('fadeout');



    forcancelbtn();
});

document.getElementById("cmd-command-ev").addEventListener("click", (e) => {

    location.reload();
    maincon.style.display = 'block';
    bottomdivCover.style.display = "block";
    bottomDiv.style.display = "none";
    maincon.style.width = "800px";
    maincon.style.height = "600px";
    maincon.style.left = "50%";
    maincon.style.top = "50%";
    resize.style.display = "block";
    resizeBigscreen.style.display = "none";
    restore.style.display = "none";
    mydivid.classList.add("show-scroll");
    movingContainer();
    minMaxBtn.style.display = "block";
    maincon.classList.remove('fadeout');
    forcancelbtn();
});
document.getElementById("window_popup-recyclebin-icon").addEventListener("click", () => {
    forcancelbtn();
    alert("recycle bin is empty");

});
document.getElementById("dialogbox-cross1").addEventListener("mouseover", () => {
    document.getElementById("dialogbox-cross2").style.display = "block";
    document.getElementById("dialogbox-cross1").style.display = "none";

});
document.getElementById("dialogbox-cross2").addEventListener("click", () => {
    //    document.querySelector(".dialog-box").style.display = "none";
    test.style.opacity = "0";
});

document.getElementById("window_popup-game-icon").addEventListener("mouseover", () => {
    document.querySelector(".games-dropdown-left-side").style.display = "block";
});

document.getElementById("window_popup-game-icon").addEventListener("mouseout", () => {
    document.querySelector(".games-dropdown-left-side").style.display = "none";
});


// ////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////


// guess the number//
const again = document.querySelector('.btn-guess again');
const number = document.querySelector('.number');
const guesss = document.querySelector('.guess');
const check = document.querySelector('.btn-cheack-guess ');
const message = document.querySelector('.message');
const score = document.querySelector('.score-display');
const highscore = document.querySelector('.highscore');

// document.querySelector('.number').textContent = 13;
// let assume = document.querySelector('.guess').value;

let random = Math.floor(Math.random() * 20) + 1;
console.log(random);
let scoresg = 20;
let highscores = 0;






function guessthenumber() {
    console.log("guess the number")
    const assume = Number(document.querySelector('.guess').value);

    if (!assume) {
        document.querySelector('.message').textContent = 'No number'

    } else if (assume === random) {
        document.querySelector('.number').textContent = random;
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.body-guess').style.backgroundColor = "green";
        if (scoresg > highscores) {
            highscores = scoresg;
            document.querySelector('.highscore').textContent = highscores;
        }

    } else if (assume > random) {
        if (scoresg > 1) {
            document.querySelector('.message').textContent = 'To High'
            scoresg--;
            console.log(scoresg, 'scoresg');
            score.textContent = scoresg;
            // updateScore(scoresg);
        } else {
            document.querySelector('.message').textContent = 'You  lost the game';
            score.textContent = 0;
        }

    } else if (assume < random) {
        if (scoresg > 1) {
            document.querySelector('.message').textContent = 'To Low'
            scoresg--;
            // updateScore(scoresg);
            score.innerHTML = scoresg;
        } else {
            document.querySelector('.message').textContent = 'You  lost the game';
            score.textContent = scoresg;
        }
    }
}
// guessthenumber();
document.getElementById("cheack-btn").addEventListener("click", guessthenumber);

function againeplay() {
    scoresg = 20;
    highscores = 0;
    score.textContent = scoresg;
    random = Math.floor(Math.random() * 20) + 1;
    console.log(random);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.body-guess').style.backgroundColor = "black";
    document.querySelector('.guess').value = "";
    console.log("heloo players")

}
// againeplay();
document.getElementById("again-btn-guess").addEventListener("click", againeplay);

document.querySelector(".exit-guess-container").addEventListener("click", () => {
    document.querySelector(".body-guess").style.display = "none";
});

const guessgame = document.querySelector(".body-guess");
document.getElementById("guess-number-game").addEventListener("click", () => {
    console.log("pppp")
    guessgame.style.display = "block";
    guessgame.style.left = "30%";
    guessgame.style.top = "30%";
    forcancelbtn();
    mydivid.style.display = "none";
    againeplay();
});

document.getElementById("games-dropdown-guess-number").addEventListener("click", () => {
    console.log("zxcvbnm,")
    guessgame.style.display = "block";
    guessgame.style.left = "30%";
    guessgame.style.top = "30%";
    forcancelbtn();
    mydivid.style.display = "none";
    againeplay();

});

document.addEventListener('click', function(event) {
 
    if (!startWindowpopup.contains(event.target) && (!startWindowImg.contains(event.target))) {
     
        // startWindowpopup.style.display = 'none';
        // forcancelbtn();
        if (startWindowpopup.classList.contains("popup-visible")) {

            startWindowpopup.style.display = "none";
            startWindowpopup.classList.remove("popup-visible");
        }
    }
});