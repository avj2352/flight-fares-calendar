/**
 * Compound Component - Containing Form for sending data to Browse Quotes Flight API
*/

import React, { FunctionComponent, useState, useContext } from 'react';
import RadioGroup from './../radio-group/RadioGroup';
import OriginDestinationSelect from './../origin-destination-select/OriginDestinationSelect';
import Select from './../select/Select';
import RoundedButton from './../buttons/RoundedButton';
import { monthOptions, cabinDetails } from './month-details';
import { AppContext } from '../../common/context/AppContext';

type IFormOption = {    
    onSubmit:(data: any) => void
};

const FareDetailsForm:FunctionComponent<IFormOption> = (props) => {
    const appContext = useContext(AppContext);
    const [odData, setOdData] = useState(null);
    // Event handlers
    const clickHandler = (evt: any) => {
        // console.log('Data to send: ', appContext.origin, appContext.destination, appContext.month);
        props.onSubmit({origin: appContext.origin, destination: appContext.destination, month: appContext.month});
    };

    const odSelectChangeHandler = (data: any) => {
        // console.log('Change from OriginDestination Dropdown is: ', data);
        setOdData(data);
    };

    const monthSelectChangeHandler = (data: any) => {
        // console.log('Month changed: ', data);
        appContext.month = data;
    };

    const cabinChangeHandler = (data: any) => {
        // console.log('Cabin changed: ', data);
    }

    return (
        <React.Fragment>
            <RadioGroup />
            <div className="w-full flex flex-1 flex-col align-center md:flex-row">
                <OriginDestinationSelect onChange={odSelectChangeHandler}/>
                <Select title={`Select Month`} options={monthOptions} onChange={monthSelectChangeHandler} />
                <Select title={`Cabin, Class & Travellers`} options={cabinDetails} onChange={cabinChangeHandler}/>
            </div>
            <div className="w-full flex flex-wrap flex-row justify-center">
                <RoundedButton title="Find Fares" onClick={clickHandler} />
            </div>
        </React.Fragment>
    );
};

export default FareDetailsForm;