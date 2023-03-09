import { styled, Button } from '@mui/material';

export const PurchaseBtn = styled(Button)`
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

export const InfoBox = styled('fieldset')`
    margin-top: 12px;
    text-align: left;
    border: 2px solid #9ec7ea;
    border-radius: 16px;
    padding: 12px 24px;
`;
