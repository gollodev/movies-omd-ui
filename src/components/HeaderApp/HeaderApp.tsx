import { FC } from 'react';
import { Header, Heading } from 'grommet';
import Container from '../Container';

const HeaderApp: FC = (): JSX.Element => {
    return (
        <Header background="brand">
            <Container>
                <Heading size={'small'}>OMD Movies App</Heading>
            </Container>
        </Header>
    );
};

export default HeaderApp;