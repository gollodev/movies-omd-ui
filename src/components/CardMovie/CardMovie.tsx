import { FC } from 'react';
import { 
    Box, 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Image,
    Text
} from 'grommet';

interface CardMovieProps {
    image: string;
    title: string;
    year: number;
    type: string;
};

const CardMovie: FC<CardMovieProps> = ({ title, image, year, type }): JSX.Element => {
    return (
        <Box pad="large" gap="small" width="medium">
            <Card pad="small" background="dark-1" gap="small">
                <CardHeader>
                    <Image src={image} fit="contain" />
                </CardHeader>
                <CardBody>
                    <Text tag={'h4'} size={'medium'} style={ { margin: '0', textAlign: 'center' } }>{title}</Text>
                </CardBody>
                <CardFooter>
                    <Text size="small">{`Year: ${year}`}</Text>
                    <Text size="small">{`Type: ${type}`}</Text>
                </CardFooter>
            </Card>
        </Box>
    );
};

export default CardMovie;