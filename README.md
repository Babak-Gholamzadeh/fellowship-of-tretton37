# The fellowship of the tretton37

This is a test project with the aim of displaying the employee's information of a company and along with the ability to do some operations (i.e. sort, filter) on the information.

You can check the project from [here](https://fellowship-of-tretton37.herokuapp.com/).

---
## The thoughts  behind choosing the features

The implementation of the project includes several features that are categories into three groups i.e. `_design/accessibility`, `_functionality` and `_testing/QA` that each of which contains more detailed features.

According to the assignment description and the process of implementing the features, I chose some of them to be implemented in the first iteration of the development phase based on my experience, skills, and the time and efficiency of the features that could impact the project for current and future development process.

The list of features I chose are as below:

**_design/accessibility:**

- Responsive design, works on mobile and tablets

> Because nowadays most of the users use mobile and tables to explore the internet and applications, so it is the main factor for - even MVP - applications to support mobile devices.

- No UI framework used (such as Bootstrap, Ant)

> Style the application without using some frameworks - that are existed for this purpose - is kind of decision that if you take it at the beginning of the development, makes your further development process easier (compare to the situation that at the middle of development decide to not use CSS frameworks).

**_functionality:**

- Sort by name and office
- Filter by name and office
- Filter by contact links (such as Twitter or GitHub)

> I chose to implement these three features because, in my opinion, they are kind of the main part of the functionality of the whole of the project.

- Available on a free public url (such as Azure, Heroku)

> Because it makes the application be more available and accessible that causes it to be reviewed much faster and simpler.

**_testing/QA:**

- Works in Chrome, Firefox, Edge

> Making the project be able to run on all the main browsers is the essential consideration of any frontend developer that should always care about it.

- Works in IE11

> In my opinion, working in IE11 at this phase is not essential but it was sometimes easy to achive.

- Unit tests for existing functionality (reasonable coverage)

> Writing test for any project has always been the main consideration which has a direct impact on the quality of the project. But I should admit that I'm not very satisfied with the coverage of the test in this project yet.

---

### Start the Project

In order to run the project, you need to clone the repository.

For cloning the repository, first, you need to go to the desire directory and then run the command below:

```bash
git clone https://github.com/Babak-Gholamzadeh/fellowship-of-tretton37.git
```

After that, a directory would be created with the name of `fellowship-of-tretton37`, which you should go into that.

```bash
cd ./fellowship-of-tretton37
```

#### Config the Project

Here there exists a file named `.env.example` which contains an environment variable for storing an authorization token that is used for calling an API.

You should rename it to `.env` and fill the variable.

```bash
mv .env.example .env
```

Put your token inside the file:

```
REACT_APP_GRAPHQL_SERVER_URL = [your token]
```

#### Install the Project Dependencies

Now you need to install the dependencies by running the following code:

```bash
npm install
```

or

```bash
yarn install
```

After installing the dependencies, the project is ready to be run.

#### Run the Project

If you are familiar with the [create-react-app](https://create-react-app.dev/) tool, you probably already know about the useful scripts inside the `package.json` file that you can take advantage of them.

Run the project in development mode:

```bash
npm start
```

*Or use `yarn` if it works better for you*

Now the project is ready, and you can play with that.

#### Test the project

There are some unit tests in the project that you can run them by running the command below:

```bash
npm test
```

*Be aware that this command hold the state of running tests in watching mode, and it will run the tests again by changing any part of the code*

#### Build the Project

After you are done with the development, you can build the project by running the command below and generate a simple `html` file with some bundled `js` and `css` files.

```bash
npm run build
```

*For running the built project you need a webserver to serve the `html` file to the client. You can use existing packages for that or create your own web server.*

---

### Project Directory Structure

```bash
+---public
\---src
    |   App.js                  # App components which handle the page components
    |   index.js                # Project entry point
    +---api                     # Custom hook that is used for calling the APIs
    +---assets                  # Static files that are imported in the Components
    |   \---images
    +---components              # All the Components of the project
    |   +---CardList            # The component for showing the list of user information
    |   |   \---CardItem        # Display the information of each user
    |   +---ErrorMsg            # Show the error messages more friendly
    |   +---Spinning            # Show an spinning animation on the loading process of fetching data
    |   \---ToolsBox            # Contains the tools (filter, sort) for some operations on the user information
    |       +---Filter          # Contains name, office and contact link filters
    |       |   \---TextInput
    |       \---Sort            # Sort the users by their name or office
    |           \---RadioInput
    \---pages
        \---Home                # The layout to represent the required components on the Home page and track some necessary states
    \---utils
```
