import { Stack, Typography } from '@mui/material';

interface ComponentProps {
    title: string;
    info: string;
}

const DetailedInfoItem: React.FC<ComponentProps> = ({ title, info }): JSX.Element => {
    return (
        <Stack direction="row">
            <Typography fontWeight={600} sx={{ minWidth: 120 }}>
                {title}
            </Typography>
            <Typography>{info.length > 64 ? info.substring(0, 60) + '...' : info}</Typography>
        </Stack>
    );
};

export default DetailedInfoItem;
