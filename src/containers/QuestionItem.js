import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {selectOption} from '../actions/index';
import {connect} from 'react-redux';
import Select from 'react-select';


class QuestionItem extends Component {

  constructor(props){
		super(props);
    this.state = {question : props.question};
  }

  selectOption(value) {
    this.props.selectOption(this.state.question.id, value.value);
  }

  showError(){
      const {submitted, answer, resulted, question} = this.props;

      if (submitted && answer == undefined){
        return(
          <div>
            <label className=" col-12 bg-danger text-white small mt-0"
              style={{width : '-webkit-fill-available'}}>Not Attempted</label>
          </div>
        );
      }

      if (resulted && (answer != question.correct_option)) {
        return(
          <div>
            <label className=" col-12 bg-danger text-white small mt-0"
              style={{width : '-webkit-fill-available'}}>Incorrect</label>
          </div>
        );
      }
  }

  render(){
    const answer = this.props.answer;
    const question = this.state.question;
    return (
      <div className="form-group" key={question.id}>
        <label>{question.question}</label>
        <Select id="select" clearable ={false} value = {answer} disabled = {this.props.resulted}
          onChange={value => this.selectOption(value)} options = {question.options}/>
          {this.showError()}
      </div>
    );

  }
}

function mapDisaptchToProps(dispatch) {
  return bindActionCreators({selectOption}, dispatch);
}

const mapStateToProps = (state, ownProps) => {
  return {answer : state.answers[ownProps.question.id], submitted : state.submitted,
     resulted : state.result.isSuccess};
}

export default connect(mapStateToProps, mapDisaptchToProps)(QuestionItem);
