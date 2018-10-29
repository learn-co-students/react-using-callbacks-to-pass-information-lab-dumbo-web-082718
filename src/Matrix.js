import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: '#fff'
    }
  }


  setColor=(e)=>{
    console.log("set color");
    let color = e.target.style.backgroundColor
    this.setState({color: color})
  }


  genRow = (rowVals) => (
    rowVals.map((val, idx) => <Cell key={idx} color={val} clickHandler={this.handleClickFromCell}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )



handleClickFromCell=(e)=>{
  console.log("handle click");
  e.target.style.backgroundColor = this.state.color
}



logginFunction=() => console.log("yo")

  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
