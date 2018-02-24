import React from 'react';

import Calendar from '../components/Calendar';

class TipDOM extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className="">
                <Calendar
                    placeholder='请选择时间'
                    format='2018-02-08'                    
                    callbackVal={val => this.callbackVal(val)}
                /> 
                <div className="table-cnt">
                    <table className="tg" style={{tableLayout: 'fixed', width: '100%'}}>
                        <colgroup>
                            <col style={{width: '30%'}}/>
                            <col style={{width: '70%'}}/>                            
                        </colgroup>
                        <tbody >
                            <tr>                                
                                <td className="tg-yzt1">placeholder</td>
                                <td className="tg-3we0">input 提示字</td>
                            </tr>                     
                            <tr>                                
                                <td className="tg-yzt1">format</td>
                                <td className="tg-3we0">设置时间 格式 2018-02-08<span className="red"> 可不设置 默认是当前年-月-日</span></td>
                            </tr>
                            <tr>                                
                                <td className="tg-yzt1">callbackVal</td>
                                <td className="tg-3we0">选中回调</td>
                            </tr>                     
                        </tbody>
                    </table>
                </div>    

                <div className="code-block">
                    <pre>
                        <code>
                            placeholder='请选择时间'{'\n'}
                            format='2018-02-08'{'\n'}              
                            callbackVal={'{'}val => this.callbackVal(val)}                         
                            
                        </code>                        
                    </pre>
                    
                    
                </div>

                <div className=""style={{color: 'red'}}>注: 要引入calendar.less</div>
            </div>
        )
    }
};

export default TipDOM;