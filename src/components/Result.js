import React, { Component } from 'react';
import {connect} from 'react-redux';
import BarChart from 'react-bar-chart';

class Result extends Component {


  state = { width: 500 };

  componentDidMount() {
    window.onresize = () => {
     this.setState({width: this.refs.root.offsetWidth});
    };
  };

  render() {
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const {incorrect , correct, isSuccess} = this.props.result;

    const data = [
      {text: 'Corrent', value: correct},
      {text: 'Incorrect', value: incorrect}
    ];

    if (isSuccess) {
      return (
       <div ref='root'>
           <div style={{width: '50%'}}>
               <BarChart ylabel='Questions'
                 width={this.state.width}
                 height={500}
                 margin={margin}
                 data={data}/>
           </div>
       </div>
     );
    }
    return(<div></div>);
  }
}
 const mapStateToProps = state => {
   return {result : state.result};
 }

 export default connect(mapStateToProps)(Result);
