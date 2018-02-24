import React from 'react';

import Select from '../components/Select';

class SelectDOM extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className="">
                <div className="dom-block">
                    <Select
                        valArr={[1, 2]}
                        textArr={['a', 'b']}
                        value='a'
                        selectedShow={true}
                        selectedText='请选择某某'
                        onChange={event => this.changeTest(event)}
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
                                <td className="tg-yzt1">valArr</td>
                                <td className="tg-3we0">值</td>
                            </tr>
                            <tr>                                
                                <td className="tg-yzt1">textArr</td>
                                <td className="tg-3we0">name</td>
                            </tr>                           
                            <tr>                                
                                <td className="tg-yzt1">value</td>
                                <td className="tg-3we0">默认是第个 (是textArr的某个值)</td>
                            </tr>
                            <tr>
                                <td className="tg-yzt1">selectedShow</td>
                                <td className="tg-3we0">是否显示请选择 true显示 <span className="red">可选</span></td>
                            </tr>
                            <tr>
                                <td className="tg-yzt1">selectedText</td>
                                <td className="tg-3we0">设置selectedShow 为true时才能用 <span className="red">可选</span></td>
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
                            {'<'}Select{'\n'}
                            valArr={'{'}[1, 2]}{'\n'}
                            textArr={'{'}['a', 'b']}{'\n'}
                            value='a'{'\n'}
                            selectedShow={'{'}true}{'\n'}
                            selectedText='请选择某某'{'\n'}
                            onChange={'{'}event => this.changeTest(event)}{'\n'}
                            />                               
                        </code>                        
                    </pre>
                    
                    
                </div>            
            </div>
        )
    }
};

export default SelectDOM;