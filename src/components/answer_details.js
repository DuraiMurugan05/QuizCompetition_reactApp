import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class AnswerDetails extends Component {

    constructor(props) {
        super(props);
        this.onChoiceClick = this.onChoiceClick.bind(this);
    }

    onChoiceClick(e) {
        this.props.onChoiceClickAnswer(e);

    }

    render() {
        return (
            <div className="quiz-options">{
            this.props.answerArr.map(ans => {
            return <button className="quiz-choice" value={ans.score} onClick={this.props.onChoiceClick}>{ans.answerValue}</button>
            })}
        </div>);
    }

}

export default AnswerDetails;
