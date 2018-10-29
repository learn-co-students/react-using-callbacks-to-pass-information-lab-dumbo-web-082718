import React, { Component } from 'react';

export default class ColorSelector extends Component {

  constructor(props){
    super(props)
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )


handleClick(){

}

  render() {
    console.log(this.props);
    return (
      <div id="colorSelector"  onClick={this.props.setColor}>
        {this.makeColorSwatches()}
      </div>
    )
  }

}
