import React from 'react';

import Hour from '../components/Hour';

class HourDOM extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className="">
                <div className="dom-block">
                    <Hour />
                </div>
                

                <div className=""style={{color: 'red'}}>更新中。。。。。。</div>
            </div>
        )
    }
};

export default HourDOM;