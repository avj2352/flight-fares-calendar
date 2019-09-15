import React, { FunctionComponent } from 'react';

export interface IOptions {
    key: string;
    display: string;
};

type ISelectOption = {
    title: string,
    options: IOptions[]
};

const Select:FunctionComponent<ISelectOption> = (props) => {
    let selectOptions = props.options ? props.options.map(el => {
        return  <option value={el.key}>{el.display}</option>
    }) : null;
    return (
        <React.Fragment>
            <div className="w-full mx-2 mb-6 md:mb-0">
                <div className="block text-white uppercase tracking-wide text-xs font-bold mb-2">{props.title}</div>
                <div className="relative">
                    <select
                        className="block shadow appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state">
                          {selectOptions}
                    </select>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Select;