/**
 * Compound Component - Containing Form for sending data to Browse Quotes Flight API
*/

import React, { FunctionComponent, useState } from 'react';
import RadioGroup from './../radio-group/RadioGroup';
import OriginDestinationSelect from './../origin-destination-select/OriginDestinationSelect';
import Select from './../select/Select';
import RoundedButton from './../buttons/RoundedButton';

type IFormOption = {    
    onSubmit:(data: any) => void
};

const FareDetailsForm:FunctionComponent<IFormOption> = (props) => {
    const [odData, setOdData] = useState(null);
    // Event handlers
    const clickHandler = (evt: any) => {
        props.onSubmit(`data`);
    };

    const odSelectChangeHandler = (data: any) => {
        console.log('Change from OriginDestination Dropdown is: ', data);
        setOdData(data);
    };

    return (
        <React.Fragment>
            <RadioGroup />
            <div className="w-full flex flex-1 flex-col align-center md:flex-row">
                <OriginDestinationSelect onChange={odSelectChangeHandler}/>
                <Select title={`Select Month`} />
                <Select title={`Cabin, Class & Travellers`} />
            </div>
            <div className="w-full flex flex-wrap flex-row justify-center">
                <RoundedButton title="Find Fares" onClick={clickHandler} />
            </div>
        </React.Fragment>
    );
};

export default FareDetailsForm;