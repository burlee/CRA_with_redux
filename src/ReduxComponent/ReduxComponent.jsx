import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increment } from '../Redux/actions/Actions'

class ReduxComponent extends Component {
  render() {
      
    const { Redux } = this.props;

    let arrayNumbers = Redux.array.map( number => {
      if(number % 2 === 0){
        return <span>{number}</span>
      }
    })
    return (
      <div>
        <p>{Redux.reduxTest}</p>
        <span>{Redux.number}</span>
        {arrayNumbers}
        <button onClick={this.props.increment}>Inkrement</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    Redux: state.Redux
});

export default connect(mapStateToProps, {increment} )(ReduxComponent);

