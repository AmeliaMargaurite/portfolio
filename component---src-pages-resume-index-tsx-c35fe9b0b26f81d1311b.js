"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[153],{1027:function(e,t,a){a.d(t,{Z:function(){return l}});var s=a(5861),o=a(4687),n=a.n(o),i=a(7294),r=JSON.parse('{"projects":{"ind-appointment-checker":{"title":"IND Appointment Checker","slug":"ind-appointment-checker","img_src":"ind-checker","img_alt":"Screenshots of IND appointment checker desktop with mobile screenshot.","liveURL":"https://ind-checker.everlearning.com.au/","gitHubURL":"https://github.com/AmeliaMargaurite/ind_biometrics_appt_checker","bulletPoints":["View earliest available appointment at chosen locations","Multiple locations can be viewed at once to allow user to make an informed decision of where to book their appointment","Compared to IND website reduces number of clicks to view all necessary data"],"description":"Using IND data calls, shows the soonest available appointment from one or multiple locations, as well as all other appointments, in one easy view. Hosted with GitPages and Heroku.","skills":["Javascript","ExpressJS","NodeJS","Web Components","SCSS","GitHub"],"challenge":"During the process of obtaining my verblijftsvergunningen I needed to book two separate IND appointments, for Biometrics and for Document collection. My nearest IND desk was Amsterdam however there seemed to never be any appointments available. To check per desk on the IND website, you must first choose the desk, then click through a calendar, month by month to see whats available. Then if you want to check another desk, you do this process again. My options were to do this multiple times per day in the hopes of stumbling onto an appointment (as was the suggestion from multiple groups of people in the same position), or find another solution.","goal":"<ul class=\'withPadding\'><li>Discover how to obtain appointment data from IND</li><li>Create an ordered list by time of all appointments across any/all IND desks (per appointment type)</li><li>Ability to choose location(s) to soonest appointment, as well as all other appointments</li><li>Ability to choose number of people appointment is for, per IND limits</li><li>Extend appointment checker to other appointment options (Return Visa, Endorsement Sticker)</li></ul>","process":"Initially I created the solution for this in the console of the IND\'s website itself. I looked through the Network processes and found how the site called an API for data, and started manually calling it myself. Within half an hour of starting I had a short function which called the API\'s and created an ordered list of the four desks I was willing to visit, with appointments ordered by time. I had also in that time booked an upcoming appointment which I was able to see became available during this process.<br/><br/>I wanted to expand on this mini-project, and moved on to making a website for others to use. I was able to find the location codes for each desk, and which desks were available for each appointment type, by looking through the Network calls, and searching the IND website.<br/><br/>As I knew this would be a fairly simple build, I opted to use plain Javascript and Web Components, along with SCSS. I tried to build all parts as efficiently as possible, making it a fast and easy to use site.<br/><br/>I set up an express server on Heroku\'s free tier to do the calls to the API, and hosted the frontend using GitPages. All revisions of the site build were pushed to a GitHub repo.","results":"I have successfully used this page over a few months to secure various appointments. I find it easier to navigate and have a broader view of the situation than using the IND site itself. <br/><br/>The main differences are the ability to see much more information in one glance. This allows one to make an educated decision on where to book an appointment, as well as when. <br/><br/>During the Biometrics appointment you can nominate which desk to collect your documents from, or they automatically go to a specific desk depending on your location. This could mean you <strong>have</strong> to attend, say, Amsterdam, even if there are no appointments available in the next three months. While other desks have plenty of appointments available. <br/><br/>I used this information to make the choice of nominating to go to Den Haag, a further distance away, but I was able to complete my process much faster than if I had kept with the allocated desks.","reflection":"I am overall pleased with the function of the website. The UI design is very basic, while still being usable. It is not the most interesting design, however it is meant to be a utility first and foremost. In saying that, it could definitely use a redesign.<br/><br/>I have now allowed others to use the site and have had good responses so far.","icon":"appointment"},"walkers-creek":{"title":"Web Store","slug":"walkers-creek","img_src":"walkers-creek","img_alt":"Screenshots of Walkers Creek front end website in desktop and mobile, with admin site mobile screenshot.","liveURL":"https://www.walkerscreek.com.au","gitHubURL":"https://github.com/AmeliaMargaurite/walkers-creek","bulletPoints":["Uses mix of PHP and Javascript Web Components with Stripe payment system","Frontend site calls MySQL database for products and home page layout","Database response is saved to session to reduce unnecessary calls","On page change checks if any database changes have happened, recalls and resaves products and layout data if true"],"description":"Retail store front for purchases, uses Stripe API and MySql database with Laravel backend. Following best practices, this is a fast, responsive site. Detects changes to database and updates on next page load.","skills":["PHP","Javascript","Laravel","MySql","Web Components","SCSS","cPanel","GitHub"],"challenge":"Customer approached me to build a website for their small business in Australia. They currently create camping storage bags and sell them in their car upholstery business. However they are now ready to move having an online store solely for selling these products. They did not want to go with a ready-made solution, such as Squarespace or Shopify, given they wanted strong SEO and finer control over the website than these products provided.<br/><br/>Originally only a shop front was wanted, as products would change or be added so infrequently that they preferred I do those updates. However as the build progressed, and their business leapt forward they realised they were often creating brand new products, and changing existing ones, that it was decided they needed a backend to update themselves. As I know they\'re very busy people I knew the backend had to be built as simply as possible (to them) so that it took care of most of the work, and the users only had to fill in a minimal of information.","goal":"<ul class=\'withPadding\'><li>Clean, fast website</li><li>Use best practices for SEO and accessibility</li><li>Site should be optomised for speed, letting the server do the heavy lifting for the user</li><li>Front end needs to get product data from database, and cache this to keep the site fast and limit calls</li><li>In case of updates to the database, site needs to check if it\'s currently cached data is older than the latest update</li><li>Use Stripe API to handle actual processing of payments</li><li>Backend needs to show purchase details, shipping info etc for business owners</li></ul>","process":"As I wanted many parts of the frontend to be modular I decided to build this in PHP with Javascript Web Components. Originally this was meant to be a static site with all of the products hard coded, on the understanding that the products were very rarely going to change. As such, each products data was held in a separate file, referencing the Stripe API via their unique ID. Once it became clear that the customer would indeed need a backend they could update, all of this product data was moved to a MySQL database. They then use a url/slug prop to associate the Stripe product with the database product. This allows easy switching between test and live mode, as well as most updates to products in test mode moving across to live mode.","results":"","reflection":"","icon":"shop"},"task-manager":{"title":"Task Manager with Calendar","slug":"task-manager","img_src":"task-manager","img_alt":"Screenshots of task manager mobile view, superimposed on mobile phone held by hand","liveURL":"https://task-manager.everlearning.com.au/login/?username=guest&password=GuestPassword1!","gitHubURL":"https://github.com/AmeliaMargaurite/everlearning-task-manager","description":"Decluttered task manager with calendar view to plan projects. Allows for multiple users, multiple projects, categorising, CRUD operations. cPanel hosting with MySql database.","bulletPoints":["Created decluttered task and project manager","Calendar view shows tasks allocated to that day.","Uses: MySQL database, PHP for site build and database requests","Uses: Javascript Web Components, Drag and Drop API, Fetch API, Touch Events"],"skills":["PHP","MySql","Javascript","Web Components","cPanel","GitHub","SCSS"],"challenge":"Create a task manager which suited best my needs","goal":"<ul class=\'withPadding\'><li>Create decluttered task manager with kanban boards and calendar</li><li>Focus on clean, minimal design.</li><li>Show only options which I personally require (due date, categories etc) </li><li>Usable across mobile and desktop with same login and data</li></ul>","process":"This is a rebuild of an earlier project I\'d made using Preact and saving all data to localStorage. After creating this first proof of concept, I wanted to rebuild it with a database behind it for persistance between devices.<br/><br/>I decided to work with PHP and MySQL. I have used PHP a good amount over the years and feel comfortable with it, however this was my first real use of building a MySQL database from scratch. I have learned a lot through this process, and am still learning, about how best to make calls to the database, cacheing that data and so forth.<br/><br/>I am still in the process of adding a rich text editor to make the task descriptions more helpful. Most especially styles like lists. For now I have added a small \'code\' button to allow writing out HTML elements manually, until I have finished building the editor.","results":"The task manager works and I often use it to plan out next steps of various projects. The calendar still needs some work, however. It does function, and one can edit task details from the calendar. However it\'s not as user-friendly as I would like. On mobile it goes to the first week of the month, even if the current date is later than this. I am always on the lookout for these types of functionalities to improve.","reflection":"Overall the project solves the challenge it set out to. There are still parts which are works in progress, and more additions I would like to add. If (when) I rework it I would likely created a Laravel project instead as I\'ve now had some experience with this and appreciate what it has to offer","icon":"tasks"},"discord-bot":{"title":"Discord Bot","slug":"discord-bot","img_src":"discord-bot","img_alt":"Image of wooden robot like toy with screw for an antenna.","gitHubURL":"https://github.com/AmeliaMargaurite/botty-bot-bot","bulletPoints":["Interactive bot for casual chat server","Responds to commands for random \'gifts\', puns etc","Has admin CRUD abilities to change saved data on the server used in responses "],"description":"Multi-purpose bot for Discord chat with user interaction and CRUD abilities","skills":["NodeJS","Javascript","Bash","cPanel","GitHub"],"challenge":"A Discord chatroom required a multi-purpose bot which would take commands from users and take action.","goal":"<ul class=\'withPadding\'> <li>Timer function - allow users to set a timer and the bot notify them when the timer is complete. </li><li>Timer functionality to also include user being able to stop the timer, other users able to join the timer, and to set a timer in the future.</li><li>Fun commands such as \'roulette\' and \'slap\' to which the bot responds with a random response to the requested user</li><li>CRUD operations for admin users to update the responses for \'roulette\', \'slap\' and \'pun\'</li></ul>","process":"I had to first familiarise myself with DiscordJS documentation, learn how to listen for particular user messages and respond. I then created a switch statement with possible commands which responds via separate functions.<br/><br/>Once the bot was live and being used with basic functionality, I set up a second instance of the bot to test updates and new features with. This required me to change my deployment methods from pushing straight to a git instance on my own server to pushing to a repositories folder and using a cPanel.yml file to copy only selected files and folders to the bots node folder. This made pushing tested changes to the \'live\' bot much faster and more reliable. At this time I also utilised the nodemon package to deploy the bot, which would detect changes to the build and restart mostly seemlessly.<br/><br/>In the beginning the pre-written responses for \'roulette\' and such were saved in separate json files in the src folder. A random number is generated to select a response to send back to the user. As I started working on admin CRUD operations I realised that these files needed to live further up the folder tree so that when changes were push via git commands, the files weren\'t overwritten. For this I was able to use NodeJS\' functionality.","results":"This project gave me the chance to dive into a few new territories, such as cPanel.yml files, NodeJS and a lot of work using the cPanel terminal. All of which I have since used to improve other projects.<br/><br/>The bot itself is used on a daily basis on an international Discord server with approximately 180 members.<br/><br/>Updates are easy to implement, and if errors happen (rare these days), the error is caught and the bot can continue working. An error message is then sent to a separate server, and to myself, to action.","reflection":"My abilities to bug-hunt, refactor and learn new technologies were strengthened through the process of building this bot. Setting up the CI/CD in the form of cPanel.yml and git services sped up pushing improvements and testing. This has since spread into my other projects, greatly improving development and learning in general.","icon":"discord"}}}');function l(){var e=(0,i.useState)(null),t=e[0],a=e[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,s.Z)(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(r?null==r?void 0:r.projects:null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),t}},9792:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return b}});var s=a(7294),o=a(3159);function n(e){var t=e.className,a=e.children,o=e.last;return s.createElement("section",{className:"resume__section "+t+" "+(o?"last":"")},a)}var i=a(7906);function r(){return s.createElement(n,{className:"hobbies"},s.createElement(i.x,{type:"h3"},"Hobbies"),s.createElement("span",{className:"content__wrapper"},s.createElement("ul",{className:"withPadding"},s.createElement("li",null,"Making things -- eg knitting, crochet, programming"),s.createElement("li",null,"Reading -- science fiction, horror"),s.createElement("li",null,"Gaming -- PC, Switch, board games, jigsaws, cards"))))}var l=a(5924),c=[{company:"Compare the Market Australia",jobTitle:"Junior Web Developer",timeRange:"Jan 2021 -- Mar 2022",skills:["AGILE","GITHUB","REACT","TYPESCRIPT","STYLED COMPONENTS","FIGMA"],responsibilities:["Following Figma UI designs, built with teammate reusable React pages and components including flow management and data structuring on large questionnaire form","Built new, and refactored existing, reusable React user input and typography components ","Improved usability and form completability by correcting user inputs used and removed arbitrary dropdown value limits","Transitioned to fully remote and moved overseas"]},{company:"Small Business Owner",jobTitle:"Artist & Web developer",timeRange:"Dec 2014 -- Jan 2021",skills:["PHP","WORDPRESS","JAVASCRIPT","FIGMA","ADOBE PHOTOSHOP","ILLUSTRATOR","SCSS","GITHUB"],responsibilities:["Worked with customer to design and build WordPress website with WooCommerce store","Improved business reach following SEO best practises, ensuring customer site shown on first page of Google searches regarding their products and services in Australia","Created digital and physical portrait artworks based on customer supplied data","Designed and conducted art classes for adults and children, online and in person"]},{company:"Defence Bank Australia",jobTitle:"Bank Manager",timeRange:"Jul 2013 -- Dec 2014",responsibilities:["Improved staff knowledge about legal requirements, quality assurance, and product knowledge through group and one-on-one training","Improved quality of data recording, correct identification collection, and providing of correct products through research and implementing structured procedures","Reduced time wastage on reoccurring processes by creating simple, reusable document templates","Involved in hiring and training new staff member"]}];function d(){var e=(0,s.useContext)(l._);return s.createElement(n,{className:"work-history"},s.createElement(i.x,{type:"h3"},"Work History"),s.createElement("span",{className:"content__wrapper"},c.map((function(t,a){return s.createElement(h,{key:a,job:t,skillsToHighlight:e})}))))}var h=function(e){var t=e.job,a=e.skillsToHighlight;return s.createElement("div",{className:"jobs-section"},s.createElement("span",{className:"title__wrapper"},s.createElement(i.x,{type:"h4",className:"company"},t.company),s.createElement(i.x,{type:"p",bold:!0,className:"job-title"},t.jobTitle),s.createElement("p",{className:"time-range"},t.timeRange)),(null==t?void 0:t.skills)&&s.createElement("ul",{className:"skills"},null==t?void 0:t.skills.map((function(e,o){var n=!!a&&(null==a?void 0:a.includes(e.toLowerCase()));return s.createElement("li",{key:o,className:n?"highlight":""},e,null!=t&&t.skills&&o<(null==t?void 0:t.skills.length)-1?",":"")}))),s.createElement("ul",{className:"responsibilities withPadding"},t.responsibilities.map((function(e,t){return s.createElement("li",{key:t},e)}))))},u=a(1082),m=a(1027);function p(){var e=(0,m.Z)(),t=e?Object.keys(e):null,a=(0,s.useContext)(l._);return s.createElement(n,{className:"side-projects"},s.createElement(i.x,{type:"h3"},"Side Projects"," ",s.createElement(u.rU,{to:"/projects",className:"side-projects__link"},"View all")),s.createElement("span",{className:"content__wrapper"},t?t.map((function(t,o){var n,i=null!==(n=null==e?void 0:e[t])&&void 0!==n?n:null;return i&&o<3?s.createElement(g,Object.assign({key:o},i,{skillsToHighlight:a})):s.createElement(s.Fragment,{key:o})})):s.createElement("p",null,"No projects found")))}var g=function(e){var t=e.title,a=(e.slug,e.liveURL),o=e.gitHubURL,n=(e.description,e.bulletPoints),r=e.skills,l=e.skillsToHighlight;return s.createElement("div",{className:"project"},s.createElement(i.x,{type:"h4",className:"project__name"},t),s.createElement("span",{className:"links__wrapper"},s.createElement("p",{className:"project__link"},s.createElement("a",{href:a,target:"_blank"},s.createElement("span",{className:"icon live "}),"Live site")),s.createElement("p",{className:"project__link"},s.createElement("a",{href:o,target:"_blank"},s.createElement("span",{className:"icon github "}),"GitHub Repo"))),s.createElement("ul",{className:"skills"},r.map((function(e,t){var a=!!l&&(null==l?void 0:l.includes(e.toLowerCase()));return s.createElement("li",{key:t,className:a?"highlight":""},e,r&&t<r.length-1?",":"")}))),s.createElement("ul",{className:"withPadding"},n&&n.map((function(e,t){return s.createElement("li",{key:t},e)}))))};function b(){return s.createElement(o.A,{className:"resume paper"},s.createElement(d,null),s.createElement("span",{className:"divider"}),s.createElement(p,null),s.createElement("span",{className:"divider"}),s.createElement(r,null))}var f=function(){return s.createElement("title",null,"Resume")}}}]);
//# sourceMappingURL=component---src-pages-resume-index-tsx-c35fe9b0b26f81d1311b.js.map