import { FC } from 'react';
import { Box, Spinner } from 'grommet';

interface LoadedSpinnerProps {
    size: 'small' | 'medium' | 'large'
};

const LoadedSpinner: FC<LoadedSpinnerProps> = ({ size }): JSX.Element => (
    <Box align="center" direction="row" gap="small" pad="small">
        <Spinner size={size} />
    </Box>
);

export default LoadedSpinner;