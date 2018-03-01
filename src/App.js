import React, { Component } from 'react';
import './App.css';
import Login from './components/login_form.js';
import QuestionList from './container/question_list';

export default class App extends Component {
        render()
        {
           return(<QuestionList/>)
        }

}






