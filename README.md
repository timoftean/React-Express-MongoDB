# React-Express
Fullstack app with React+Flux, Express and MongoDB

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

First, you need to install node. You can download from [here](https://nodejs.org/en/).
Then you need to download and install [MongoDB](https://www.mongodb.com/).

### Installing

Install dependencies (in the app root directory)
```
npm install
```
Start MongoDB (assume that you have installed MongoDB to C:\Program  Files
```
cd C:\Program Files\MongoDB\Server\3.4\bin
./mongod
```
Connect to MongoDB.
```
./mongo
```
Run the app (in the app root directory)
```
gulp serve
```

###Big Picture Overview

Back-End Web Application

* [Bower](https://bower.io/), [NPM](https://www.npmjs.com/), [Node](https://nodejs.org/en/), [Gulp](http://gulpjs.com/), [Browserify](http://browserify.org/) form scaffold
* [Express](http://expressjs.com/) responds to request from front-end with isomorphic code
* [MongoDB](https://www.mongodb.com/) persists the data
* [Mongoose](http://mongoosejs.com/) streamlines database interactions

Front-End Website

* [React](https://facebook.github.io/react/) displays content quickly
* [React](https://facebook.github.io/react/) boostrapts easily to server-generated HTML code
* AJAX requests via [jQuery](https://jquery.com/)
* [Browserify]() used to manage dependencies

![alt tag](http://imgur.com/KJH5gHQ.png)
