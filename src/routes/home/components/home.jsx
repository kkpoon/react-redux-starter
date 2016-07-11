import React, { Component } from 'react';
import Helmet from "react-helmet";

import Greeting from './greeting-card';
import Language from "./language-card";
import Counter from "./counter";

function Home() {
  return (
    <div>
      <Helmet title="Home" />
      <Greeting />
      <Language />
      <Counter />
    </div>
  );
}


module.exports = Home;
