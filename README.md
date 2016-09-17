#### Project 5 for Treehouse FEWD Course
----

CSS to Sass Refactoring of Project 2

\+ Addition of mobile nav


To Run:
- Download or clone repo
- Open index.html in browser


Or:
- http://twoodman.github.io/th-fewd-project-5


*Un-minified files included in respective folders*


To Do:
- ~~refactor css to sass~~ done
- ~~make sure not to nest more than 3 deep~~ done
- ~~remove a bunch of redundant media query styles~~ done
- ~~refactor html/css to use BEM convention~~ done
- ~~remove/replace unnecessary id selectors~~ done
- ~~add gulp and compass to project~~ done
- ~~get coffee~~ done
- ~~clean up code~~ done
- ~~remove js scroll jack? probably. or make it really fast.~~ done | made it really fast
- ~~ponder the complexities of a black hole~~ always
- ~~make nav anchor hover cleaner~~ done
- ~~minify styles and js (if keeping)? probably.~~ done
- ~~go through Sass and modify for best practices (@includes first, mostly)~~ done
- ~~add some extends to meet 'exceed expectations' requirements of project~~ done
- ~~add visible/invisible comments to sass where appropriate~~ done
- ~~add mobile nav per 'exceeds expectations'~~ done
- ~~more coffee~~ done x4
- ~~put html through validator~~ done | first validation: no errors
- ~~put css through validator~~ done | first validation: no errors
- ~~put js through jshint?~~ done | first validation: no errors


Exceeds Expectations:
- ~~Create multiple subfolders (more than 3) for organizing styles.~~ done
- ~~Create multiple SCSS partial files (more than 3).~~ done
- ~~Multiple (more than 1)placeholder selectors~~ done
- ~~Multiple (more than 3) uses of @extends with placeholders~~ done
- ~~Multiple (more than 1) additional Sass variables (not just color, font-size, font-family).~~ done
- ~~Include at least 1 additional mixin for other code (not just for media queries)~~ done
- ~~Create more than 3 nested Sass rules where appropriate.~~ done
- ~~Using JavaScript or CSS/Sass, include an icon that, when clicked toggles the navigation on and off when on mobile screen sizes.~~ done


🔧Fix:
- Use mixins for media queries (add mixin scss file)
- Use \@include for adding content to mixin media queries
- Speed up mobile nav menu open/close (cut time in half from 600ms to 300ms)
- Add more comments
- Remove ALL IDs (for styling), add classes
