import React from 'react';

class CoordinatesButton extends React.Component{

  coorEvent = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }
  render(){
    return <button onClick={this.coorEvent}>CoordinatesButton</button>
  }
}

export default CoordinatesButton;
