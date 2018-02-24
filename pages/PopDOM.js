import React from 'react';

import Pop from '../components/Pop';

class PopDOM extends React.Component {
    constructor() {
        super();

        this.state = {
            popShowA: false,
            popShowB: false
        }
    }
    handlePopShowA() {
        this.setState({
            popShowA: true
        });
    }
    handleCancelA() {
        this.setState({
            popShowA: false
        });
    }

    handlePopShowB() {
        this.setState({
            popShowB: true
        });
    }

    handleCloseB(v) {
        this.setState({
            popShowB: v
        });
    }
    render () {
        const {
            popShowA,
            popShowB
        } = this.state;
        return (
            <div className="">
                <div className="pop-btn ui-btn" onClick={() => this.handlePopShowA()}>
                    按钮1
                </div>

                <div className="pop-btn ui-btn" onClick={() => this.handlePopShowB()}>
                    按钮2
                </div>

                 <Pop 
                    popShow={popShowA} 
                    closeBtn={false}                                    
                    >
                    <div className="">这里放内容的</div>
                    <div className="btn-block pop-block-btn">
                        <div className="cancel-btn ui-btn" onClick={() => this.handleCancelA()}>取消</div>
                        <div className="determine-btn ui-btn" >确定</div>
                    </div>
                </Pop>
                
                <Pop
                    popShow={popShowB}
                    animationStyle={'annie'}
                    promptPop={true}
                    promptText={'你确定要删除吗'}
                    callbackClose={v => this.handleCloseB(v)}
                    >

                    <div className="btn-block pop-block-btn">
                        <div className="cancel-btn ui-btn" onClick={() => this.handleCancelB()}>取消</div>
                        <div className="determine-btn ui-btn" >确定</div>
                    </div>
                </Pop>

                

                <div className="table-cnt">
                    <table className="tg" style={{tableLayout: 'fixed', width: '100%'}}>
                        <colgroup>
                            <col style={{width: '15%'}}/>
                            <col style={{width: '85%'}}/>                            
                        </colgroup>
                        <tbody >
                            <tr>                                
                                <td className="tg-yzt1">popShow</td>
                                <td className="tg-3we0">弹窗是否弹出<span className="red">(布尔值)</span></td>
                            </tr>  
                            <tr>                                
                                <td className="tg-yzt1">animationStyle</td>
                                <td className="tg-3we0">弹窗类型<span className="red">默认don 可设置annie</span></td>
                            </tr>                                                        
                            <tr>                                
                                <td className="tg-yzt1">closeBtn</td>
                                <td className="tg-3we0">右上角关闭按钮<span className="red">默认是true (布尔值)</span></td>
                            </tr>                     
                            <tr>                                
                                <td className="tg-yzt1">promptPop</td>
                                <td className="tg-3we0">是否是提示弹窗<span className="red">(布尔值)</span></td>
                            </tr>                     
                            <tr>                                
                                <td className="tg-yzt1">promptText</td>
                                <td className="tg-3we0">提示弹窗文字 <span className="red">promptPop 与 promptText 是一起的 如果二个其中一个设置了对应另一个也要设置</span></td>
                            </tr>
                            <tr>                                
                                <td className="tg-yzt1">callbackClose</td>
                                <td className="tg-3we0">点击右上角按钮返回值 <span className="red">(布尔值)</span>返回的值用作关闭弹窗</td>
                            </tr>                     
                        </tbody>
                    </table>
                </div>    

                <div className="code-block">
                    <pre>
                        <code>                                        
                            {'<'}Pop{'\n'} 
                                &nbsp;&nbsp;popShow={'{'}true} {'\n'} 
                                &nbsp;&nbsp;closeBtn={'{'}false}{'\n'}                           
                                >{'\n'} 
                                &nbsp;&nbsp;{'<'}div className="">这里放内容的{'<'}/div>{'\n'} 
                                &nbsp;&nbsp;{'<'}div className="btn-block">{'\n'} 
                                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}div className="cancel-btn btn" onClick={'{'}() => this.handleCancelB()}>取消{'<'}/div>{'\n'} 
                                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}div className="determine-btn btn" >确定{'<'}/div>{'\n'} 
                                &nbsp;&nbsp;{'<'}/div>{'\n'} 
                                {'<'}/Pop>
                        </code>                        
                    </pre>                                        
                </div>   

                <div className="code-block">
                    <pre>
                        <code>                                        
                            {'<'}Pop{'\n'} 
                            &nbsp;&nbsp;popShow={'{'}true}{'\n'}
                                &nbsp;&nbsp;animationStyle={'\''}annie'}{'\n'}
                                &nbsp;&nbsp;promptPop={'{'}true}{'\n'}
                                &nbsp;&nbsp;promptText={'{'}'你确定要删除吗'}{'\n'}
                                &nbsp;&nbsp;callbackClose={'{'}v => this.handleCloseB(v)}                                
                                >{'\n'}                                 
                                &nbsp;&nbsp;{'<'}div className="btn-block">{'\n'} 
                                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}div className="cancel-btn btn" onClick={'{'}() => this.handleCancelA()}>取消{'<'}/div>{'\n'} 
                                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}div className="determine-btn btn" >确定{'<'}/div>{'\n'} 
                                &nbsp;&nbsp;{'<'}/div>{'\n'} 
                                {'<'}/Pop>
                        </code>                        
                    </pre>                                        
                </div>

            </div>
        )
    }
};

export default PopDOM;