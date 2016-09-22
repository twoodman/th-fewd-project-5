#### Project 5 for Treehouse FEWD Course
----


##### JS Rewrite on Sep 21st 2016


CSS to Sass Refactoring of Project 2

\+ Addition of mobile nav


To Run:
- Download or clone repo
- Open index.html in browser


Or:
- http://twoodman.github.io/th-fewd-project-5


*Un-minified files included in respective folders*


##### JS (and some Sass) Rewrite To Do:
----
- ✔️get rid of all jQuery, rewrite in vanilla JS/ES6
- ✔️remove scroll jack
- ✔️remove all IDs, replace with classes (unless used for internal anchors)


##### Original:
----

To Do:
- ✔️~~refactor css to sass~~
- ✔️~~make sure not to nest more than 3 deep~~
- ✔️~~remove a bunch of redundant media query styles~~
- ✔️~~refactor html/css to use BEM convention~~
- ✔️~~remove/replace unnecessary id selectors~~
- ✔️~~add gulp and compass to project~~
- ✔️~~get coffee~~
- ✔️~~clean up code~~
- ✔️~~remove js scroll jack? probably. or make it really fast.~~ | made it really fast
- ✔️~~ponder the complexities of a black hole~~ always
- ✔️~~make nav anchor hover cleaner~~
- ✔️~~minify styles and js (if keeping)? probably.~~
- ✔️~~go through Sass and modify for best practices (@includes first, mostly)~~
- ✔️~~add some extends to meet 'exceed expectations' requirements of project~~
- ✔️~~add visible/invisible comments to sass where appropriate~~
- ✔️~~add mobile nav per 'exceeds expectations'~~
- ✔️~~more coffee~~ x4
- ✔️~~put html through validator~~ | first validation: no errors
- ✔️~~put css through validator~~ | first validation: no errors
- ✔️~~put js through jshint?~~ | first validation: no errors


Exceeds Expectations:
- ✔️~~Create multiple subfolders (more than 3) for organizing styles.~~
- ✔️~~Create multiple SCSS partial files (more than 3).~~
- ✔️~~Multiple (more than 1)placeholder selectors~~
- ✔️~~Multiple (more than 3) uses of \@extends with placeholders~~
- ✔️~~Multiple (more than 1) additional Sass variables (not just color, font-size, font-family).~~
- ✔️~~Include at least 1 additional mixin for other code (not just for media queries)~~
- ✔️~~Create more than 3 nested Sass rules where appropriate.~~
- ✔️~~Using JavaScript or CSS/Sass, include an icon that, when clicked toggles the navigation on and off when on mobile screen sizes.~~


🔧Fix:
- ✔️~~Use mixins for media queries (add mixin scss file)~~
- ✔️~~Use \@include for adding content to mixin media queries~~
- ✔️~~Speed up mobile nav menu open/close (cut time in half from 600ms to 300ms)~~
- ✔️~~Add more comments~~
- ✔️~~Remove ALL IDs (for styling), add classes~~
- ✔️~~Duplicate class attr on top nav - founnd by validating 🔥🔥~~
- ✔️~~Change all 'done' in README to ✔️~~
