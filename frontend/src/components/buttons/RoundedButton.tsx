/**
 * Reusable Rounded Button Component
 */
import React, { FunctionComponent } from 'react';

type ISelectOption = {
    title: string,
    onClick:(evt: any) => void
};

const RoundedButton:FunctionComponent<ISelectOption> = (props) => {
    return (
        <React.Fragment>
            <button onClick={props.onClick}
                    className="md:mt-6 
                    outline-none 
                    focus:outline-none 
                    hover:bg-indigo-100 
                    self-end 
                    flex mx-auto 
                    lg:mx-0 
                    bg-white 
                    text-gray-800 
                    font-bold 
                    rounded-full 
                    my-2 
                    py-2 
                    px-8 
                    shadow 
                    opacity-75">{props.title}</button>
        </React.Fragment>
    );
};

export default RoundedButton;
