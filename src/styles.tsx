import { styled, Stack, Button } from '@mui/material';

export const NFTItemCard = styled(Stack)`
    padding: 16px;
    border: 1px solid gray;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
`;

export const GetNftBtn = styled(Button)`
    padding: 6px 16px 2px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    background: #2c75b3;
    color: white;
    &:hover {
        background: #2c85d3;
    }
`;
