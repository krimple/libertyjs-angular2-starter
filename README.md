# WorkshopDemo

## Setup

Ensure you have a NodeJS version of 6.0 or above. If you don't want to mess around with your operating system NodeJS, you can install [NVM](https://github.com/creationix/nvm) to manage different Node instances. Make sure your node -v command emits a recent vintage Node version.

Next, install the necessary components. IF you have been messing with `angular-cli` before the current release, clean it out like this:

```bash
npm uninstall -g angular-cli
npm cache clean
```

Clone the repo or download a zip of it
```bash 
git clone git@github.com:krimple/libertyjs-angular2-starter.git
# or download zip...
```

Install the dependencies:

```bash
npm install -g angular-cli@latest
npm install 
```

Next, switch to the project directory and initialize it
```bash
cd libertyjs-angular2-starter
npm install
```

To test that it is ready, run the testing platform:
```
ng test
```

Which should output:

```bash
28 09 2016 11:56:53.944:INFO [karma]: Karma v1.2.0 server started at http://localhost:9876/
28 09 2016 11:56:53.944:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
28 09 2016 11:56:53.995:INFO [launcher]: Starting browser PhantomJS
28 09 2016 11:56:55.086:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket /#hKBTD0ssTolVtxOzAAAA with id 5924036
PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 2 of 2 SUCCESS (0.049 secs / 0.122 secs)
PhantomJS 2.1.1 (Mac OS X 0.0.0) - App: WorkshopDemo:
PhantomJS 2.1.1 (Mac OS X 0.0.0) 	should create the app PASSED
PhantomJS 2.1.1 (Mac OS X 0.0.0) 	should render title in a h1 tag PASSED
PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 2 of 2 SUCCESS (0.049 secs / 0.122 secs)
```

Hit [CTRL-C] and then launch the web server, browsing to `http://localhost:4200` once it stops outputting text:

```bash
ng serve
```

All set!  See you Saturday!

## Features

* Router
* Angular 2 UUID courtesy angular2-uuid npm module
* Other fun stuff



