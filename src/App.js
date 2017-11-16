import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  handleOnClick() {
    this.props.dispatch({
      type: "INCREASE_COUNT"
    });
  }

  render() {
    console.log("here", this.props);
    return (
      <div className="App">
        <button type="button" onClick={event => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps)(App);
