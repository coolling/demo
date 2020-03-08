import React, { Component, Fragment } from "react";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells1: [
        { result: "sorry", style: "white" },
        { result: "computer", style: "white" },
        { result: "watch", style: "white" },
        { result: "girlfriend", style: "white" },
        { result: "sorry", style: "white" },
        { result: "car", style: "white" },
        { result: "sorry", style: "white" },
        { result: "boyfriend", style: "white" },
        { result: "sorry", style: "white" }
      ],

      style: {
        borderColor: "red"
      },
      aCount: 0,
      visible: false,
      result: ""
    };
  }
  start = () => {
    this.setState({
      aCount: 0
    });
    this.timerID = setInterval(() => this.change(), 300);
  };
  change = () => {
    var row = Math.floor(Math.random() * this.state.cells1.length);

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
    var cell11 =this.state.cells1;
    for(var i=0;i<cell11.length;i++){
      cell11[i].style="white"
    }

    cell11[row].style = "red";
    isStart = true;
    if (isStart) {
      var aacount = this.state.aCount + 1;

      this.setState({
        cells1: cell11,

        aCount: aacount
      });
    }
    if (this.state.aCount === 20) {
      clearInterval(this.timerID);
      var changes = Math.floor(Math.random() *80);
      console.log(changes);
      if (changes === 0) {
        for(var i=0;i<this.state.cells1.length;i++){
          if(cell11[i].result==="girlfriend"){
            this.method(i);
          }
        }
        
        this.setState({
          result: "girlfriend",
          visible: true
        });
      } else if (changes === 1) {
        for(var i=0;i<this.state.cells1.length;i++){
          if(cell11[i].result==="boyfriend"){
            this.method(i);
          }
        }
        this.setState({
          result: "boyfriend",
          visible: true
        });
      } else if (changes <= 6) {
        for(var i=0;i<this.state.cells1.length;i++){
          if(cell11[i].result==="car"){
            this.method(i);
          }
        }
        
        this.setState({
          result: "car",
          visible: true
        });
      } else if (changes <= 16) {
        for(var i=0;i<this.state.cells1.length;i++){
          if(cell11[i].result==="computer"){
            this.method(i);
          }
        }
        
        this.setState({
          result: "computer",
          visible: true
        });
      } else if (changes <= 31) {
        for(var i=0;i<this.state.cells1.length;i++){
          if(cell11[i].result==="watch"){
            this.method(i);
          }
        }
       
        this.setState({
          result: "watch",
          visible: true
        });
      } else if (changes <= 43) {
        for(var i=0;i<this.state.cells1.length;i++){
          if(cell11[i].result==="sorry"){
            this.method(i);
          }
        }
        
        this.setState({
          result: "sorry",
          visible: true
        });
      } else if (changes <= 55) {
        for(var i=0;i<this.state.cells1.length;i++){
          if(cell11[i].result==="sorry"){
            this.method(i);
          }
        }
        
        this.setState({
          result: "sorry",
          visible: true
        });
      } else if (changes <= 67) {
        for(var i=0;i<this.state.cells1.length;i++){
          if(cell11[i].result==="sorry"){
            this.method(i);
          }
        }
        
        this.setState({
          result: "sorry",
          visible: true
        });
      } else {
        for(var i=0;i<this.state.cells1.length;i++){
          if(cell11[i].result==="sorry"){
            this.method(i);
          }
        }
        
        this.setState({
          result: "sorry",
          visible: true
        });
      }
    }
  };
add=(key)=>{
var cells11 =this.state.cells1;
var aCell={
  result: "", style: "white" 
}
cells11.splice(key,0,aCell)
this.setState({
  cells1:cells11
})
}



  render() {
    return (
      <Fragment>
        {this.state.visible ? this.tanwindow1(this.state.result) : null}
        <div className="threeCells">
          {this.state.cells1.map((value, key) => {
            return (
              <div
                key={key}
                className="cell"
                style={{ backgroundColor: value.style }}
                onClick={this.add.bind(this,key)}
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
