// import showHtmlModel from './model/showHtml.js'
import * as showHtmlModel from './model/showHtml.js';

document.addEventListener('click',function(event){
    console.log(event.target);
})
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


function clearContainer(){
    paths.insertAdjacentElement= "" ;
}


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
        })
        // const inputField = document.querySelectorAll(".input_getquote");
        // inputField.forEach(input=>{
        //     input.focus();
        // })

})

path();


// console.log(userinput.value);
//if user enter other command which is not involve above addcommand will call//
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
              <p><span>></span> <input type="text" id="nameInput" class="input_getquote"   autocomplete="off" required pattern="/^[A-Za-z\s]*$/"> </p>
       </div>

          <div id="question2" style="display: none;">
             <p><span> > </span> what is your email?</p>
             <p><span>></span> <input type="email" id="emailInput" class="input_getquote" autocomplete="off"> </p>
      </div>

          <div id="question3" style="display: none;">
              <p><span> > </span>what is your phone no?</p>
               <p> <span>></span><input type="number"    maxlength="10" id="phoneInput" class="input_getquote num"> </p>
          </div>

         <div id="question4" style="display: none;">
           <p><span> > </span>What Do You Require?</p>
         <p> <span>></span><input type="text" id="requireInput" class="input_getquote"> </p>
       </div>

          <div id="question5" style="display: none;">
            <p><span> > </span>When Do You Require?</p>
             <p><span>></span><input type="date" id="whenInput" class="input_getquote"> </p>
       </div>

          <div id="question6" style="display: none;">
           <p><span > > </span>Project Brief</p>
           <p style="display:flex;"><span style="padding-top: 4px; margin-right: 5px;">></span><textarea id="Project-Brief" class="input_getquote textarea" cols="80"></textarea>  </p>
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

    // displayOutputContainer.insertAdjacentElement("beforeend", que1);
    // const inputFieldquotes = que1.querySelectorAll(".input_getquote");

    // inputFieldquotes.focus();

    // document.addEventListener("click", () => {
    //     inputFieldquotes.forEach((inputField) => {

    //         inputField.focus();

    //     });

    // })

    displayOutputContainer.insertAdjacentElement("beforeend", que1);
    // const inputFieldsQuotes = que1.querySelectorAll(".input_getquote");

    // // Focus the first input field
    // if (inputFieldsQuotes.length > 0) {
    //     inputFieldsQuotes[0].focus();
    // }

    // // Add a click event listener to each input field
    // inputFieldsQuotes.forEach((inputField) => {
    //     inputField.addEventListener("click", () => {
    //         inputField.focus();
    //     });
    // });

    // document.addEventListener("click", (event) => {
    //     // Check if the clicked element is an input field with the class "input_getquote"
    //     if (event.target.classList.contains("input_getquote")) {
    //         event.target.focus();
    //     }
    // });

    const inputFieldsQuotes = que1.querySelectorAll(".input_getquote");

    // Focus the first input field
    if (inputFieldsQuotes.length > 0) {
        inputFieldsQuotes[0].focus();
    }

    // Add a click event listener to each input field
    inputFieldsQuotes.forEach((inputField) => {
        inputField.addEventListener("click", () => {
            inputField.focus();
        });
    });

    document.addEventListener("click", (event) => {
        // Check if the clicked element is an input field with the class "input_getquote"
        if (event.target.classList.contains("input_getquote")) {
            event.target.focus();
        } else {
            // If clicked outside of an input field, focus the first input field
            if (inputFieldsQuotes.length > 0) {
                // inputFieldsQuotes[0].focus();
                focusOnInputsOfCurrentQuestion()
            }
        }
    });

    function focusOnInputsOfCurrentQuestion() {
        const currentQuestion = document.getElementById(questions[currentIndex]);
        const inputFields = currentQuestion.querySelectorAll(".input_getquote");

        if (inputFields.length > 0) {
            inputFields[0].focus();
        }
    }








    //we created divs of quetions and put it into an array to get one by one que//
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
    // console.log("dghdjgdrgfg");

    //display block the quetions
    function showQuestion(index) {
        document.getElementById(questions[index]).style.display = "block";


    }
    //for next quetions
    function showNextQuestion() {
        if (currentIndex < questions.length) {
            currentIndex++;
            if (currentIndex < questions.length) {
                showQuestion(currentIndex);
            }
        }
    }

    function exitFunction() {
        path();
        // Handle the "exit" input here, e.g., show a different path or perform some other action
        console.log("User typed 'exit' in input field");
    }


    // after 'enter' key is press  focuses the next quetions//
    document.getElementById("nameInput").addEventListener("keyup", function(event) {
        let nameInput = document.getElementById("nameInput");
        let store = document.getElementById("nameInput").value;



        if (event.key === "Enter") {

            if (store.trim() == "") {
                alert("Enter a Name");
            }
            // else if (store.toLowerCase() === "exit") { // Check if input is "exit"
            //     exitFunction(); // Call the exit function
            // }
            else if (store.length > 0) {
                let spli = store.split(" ");
                //    console.log(spli);
                const fullNamePattern = /^[A-Za-z\s']+$/;
                if (!store.match(fullNamePattern)) {
                    alert("invalid pattern only alphabets are allowed");
                    nameInput.value = "";
                } else {
                    showNextQuestion();
                    focusOnInputsOfCurrentQuestion();
                    // document.getElementById(questions[currentIndex]).querySelector("input").focus();
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
            // else if (email.toLowerCase() === "exit") { // Check if input is "exit"
            //     exitFunction(); // Call the exit function
            // }
            const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!email.match(emailPattern)) {
                console.log("incorrect email");
                alert("Incorrect Pattern Please Enter Correct Email Id");
                emailInput.value = "";
            } else {
                showNextQuestion();
                focusOnInputsOfCurrentQuestion();
                // document.getElementById(questions[currentIndex]).querySelector("input").focus();
            }
        }
    });


    document.getElementById("phoneInput").addEventListener("keydown", function(event) {
        let phoneInput = document.getElementById("phoneInput");
        console.log(phoneInput.value.length, 'phoneNo.length');
        if (phoneInput.value.length > 9) {

            phoneInput.value = phoneInput.value.slice(0, 10);
            alert("Enter a valid  10 digits number");
            phoneInput.value = "";
        }


        if (event.key === "Enter") {
            // if(!(/^[0-9]+$/.test(phoneInput.value))){
            //     alert("jhgfjhg");
            //      phoneInput.value = "";
            // }
            phoneInput.value = phoneInput.value.replace(/\D/g, "");
            if (phoneInput.value.trim() == "") {
                alert("Enter a Number");
            }
            //  else if (phoneInput.value.toLowerCase() === "exit") { // Check if input is "exit"
            //     exitFunction(); // Call the exit function
            // }
            else if (phoneInput.value.length < 9) {
                alert("enter a valid number with at least 10 digit");
                phoneInput.value = "";
            }

            else if ((!/^\d{10}$/.test(phoneInput.value)) ) {
                alert("Enter a valid  10 digits number");
                phoneInput.value = "";
                
               } 
            else {
                showNextQuestion();
                focusOnInputsOfCurrentQuestion();
                // document.getElementById(questions[currentIndex]).querySelector("input").focus();
            }
        }
    });
    document.getElementById("requireInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const requireInput = document.getElementById("requireInput").value;
            if (requireInput.trim().toLowerCase() === "exit") {
                exitFunction();
            } else {
                showNextQuestion();
                document.getElementById(questions[currentIndex]).querySelector("input").focus();
            }
        }
    });

    document.getElementById("whenInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const whenInput = document.getElementById("whenInput").value;
            if (whenInput.trim().toLowerCase() === "exit") {
                exitFunction();
            } else {
                showNextQuestion();
                document.getElementById(questions[currentIndex]).querySelector(".textarea").focus();
            }
        }
    });
    document.getElementById("Project-Brief").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const projectBriefInput = document.getElementById("Project-Brief").value;
            if (projectBriefInput.trim().toLowerCase() === "exit") {
                exitFunction();
            } else
                showNextQuestion();
            document.getElementById(questions[currentIndex]).querySelector("input").focus();
        }
    });
    document.getElementById("submitInput").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const submit = document.getElementById("submitInput").value;
            if (submit.trim().toLowerCase() === "exit") {
                exitFunction();
            }
            const conform = document.getElementById("submitInput").value;
            if (conform == "y") {
                submitInput.setAttribute("readonly", true);
                showNextQuestion();
                document.getElementById(questions[currentIndex]).querySelector("input").focus();
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
                // console.log("hjghd")
                showQuestion(8);
                document.getElementById(questions[8]).querySelector("input").focus();
            }
        }
    });

    document.getElementById("messageNo").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const message = document.getElementById("messageNo").value;
            if (message.trim().toLowerCase() === "exit") {
                exitFunction();
            }
            const conform = document.getElementById("messageNo").value;
            if (conform == "y") {
                messageNo.setAttribute("readonly", true);
                console.log("quit");
                showQuestion(9);
                document.getElementById(questions[9]).querySelector("input").focus();
                path();
                console.log("help");
            } else if (conform == "n") {
                messageNo.setAttribute("readonly", true);
                showQuestion(10);
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
                document.getElementById(questions[11]).querySelector("input").focus();
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
                // showNextQuestion();
                // document.getElementById(questions[currentIndex]).querySelector('input').focus();
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

function stopDragging() {
    document.onmousemove = null;
    document.onmouseup = null;
}
//min-max functionality
const minMaxBtn = document.getElementById("minmaxbtn");
const bottomDiv = document.querySelector(".bottom-div");
// const maincon = document.querySelector(".maincon");
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
// mydivheader.addEventListener("click",()=>{
//    if(mydivid.style.width === "254px"){
//     console.log("content");
// mydiv.style.width ="800px";
// mydiv.style.height = "600px";
// mydiv.style.left = "50%";
// mydiv.style.top = "50%";
//    }
// })
// let isMinimisez = true;




minMaxBtn.addEventListener("click", () => {
    mydivid.style.width = "254px";
    mydivid.style.height = "35px";
    mydivid.style.top = "98vh";
    mydivid.style.left = "127px";
    mydivheader.classList.add("color");
    mydivid.classList.add("hidden-scroll");
    mydivid.classList.add("transition");
    resizeAtMinSize.style.display = "block";
    resize.style.display = "none";
    mydiv.addEventListener("click",function(e){
        if(e.target.matches('#mydivheader')){
            
            mydivid.style.width = "800px";
            mydivid.style.height = "600px";
            mydivid.style.left = "50%";
            mydivid.style.top = "50%";
            
        } 
    })
  
  
   
    
    mydiv.addEventListener('mousedown', function(e) {
        if (e.button === 0) {
            isDown = false;
            offset = [
                mydiv.offsetLeft - e.clientX,
                mydiv.offsetTop - e.clientY
            ];
        }
    }, true);

    // mydiv.style.position = "fixed";
    // isDown = false;
    // minMaxBtn.style.display ="none";
    //    if(isMinimisez){
    //     setTimeout(()=>{
    //         mydiv.style.display = "none";
    //         bottomDiv.style.display = "flex";

    //     },100);
    //      isMinimisez = false;
    //    }
    // maincon.style.display = "none";
    //   bottomDiv.style.display = "flex";

    // hiddenNav.style.display ="block";

    //  maincon.style.position ="absolute";

    // mydiv.style.position = "fixed";

    //  maincon.classList.add('fadeout')
    // maincon.classList.add('fadeout');
    // bottomDiv.style.display = "bl";
    // maincon.classList.add('fadeOutBottomLeft');


});



resizeBigscreen.addEventListener("click", () => {
    maincon.style.display = "block";
    bottomDiv.style.display = "none";
    mydivid.style.width = "800px";
    mydivid.style.height = "600px";
    mydivid.style.left = "50%";
    mydivid.style.top = "50%";
    mydivid.classList.add("show-scroll");

    // maincon.classList.remove('fadeout');
    // maincon.classList.add('fadeInAnimation');

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


resizeAtMinSize.addEventListener("click",()=>{
    mydivid.style.width = "800px";
    mydivid.style.height = "600px";
    mydivid.style.left = "50%";
    mydivid.style.top = "50%";
    resizeAtMinSize.style.display = "none";
    resize.style.display = "block";
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


}

// function resetDisplayContainer() {
//     // Get a reference to the displayOutputContainer
//     const displayOutputContainer = document.getElementById("displayOutputContainer");

// //    const displayOutputContainer = document.querySelector(".display_output");
   
//     // Clone and reappend all existing elements back to the container
//     const existingElements = Array.from(displayOutputContainer.children);
//     existingElements.forEach(function(element) {
//     const clonedElement = element.cloneNode(true);
//     displayOutputContainer.appendChild(clonedElement);
//     });
//    }
function openContainer() {
    location.reload();
    // maincon.classList.add('fadeInAnimation');
    maincon.style.display = 'block';
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
    // clearContainer();
    // resetDisplayContainer();
 
    //hello
//    const firstPath = displayOutputContainer.firstElementChild;
//    displayOutputContainer.innerHTML="";
//    if(firstPath){
//     displayOutputContainer.appendChild(firstPath);
  
//     const inputFields = firstPath.querySelectorAll("input[type='text']"); 
//     inputFields.forEach(function(inputField) { 
//         inputField.value = ""; 
//         inputField.focus();
//      });
//      const firstInputField = firstPath.querySelector("input[type='text']");
//      if(firstInputField){
//         firstInputField .focus();
//      }

//    }
//    const allPaths = document.querySelectorAll(".newgeneratedpath");
//    for(let i=1; i<allPaths.length;i++){
// allPaths[i].remove();
// const inputField = allPaths[0].querySelector(".input-field");
// inputField.value="";
// setTimeout(()=>{
//    inputField.focus();
// },0);
// console.log(allPaths);
//     }

   
    minMaxBtn.style.display="block";
    maincon.classList.remove('fadeout');
}




crossbtn.addEventListener("click", () => {
    bottomDiv.style.display = "none";

});

function mainconNone() {
    maincon.style.display = 'none';
    bottomDiv.style.display = "none";
}
btnclose.addEventListener("click", closeContainer);
cmdImg.addEventListener("click", openContainer)
crossBtnBigScreen.addEventListener("click", mainconNone);
bigScreenMinMaxBtn.addEventListener("click", () => {
    // maincon.style.display = 'none';
    // bottomDiv.style.display = "flex";
    // doubleRestore.style.display = "block";
    // resizeBigscreen.style.display = "none";
    restore.style.display = "none";
    resize.style.display = "block";
    mydivid.style.width = "254px";
    mydivid.style.height = "35px";
    mydivid.style.top = "98vh";
    mydivid.style.left = "127px";
    mydivid.classList.add('minimized');
    mydivid.classList.add("hidden-scroll");
    resizeAtMinSize.style.display = "block";
    resize.style.display = "none";
    mydiv.addEventListener('mousedown', function(e) {
        if (e.button === 0) {
            isDown = false;
            offset = [
                mydiv.offsetLeft - e.clientX,
                mydiv.offsetTop - e.clientY
            ];
        }
    }, true);
    // bigScreenMinMaxBtn.style.display ="none";
});
doubleRestore.addEventListener("click", () => {
    // maincon.classList.add('fadeInAnimation');
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
        // mydiv.style.left = (mousePosition.x + offset[0]) + 'px';
        // mydiv.style.top = (mousePosition.y + offset[1]) + 'px';
        var pageWidth = window.innerWidth;
        var pageHeight = window.innerHeight;
        // console.log(pageWidth,pageHeight);
        // console.log((mousePosition.x + offset[0]),'(mousePosition.x + offset[0])');
        if ((mousePosition.x + offset[0]) > 0) {
            mydiv.style.left = (mousePosition.x + offset[0]) + 'px';

        }
        mydiv.style.top = (mousePosition.y + offset[1]) + 'px';
        if ((mousePosition.y + offset[1]) > (pageHeight - 600)) {

        }
    }
}, true);




const recy = document.getElementById("recyclebin");
recy.addEventListener("click", () => {
    alert("recycle bin is empty");
})