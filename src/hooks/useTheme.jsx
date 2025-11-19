import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const useTheme = () => {
    // This hook simply retrieves the value provided by the ThemeProvider.
    // When the Provider state updates, all components using this hook re-render.
    return useContext(ThemeContext);
};

export default useTheme;