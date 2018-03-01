import React, {Component} from 'react';
import AnswerDetails from "./answer_details";

class QuestionDetails extends Component {
    constructor(props) {
        super(props);
        this.handleBackButton = this.handleBackButton.bind(this);
    }

    handleBackButton(event) {
        this.props.onBackButton();
    }

    render() {

        return (
            <div  className="question-panel">
                    <div>
                        {this.props.currentQuestionsNumber > 1 && (
                            <button className="back-btn" onClick={this.handleBackButton}>←Back
                            </button>)}
                    </div>
                <div className="question" >
                    {this.props.title} - {this.props.content}</div>
                <AnswerDetails
                    answerArr={this.props.answerArr}
                    onChoiceClick={this.props.onChoiceClickAnswer}/>

            </div>);
    }

}

    export default QuestionDetails;
