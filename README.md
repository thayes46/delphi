# About Delphi

This project was created as a deliverable for my application to [Capital One's Software Engineering Summit](https://campus.capitalone.com/summits/) held in January 2021.

Documentation for how to run and deploy Delphi can be seen [below](https://github.com/thayes46/delphi#getting-started-with-Delphi).

## The Challenge

Selected applicants from the first round of applications were provided the following prompt:

> The internet is an unlimited source of information. We want an easy way to sort through and find news articles specific to the following three categories: 
> - Entertainment 
> - Sports
> - Technology
> Imagine you had the chance to create a web application that would allow users to search through global news in order to locate news pertaining to the three categories listed above. How would you go about creating such an app?

Additionally, we were provided a business API key for [newsAPI](https://newsapi.org) for querying articles, and asked to use the 
`top headlines` endpoint. For obvious reasons this key has been obfuscated from the source code.

## My Approach + Challenges faced

This is my first attempt at web development in any capacity, so my process was not nearly as clean or straightforward as it could have been or will be in the future.

Most of my experience with Software Engineering has been through Java, Python, and C, so my first step in approaching this problem was exploring my many different options for frameworks. Initially I thought that Django and Python would be my best friend, however I found within a few hours that while I was comfortable setting up the backend, it would take too long for establishing a good front end. 

After deciding on ReactJS as a framework for it's plethora of examples and tutorials on getting apps up and running quickly, I was able to find [a tutorial on a Wikipedia search engine built in react](https://github.com/simonjsuh/Wikipedia-Search-API-using-React.js). From there I was able to approach my next problem: talking to an API.

In addition to never working with webdev before, I also had no experience in talking to an API, and how to process the data received from it, so a decent chunk of time was spent learning how REST APIs like newsAPI work and communicate. Once I found how to receive a JSON from the endpoint and parse through it, my attention went towards the UI/UX of my app.

I made the mistake of assuming that since I knew Java, that JavaScript would be a piece of cake, and paired with my lack of experience in HTML and CSS that mistake cost me several hours of tweaking and testing. Despite that, after playing around with several tutorials with CSS, I was able to start making the app look how I desired.

Overall I wouldn't put webdev on my resume by any means, but I learned enough about web development to expand my career path interests.

# Getting Started with Delphi

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project has only been tested on Ubuntu 18.04 LTS and Ubuntu 20.04 LTS.

## Initial setup

1. Clone the repository using your desired method or with:

`git clone https://github.com/thayes46/delphi.git`

2. Download and install Node.js using your desired method or [their tutorial](https://nodejs.org/en/download/package-manager/)

3. Install npm with `npm install` in the project directory

Note: If you receive error code `127` "c" now or when running any below scripts, delete /node_modules/ as well as package-lock.json, run `npm upgrade`, and you should be good to go. If not, feel free to email me.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in locally.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits upon saving.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run deploy`

Builds the app for production to the `build` folder and pushes to the production branch.\
It correctly bundles React in production mode and optimizes the build for the best performance.

It will by default deploy to github pages of the repository, a CNAME can be added for a custom domain.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
