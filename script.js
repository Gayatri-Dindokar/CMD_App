import * as showHtmlModel from './model/showHtml.js';
// const userinput = document.querySelector(".input");
// const main = document.querySelector(".main");
// const help = document.querySelector(".help");
// const enterCommand = document.querySelector(".enterCommand");
// const paths = document.querySelectorAll(".paths");
// const containerFluid = document.querySelector(".container-fluid");
const container = document.querySelector(".container");
const displayOutputContainer = document.querySelector(".display_output");
const maincon = document.querySelector(".maincon");
const resizeAtMinSize = document.getElementById("resize-at-minsize");
//min-max functionality
// const doubleRestore = document.getElementById("double-restore");
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
const navbar = document.querySelector(".navbar");
const mydivid = document.getElementById("mydiv");
const errorIcon = document.querySelector(".error-icon");
const test = document.querySelector(".test");
const bottomdivCover = document.getElementById("bottom-div-cover");
const bottomdivCoverContainer = document.querySelector(".bottom-div-cover-container");

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
async function bottomdivCoverP6(){
const html = await showHtmlModel.bottomdivCoverP6()
bottomdivCoverContainer.insertAdjacentHTML("beforeend", html);
}
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

function movingContainer() {
    navbar.addEventListener('mousedown', function(e) {
        if (e.button === 0) {
            isDown = true;
            offset = [
                mydiv.offsetLeft - e.clientX,
                mydiv.offsetTop - e.clientY
            ];
        }
    }, true);
}

// buttons on navbar minmize restore resize cancal functionality //
////////////////////////////////////////////////////////////////
// bottomdivCoverP6();
function setStyles(styles) {
    mydivid.style.cssText = styles;
}
///////////////////////////////////////////////////////////////////////
minMaxBtn.addEventListener("click", () => {
    // bottomdivCoverP6();
    // mydivid.style.zIndex="222"
    setStyles("width: 254px; height: 35px; top: 98vh; left: 238px; overflow: hidden; border-radius: 0px;z-index:222");
    resizeAtMinSize.style.display = "block";
    resize.style.display = "none";
    mydivid.classList.add("hidden-scroll");
    mydivid.classList.add("transition");
    bottomdivCover.style.boxShadow = "rgba(0, 0, 0, 0.3) -1px 0px inset, rgba(255, 255, 255, 0.2) 1px 1px 1px inset";

    mydiv.addEventListener("click", function(e) {
        if (e.target.matches('#mydivheader')) {
            setStyles("width: 800px; height: 600px; left: 50%; top: 50%; overflow: auto;");
            mydivid.classList.add("mydividHov");
        }
    });
    if (mydivid.style.width = "254px") {
        setTimeout(() => {
            mydivid.classList.toggle('hidden')
        }, 400)
    }

    navbar.addEventListener('mousedown', function(e) {
        if (e.button === 0) {
            isDown = false;
            offset = [
                mydiv.offsetLeft - e.clientX,
                mydiv.offsetTop - e.clientY
            ];
        }
    }, true);
});
bigScreenMinMaxBtn.addEventListener("click", () => {
    setStyles("width: 254px; height: 35px; top: 98vh; left: 238px; overflow: hidden;z-index:1");
    mydivid.classList.add('minimized');
    mydivid.classList.add("hidden-scroll");
    // resizeAtMinSize.style.display = "block";
    resizeAtMinSize.style.display = "none";
    resize.style.display = "none";
    mydivid.classList.add("transition");
    restore.style.display = "none";
    resize.style.display = "block";
    navbar.addEventListener('mousedown', function(e) {
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
resizeBigscreen.addEventListener("click", () => {
    maincon.style.display = "block";
    bottomDiv.style.display = "none";
    setStyles("width: 800px; height: 600px; left: 50%; top: 50%;");
    mydivid.classList.add("show-scroll");
});
resize.addEventListener("click", () => {
    maincon.style.cssText = "width: 100%; height: 100vh; left: 50%; top: 50%; background-size: cover;";
    resize.style.display = 'none';
    restore.style.display = "block";
    crossBtnBigScreen.style.display = "block";
    btnclose.style.display = "none";
    bigScreenMinMaxBtn.style.display = "block";
    minMaxBtn.style.display = "none";
    mydivid.classList.add("show-scroll");
    movingContainer();
});
resizeAtMinSize.addEventListener("click", () => {
    setStyles("width: 800px; height: 600px; left: 50%; top: 50%; overflow: auto; border-top-left-radius: 15px; border-top-right-radius: 15px;");
    resizeAtMinSize.style.display = "none";
    resize.style.display = "block";
});

restore.addEventListener("click", () => {
    setStyles("width: 800px; height: 600px;");
    resize.style.display = 'block';
    restore.style.display = "none";
    mydivid.classList.add("show-scroll");
    movingContainer();
});

function closeContainer() {
    maincon.style.display = 'none';
    bottomDiv.style.display = "none";
    bottomdivCover.style.display = "none";
}

function openContainer() {
    location.reload();
}

function mainconNone() {
    maincon.style.display = 'none';
    bottomdivCover.style.display = "none";
}
btnclose.addEventListener("click", closeContainer);
cmdImg.addEventListener("click", openContainer)
crossBtnBigScreen.addEventListener("click", mainconNone);

crossbtn.addEventListener("click", () => {
    bottomDiv.style.display = "none";
});



// container moving //
var mousePosition;
var offset = [0, 0];
var isDown = false;
var mydiv = document.getElementById("mydiv");
var originalWidth = mydiv.style.width;
var originalHeight = mydiv.style.height;
navbar.addEventListener('mousedown', function(e) {
    if (e.button === 0) {
        isDown = true;
        offset = [
            mydiv.offsetLeft - e.clientX,
            mydiv.offsetTop - e.clientY
        ];
    }
}, true);
navbar.addEventListener('mouseup', function() {
    isDown = false;
}, true);
navbar.addEventListener('mousemove', function(event) {
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

// Desktop Icon Functionality //

const desktopIconCmd = document.querySelector(".desktop-icon-cmd");
desktopIconCmd.addEventListener("click", () => {
    // window.location. href="https://pixel6.co/";
    window.open("https://pixel6.co/", "_blank");
    console.log("khafukyweifyi")
});

// fetch time on status bar //
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
const soundon = document.querySelector(".soundon");
const soundoff = document.querySelector(".soundoff");
soundon.addEventListener("click", () => {
    soundoff.style.display = "block";
    soundon.style.display = "none";
});
soundoff.addEventListener("click", () => {
    soundon.style.display = "block";
    soundoff.style.display = "none";
});



// const modal = document.querySelector(".modal");
const modelWindow = document.querySelector(".model-window ");
const modALCancel = document.querySelector(".footer-button");
const modALogOffBtn = document.querySelector(".modal_logoff-btn")
const startWindowpopup = document.querySelector(".startWindow-popup");
const startWindowImg = document.querySelector(".left-startWindow-img");
const logOf = document.getElementById("logOfPopup");
const modalLogOfContainer = document.querySelector(".modal_logof-container");
const modalLogOf = document.querySelector(".modal-logOf");
const body = document.querySelector('.cmd_base-container');

// status bar left side functionality popup turnoff logoff //
function toggleStartWindowPopup() {
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
    modelWindow.style.backgroundColor = "red";
    maincon.style.display = "none";
    bottomdivCover.style.display = "none";
    startWindowpopup.style.display = "none";
    body.classList.add("grayscale");

});
modALCancel.addEventListener("click", () => {
    modelWindow.style.display = "none";
    startWindowpopup.style.display = "none";
    body.classList.remove("grayscale");
    startWindowpopup.classList.remove("popup-visible");
});
document.querySelector(".modal_logoff-btn").addEventListener("click", () => {
    console.log("hgghhjhjghhhh");
    modalLogOfContainer.style.display = "none";
    startWindowpopup.style.display = "none";
    body.classList.remove("grayscale");
    startWindowpopup.classList.remove("popup-visible");
});
logOf.addEventListener("click", () => {
    document.querySelector('.cmd_base-container').classList.add("grayscale");
    modalLogOf.style.filter = "none";
    modalLogOfContainer.classList.remove("grayscale");
    modalLogOf.style.zIndex = "1";
    modalLogOfContainer.style.display = "block";
    maincon.style.display = "none";
    bottomdivCover.style.display = "none";
    startWindowpopup.style.display = "none";
});

startWindowImg.addEventListener("click", () => {
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
const allProgramsTab = document.querySelector(".all-programs_tab");
const dropdownAllPrograms = document.querySelector(".dropdown_all-programs");
const gamesTextEv = document.getElementById("games-text-ev");
const gamesDropdown = document.querySelector(".games-dropdown");

allProgramsTab.addEventListener("mouseover", () => {
    dropdownAllPrograms.style.display = "block";
});

allProgramsTab.addEventListener("mouseout", () => {
    dropdownAllPrograms.style.display = "none";
});

gamesTextEv.addEventListener("mouseover", () => {
    gamesDropdown.style.display = "block";
});

gamesTextEv.addEventListener("mouseout", () => {
    gamesDropdown.style.display = "none";
});

function openWindow(url) {
    window.open(url, "_blank");
}

document.getElementById("window_popup-pixel6-icon").addEventListener("click", () => {
    openWindow("https://pixel6.co/");
});

document.getElementById("pixel6-dropdown-all-programs").addEventListener("click", () => {
    openWindow("https://pixel6.co/");
});

function resetMainCon() {
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
    toggleStartWindowPopup();
}
document.getElementById("window_popup-cmd-icon").addEventListener("click", resetMainCon);
document.getElementById("window_popup-cmd-icon").addEventListener("click", resetMainCon);

function recycleBinClicked() {
    toggleStartWindowPopup();
    alert("Recycle bin is empty");
}
document.getElementById("recyclebin").addEventListener("click", recycleBinClicked);
document.getElementById("window_popup-recyclebin-icon").addEventListener("click", recycleBinClicked);

// dialogh box //
function showElement(element) {
    element.style.display = "block";
}

function hideElement(element) {
    element.style.display = "none";
}
document.getElementById("dialogbox-cross1").addEventListener("mouseover", () => {
    showElement(document.getElementById("dialogbox-cross2"));
    hideElement(document.getElementById("dialogbox-cross1"));
});
document.getElementById("dialogbox-cross2").addEventListener("click", () => {
    // document.querySelector(".dialog-box").style.display = "none";
    test.style.opacity = "0";
});

document.getElementById("window_popup-game-icon").addEventListener("mouseover", () => {
    showElement(document.querySelector(".games-dropdown-left-side"));
});

document.getElementById("window_popup-game-icon").addEventListener("mouseout", () => {
    hideElement(document.querySelector(".games-dropdown-left-side"));
});


document.addEventListener('click', function(event) {
    if (!startWindowpopup.contains(event.target) && (!startWindowImg.contains(event.target)) && (!modALCancel.contains(event.target)) && (!modALogOffBtn.contains(event.target))) {
        if (startWindowpopup.classList.contains("popup-visible")) {

            startWindowpopup.style.display = "none";
            startWindowpopup.classList.remove("popup-visible");
        }
    }
});


//  games code

const again = document.querySelector('.btn-guess again');
const number = document.querySelector('.number');
const guesss = document.querySelector('.guess');
const check = document.querySelector('.btn-cheack-guess ');
const message = document.querySelector('.message');
const score = document.querySelector('.score-display');
const highscore = document.querySelector('.highscore');

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
    // document.querySelector('.body-guess').style.backgroundColor = "black";
    document.querySelector('.guess').value = "";
    console.log("heloo players")

}
document.getElementById("again-btn-guess").addEventListener("click", againeplay);

document.querySelector(".turnoffthewindow").addEventListener("click", () => {
    console.log("click");
    window.close();

});

// Guess Game functionality //
const bottomDivCover2 = document.getElementById("bottom-div-cover2");
const bottomDivCover3 = document.getElementById("bottom-div-cover3");
const guessgame = document.querySelector(".body-guess");

document.getElementById("guess-game-min-btn").addEventListener("click", () => {
    guessgame.style.cssText = "width: 254px; height: 35px; top: 98vh; left: 270px; border-radius: 0;z-index:222";
    guessgame.classList.add("transition");
    setTimeout(() => {
        guessgame.style.display = "none";
    }, 120);
});

bottomDivCover2.addEventListener("click", (e) => {
    const isBoxShadowSet = bottomDivCover2.style.boxShadow !== '';
    if (isBoxShadowSet) {
        bottomDivCover2.style.boxShadow = '';
     } else {
        bottomDivCover2.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.7) 1px 0px 1px inset";
     }
   
    if (guessgame.style.display === "none") {
        guessgame.style.cssText = "width: 800px; height: 600px; top: 40%; left: 50%; z-index:2;";
        diceGame.style.zIndex = "1";
        mydivid.style.zIndex="1";
        // startWindowpopup.style.zIndex="11";
        // mydiv.style.display = "none";
        toggleHidden();
    } else {
        guessgame.style.display = "none";
    }
});

function expandGuessGame() {

    document.getElementById("bottom-div-cover2").style.display = "flex";
    if (guessgame.style.width = "254px") {
        guessgame.style.width = "800px";
        guessgame.style.height = "600px";
        guessgame.style.left = "50%";
        guessgame.style.top = "40%";
    }
    // mydivid.style.display = "none";

    guessgame.style.display = "block";
    againeplay();
    toggleStartWindowPopup();
}
document.getElementById("guess-number-game").addEventListener("click", expandGuessGame);
document.getElementById("games-dropdown-guess-number").addEventListener("click", expandGuessGame);
////////////////////////////////
// Dice Game //
const diceGame = document.querySelector(".bodyy");
document.getElementById("dice-dropdown-game").addEventListener("click", () => {
    console.log("dicegame")
    diceGame.style.display = "block";
    diceGame.style.left = "30%";
    diceGame.style.top = "12%";
    toggleStartWindowPopup();
    // bottomdivCover.style.display = "none";
    // mydiv.style.display = "none";
    toggleHidden();
});

document.getElementById("dice-game").addEventListener("click", () => {
    diceGame.style.display = "block";
    diceGame.style.left = "30%";
    diceGame.style.top = "12%";
    toggleStartWindowPopup();
    // bottomdivCover.style.display = "none";
    // mydivid.style.display = "none";
    toggleHidden();

});

document.getElementById("dice-game-min-btn").addEventListener("click", () => {
 
    diceGame.style.cssText = "width: 254px; height: 35px; top: 98vh; left: 250px ; border-radius: 0;z-index:222";
    diceGame.classList.add("transition");
    setTimeout(() => {
        diceGame.style.display = "none";
    }, 290);
});

bottomDivCover3.addEventListener("click", () => {
    const isBoxShadowSet = bottomDivCover3.style.boxShadow !== '';
    if (isBoxShadowSet) {
        bottomDivCover3.style.boxShadow = '';
     } else {
        bottomDivCover3.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.7) 1px 0px 1px inset";
     }
   
    if (diceGame.style.display === "none") {
        diceGame.style.cssText = "width: 800px; height: 600px; left: 30%; top:12%;z-index:2";
        guessgame.style.zIndex="1";
        mydivid.style.zIndex="1";
        // mydiv.style.display = "none";
        toggleHidden();
    } else {
        diceGame.style.display = "none";
    }
});

function expanddiceGame() {
    document.getElementById("bottom-div-cover3").style.display = "flex";
    if (diceGame.style.width = "254px") {
        diceGame.style.width = "800px";
        diceGame.style.height = "600px";
        diceGame.style.left = "30%";
        diceGame.style.top = "12%";
    }
    // mydivid.style.display = "none";
    toggleHidden();
    diceGame.style.display = "block";
    // againeplay();
    toggleStartWindowPopup();
}
document.getElementById("dice-dropdown-game").addEventListener("click", expanddiceGame);
document.getElementById("dice-game").addEventListener("click", expanddiceGame);

document.querySelector(".body_guess-close").addEventListener("click", () => {
    document.querySelector('.body-guess').style.display = "none";
    document.getElementById("bottom-div-cover2").style.display = "none";

});
document.querySelector(".body_piggame-close").addEventListener("click", () => {
    document.querySelector('.bodyy').style.display = "none";
    bottomDivCover3.style.display = "none";
});

// /////////////
// const element = document.getElementById("bottom-div-cover2");bottomDivCover2
// document.getElementById("demo").innerHTML = 
console.log(bottomDivCover3.offsetLeft);
bottomdivCover.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.7) 1px 0px 1px inset";
bottomdivCover.addEventListener('click', () => {
  const isBoxShadowSet = bottomdivCover.style.boxShadow !== '';
       if (isBoxShadowSet) {
        bottomdivCover.style.boxShadow = '';
        } else {
        bottomdivCover.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.7) 1px 0px 1px inset";
        }
      
    const toggleHidden = () => mydivid.classList.toggle('hidden');
    const setStyles = (width, height, top, left, overflow, boxShadow) => {
        mydivid.style.width = width;
        mydivid.style.height = height;
        mydivid.style.top = top;
        mydivid.style.left = left;
        mydivid.style.overflow = overflow;
        // bottomdivCover.style.boxShadow = boxShadow;
        // bottomdivCover.style.boxShadow="rgba(0, 0, 0, 0.2) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.7) 1px 0px 1px inset";
        // startWindowpopup.style.zIndex="11";
        // mydivid.style.zIndex="0";
    };
    setStyles('254px', '35px', '98vh', '238px', 'hidden', 'rgba(0, 0, 0, 0.2) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.7) 1px 0px 1px inset');
    diceGame.style.zIndex = "1";
    guessgame.style.zIndex = "1";
    mydivid.style.zIndex = "2";
    toggleHidden();
    mydivid.style.overflow = 'auto';
    // mydivid.style.zIndex = '1';
    mydivid.classList.add('show-scroll', 'transition');

    setTimeout(() => {
        setStyles('800px', '600px', '50%', '50%', 'auto', '');
    }, 0.1);
});