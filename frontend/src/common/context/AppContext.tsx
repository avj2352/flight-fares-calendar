/**
 * PAJ - Creating a Global Shared State using Context API
 * state defined in this AppProvider will be used throughout the context of our application
 */
import React, { Component, } from 'react';
import { store } from 'react-notifications-component';

const initialState = { 
    version: '1.0.01',
    name: 'Flight Fares Calendar',
    addNotification:(title: string = 'NOTE', description: string, type?: string, duration?: number ):any => {
        const notificationType: string = type ? type: `success`;
        const timing: number = duration ? duration: 5000;
        store.addNotification ({
            title: title,
            width:300,
            message: description,
            type: notificationType,
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: timing,
              onScreen: true
            }
          });
    }
};

type State = Readonly<typeof initialState>;

export const AppContext = React.createContext(initialState);

export class AppProvider extends Component {
    constructor(props: any) {
        super(props);        
    }    

    render() {
        return <AppContext.Provider value={initialState}>
            {this.props.children}
        </AppContext.Provider>
    }
}


