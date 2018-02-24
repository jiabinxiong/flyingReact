import React from 'react';
import checkboxLess from '../less/checkbox.less';

const Checkbox = (props) => {

    return (
        <label className="ui-checkbox-label" onChange={props.onChange}>
            <input type="checkbox" value={props.values} className="checkbox" /> {props.name}
        </label>
    )
};

export default Checkbox;
