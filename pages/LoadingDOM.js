import React from 'react';

import Loading from '../components/Loading';
import loadingLess from '../less/loading.less'

class LoadingDOM extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className="">
                <Loading/>  

                <div className="table-cnt">
                    <table className="tg" style={{tableLayout: 'fixed', width: '100%'}}>
                        <colgroup>
                            <col style={{width: '90%'}}/>
                            <col style={{width: '10%'}}/>                            
                        </colgroup>
                        <tbody >
                            <tr>                                
                                <td className="tg-yzt1">没有参数 但是要引入loading.less</td>
                                <td className="tg-3we0"></td>
                            </tr>                     
                        </tbody>
                    </table>
                </div>       

                <div className="code-block">
                    <pre>
                        <code>
                            {'<'}Loading/>   
                         
                            
                        </code>                        
                    </pre>
                    
                    
                </div>
            </div>
        )
    }
};

export default LoadingDOM;