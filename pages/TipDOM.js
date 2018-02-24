import React from 'react';

import Tip from '../components/Tip';

class TipDOM extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        Tip('tip');
    }

    render () {
        return (
            <div className="">

                <div className="code-block">
                    <pre>
                        <code>
                            Tip('tip');
                         
                            
                        </code>                        
                    </pre>
                    
                    
                </div>
            </div>
        )
    }
};

export default TipDOM;