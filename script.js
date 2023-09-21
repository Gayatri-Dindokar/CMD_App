const userinput = document.querySelector(".input");
const main = document.querySelector(".main");
const help = document.querySelector(".help");
const prompt = document.querySelector(".prompt");
const enterCommand = document.querySelector(".enterCommand");
const container = document.querySelector(".container");
const paths = document.querySelectorAll(".paths");
const inputField = document.querySelectorAll(".input-field");
const containerFluid = document.querySelector(".container-fluid");

const path = () => {

    const newpath = document.createElement("div");
    newpath.classList.add("path");
    newpath.innerHTML = `<p class="paths  newgeneratedpath">
    P<span style="color: #c01a20">6</span>:\\user\\<input type="text" class="input input-field"  autocomplete="off" />
</p>`;
    prompt.insertAdjacentElement("beforeend", newpath);

    // After adding the element to the DOM, focus the input field
    const inputField = newpath.querySelector(".input-field");
    inputField.focus();
};
container.addEventListener("keyup", function (e) {
    // console.log(e.target);
    if (e.target.matches(".input")) {
        const userinput = e.target;
        if (e.key === "Enter") {
            e.preventDefault();

            e.target.setAttribute("readonly", true);
            if (userinput.value == "") {
                console.log("enter command");
                path();
            } else if (userinput.value == "help") {
                showHelp();
                path();
            } else if (userinput.value == "home") {
                showHome();
                path();
                console.log("home");
            } else if (userinput.value == "projects") {
                showProjects();
                console.log("projects");
                path();
            } else if (userinput.value == "about") {
                showAbout();
                console.log("about");
                path();
            } else if (userinput.value == "get quote") {
                get_quote();
            } else if (userinput.value == "jobs") {
                showJobs();
                console.log("jobs");
                path();
            } else if (userinput.value == "contact") {
                showContact();
                path();
            } else {
                addcommand();
                path();
            }
            // path();
        }
    }
});
console.log(userinput.value);
//if user enter other command which is not involve above addcommand will call//
const addcommand = () => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
 <p> This Command not found  </p>
 `;
    prompt.insertAdjacentElement("beforeend", note);
};

//when user type help command//
const showHelp = () => {
    const helps = document.createElement("div");
    helps.classList.add("helps");
    helps.innerHTML = `
  <p>--use keywords to navigate</p>
 <ul>
 <li>home</li>
 <li>projects</li>
 <li>about</li>
 <li>contact</li>
 <li>get quote</li>
 <li>jobs</li>
 </ul>
`;
    prompt.insertAdjacentElement("beforeend", helps);
};

//when user type home command//
const showHome = () => {
    const home = document.createElement("div");
    home.classList.add("home");
    home.innerHTML = `<dl>
    <dt>UI ENGINEERING</dt>
    <dd>
        UI/UX Development with cutting-edge technologies from HTML5/CSS3/JS to the latest versions of Angular/Node/React and of course an unrivaled focus on Optimization, SEO, x-Browser & Responsiveness.
    </dd>

    <dt>FULL STACK</dt>
    <dd>
        Backend development with open-source LAMP stack, flexible CMS's & robust eCommerce platforms for powerful, secure, reliable yet faster websites & web applications.
    </dd>

    <dt>MOBILE APPS</dt>
    <dd>
        Intuitive, fast and quick mobile apps with hybrid frameworks for iOS and Android phones for the mobile-first approach kind of businesses where time to market is the key.
    </dd>
</dl>

        `;
    prompt.insertAdjacentElement("beforeend", home);
    // path();
};

//when user type about command//
const showAbout = () => {
    const about = document.createElement("div");
    about.classList.add("about");
    about.innerHTML = `
    <p>ABOUT US what we do:</p>
                    <div class="aboutwrap">
                        <p>Pixel6 is an end to end digital solutions agency that helps you strategize and consults you to transform yourself into a digital powerhouse to service your clients better. We are a UI/UX focused web & mobile application development
                            studio, based out of Pune, India and been working with clients, SME's, UX companies around the world to deliver world-class:</p>
                        <ul>
                            <li>Websites - eCommerce, Social Networking, Travel Portals, Portfolios,Blogs</li>
                            <li> Web Applications - Analytics, Banking & Financial, Employee Management </li>
                            <li>Mobile Apps - Hybrid apps for Android and iOS</li>
                        </ul>
                        <p>Pixel6 is a young team of professionals having varied expertise including research, design and development. We are design fanatics, creative thinkers, business strategists and digital enthusiasts. We have built our clientele with
                            reputed companies on board like: IDFC Institute, Jocata Financial Advisory & Technology Services, Lollypop UI/UX Design Studio, 12 Steps Marketing, BigClic and many more. Pixel6 is a team of multidisciplinary digital product
                            development experts focused on UI/UX Design, Mobile/App and Web Application and development. We extend our services to the design, development and marketing departments of growing start ups and established organizations the
                            same.
                        </p>
                    </div>`;
    prompt.insertAdjacentElement("beforeend", about);
};

//when user type projects command//
const showProjects = () => {
    const projects = document.createElement("div");

    projects.classList.add("projects");
    projects.innerHTML = `
    <dl>
    <dt>Projects, Brands & Clients:</dt>
    <dd>
        <div class="projectwrap">
            <div class="pdiv">
                <h4>Mberry</h4>
                <p class="pwrap">The Miracle Berry Shop: miracle berries transform the sour taste of food, veggies, and fruits to sweetness without compromising on the calories. Charles wanted a Shopify-driven eCommerce shop to sell his patented miracle berry products. We gave his consumers a sweet online experience.</p>
            </div>
            <br>
            <div class="pdiv projects-para">
                <h4>IDFC INSTITUTE</h4>
                <p class="pwrap">IDFC Institute is a research institute set up by IDFC Limited to investigate the political, economic, and spatial dimensions of India. They needed an elegant yet customizable CMS-driven website for the Institute, and Pixel6 delivered the portal in due course.</p>
            </div>
            <br>
            <div class="pdiv projects-para">
                <h4>12 STEPS MARKETING</h4>
                <p class="pwrap">12 Steps Marketing is an online marketing and SEO firm based out of LA, USA. They serve medical practices, clinics, and treatment centers and go by the motto "OUR ONLY OBSESSION IS YOUR COMPANY'S GROWTH." We do follow their business mantra and have been assisting 12StepsMarketing.com platform to develop and deliver compelling online user experiences to the medical industry they serve for more than 5 years now. Vince is happy, and that makes us happy 🙂</p>
            </div>
        </div>
    </dd>
</dl>

 `;
    prompt.insertAdjacentElement("beforeend", projects);
};

//when user type contact command//
const showContact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    contact.innerHTML = `
    <dl>
    
     <dt class="contact-location">Contact Details:</dt>
    <dd>
        <p>E-mail:</p>
        <dd>info@pixel6.co</dd>
        <p>Phone:</p>
        <dd>+91 88 05 06 05 06</dd>
    </dd>
    <dt class="contact-location">Location:</dt>
    <dd>
        <p>V18, Balewadi High Street, Baner, Pune, Maharashtra India 411045</p>
    </dd>
</dl>
`;
    prompt.insertAdjacentElement("beforeend", contact);
    // userinput.appendChild(note);
};

//when user type jobs command//
const showJobs = () => {
    const jobs = document.createElement("div");
    jobs.classList.add("jobs");
    jobs.innerHTML = `
    <p>JOBS AT PIXEL6</p>
    <div class="jobs-px">
                        <p>We are always looking for fresh Engineering / MCA guys with passion for growth and keen on learning. If you are a 2020/21/22 pass-out, good at web development technologies and are you interested in working in Pixel6, please do
                            fill and submit the following form.</p>
                        <p>The job Software Trainee Engineer</p>
                        <ol>
                            <li>Education: BE/BTECH/MCA/MCS </li>
                            <li>Location: Baner, Pune</li>
                            <li> Skills: Javascript/PHP/Angular</li>
                        </ol><br>
                       
                        </div> `;
    prompt.insertAdjacentElement("beforeend", jobs);
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
               <p> <span>></span><input type="number" id="phoneInput" class="input_getquote"> </p>
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
           <p><span> > </span>Project Brief</p>
           <p style="display:flex;"><span>></span><textarea id="Project-Brief" class="input_getquote textarea" cols="80" rows="5"></textarea>  </p>
      </div> 

       <div id="question7" style="display: none;">
           <p><span> > </span>Are you sure you want to submit? (y/n)</p>
          <p><span>></span><input type="text" id="submitInput" class="input_getquote"  ></p>
        
       </div>

           <div id="question8" style="display: none;">
              <p class='message'><span>></span><input type="text" id="messageYes" value="your response is succesfully submmited" class="input_getquote"></p>
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
    prompt.insertAdjacentElement("beforeend", que1);
    const inputFieldquotes = que1.querySelector(".input_getquote");
    inputFieldquotes.focus();

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
    console.log("dghdjgdrgfg");

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

    // after 'enter' key is press  focuses the next quetions//
    document.getElementById("nameInput").addEventListener("keyup", function (event) {
        let nameInput = document.getElementById("nameInput");
        let store = document.getElementById("nameInput").value;
        if (store.trim() == "") {
            alert("Enter a Name");
        }
        if (event.key === "Enter") {
            if (store.length > 0) {
                let spli = store.split(" ");
                //    console.log(spli);
                const fullNamePattern = /^[A-Za-z\s']+$/;
                if (!store.match(fullNamePattern)) {
                    alert("invalid pattern only alphabets are allowed");
                    nameInput.value = "";
                } else {
                    showNextQuestion();
                    document.getElementById(questions[currentIndex]).querySelector("input").focus();
                }
            }
        }
    });
    document.getElementById("emailInput").addEventListener("keyup", function (event) {
        let email = document.getElementById("emailInput").value;
        let emailInput = document.getElementById("emailInput");
        if (email.trim() == "") {
            alert("Enter a Email");
        }
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (event.key === "Enter") {
            if (!email.match(emailPattern)) {
                console.log("incorrect email");
                alert("Incorrect Pattern Please Enter Correct Email Id");
                emailInput.value = "";
            } else {
                showNextQuestion();
                document.getElementById(questions[currentIndex]).querySelector("input").focus();
            }
        }
    });
    document.getElementById("phoneInput").addEventListener("keyup", function (event) {
        let phoneInput = document.getElementById("phoneInput");
        let phoneNo = document.getElementById("phoneInput").value;
        if (event.key === "Enter") {
            phoneNo = phoneNo.replace(/\D/g, "");
            if (phoneNo.trim() == "") {
                alert("Enter a Number");
            } else if ((!/^\d{10}$/.test(phoneNo))) {
                alert("Enter a valid  10 digits number");
                phoneInput.value = "";
            } else {
                showNextQuestion();
                document.getElementById(questions[currentIndex]).querySelector("input").focus();
            }
        }
    });
    document.getElementById("requireInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            showNextQuestion();
            document.getElementById(questions[currentIndex]).querySelector("input").focus();
        }
    });

    document.getElementById("whenInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            showNextQuestion();
            document.getElementById(questions[currentIndex]).querySelector(".textarea").focus();
        }
    });
    document.getElementById("Project-Brief").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            showNextQuestion();
            document.getElementById(questions[currentIndex]).querySelector("input").focus();
        }
    });
    document.getElementById("submitInput").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
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

    document.getElementById("messageNo").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
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
    document.getElementById("resubmission").addEventListener("keyup", function (event) {
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

// moving mydiv container//
var isDragging = false;
var offsetX, offsetY;
var mydiv = document.getElementById("mydiv");
document.getElementById("mydivheader").addEventListener("dblclick", function () {
    isDragging = !isDragging;
    if (isDragging) {
        mydivheader.style.cursor = "move";
    } else {
        mydivheader.style.cursor = "auto";
    }
});
mydiv.onmousedown = function (e) {
    e.preventDefault();

    if (isDragging) {
        offsetX = e.clientX - mydiv.getBoundingClientRect().left;
        offsetY = e.clientY - mydiv.getBoundingClientRect().top;
        document.onmousemove = moveElement;
        document.onmouseup = stopDragging;
    }
};

function moveElement(e) {

    if (e.clientX - offsetX > 0) {
        mydiv.style.left = e.clientX - offsetX + "px";
    }
    if ((e.clientY - offsetY) > 200) {
        mydiv.style.top = e.clientY - offsetY + "px";
    }
}

function stopDragging() {
    document.onmousemove = null;
    document.onmouseup = null;
}
//min-max functionality
const minMaxBtn = document.getElementById("minmaxbtn");
const bottomDiv = document.querySelector(".bottom-div");
const maincon = document.querySelector(".maincon");
const resize = document.getElementById("resize");
const restore = document.getElementById("restore");
const resizeBigscreen = document.querySelector(".resize-bigscreen");
const crossbtn = document.querySelector(".crossbtn");
const cmdImg = document.getElementById("cmd");
const btnclose = document.querySelector(".btnclose");
const crossBtnBigScreen = document.getElementById("crossBtnBigScreen");
const bigScreenMinMaxBtn = document.getElementById("bigscreen-minmaxbtn");
const  doubleRestore = document.getElementById("double-restore");
const mainconWidth = maincon.offsetWidth;
const mainconHeight = maincon.offsetHeight;


minMaxBtn.addEventListener("click", () => {
    // maincon.style.display = "none";
    bottomDiv.style.display = "flex";
    maincon.classList.add('fadeout');
    // bottomDiv.style.display = "bl";
    // maincon.classList.add('fadeOutBottomLeft');


})
resizeBigscreen.addEventListener("click", () => {
    // maincon.style.display = "block";
    bottomDiv.style.display = "none";
    maincon.classList.remove('fadeout');
   maincon.classList.add('fadeInAnimation');

})

resize.addEventListener("click", () => {
    maincon.style.width = "100%";
    maincon.style.height = "100vh";
    resize.style.display = 'none';
    restore.style.display = "block";
    crossBtnBigScreen .style.display = "block";
    btnclose.style.display = "none";
    bigScreenMinMaxBtn.style.display ="block";
    minMaxBtn.style.display="none";

})

restore.addEventListener("click", () => {
    maincon.style.width = "800px";
    maincon.style.height = "600px";


    resize.style.display = 'block';
    restore.style.display = "none";
})


function closeContainer() {
    // maincon.style.left='-700px';
    // maincon.style.display = 'none';
    maincon.classList.add('fadeout');
    maincon.classList.remove('fadeInAnimation');
    bottomDiv.style.display = "none";
}
function openContainer() {
    maincon.classList.add('fadeInAnimation');
    maincon.style.display = 'block';
    bottomDiv.style.display = "none";
    maincon.classList.remove('fadeout');
  

}
crossbtn.addEventListener("click", () => {
    bottomDiv.style.display = "none";

});
function mainconNone(){
    maincon.style.display = 'none';
    bottomDiv.style.display ="none";
}
btnclose.addEventListener("click",closeContainer);
cmdImg.addEventListener("click",openContainer)
crossBtnBigScreen.addEventListener("click",mainconNone);
bigScreenMinMaxBtn.addEventListener("click",()=>{
    maincon.style.display = 'none';
    bottomDiv.style.display ="flex";
    doubleRestore.style.display ="block";
    resizeBigscreen.style.display="none";

});
doubleRestore.addEventListener("click",()=>{
    maincon.classList.add('fadeInAnimation');
    maincon.style.display = 'block';
    console.log("hii")
})
