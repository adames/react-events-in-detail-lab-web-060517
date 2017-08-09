import React from 'react';

class DelayedButton extends React.Component {

  delayAction = (event) => {
    event.persist()
    this.props.onDelayedClick(event)
  }
  render(){
    return <button onClick={this.delayAction}>DelayedButton</button>
  }
}

export default DelayedButton;
