# JS-backend 
Some exercises from JS Back-end module(Node.js) of JS Web course in Softuni.

**Main project - workshop**: 

## Cats Shelter web
#### The MultiCat😺 website.

### Stages
1. Basic functionalities - barefoot/no framework/
- [x] Setting up a Node.js server;
- [x] Adding some html pages/resourses;
- [x] Serve the pages(static html) upon request;
- [x] Render & process dynamic content upon request;
- [x] Create simple routing;
- [x] Streams and data persistance(CRUD in the File system);
- [ ] Usermanagment, likes/ratings and etc

2. Bonus
- [ ] Use SQLite, Postrges; MongoBD & swithing-combine the sources;
- [ ] Change the whole structure and use Express and EJS;
- [ ] Deployment;




## Movie Magic web workshop
#### Workshop website with Express.js, tempalting engine, DB, TypeScript;

1. Basic functionalities - Express, Handlebars and more.
- [x] Setting up a Express.js;
- [x] Adding some html pages/resourses;
- [x] Implement Handlebars with main layout and partials; 
- [x] Serve the pages(static base html) upon request;
- [x] Render & process dynamic content upon request;
- [x] Create funtionalities - adding objects and etc.
- [x] Data persistanse (JSON first)
- [x] Data persistanse => MongoBD/Mongoose;
- [x] Usermanagment with bcrypt and jwt
- [ ] others => swith to TypeScript probably;
- [x] On the go => project structure updates;


## ExamPreps 
### Skeleton to use: base project structure and functions
1. Initialize project
- [x] Initialize project npm init - yes;
- [x] Change to module system;
- [x] Add start and dev script node and node -watch
2. Express
 - [x] Install `npm i express`
 - [x] Setup inital http server (with config file)
 - [ ] Add public resources (images, css...)
 - [x] Add static middleware - use: express.static
 - [x] Add body parser - use: express.urlencoded
 - [x] Add routes modular router
 - [x] Add home controller
 3. Handlebars
 - [x] Install `npm i express-handlebars`
 - [x] Config handlebars as view engine
 - [x] Setup home-layout-partial structure 
 - [x] Enable mongo documents to be passed to the view => allowProtoPropertiesByDefault: true,
 - [x] Change views directory
 - [ ] Add resources to views folder
4. Database
 - [x] Install mongoose `npm i mongoose`
 - [x] Setup db connection
 - [x] Add user model - base email, password
 5. Register
 - [x] Install bcrypt `npm i bcrypt`
 - [x] Add bcrypt pre-save for User model
 - [x] install jsonwebtoken `npm i jsonwebtoken`
 - [x] Fix navigation links
 - [x] Add register view
 - [x] Add authController
 - [x] Add register page
 - [x] Fix register form
 - [x] Add post register action
 - [x] Add authService with register
 - [x] Hash password
 - [X] Check confirmPassword
 - [x] Check if user exists

### TechStore website


 - [x] Skeleton setup
 - [x] Test - DB connection/ view / create
 - [X] Resourses migration
 - [X] Basic layout and partial views
 - [ ] Models and models field/validation/
 - [ ] Login, Register, Logout
 - [x] Create device, edit device, devices catalog pages 
 - [ ] Preffered devices funtionalities 
 - [ ] Security - path guards and additional validations  
 - [ ] Error setter/error state of the requests/


### Reicpes website
