console.log('5-9_1040');
var a = document.getElementsByTagName("DIV");
console.log(a);
var main = function(){
   console.log('hi :)');
   
   // jquery handles
   const // declare as constants
   // about
   $abt_me = $('#fc-me'),
   $abt_cv = $('#fc-cv'),
   $abt_pub = $('#fc-pub'),
   $abt_git = $('#fc-git'),
   $abt_display = $('#about-display'),
   //projects
   $home = $('#home-button'),
   $flexContainer = $('.flex-container'),
   $flexChild = $('.flex-child'),
   $p_icream = $('#fc-icecream'),
   $p_scr = $('#fc-scr'),
   $p_dnd = $('#fc-dnd'),
   $p_plant = $('#fc-plant'),
   $p_rl = $('#fc-rl'),
   $p_rsample = $('#fc-rsample'),
   $p_display= $('#project-display'),
   //contact
   $c_email = $('#fc-email'),
   $c_twitter = $('#fc-twitter'),
   $c_display = $('#contact-display');
   
   var onDisplay;
   
   
   function checkDisplay() {
      var winHeight = window.innerHeight, // grab window height / width
      winWidth = window.innerWidth;
      console.log('display check'); // notify of display check
      if (winWidth>winHeight) { //landscape display
         $flexContainer.css('flex-direction','row'); // items side-by-side
         $flexChild.removeClass('tall-child'); // get rid of vertical spacing, animations
         $flexChild.addClass('wide-child'); // add horizontal spacing, animations
      } else { // portrait (likely mobile
         $flexContainer.css('flex-direction','column'); // items on top of one another
         $flexChild.removeClass('wide-child'); 
         $flexChild.addClass('tall-child');
      }
   }
   
   function openDisplay(displayID, buttonID) {
      console.log(displayID,buttonID);
      if (displayID.css('display')=='none' || onDisplay!=buttonID) { // if project display not inline
         displayID.empty();
         console.log('display on');
         displayID.css('display','inline-block'); // display
         onDisplay = buttonID;
      }else {
         console.log('display off');
         displayID.css('display','none'); // otherwise, turn off
      }
      displayID.css('border-left','1vw solid '+buttonID.css('background').split(')')[0]+')'); // set color == to button color
   }
   
   
   checkDisplay(); // check display once at start
   window.addEventListener('resize', checkDisplay); // and whenever window resized
   
   // about section
   $abt_me.click(function(){
      openDisplay($abt_display,$abt_me);
      $abt_display.html(`<img src='./me.jpg' style='margin-top:2vh;left:0'></img><p>
                        Hi! My name's Michael, I live in New York City with my amazing partner,
                        Thiago, and our princess baby girl, Kaja! Professionally, I love working with topics
                        at the intersection of mental health and data science- such as using computational
                        methods to better understand behaviors like rumination. Outside of work stuff,
                        I love playing games, being lazy in the sun with a few friends (and Kaja), and all things music!<br>
                        Thanks for stopping by, feel free to reach out to say hi!</p>`);
      // add project display
      // inside: picture
      // short blurb:
   });
   $abt_me.click(); // open on load
   
   $abt_cv.click(function(){
      openDisplay($abt_display,$abt_cv);
      $abt_display.html(`<div class='flex-child'><a href='https://www.mdevans.me/evans_cv.pdf' download='evans_cv.pdf'>Click here to download (pdf)</a>&nbsp;:)
                        <br><br>
                        last updated: April, 2021`);
   });
   
   $abt_pub.click(function(){ // publications
      window.location.href = "https://www.mdevans.me/publications";
   });
   
   $abt_git.click(function(){ // git
      window.location.href = "https://github.com/evans2md";
   });
   
   // projects
   $p_scr.click(function(){
      openDisplay($p_display,$p_scr);
      $p_display.html(`<p style='text-align:center'>A light-weight python program designed to read electrodermal activity recordings (EDA/SCR/GSR) recorded by Biopac
                      acqKnowledge. Currently the desktop app is designed only for Mac Os, however the script can be
                      executed on Linux machines via terminal.</p><br>
                      <p>
                      FishFry is intended to be used in research studies that measure EDA responses. The expected input is a 2-channel
                      AcqKnowledge file, with one channel containing the SCR raw data, and a second channel denoting trial periods.
                      FishFry outputs a .csv with square root transformed trough-to-peak amplitudes for each trial, for each file (e.g. run),
                      for each folder (e.g. subject) within a specified directory.
                      </p><br>
                      <a href='https://github.com/evans2md/fishfry'> Check it out on git! </a>
                      `);
   });
   
   
   $p_icream.click(function(){ // on click
      openDisplay($p_display,$p_icream);
      $p_display.html(`<p style='text-align:center'>An ice cream themed gamified take on the Balloon Analog Risk Task<br>
                      (BART; Lejuez et al., 2002; <a href='http://www.impulsivity.org/measurement/BART'>www.impulsivity.org/measurement/BART</a>).</p>
                      <br><br>   
                      <p>
                      In the ice cream game, your goal is to sell as many scoops of ice scream as possible on each trial.
                      The more scoops you sell, the more points you earn (*YAY!*). But! Be careful! At ANY point, your
                      tower of ice cream may become too tall and fall over (*SPLAT!*), leaving you with NOTHING to sell
                      (0 points for that trial). You have a limited number of trials, but enough ice cream for up to 64 scoops
                      for each trial.</p><br>
                      <a href='https://www.mdevans.me/projects/icecream'> Try it out! </a>
                      `);
      });
   
   $p_dnd.click(function(){
      openDisplay($p_display,$p_dnd);
      $p_display.html(`<p>
                      A simple web-app for tracking health and spell slots for Dungeouns and Dragons. Information is saved to local storage for in-between sessions!</p>
                      <a href='https://mdevans.me/projects/spellslots'> Try it out! </a>`);    
   });
   
   $p_plant.click(function(){
      openDisplay($p_display, $p_plant);
      $p_display.html(`*Work in Progress! Open for collaboration!*
                      <br><br>
                      <p>
                      Plant Parent aims to be an open-source and free-to-use web app to help new plant parents acquire a green thumb. Using Machine Learning techniques,
                      Plant Parent will allow users to identify their plant species, have a tailored watering schedule that incorporates information such as light exposure
                      and local weather patterns, and a kawaii-themed display of all logged plants to show off to your friends!</p><br>
                      
                      <a href='https://github.com/evans2md/plantid'> Curious? Check out the git!<a>
                      `);
   });
   
   $p_rl.click(function(){
      openDisplay($p_display, $p_rl);
      $p_display.html(`A web-based multi-armed bandit styled reinforcement learning task used in my last study at NYU!
                      <br><br>
                      <p> In this task, participants play a game where on any
                      given trial, they need to choose between up to two different slot machines. Once chosen, participants are presented with a trial-unique image, as well as feed back
                      for how many points they won by choosing that machine. There are a total of 5 different slot machines, identifiable by their color. One machine always returns 0 points,
                      while two always return a fixed number of points, and the remaining two return have a 50% chance to return 0 points, or a lot of points.</p>
                      <br>
                      <p> After going through many
                      trials, participants then go through a surprise recognition memory test for all of the images shown throughout the task. Finally, participants are redirected to a set of
                      surveys that measure various aspects of mental health.</p>
                      <p> Curious to learn what I found? Feel free to message me!</p>
                      <br>
                      <a href='https://www.mdevans.me/projects/risk-sensitive-reinforcementLearning?sb=555'>Try it out!</a> (note: 1/3rd of original trials)`);
   });
   
   $p_rsample.click(function(){
      openDisplay($p_display, $p_rsample);
      $p_display.html(`*Work in Progress!*<br><br>
                      <p>                      
                      Here I demonstrate how to generate and analyze simulated data using R.<br> In this simulated experiment, we are exploring whether a treatment has an effect
                      on mindfulness (survey), impulsivity (survey), and risk appraisal behavior (behavioral task: my Ice Cream Game project). Data is generated using random sampling
                      from user-defined population parameters. <br>Analyses include hypothesis testing (e.g. comparing the treatment group to a control group), regression analyses,
                      generalized linear mixed-effects models, and factor analysis.
                      </p>
                      <br>
                      <a href='https://github.com/evans2md/r_sample'>Check it out on git!</a>`);
   });
   
   $c_email.click(function(){
      openDisplay($c_display, $c_email);
      $c_display.html(`<a href="mailto:evans2md@gmail.com">evans2md@gmail.com</a>`);
   });
   
   $c_twitter.click(function(){
      window.location.href = "https://twitter.com/MichaelD_Evans";
   });
   
   
   $home.click(function(){
      window.location.href = "https://mdevans.me";
   });
};



$(window).on('load', function() {
    main();
});