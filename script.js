const userinput = document.querySelector(".input");
const main = document.querySelector(".main");
const help = document.querySelector(".help");
const prompt = document.querySelector(".prompt");
const enterCommand = document.querySelector(".enterCommand");
const container = document.querySelector(".container");
const paths = document.querySelectorAll(".paths");
const inputField = document.querySelectorAll(".input-field");
const containerFluid = document.querySelector(".container-fluid");
const body = document.querySelector("body");
const fulldiv = document.querySelector(".fulldiv");

const path = () => {
    const newpath = document.createElement("div");
    newpath.classList.add("path");
    newpath.innerHTML = `<p class="paths  newgeneratedpath">
    P<span style="color: #c01a20">6</span>:\\user\\<input type="text" class="input input-field"  autocomplete="off" />
</p>`;
    prompt.insertAdjacentElement("beforeend", newpath);

    // After adding the element to the DOM, focus the input field
    const inputField = newpath.querySelector('.input-field');
    inputField.focus();
};
container.addEventListener("keyup", function(e) {
    // console.log(e.target);
    if (e.target.matches(".input")) {
        const userinput = e.target;
        if (e.key === "Enter") {
            e.preventDefault();
            e.target.setAttribute('disabled', true);
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
                //showget_quote();
                // document.getElementById('question1').style.display = 'block';
                // showQuestion(0);
                console.log("qote");
                // path();
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
const addcommand = () => {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
 <p> This Command not found  </p>
 `;
    prompt.insertAdjacentElement("beforeend", note);
    // userinput.appendChild(note);
};
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
 <li>get_quote</li>
 <li>jobs</li>
 </ul>
`;
    prompt.insertAdjacentElement("beforeend", helps);
};
const showHome = () => {
    const home = document.createElement("div");
    home.classList.add("home");
    home.innerHTML = `<p>we build brands,experiences,solutions</p>
 <p>...with ux driven technology and innovations</p>
    <div class="homediv ">
        <h4>UI ENGINEERING</h4>
        <div class="wrap" style=" height: 50px;
        width: 360px;
        text-align: justify;">
            <p>UI/UX Development with cutting edge technologies from HTML5/CSS3/JS to the latest versions of Angular/Node/React and of course an unrivalled focus on Optimisation, SEO, x-Browser & Responsiveness.</p>
        </div>
    </div>
        <div class=" homediv ">
        <h4>FULL STACK</h4>

        <div class="wrap" style=" height: 50px;
        width: 360px;
        text-align: justify;">
            <p>Backend development with open source LAMP stack, flexible CMS's & robust eCommerce platforms for powerful, secure, reliable yet faster websites & web applications.
            </p>
        </div>

    </div>
    <div class="homediv ">
        <h4>MOBILE APPS</h4>
        <div class="wrap" style=" height: 50px;
        width: 360px;
        text-align: justify;">
            <p>Intuitive, fast and quick mobile apps with hybrid frameworks for iOS and Android phones for the mobile-first approach kind of businesses where time to market is the key
            </p>
        </div>
        `;
    prompt.insertAdjacentElement("beforeend", home);
    // path();
};
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
const showProjects = () => {
    const projects = document.createElement("div");

    projects.classList.add("projects");
    projects.innerHTML = `
    <ul>
    <p><span style="color:red;">the projects,, brands & clients, we are proud to showcase.</span></p>
    <div class="projectwrap">
        <div class="pdiv">
            <li>
                <h4>Mberry,</h4>
                <p class="pwrap">The Miracle Berry Shop: miracle berries transform the sour test of food,veggies and fruits to sweetness without compromising on the calories chareles wanted a shofify driven eCommerce shop to sell his patended miracle berry
                    products we gave his consumers a sweet online experience</p>
            </li>
        </div><br>
        <div class="pdiv">
            <li>
                <h4>IDFC INSTITUTE :</h4>
                <p class="pwrap">IDFC Institute is a Research institute setup by IDFC Limited to investigate the political, economic & spatial dimensions of India. They needed an elegant yet customizable CMS driven website for the Institute and Pixel6 delivered
                    the portal in due course.</p>
            </li>
        </div><br>
        <div class="pdiv">
            <li>
                <h4>12 STEPS MARKETING:</h4>
                <p class="pwrap">12 Steps Marketing is an online marketing and SEO firm based out of LA, USA. They serve medical practices, clinics and treatment centers and go by the motto “OUR ONLY OBSESSION IS YOUR COMPANY’S GROWTH”. We do follow their
                    business mantra and have been assisting 12StepsMarketing.com platform to develop and deliver compelling online user experiences to the medical industry they serve for more than 5 years now. Vince is happy and that makes
                    us happy 🙂</p>
            </li>
        </div>
    </div>
</ul>
   

 `;
    prompt.insertAdjacentElement("beforeend", projects);
};
const showContact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    contact.innerHTML = `
    <p>let's connect, we are just a click away.</p>
    <p>Details<br> E-mail us / info@pixel6.co <br>Phone / +91 88 05 06 05 06</p>
    <p>Location:<br> V18, Balewadi High Street, Baner, Pune, Maharashtra India 411045</p>`;
    prompt.insertAdjacentElement("beforeend", contact);
    // userinput.appendChild(note);
};
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
                        <p>
                            <a href="https://pixel6.co/software-trainee-engineer/" target="_blank"><span style="color: red; ">clear here to apply</span></a>
                        </p>
                        </div> `;
    prompt.insertAdjacentElement("beforeend", jobs);
    // userinput.appendChild(note);
};
const get_quote = () => {
    const que1 = document.createElement("div");
    que1.innerHTML = `
    <form>
         <div id="question1" class="que1">
                                <p class="q1"><span> > </span>what is your name?</p>
                                   <p><span>></span> <input type="text" id="nameInput" class="input_getquote"   autocomplete="off"> </p>
                            </div>
                            <div id="question2" style="display: none;">
                            <p><span> > </span> what is your email?</p>
                               <p><span>></span> <input type="email" id="emailInput" class="input_getquote"> </p>
                        </div>
                        <div id="question3" style="display: none;">
                        <p><span> > </span>what is your phone no?</p>
                           <p> <span>></span><input type="text" id="phoneInput" class="input_getquote"> </p>
                    </div>
                    <div id="question4" style="display: none;">
                        <p><span> > </span>What Do You Require?</p>
                           <p> <span>></span><input type="text" id="requireInput" class="input_getquote"> </p>
                    </div>
                    <div id="question5" style="display: none;">
                        <p><span> > </span>When Do You Require?</p>
                            <p><span>></span><input type="text" id="whenInput" class="input_getquote"> </p>
                    </div>
                    <div id="question6" style="display: none;">
                        <p><span> > </span>Project Brief</p>
                           <p style="display:flex;"><span>></span><textarea id="Project-Brief" class="input_getquote textarea" cols="80" rows="5"></textarea>  </p>
                    </div> 
                    <div id="question7" style="display: none;">
            <p><span> > </span>Are you sure you want to submit? (y/n)</p>
            <p><span>></span><input type="text" id="submitInput" class="input_getquote"></p>
        </div>
                    </form>`;
    prompt.insertAdjacentElement("beforeend", que1);
    const inputFieldquotes = que1.querySelector('.input_getquote');
    inputFieldquotes.focus();


    //we created divs of quetions and put it into an array to get one by one que//
    const questions = [
        'question1',
        'question2',
        'question3',
        'question4',
        'question5',
        'question6',
        'question7'
    ];
    let currentQuestionIndex = 0;

    function showQuestion(index) {
        document.getElementById(questions[index]).style.display = 'block';
    }
    // const quote = document.createElement("div");
    // quote.classList.add("quote");
    function showNextQuestion() {
        console.log("hello")
        if (currentQuestionIndex < questions.length) {
            // hideQuestion(currentQuestionIndex);
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(currentQuestionIndex);
            }
        }
    }
    document.getElementById('nameInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            showNextQuestion();
            document.getElementById(questions[currentQuestionIndex]).querySelector('input').focus();
        }
    });
    document.getElementById('emailInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            showNextQuestion();
            document.getElementById(questions[currentQuestionIndex]).querySelector('input').focus();
        }
    });
    document.getElementById('phoneInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            showNextQuestion();
            document.getElementById(questions[currentQuestionIndex]).querySelector('input').focus();
        }
    });
    document.getElementById('requireInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            showNextQuestion();
            document.getElementById(questions[currentQuestionIndex]).querySelector('input').focus();
        }
    });

    document.getElementById('whenInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            showNextQuestion();
            document.getElementById(questions[currentQuestionIndex]).querySelector('.textarea').focus();
        }
    });
    document.getElementById('Project-Brief').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            showNextQuestion();
            document.getElementById(questions[currentQuestionIndex]).querySelector('input').focus();


        }
    });
    document.getElementById('submitInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const conform = document.getElementById('submitInput').value;
            console.log(conform);

        }
    });

    // const question1 = document.querySelector('.que1');

    // prompt.insertAdjacentElement("beforeend", question1);

    // prompt.insertAdjacentElement("beforeend", que1);



}