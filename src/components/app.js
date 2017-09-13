import React, { Component } from 'react';
import {connect} from 'react-redux';
import QuestionsList from './QuestionsList';
import Footer from '../containers/Footer';
import Result from './Result';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className = "col-sm-12 col-lg-6">
          <div className="card">
            <div className="card-header">
              Questions
            </div>
            <div className ="card-block">
              <QuestionsList questions={this.props.questions}/>
            </div>
            <div className = "card-footer">
              <Footer/>
            </div>
          </div>
        </div>
        <div className = "col-sm-12 col-lg-6">
          <Result/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {questions : state.questions};
}

export default connect(mapStateToProps)(App);
