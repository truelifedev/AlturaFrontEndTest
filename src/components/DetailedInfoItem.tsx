import { Stack, Typography } from '@mui/material';

interface ComponentProps {
    title: string;
    info?: string;
    infocolor?: string;
}

const DetailedInfoItem: React.FC<ComponentProps> = ({ title, info, infocolor }): JSX.Element => {
    return (
        <Stack direction="row">
            <Typography fontWeight={600} sx={{ minWidth: 140 }}>
                {title}
            </Typography>
            {info && (
                <Typography color={infocolor ? infocolor : 'black'}>
                    {info.length > 64 ? info.substring(0, 60) + '...' : info}
                </Typography>
            )}
        </Stack>
    );
};

export default DetailedInfoItem;
