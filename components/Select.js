import React from 'react';

/*

    *  this.props.value select 选中值也是默认选中值 对应 this.props.valArr
    *  this.props.textArr select 文字
    *  this.props.valArr select 值
    *  this.props.selectedShow select 是否显示请选择 true显示
        * this.props.value => value=""
        *this.props.selectedTest='请选择'

*/


const Select = (props) => {
    const { className='', textArr, valArr, selectedText, selectedShow=false, ...copyObj } = props;

    return <select { ...copyObj } className={'ui-select ' + className}>
                {
                    selectedShow ? <option value="">{selectedText}</option> : ''
                }
                {
                    props.valArr.map((text, index) => {

                        return <option key={index} value={textArr[index]} >{ text }</option>

                    })
                }
            </select>;
}


export default Select;
