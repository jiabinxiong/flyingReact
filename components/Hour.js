import React from 'React';
import hourLess from '../less/hour.less';

function deg2Arc(deg) {
    return deg / 180 * Math.PI;
   }

class Hour extends React.Component {
    constructor() {
        super();
        this.state = {
            hour: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],            
            minute: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
            hourRotate: 'ui-hour-pointer-12'
        }
    }

    handleHourLi() {
        this.setState({
            hourRotate: 'ui-hour-pointer-1'
        });
    }

    render() {
        const { hour, minute, hourRotate } = this.state;
        
        return (
            <div className="">
                <div className="">
                    <input type="text" placeholder="小时"/>
                </div>
                <div className="ui-hour-cnt">
                    <div className="ui-hour-t">
                        <div className="ui-hour-t-AMPM">
                            <span className="ui-hour-t-AM-text ui-hour-t-AMPM-select-text">上午</span>
                            <span className="ui-hour-t-PM-text">下午</span>
                        </div>
                        <div className="ui-hour-t-text">
                            <span className="ui-hour-t-hour-text ui-hour-t-HM-select-text">12</span>:
                            <span className="ui-hour-t-minute-text">30</span>
                        </div>
                    </div>

                    <div className="ui-hour-minute-block">
                        <ul className="ui-hour-minute-list">
                            {
                                hour.map((res, index) => {
                                    let rad = deg2Arc(index * 30 - 60)
                                    let x = Math.cos(rad) * 100;
                                    let y = Math.sin(rad) * 100;

                                    return <li 
                                        className="ui-hour-minute-li" 
                                        onClick={() => this.handleHourLi()}
                                        style={{transform: 'translate3d('+ x +'px,' + y + 'px,' + '0' }} key={index}>{res}</li>;
                                })
                            }
                            
                        </ul>

                        <div className="ui-hour-pointer">
                            <div className="ui-hour-pointer-strip"></div>
                            <div className="ui-hour-pointer-radius"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hour;
