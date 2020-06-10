import React, {Component} from 'react';
import './App.css';

class App extends Component{
  

  constructor(props){
    super(props);

    const today = new Date();

    this.state = {
      today: today,
      weeks: ["일", "월", "화", "수", "목", "금", "토"],
      nth: [null, "첫", "둘", "셋", "넷"]
    }
  }

  render(){
    const today = this.state.today;
    const nth = this.caculate_nth_week(today);
    
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    debugger;
    return (
      <div className="App">
        오늘은 {year}년 {month}월 {date}일 {this.state.weeks[day]}요일 <br/>
        {month}월 {this.state.nth[nth]}째 주 {this.state.weeks[day]}요일입니다.
      </div>
    );
  }

  caculate_nth_week(today){
    var dateOfFirst = new Date(today);
    dateOfFirst.setDate(1);

    const WEEK_SIZE = 7;
    const THURSDAY = 4;
    const SUNDAY = 0;
    
    const dayOfFirst = dateOfFirst.getDay();

    var pivot; // 전달 마지막 날
    if(dayOfFirst === SUNDAY){
      pivot = 1;
    }
    else if(dayOfFirst <= THURSDAY){
      pivot = 1 - dayOfFirst;
    }
    else if(dayOfFirst > THURSDAY){
      pivot = WEEK_SIZE - dayOfFirst;
    }

    return Math.ceil((today.getDate() - pivot) / WEEK_SIZE);
  }

}

export default App;
