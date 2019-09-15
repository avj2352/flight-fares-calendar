import React, { FunctionComponent, useState } from "react";
import Calendar from 'react-calendar';

type CalendarProps = {    
    onChange:(evt: any) => void,
    display: boolean,    
    value: string
};

const FlightCalendar: FunctionComponent<CalendarProps> = (props) =>{
    const [date, setDate] = useState(new Date);

    const dateHandler = (date: any) => {
        setDate(date);
        props.onChange(date);
    };

    const tileContentDisplay = ({ date, view }:any):any => {
        if(view === 'month') {
            switch(date.getDay()) {
                case 0:
                    return <p className="cell-amount">$ 100</p>;
                case 1:
                    return <p className="cell-amount">$ 300</p>;
                case 2:
                    return <p className="cell-amount">$ 400</p>;
                case 3:
                    return <p className="cell-amount">$ 450</p>;
                case 4:
                    return <p className="cell-amount">$ 500</p>;
                case 5:
                    return <p className="cell-amount">$ 600</p>;
                case 6:
                    return <p className="cell-amount">$ 650</p>;

                default:
                    return null;
            }
        }        
    };

    const flightContent = props.display && props.value!=='' ? <div className="z-40 absolute shadow text-black">
                            <Calendar 
                                onChange={dateHandler}
                                minDetail="month"
                                prevLabel={''}
                                prev2Label={''}
                                nextLabel={''}
                                next2Label={''}
                                showNeighboringMonth={false}
                                value={new Date(props.value)}
                                tileContent={tileContentDisplay}/>                                
                            </div>
                            : <div className="z-40 mt-32 text-blue-300 textShadow">
                                <h1>&quot;<em>Fill Form Details to display Fares for the month in Calendar view</em>&quot;</h1>
                            </div>;
    return (
        <React.Fragment>
            {flightContent}
        </React.Fragment>
    );
};

export default FlightCalendar;