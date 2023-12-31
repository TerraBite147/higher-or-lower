# __Higher Or Lower__
![Higher or Lower logo ](/README/Images/logo.png)

## __Welcome to the Higher or Lower!__ 

This interactive web-based game challenges players to test their intuition and card-guessing skills. The objective is straightforward: accumulate 50 points by correctly guessing whether the next card will be higher or lower in value than the current card. The game features scoring, point banking, and a winner's page, making it an engaging and enjoyable experience for players of all ages. Have fun and see if you can reach the goal of 50 points!

Live Site : [Higher or Lower](https://terrabite147.github.io/higher-or-lower/)

![AmIResponsive Mockup](/README/Images/am-i-responsive.jpg)


## __Contents__
- [__Higher Or Lower__](#higher-or-lower)
  - [__Welcome to the Higher or Lower!__](#welcome-to-the-higher-or-lower)
  - [__Contents__](#contents)
  - [__Features__](#features)
    - [__Existing Features__](#existing-features)
    - [__Features Left to Implement__](#features-left-to-implement)
  - [__User Experience (UX)__](#user-experience-ux)
  - [__Design__](#design)
    - [__Colour Scheme__](#colour-scheme)
    - [__Typography__](#typography)
    - [__Imagery__](#imagery)
    - [__Wireframes__](#wireframes)
  - [__Testing__](#testing)
    - [__Validator Testing__](#validator-testing)
    - [__Performance Testing__](#performance-testing)
    - [__Feature Testing__](#feature-testing)
  - [__Technologies Used__](#technologies-used)
    - [__Languages Used__](#languages-used)
    - [__Frameworks, Libraries \& Programs Used__](#frameworks-libraries--programs-used)
  - [__Deployment__](#deployment)
    - [**GitHub Pages**](#github-pages)
    - [**Forking the GitHub Repository**](#forking-the-github-repository)
    - [**Making a Local Clone**](#making-a-local-clone)
  - [__Credits__](#credits)
    - [__Content__](#content)
    - [__Media__](#media)



## __Features__ 

### __Existing Features__

- __Navigation Bar__

  - A simple navigation bar that displays the Higher or Lower Logo that acts as a link to the home page. 

![NAV Bar](/README/Images/nav-bar.png)

- __The landing page image__

  - The landing includes the title and options that allow the user to start the game, check the rules and report and issue. 
  - This section introduces the user to Higher or Lower with a simple and clear design.

![home Page](/README/Images/home.png)

- __The Game__
  
  - When a user clicks the new game button the screen will change to the game window.
  - In the center a card will be displayed and the user will be asked to guess if the next card will be higher or lower than the current card.
  - The goal of the game to to get to 50 points with the least amount of guesses.
  - Guessing correctly will grant them a streak point, guessing correctly multiple times in a row will double the streak points. For example 1 correct guess will give 1 streak point, 2 correct will give 2, 3 correct will give 4 ect.
  - The user will always have the option to bank the points to secure them.
  - If the user guesses wrong the streak will reset back to 0 without the option to bank.
  - In the Top on the window the banked points will be displayed.
  - In the right of the banked points in the top center of the window the current streak points will be displayed.

![Game window](README/Images/game.png)

- __Winner page__
  
  - When the user reaches 50 or more points the user will be greeted with a congratulations page.
  - The page will display how many points were banked and in how many turns.
  - An option to play a new game in present on the page.
  - If the user presses the X button in the top right the user will be redirected to the home page.
  
![Winner Window](README/Images/winner.png)

- __Rules__

  - When a user clicks the rules button the rules window will appear.
  - The rules of the game have be clearly explained.
  - An option to start a new game is present on the page so the user can immediately start playing rather than going but to the home page.
  - If the user presses the X button in the top right the user will be redirected to the home page.

![Rules Window](README/Images/rules.png)

- __The Footer__ 

  - The footer section includes links to the relevant social media sites for Higher or Lower. The links will open to a new tab to allow easy navigation for the user. 
  - The footer also includes a disclaimer and credits.

![Footer](/README/Images/footer.png)

- __Report and Issue__

  - This page will allow the user to send any issues they may have come across while playing the game.
  - The page includes a field for the user's name and email address and text box to describe the issue.

![Report an issue](/README/Images/report-an-issue.png)

### __Features Left to Implement__

- A username to record previous scores.
- A leader board to compare the user's personal best with other users'
- 404 Page for when the user enters an invalid URL.

## __User Experience (UX)__

-   ### **User stories**

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site and have fun playing the Card game.
        2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content, including on how play the game. 
        3. As a First Time Visitor, I want to locate the site creator's social media links to see their following on social media to determine how trusted and known they are.

    -   #### Returning Visitor Goals

        - As a Returning Visitor I want to Attempt to beat the challenge in fewer guesses.
        - As a Returning Visitor, I want to get in contact with the site creator with any questions I may have about the site.

    -   #### Frequent User Goals
  
        - As a Frequent User, I want to try and beat my personal best score on the challenge.

-   ## __Design__
  -   ### Colour Scheme
      -   The three main colours used are black white and Red.
          -   Red
              -   ![#d62424](https://placehold.it/150x40/d62424/FFFFFF?text=000000) was used for the buttons and the logo.
          -   White 
              -   ![#FFFFFF](https://placehold.it/150x40/FFFFFF/000000?text=000000)  was used for the background.
          -   Black 
              -   ![#000000](https://placehold.it/150x40/000000/FFFFFF?text=000000) was used for the text and footer
  
      -   The colours were inspired by a [deck of cards](https://en.wikipedia.org/wiki/Playing_card#/media/File:AcetoFive.JPG).
          -   The colours are unmistakably associated with cards and the game of cards.
          -   Simple and easy to read.
          -   Recognizable and memorable.
      -   This colour scheme was used to keep the site simple and easy to use.
  -   ### Typography
  -   The [Saira Condensed](https://fonts.google.com/specimen/Saira+Condensed?query=saira) font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Saira Condensed is a clean font used frequently in programming, so it is both attractive and appropriate.
  -   ### Imagery
  -   The card images used are designed to be simple and easily recognizable to the user.
  -   The higher or lower logo is a simple design that is easily recognizable and memorable.
  -   ### Wireframes
  -   Figma was used to create the wireframes during the design process.      
  -   Desktop Home Page Wireframe 
  ![View](/README/wireframes-images/home-page.png)
  -   Desktop Rules Page Wireframe 
  ![View](/README/wireframes-images/rules-page.png)
  -   Desktop Game Page Wireframe 
  ![View](/README/wireframes-images/game-page.png)
  -   Desktop Winner Page Wireframe 
  ![View](/README/wireframes-images/winner-page.png)
  -   Mobile Home Page Wireframe 
  ![View](/README/wireframes-images/mobile-home-page.png)
  -   Mobile Rules Page Wireframe 
  ![View](/README/wireframes-images/mobile-rules-page.png)
  -   Mobile Game Page Wireframe 
  ![View](/README/wireframes-images/mobile-game-page.png)
  -   Mobile Winner Page Wireframe 
  ![View](/README/wireframes-images/mobile-winner-page.png)   

## __Testing__


### __Validator Testing__ 

- HTML
  - [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
    - index.html : Document checking completed. No errors or warnings to show.
    - game.html : Document checking completed. No errors or warnings to show.
- CSS
  - [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)
    - style.css : Congratulations! No Error Found.
- JavaScript 
  - [JSHint](https://jshint.com/)
    - script.js : No issues found to show.
- Wave
  - [Wave](https://wave.webaim.org/)
    - index.html : 0 Errors, 0 Contrast Errors, 2 Alerts, 5 Features, 10 Structural Elements, 9 ARIA
      - The 2 Alerts are caused by having redundant links in the header one for the Title and one for the logo both directing to index.html.
   
    - game.html : 0 Errors, 0 Contrast Errors, 2 Alerts, 3 Features, 7 Structural Elements, 11 ARIA
      - The 2 Alerts are caused by having redundant links in the home button directing to index.html and new game button to load the game.html.

### __Performance Testing__
Chrome DevTools Lighthouse was used to test Performance, Accessibility, Best Practices and SEO. All tests performed in the 90-100 green score

Desktop
  - [index.html](README/light-house-results/desktop-index.pdf) : Performance 100, Accessibility 100, Best Practices 100, SEO 100
  - [game.html](README/light-house-results/desktop-game.pdf) : Performance 100, Accessibility 100, Best Practices 100, SEO 100
  
Mobile
- [index.html](README/light-house-results/mobile-index.pdf) : Performance 99, Accessibility 100, Best Practices 100, SEO 100
- [game.html](README/light-house-results/mobile-game.pdf) : Performance 99, Accessibility 100, Best Practices 100, SEO 100


### __Feature Testing__

**TEST** | **ACTION** | **EXPECTATION** | **RESULT** 
----------|----------|----------|----------
index.html header logo | Click logo | Redirect to index.html | As expected
index.html footer social media icons | Click icons | Open new tab to relevant social media page | As expected
index.html Rules button | Click Rules | Rules Modal will appear | As expected
index.html exit rules button | Click X | Rules Modal will close | As expected
index.html Report an issue button | Click Report an issue | Report an issue Modal will appear | As expected
index.html exit Report an issue button | Click X | Report an issue Modal will close | As expected
index.html submit Report an issue button | Click submit | Thank you popup will appear and after 5 seconds redirect to index.html | As expected
index.html New game button | Click New game | Redirect to game.html | As expected
index.html responsiveness width 320px  | Resize window to 320px opening rules and report issue modals | The page content will fit clearly in the window | As expected
index.html responsiveness width 768px  | Resize window to 768px opening rules and report issue modals | The page content will fit clearly in the window | As expected
index.html responsiveness width 1024px  | Resize window to 1024px opening rules and report issue modals | The page content will fit clearly in the window | As expected
index.html responsiveness width 1440px  | Resize window to 1440px opening rules and report issue modals | The page content will fit clearly in the window | As expected
game.html header logo | Click logo | Redirect to index.html | As expected
game.html footer social media icons | Click icons | Open new tab to relevant social media page | As expected
game.html home button | Click home | Redirect to index.html | As expected
game.html card image | Click next card | new card will appear | As expected
game.html higher button | Click higher | new card will appear | As expected
game.html lower button | Click lower | new card will appear | As expected
game.html Streak points | Click higher | if card is higher streak points will increase if card is lower streak will reset to 0 | As expected
game.html Streak points | Click lower | if card is lower streak points will increase if card is higher streak will reset to 0 | As expected
game.html streak points | correctly guess 2 cards in a row | streak points will double | As expected
game.html bank points button | Click bank points | banked points will increase by streak points value streak will reset to 0 | As expected
game.html winner | banked points = 50 | winner page will appear | As expected
game.html winner | click new game button | returns to game.html reset streak and bank and turn counter | As expected
game.html responsiveness width 320px  | Resize window to 320px | The page content will fit clearly in the window | As expected
game.html responsiveness width 768px  | Resize window to 768px | The page content will fit clearly in the window | As expected
game.html responsiveness width 1024px  | Resize window to 1024px | The page content will fit clearly in the window | As expected
game.html responsiveness width 1440px  | Resize window to 1440px | The page content will fit clearly in the window | As expected
game.html winner modal responsiveness width 320px  | Resize window to 320px | The page content will fit clearly in the window | As expected
game.html winner modal responsiveness width 768px  | Resize window to 768px | The page content will fit clearly in the window | As expected
game.html winner modal responsiveness width 1024px  | Resize window to 1024px | The page content will fit clearly in the window | As expected
game.html winner modal responsiveness width 1440px  | Resize window to 1440px | The page content will fit clearly in the window | As expected








## __Technologies Used__

### __Languages Used__

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)

-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### __Frameworks, Libraries & Programs Used__

1. [Google Fonts:](https://fonts.google.com/)
    - Google Fonts was used to import the Saira Condensed font into the style.css file which is used on all pages throughout the project.

2. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

3. [Git:](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

4. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.

5. [Figma:](https://www.figma.com/)
    - Figma was used to create the wireframes during the design process.

6. [Chrome DevTools:](https://developer.chrome.com/docs/devtools/)
    - Chrome DevTools was used to consistently check the site in terms of responsivity, performance, accessibility, best practice and SEO.

## __Deployment__

### **GitHub Pages**

The project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the [Higher or Lower GitHub Repository](https://github.com/TerraBite147/higher-or-lower)
2. At the top of the Repository, locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Main Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://terrabite147.github.io/higher-or-lower/) in the "GitHub Pages" section.

### **Forking the GitHub Repository**

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:

1. Log in to GitHub and locate the [Higher or Lower GitHub Repository](https://github.com/TerraBite147/higher-or-lower)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### **Making a Local Clone**

1. Log in to GitHub and locate the [Higher or Lower GitHub Repository](https://github.com/TerraBite147/higher-or-lower)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/TerraBite147/higher-or-lower
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/TerraBite147/higher-or-lower
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## __Credits__ 


### __Content__ 

- Kevin Powell's youtube tutorial on dialog https://youtu.be/TAB_v6yBXIE?si=yBL_Eyxm_FZwzFfG
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
- Code Institute Readme template was used as a template for this readme [Code Institute](https://github.com/Code-Institute-Org/ci-full-template)
- - PiaNotes Readme layout was used as a template for deployment process [PiaNotes](https://github.com/AlexaH88/pianotes/blob/main/README.md)

### __Media__

- [Logo](https://www.vecteezy.com/vector-art/8552552-up-down-arrows-icon-inside-the-circle-upward-downward-business-logo-two-way-arrow-symbol-vector-for-your-website-design-logo-app-ui-illustration-eps-10)
- [Cards](https://code.google.com/archive/p/vector-playing-cards/downloads)
