import React from 'react';
import calendarLess from '../less/calendar.less';

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            weekArr: ['日', '一', '二', '三', '四', '五', '六' ],
            monthDay: new Date(new Date().getFullYear(), (new Date().getMonth() + 1), 0 ).getDate(),//获取当月有多少天
            upMonthDay: new Date(new Date().getFullYear(), (new Date().getMonth()), 0 ).getDate(),//获取上个月有多少天
            monthWeek: (new Date(new Date().getFullYear()+','+ (new Date().getMonth()+1) +','+ 1).getDay()), //获取当月第一天是星期几
            getFullYear: new Date().getFullYear(), //年 但是不会改变 用来切换时判断是否是当前年
            getMonth: new Date().getMonth()+1, //月 但是不会改变 用来切换时判断是否是当前月
            fullYear: new Date().getFullYear(), //年
            week: new Date().getDay(), //今天是星期几
            dateToday: new Date().getDate(),  //今天是多少号
            month: new Date().getMonth()+1,//今天是几月
            selectMonth: -1, //选中几号 默认是今天
            calendarBlockShow: false,
            calendarVal: ''
        }
    }
	
	componentDidMount() {
		const { format } = this.props;
		
		this.windowCalenderEvent = (event) => {
            this.setState({
                calendarBlockShow: false
            });
        }

        window.addEventListener('click', this.windowCalenderEvent);
		
		if(format != undefined) {		
            const formatSplit = format.split('-');
			if(formatSplit.length == 3) {
				if(!isNaN(formatSplit[0]) && !isNaN(formatSplit[1]) && !isNaN(formatSplit[2])  ) {
					if(parseInt(formatSplit[1]) >= 1 && parseInt(formatSplit[1]) <= 12) {
						const formatSplitData = new Date(formatSplit[0], formatSplit[1], 0 ).getDate();
						if(parseInt(formatSplit[2]) >= 1 && parseInt(formatSplit[2]) <= formatSplitData) {
							const propsFullYear = parseInt(formatSplit[0]);
							const propsMonthDay = parseInt(formatSplit[1]);
							const propsDay = parseInt(formatSplit[2]);
							
							if(propsMonthDay == 1) {
								this.setState({
									upMonthDay: new Date(propsFullYear-1, 12, 0 ).getDate(),//获取上个月有多少天	
								});
							} else {
								this.setState({
						            upMonthDay: new Date(propsMonthDay, propsMonthDay-1, 0 ).getDate(),//获取上个月有多少天
								});				
							}
							this.setState({
					            monthDay: new Date(propsFullYear, propsMonthDay, 0 ).getDate(),//获取当月有多少天
					            monthWeek: new Date(propsFullYear+','+ propsMonthDay +','+ 1).getDay(), //获取当月第一天是星期几	
					            fullYear: propsFullYear,
					            month: propsMonthDay,
					            selectMonth: propsDay,
								calendarVal: propsFullYear +'-'+ propsMonthDay +'-'+ propsDay					            
							});			
						} else {
							console.log(parseInt(formatSplit[1])+ '月没有'+ parseInt(formatSplit[2])+'号，将用现在的时间');						
						}
						
					} 
					
					
				} else {
					console.log('格式不对, 将用现在的时间');
				}
			}			
		} else {            
        }
	}
	
	componentWillUnmount() {
        window.removeEventListener('click', this.windowCalenderEvent);
    }

    handleNextMonth() {
        const { fullYear, month } = this.state;

		this.setState({
			selectMonth: -1
		});
	        
        if(month == 12) {
	        this.setState({		        
	            monthDay:  new Date(fullYear+1, 1, 0 ).getDate(),
	            month: 1,
	            upMonthDay: new Date(fullYear+1, 1, 0 ).getDate(),
	            monthWeek: new Date((fullYear+1)+','+ 1 +','+ 1).getDay(),
	            fullYear: fullYear+1
	        });
        } else {
	        console.log(new Date(fullYear, month+1, 0 ).getDate());

	        console.log(new Date(fullYear, month, 0 ).getDate());
	        console.log(new Date(fullYear+','+ (month+1) +','+ 1).getDay());
	        this.setState({
	            monthDay:  new Date(fullYear, month+1, 0 ).getDate(),
	            month: month+1,
	            upMonthDay: new Date(fullYear, month, 0 ).getDate(),
	            monthWeek: new Date(fullYear+','+ (month+1) +','+ 1).getDay(),
	        });	        
        }
   
    }
    
    handleUpMonth() {
	    const { fullYear, month } = this.state;
		this.setState({
			selectMonth: -1
		});
	    if(month == 1) {
	        this.setState({
	            monthDay:  new Date(fullYear-1, 12, 0 ).getDate(),
	            month: 12,
	            upMonthDay: new Date(fullYear-1, 11, 0 ).getDate(),
	            monthWeek: new Date(fullYear-1+','+ 12 +','+ 1).getDay(),
	            fullYear: fullYear-1
	        });	    

        		    
	    } else {
		    this.setState({
	            monthDay:  new Date(fullYear, month-1, 0 ).getDate(),
	            month: month-1,
	            upMonthDay: new Date(fullYear, month-2, 0 ).getDate(),
	            monthWeek: new Date(fullYear+','+ (month-1) +','+ 1).getDay(),
	        });	    
        
	    }
 
    }
    
    handleDateLi(v, show) {
	    const {fullYear, month} = this.state;
	    
	    if(show) {
		    this.setState({
			    selectMonth: v,
			    calendarVal: fullYear +'-'+ month +'-'+ v
		    }); 		    
	    }

    }
    
    handleCalendar(event) {
	    event.stopPropagation();

	    this.setState({
		    calendarBlockShow: true
	    });
    }

	handleCalendarBlock(event) {
	    event.stopPropagation();
	    this.setState({
		    calendarBlockShow: true
	    });		
	}

    render() {
        const {
            weekArr,
            fullYear,
            dateToday,
            week,
            month,
            monthDay,
            upMonthDay,
            monthWeek,
            getFullYear,
            getMonth,
            selectMonth,
            calendarBlockShow,
            calendarVal
        } = this.state;


        let liArr = [];
        for(let i = 0; i < 42; i++) {
            liArr.push(i);
        }

		const { placeholder } = this.props;

        return (
            <div className="ui-calendar">
                <div className="ui-calendar-input">
                    <input type="text"
                    	className="ui-calendar-input-block"
                        readOnly
                        placeholder={placeholder}
                        value={calendarVal}
                        onClick={event => this.handleCalendar(event)}
                    />
                </div>
				{
					calendarBlockShow ? <div className="ui-calendar-cnt" onClick={event => this.handleCalendarBlock(event)}>
	                    <div className="ui-calendar-cnt-l">
	                        <div className="ui-calendar-cnt-l-date-text">{new Date().getDate()}</div>
	                        <div className="ui-calendar-cnt-l-week-text">{new Date().getFullYear()}年{new Date().getMonth()+1}月 星期{new Date().getDay()}</div>
	                    </div>
	                    <div className="ui-calendar-cnt-r">
	
	                        <div className="ui-calendar-cnt-r-next-date">
	                            <div className="ui-calendar-cnt-r-up-btn iconfont icon-left" onClick={() => this.handleUpMonth()}></div>
	                            <div className="ui-calendar-cnt-r-data-text">{fullYear}年{month}月</div>
	                            <div className="ui-calendar-cnt-r-next-btn iconfont icon-right" onClick={() => this.handleNextMonth()}></div>
	                        </div>
	
	                        <div className="ui-calendar-cnt-week-list">
	                            <ul className="ui-calendar-cnt-week-list-block">
	                                {
	                                    weekArr.map((res, index) => {
	                                        return <li className="ui-calendar-cnt-week-list-li" key={index}>
	                                            <span className="ui-calendar-cnt-week-list-li-text">{res}</span>
	                                        </li>
	                                    })
	                                }
	
	                            </ul>
	                        </div>
	
	                        <div className="ui-calendar-cnt-date-list">
	                            <ul className="ui-calendar-cnt-date-list-block">
	                                {
	                                    liArr.map((res, index) => {
	                                        let weekIndex = '';
	                                        let classStyle = 'ui-calendar-cnt-date-list-li';
	                                        let clickShow = false;
	                                        if(index < monthWeek) {
	                                            weekIndex =upMonthDay - (monthWeek-index-1) ;
	                                            classStyle = 'ui-calendar-cnt-date-list-li ui-calendar-cnt-date-list-expired-li';
	                                            clickShow = false;
	                                        }else if(index >= monthWeek && index < (monthDay + monthWeek) ) {
	                                            weekIndex = index+1-monthWeek;
	                                            clickShow = true;
	                                            
												if(Date.parse(new Date(getFullYear +'-'+ getMonth )) == Date.parse(new Date(fullYear +'-'+ month ))) {
		                                            if(dateToday + monthWeek -1 == (index)) {
		                                                classStyle = 'ui-calendar-cnt-date-list-li ui-calendar-cnt-date-list-select-li';
		                                            }												
												}
	
	                                        } else {
	                                            weekIndex = index -(monthDay +monthWeek - 1);
	                                            classStyle = 'ui-calendar-cnt-date-list-li ui-calendar-cnt-date-list-expired-li';
	                                            clickShow = false;
	                                        }
	                                        return <li 
	                                        			className={selectMonth == weekIndex && clickShow ? 'ui-calendar-cnt-date-list-li ui-calendar-cnt-date-list-select-li' : classStyle} 
	                                        			key={index} 
	                                        			onClick={() => this.handleDateLi(weekIndex, clickShow)}>
	                                            <span className="ui-calendar-cnt-date-list-li-text">{ weekIndex }</span>
	                                        </li>
	                                    })
	                                }
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="">
	                    	
	                    </div>
	                </div> : ''
				}

            </div>
        );
    }
}

export default Calendar;
