# react-redux-boilerplate
a boilerplate with react, redux and mdl, build with webpack and babel. This boilerplate include examples of implementation in ES6, CoffeeScript and TypeScript (incomplete).

[![Build Status](https://travis-ci.org/kkpoon/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/kkpoon/react-redux-boilerplate)
[![Code Climate](https://codeclimate.com/github/kkpoon/react-redux-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/kkpoon/react-redux-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/kkpoon/react-redux-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/kkpoon/react-redux-boilerplate?branch=master)

## Setup Development Environment

I suggest to use NVM to construct the node environment for your development.
Please refer to https://github.com/creationix/nvm

or simply follow these steps:

```
# Run an automated scripts to install nvm
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash

# To activate nvm, logout and login or
$ source ~/.bashrc
#   or
$ source ~/.bash_profile

# Install nodejs version 4.x
$ nvm install v4

# Set nodejs stable version as default
$ nvm alias default stable

# Install the dependencies of this boilerplate
$ cd /path/you/checkout/this/boilerplate
$ npm install

# If you use TypeScript, install typings
# please refer to https://github.com/typings/typings

$ npm install -g typings

# Install type definition described in typings.json
$ typings install
```
