import { FC, ReactNode } from 'react';
import { Box } from 'grommet';

interface ContainerProps {
    children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }): JSX.Element => (
    <Box
        direction={'column'}
        justify={'center'}
        align={'center'}
        pad={'small'}
        gap={'small'}
        margin={'small'}
    >
        {children}
    </Box>
);

export default Container;