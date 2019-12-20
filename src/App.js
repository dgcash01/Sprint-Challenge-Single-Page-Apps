import Header from "./components/Header.js";
import React, { useState, useEffect } from "react";
// import './App.css';
import axios from 'axios';
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import LocationsList from "./components/LocationsList.js";
import FormikUserForm from "./components/FormikAnimalForm.js";
import Nav from "./components/Nav.js";

export default function App() {
  return (
    <main>
      <Header />
      <Nav />
      <Route exact path="/"><WelcomePage /></Route>
      <Route exact path="/CharacterList"><CharacterList /></Route>
      <Route exact path="/Search"><FormikUserForm /></Route>
    </main>
  );
}