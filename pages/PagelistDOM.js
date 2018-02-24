import React from 'react';

import Pagelist from '../components/Pagelist';

class PagelistDOM extends React.Component {
    constructor() {
        super();
        this.state = {
            selectIndex: 0
        }
    }
    handleCallbackPage(index, callback ) {

        // http({
        //     url: `xxxx.json`
        // }, res => {
            callback();
            this.setState({                
                selectIndex: index
            });
        //});
    }
    render () {
        return (
            <div className="">
                <Pagelist
                        handleCallback={ (index, callback) => this.handleCallbackPage(index, callback) }
                        pageCount={ 30}
                        pageNum={ 2 }
                        aPages={6}
                        selectIndex={this.state.selectIndex}               
                />     

                <div className="table-cnt">
                    <table className="tg" style={{tableLayout: 'fixed', width: '100%'}}>
                        <colgroup>
                            <col style={{width: '30%'}}/>
                            <col style={{width: '70%'}}/>                            
                        </colgroup>
                        <tbody >
                            <tr>                                
                                <td className="tg-yzt1">handleCallback(index, callback)</td>
                                <td className="tg-3we0">回调 index 返回第几页 callback 主要是异步操作</td>
                            </tr>
                            <tr>                                
                                <td className="tg-yzt1">pageCount</td>
                                <td className="tg-3we0">一共有多少条</td>
                            </tr>
                            <tr>                                
                                <td className="tg-yzt1">pageNum</td>
                                <td className="tg-3we0">多少页</td>
                            </tr>
                            <tr>                                
                                <td className="tg-yzt1">aPages</td>
                                <td className="tg-3we0">只能看几页(可以不传默认为5)</td>
                            </tr>
                            <tr>                                
                                <td className="tg-yzt1">selectIndex</td>
                                <td className="tg-3we0">第几页了 从handleCallback 中 index 获取</td>
                            </tr>
                        </tbody>
                    </table>
                </div>       

                <div className="code-block">
                    <pre>
                        <code>
                            {'<'}Pagelist{'\n'}
                                handleCallback={'{'} (index, callback) => this.handleCallbackPage(index, callback) {'}'}{'\n'}
                                pageCount={'{'} 30{'}'}{'\n'}
                                pageNum={'{'} 2 {'}'}{'\n'}
                                aPages={'{'} 6{'}'}{'\n'}
                                selectIndex={'{'}this.state.selectIndex{'}'}{'\n'}
                            />   
                         
                            
                        </code>                        
                    </pre>
                    
                    
                </div>
            </div>
        )
    }
};

export default PagelistDOM;