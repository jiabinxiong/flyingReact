import React from 'react';

import Checkbox from '../components/Checkbox';
//import loadingLess from '../less/loading.less'

class CheckboxDOM extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className="">
                <div className="dom-block">
                    <Checkbox
                        values={'1'}
                        name={ 'a' }
                        onChange={event => this.changePushBpArr(event)}
                    />
                </div>
                

                <div className="table-cnt">
                    <table className="tg" style={{tableLayout: 'fixed', width: '100%'}}>
                        <colgroup>
                            <col style={{width: '20%'}}/>
                            <col style={{width: '80%'}}/>                            
                        </colgroup>
                        <tbody >
                            <tr>                                
                                <td className="tg-yzt1">values</td>
                                <td className="tg-3we0">checkbox 值 </td>
                            </tr>
                            <tr>                                
                                <td className="tg-yzt1">name</td>
                                <td className="tg-3we0">name</td>
                            </tr>
                            <tr>                                
                                <td className="tg-yzt1">onChange</td>
                                <td className="tg-3we0">事件</td>
                            </tr>                
                        </tbody>
                    </table>
                </div>       

                <div className="code-block">
                    <pre>
                        <code>
                            {'<'}Checkbox{'\n'}
                                values={'{'}{'1'}{'\n'}
                                name={'{'}{'a' }{'\n'}
                                onChange={'{'}event => this.changePushBpArr(event)}{'\n'}
                            />                               
                        </code>                        
                    </pre>
                    
                    
                </div>
                <div className=""style={{color: 'red'}}>注: 要引入calendar.less</div>
            </div>
        )
    }
};

export default CheckboxDOM;