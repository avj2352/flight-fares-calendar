/**
 * Testing AppContext
 */
import { useContext } from 'react';
import { AppContext } from './AppContext';

it('contains field called - version', () => {
    const appContext = useContext(AppContext);
    console.log(appContext.version);
});