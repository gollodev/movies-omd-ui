import { FC, ReactNode } from 'react';
import { Grommet, grommet } from 'grommet';

interface ThemeProps {
    children: ReactNode,
    darkMode?: boolean
};

const Theme: FC<ThemeProps> = ({ children, darkMode }): JSX.Element => (
    <Grommet full theme={grommet} themeMode={darkMode ? 'dark' : 'light'}>
        {children}
    </Grommet>
);

export default Theme;