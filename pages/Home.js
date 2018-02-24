import React from 'react';

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="">
                <p className="react-text">
                    React 版本
                    <span>"react": "^16.2.0",</span>
                    <span>"react-dom": "^16.2.0",</span>
                </p>
            </div>
        );
    }
};

export default Home;