import React from 'react';
import popLess from '../less/pop.less'

/*
    *  好要看到最好效果 请在 App.js 里引入 (也可在对应页面引入)  less/pop.less
    *  this.props.popShow 默认为 false （打开）
    *  this.props.animationStyle 弹窗效果  默认don
        *1> annie
    * this.props.promptPop 是否是提示弹窗true  如果不是不上添加
    * this.props.promptText 提示弹窗文字
    * this.props.closeBtn 在要需要右上角关闭按钮 默认true false没有关闭按钮  (位置可以调整)
    * thisprops.callbackClose 只有closeBtn为true才设置 返回是否关闭了弹窗 false 关闭 （也只会返回false）

*/

class Pop extends React.Component {
    constructor() {
        super();

        this.state = {
            statePopShow: false,
            popShowClass: true
        }
    }

    componentDidMount() {        
        this.setState({
            statePopShow: this.props.popShow
        });
    }

    componentWillReceiveProps(nextProps) {            
        if(nextProps.popShow == false) {
            this.setState({
                popShowClass: false
            });

            this.closeTime = setTimeout(() => {
                this.setState({
                    statePopShow: false
                });
                clearTimeout(this.closeTime);
            }, 300);
        } else {
            this.setState({
                statePopShow: nextProps.popShow,
                popShowClass: true
            });

        }
    }

    handleCancel() {
        const {callbackClose = () => {}} = this.props;
        this.setState({
            popShowClass: false
        });
        this.closeBtnTime = setTimeout(() => {
            this.setState({
                statePopShow: false
            });
            clearTimeout(this.closeBtnTime);
        }, 300);

        callbackClose(false);
    }

    componentWillUnmount() {
        clearTimeout(this.closeTime);
        clearTimeout(this.closeBtnTime);
    }


    render () {
        const {statePopShow, popShowClass} = this.state;

        const { className = '', animationStyle='don', promptPop='', promptText, closeBtn=true}  = this.props;
        

        return ( statePopShow ? <div className={ popShowClass ? (animationStyle +'-dialog dialog--open ' + className) : (animationStyle+'-dialog dialog--close ' + className) } >
                <div  className="dialog__overlay"></div>
                <div className="dialog__content">
                    {
                        closeBtn ? <div className="close-btn" onClick={() => this.handleCancel()}>X</div> : ''
                    }

                    {
                        promptPop != '' ? <div className="advance-dekete-bp-pop">{promptText}</div> : ''
                    }
                    {this.props.children}

                </div>
            </div> : ''
        );
    }
}


export default Pop;
