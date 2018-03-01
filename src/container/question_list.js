// eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {retrieveQuestions} from  '../action/action.js';
import QuestionDetails from  '../components/question_details.js';
import FinalScore from  '../components/final_score.js';
import '../App.css';
import Helmet from "react-helmet";
import LoginForm from  '../components/login_form.js';
import {Footer} from 'react-fullpage';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

class QuestionList extends React.Component {
    constructor(props) {
        super(props);
        //Added logic to populate the state with sample questions.
        this.state = {
            currentQuestionsNumber:0,
            numberOfQuestions:0,
            title: "Sample Question for Practice",
            content: "Who founded Dell?",
            finalScore:0,
            finalScoreArray:[],
            sampleQuestionIndicator:1,
            id: 1,
            q: [],
            score:10,
            userName:"",
            answerArr: [
                {"answerId": 1, "answerValue": 'Mark', "score": 0},
                {"answerId": 2, "answerValue": 'Bill', "score": 0},
                {"answerId": 3, "answerValue": 'Larry', "score": 0}
            ]
        };


        this.handleBackButton = this.handleBackButton.bind(this);
        this.handleChoiceClick = this.handleChoiceClick.bind(this);
        this.onReload = this.onReload.bind(this);
        this.processUserName = this.processUserName.bind(this);


    }

    //This method contains logic to calculate final score of Quiz Application.
    finalScoreUser(){
        const {finalScoreArray} = this.state;
        let total = 0;
        finalScoreArray.forEach(q => {total += q});
        return total;
    }

    processUserName(userName)
    {
        console.log("processUserName" + userName);
        this.setState({userName:userName
        });

    }


    componentWillMount() {
        //Add logic to call action creator to retrieve question data
        this.props.retrieveQuestions();
    }


    //This method contains logic to calculate final score of Quiz Application.
    onReload(){
        this.setState({
            currentQuestionsNumber:0})
        var  finalScoreArray=[];
        const answers = this.props.questions.map(q => q[0].answerArray);
        var answerArr = [];
        for (var x = 0; x < answers.length; x++) {
            answerArr = (answers[x]);
        }
        //Resetting state of question and answer attributes to "0" to load first question from questions Array
        this.setState({
            title: this.props.questions.map(q => q[0].title),
            id: this.props.questions.map(q => q[0].Id),
            content: this.props.questions.map(q => q[0].content),
            answerArr: answerArr,
            finalScoreArray: finalScoreArray,
            currentQuestionsNumber:1,
            sampleQuestionIndicator:0
        })
    }


    render() {

        let userName = this.state.userName;
        return (
            <Router>
                <div className="App">
                    <Helmet
                        title="Welcome"
                        titleTemplate="Quiz.com "
                    />
                    <header className="App-header">
                        <div className="hd">
                            Welcome {userName}
                        </div>
                    </header>
                    <Switch>
                        <Route path='/assessment' render={() =>(
                            <div>
                                {this.state.numberOfQuestions >= this.state.currentQuestionsNumber ?(
                                    <QuestionDetails
                                        currentQuestionsNumber={this.state.currentQuestionsNumber}
                                        sampleQuestionIndicator={this.state.sampleQuestionIndicator}
                                        title={this.state.title}
                                        id={this.state.id}
                                        content={this.state.content}
                                        onBackButton={this.handleBackButton}
                                        answerArr={this.state.answerArr}
                                        onChoiceClickAnswer={this.handleChoiceClick}
                                    />): (<FinalScore score={this.finalScoreUser()} onReload={this.onReload}  />
                                )}
                            </div>
                        )} />
                        <Route path='/' render={() => (
                            <LoginForm onUsernameSubmit={this.processUserName} />
                        )}/>
                    </Switch>


                    <Footer >
                        <div className="App-footer">
                        <a href="">2017 The Quiz Lab,Inc.All rights Reserved</a>
                        </div>
                        <div className="App-footer">
                            <a align="center" href="">SiteMap</a>
                        </div>
                    </Footer>
                </div>
            </Router>)}




    handleBackButton() {
        const answers = this.props.questions.map(q => q[this.state.currentQuestionsNumber - 2 ].answerArray);
        var answerArr = [];
        var numberOfQuestions = 0;
        const questionLength = this.props.questions;
        let finalArraylength= this.state.finalScoreArray.length-1;
        this.state.finalScoreArray.length=finalArraylength;
        for (var x = 0; x < answers.length; x++) {
            answerArr = (answers[x]);
        }

        for (var y = 0; y < questionLength.length; y++) {
            numberOfQuestions = questionLength[y].length;

        }
        this.setState({
            title: this.props.questions.map(q => q[this.state.currentQuestionsNumber - 2 ].title),
            id: this.props.questions.map(q => q[this.state.currentQuestionsNumber - 2 ].Id),
            content: this.props.questions.map(q => q[this.state.currentQuestionsNumber - 2].content),
            answerArr: answerArr,
            numberOfQuestions: numberOfQuestions,
            finalScoreArray:this.state.finalScoreArray  ,
            currentQuestionsNumber: this.state.currentQuestionsNumber - 1,
            sampleQuestionIndicator:0
        })
    }


    handleChoiceClick(pt) {
        let finalScoreArray = this.state.finalScoreArray;
        this.setState({
            currentQuestionsNumber:this.state.currentQuestionsNumber + 1
        })
        this.state.finalScoreArray.push(parseInt(pt.target.value));
        const questionLength = this.props.questions;
        let currentQuestionNumber = this.state.currentQuestionsNumber;
        var numberOfQuestions = 0;
        for (var y = 0; y < questionLength.length; y++) {
            numberOfQuestions = questionLength[y].length;
        }
        if ((numberOfQuestions > this.state.currentQuestionsNumber)) {
            const answers = this.props.questions.map(q => q[this.state.currentQuestionsNumber ].answerArray);
            var answerArr = [];
            for (var x = 0; x < answers.length; x++) {
                answerArr = (answers[x]);
            }
            this.setState({
                title: this.props.questions.map(q => q[this.state.currentQuestionsNumber ].title),
                id: this.props.questions.map(q => q[this.state.currentQuestionsNumber ].Id),
                content: this.props.questions.map(q => q[this.state.currentQuestionsNumber ].content),
                answerArr: answerArr,
                numberOfQuestions: numberOfQuestions,
                finalScoreArray: finalScoreArray,
                currentQuestionsNumber: this.state.currentQuestionsNumber + 1,
                sampleQuestionIndicator:0
            })
        }

        else {
            this.setState({
                currentQuestionsNumber: this.state.currentQuestionsNumber + 1
            })
        }
    }

}

QuestionList.propTypes={
    retrieveQuestions:PropTypes.func,
}

function mapStateToProps({questions}) {
    return {questions};
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({retrieveQuestions},dispatch);
}

export default connect (mapStateToProps,mapDispatchToProps)(QuestionList);
