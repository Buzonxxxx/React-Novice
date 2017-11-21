import React from 'react'

 class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }
  componentDidMount(){
    this.timerID = setInterval(() => this.tick(),1000)
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({date: new Date()})
  }

  render() {  
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>This is Taiwan time zone: {this.state.date.toLocaleTimeString()}.</h2>
        <h2>This is Japan time zone: {this.state.date.toLocaleTimeString('zh-TW', { timeZone: 'Asia/Tokyo' })}.</h2>
      </div>
    ) 
  }
}

export default Clock