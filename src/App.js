import React, { Component, Fragment } from "react";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: [
        { result: "sorry", style: "rgb(241, 246, 247)" },
        { result: "computer", style: "rgb(241, 246, 247)" },
        { result: "watch", style: "rgb(241, 246, 247)" },
        { result: "girlfriend", style: "rgb(241, 246, 247)" },
        { result: "thank you", style: "rgb(241, 246, 247)" },
        { result: "car", style: "rgb(241, 246, 247)" },
        { result: "null", style: "rgb(241, 246, 247)" },
        { result: "boyfriend", style: "rgb(241, 246, 247)" },
        { result: "again", style: "rgb(241, 246, 247)" }
      ],

      aCount: 0,
      visible: false,
      result: ""
    };
  }
  start = () => {
    this.setState({
      aCount: 0
    });
    this.timerID = setInterval(() => this.change(), 100);
  };
  change = () => {
    var row = Math.floor(Math.random() * this.state.cells.length);

    this.method(row);
  };
  tanwindow1 = text => {
    return (
      <div onClick={this.handleCancel} className="tanwindow1">
        <div className="tanwindow1text"></div>
        <div className="tanwindow1text2">
          <p>{text}</p>
        </div>
      </div>
    );
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  method = row => {
    var isStart = false;
    var cells = this.state.cells;
    for (var i = 0; i < cells.length; i++) {
      if(cells[i].result!==""){
        cells[i].style = "rgb(241, 246, 247)";
      }
      
    }
    if(cells[row].result!==""){
      cells[row].style = "red";
    }else{
      return
    }
    
    isStart = true;
    if (isStart) {
      var acount = this.state.aCount + 1;

      this.setState({
        cells: cells,

        aCount: acount
      });
    }
    if (this.state.aCount === 30) {
      clearInterval(this.timerID);
      var changes = Math.floor(Math.random() * 80);
      console.log(changes);
      if (changes === 0) {
        for (var i = 0; i < this.state.cells.length; i++) {
          if (cells[i].result === "girlfriend") {
            this.method(i);
          }
        }

        this.setState({
          result: "girlfriend",
          visible: true
        });
      } else if (changes === 1) {
        for (var i = 0; i < this.state.cells.length; i++) {
          if (cells[i].result === "boyfriend") {
            this.method(i);
          }
        }
        this.setState({
          result: "boyfriend",
          visible: true
        });
      } else if (changes <= 6) {
        for (var i = 0; i < this.state.cells.length; i++) {
          if (cells[i].result === "car") {
            this.method(i);
          }
        }

        this.setState({
          result: "car",
          visible: true
        });
      } else if (changes <= 16) {
        for (var i = 0; i < this.state.cells.length; i++) {
          if (cells[i].result === "computer") {
            this.method(i);
          }
        }

        this.setState({
          result: "computer",
          visible: true
        });
      } else if (changes <= 31) {
        for (var i = 0; i < this.state.cells.length; i++) {
          if (cells[i].result === "watch") {
            this.method(i);
          }
        }

        this.setState({
          result: "watch",
          visible: true
        });
      } else if (changes <= 43) {
        for (var i = 0; i < this.state.cells.length; i++) {
          if (cells[i].result === "sorry") {
            this.method(i);
          }
        }

        this.setState({
          result: "sorry",
          visible: true
        });
      } else if (changes <= 55) {
        for (var i = 0; i < this.state.cells.length; i++) {
          if (cells[i].result === "thank you") {
            this.method(i);
          }
        }

        this.setState({
          result: "thank you",
          visible: true
        });
      } else if (changes <= 67) {
        for (var i = 0; i < this.state.cells.length; i++) {
          if (cells[i].result === "null") {
            this.method(i);
          }
        }

        this.setState({
          result: "null",
          visible: true
        });
      } else {
        for (var i = 0; i < this.state.cells.length; i++) {
          if (cells[i].result === "again") {
            this.method(i);
          }
        }

        this.setState({
          result: "again",
          visible: true
        });
      }
    }
  };
  add = key => {
    var cells = this.state.cells;
    var aCell = {
      result: "",
      style: "white"
    };
    cells.splice(key, 0, aCell);
    this.setState({
      cells: cells
    });
  };
  //style={{ backgroundColor: value.style }}
  render() {
    return (
      <Fragment>
        {this.state.visible ? this.tanwindow1(this.state.result) : null}
        <div className="threeCells">
          {this.state.cells.map((value, key) => {
            return (
              <div
                key={key}
                className="cell"
                style={{ backgroundColor: value.style }}
                onClick={this.add.bind(this, key)}
              >
                {value.result}
              </div>
            );
          })}
        </div>

        <div className="start" onClick={this.start}>
          开始抽奖
        </div>
        <p>(点击格子调整位置)</p>
      </Fragment>
    );
  }
}
export default App;
