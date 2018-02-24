import React from 'react';

const Tip = (text, callback = ()=> {}) => {

    const styleStr = 'position: fixed; z-index: 9999999999; top: 50%; left: 50%; min-width: 150px; min-height: 20px; padding: 10px; line-height: 20px; border-radius: 5px; font-size: 14px; color: #fff; text-align: center;';
    const styleBack = 'background-color: rgba(0, 0, 0, 0.6);';
    const styleTransform = 'transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%);';

    let  divTip = document.createElement('div');
    divTip.setAttribute('id', 'tipObj');
    divTip.setAttribute('style', styleStr + styleBack + styleTransform);
    divTip.innerHTML = text;

    let timer = setTimeout(() =>{
        let self = document.getElementById('tipObj');

        self.remove();
        callback();
        clearTimeout(timer);
    }, 1200);

    document.body.appendChild(divTip);
}


export default Tip;
