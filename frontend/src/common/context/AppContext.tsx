/**
 * PAJ - Creating a Global Shared State using Context API
 * state defined in this AppProvider will be used throughout the context of our application
 */
import React, { Component, } from 'react';

type ContextProps = { 
    version: string    
};


export const AppContext = React.createContext<Partial<ContextProps>>({});

export class AppProvider extends Component {
    constructor(props: any) {
        super(props);
        this.state = {            
            version:'1.0.1',            
            addLocalStorageItem:(name: string, value: string) => {
                localStorage.setItem(`quest-${name}`, value);
            }, 
            removeLocalStorageItem:(name: string) => {
                localStorage.removeItem(`quest-${name}`);
            },
            getLocalStorageItem:(name: string) => {
                return localStorage.getItem(`quest-${name}`);
            },
            addLocalStorageJSON: (name: string, data: any) => {
                localStorage.setItem(`quest-${name}`, JSON.stringify(data));
            },
            getLocalStorageJSON: (name: string) => {
                const data: any = localStorage.getItem(`quest-${name}`);
                return JSON.parse(data);
            }            
        };
    }

    componentDidMount() {   
    }

    render() {
        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>
    }
}


