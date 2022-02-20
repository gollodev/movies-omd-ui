import { FC, ReactNode } from 'react';
import HeaderApp from '../HeaderApp';

interface LayoutProps {
    children: ReactNode
};

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => (
    <div className="Layout">
        <HeaderApp/>
        {children}
    </div>
);

export default Layout;