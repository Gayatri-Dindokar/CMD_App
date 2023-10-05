export const showHome = async function() {
  return `<div class="home">  <dl>
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
</dl></div>  `;
};

export const showHelp = async function() {
return `<div class="helps"> <p>--use keywords to navigate</p>
    <ul>
    <li>home</li>
    <li>projects</li>
    <li>about</li>
    <li>contact</li>
    <li>get quote</li>
    <li>jobs</li>
    </ul> </div>`;
    };

    export const showAbout = async function() {
        return `<div class="about">
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
            };
        
            export const showprojects = async function(){
                return `
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
            </dl> `
            }

            export const showContact = async function(){
                return ` 
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
           </dl> `
            }

            export const showJobs  = async function(){
                return `
                <div class ="jobs">
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
                       
                        </div> 
                        </div>`
                 
            }
        

    export const getQuote = async function() {
return `  <form>
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

</form>`
    }


 