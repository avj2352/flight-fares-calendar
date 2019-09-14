import React, { FunctionComponent } from 'react';

type IconProps = {
    color?: string
};

const RadioGroup: FunctionComponent<IconProps> = (props) =>{
    return (
        <React.Fragment>
            <div className="radio-group my-5 inline-flex items-center">
                <input type="radio" className="form-radio" name="radio" value="1" defaultChecked/>
                <span className="ml-2 mr-4">One Way</span>
                <input type="radio" className="form-radio" name="radio" value="2" disabled/>
                <span className="ml-2 mr-4 text-gray-500">Return</span>
                <input type="radio" className="form-radio" name="radio" value="3" disabled/>
                <span className="ml-2 mr-4 text-gray-500">Multi-city</span>
            </div>
        </React.Fragment>
    );
}

export default RadioGroup;