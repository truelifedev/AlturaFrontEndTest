import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { getImgUrl, shortenString } from '../utils/common';
import DetailedInfoItem from './DetailedInfoItem';
import Tooltip from '@mui/material/Tooltip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { PurchaseBtn, InfoBox } from './styles';

interface ComponentProps {
    selectedItem: any;
}

const DetailInfoBox: React.FC<ComponentProps> = ({ selectedItem }): JSX.Element => {
    const [tooltip1Show, setTooptip1Show] = useState(false);
    const [tooltip2Show, setTooptip2Show] = useState(false);

    return (
        <div>
            {selectedItem && (
                <Stack width={480} gap={1}>
                    <img
                        width="100%"
                        height="320px"
                        src={selectedItem.metadata ? getImgUrl(JSON.parse(selectedItem.metadata).image) : ''}
                        style={{ borderRadius: '12px', objectFit: 'contain' }}
                        alt="No Image Found."
                    />
                    <Typography fontSize={24} fontWeight={600} marginX="auto">
                        {selectedItem.name}
                    </Typography>
                    <InfoBox>
                        <legend style={{ color: '#0b72c4' }}>Details</legend>
                        <Stack gap={1} paddingY={1}>
                            <DetailedInfoItem
                                title="Token ID:"
                                info={
                                    selectedItem.token_id.length < 15
                                        ? selectedItem.token_id
                                        : shortenString(selectedItem.token_id, 8)
                                }
                            />
                            <Stack direction="row" spacing={1}>
                                <DetailedInfoItem
                                    title="Contract Address:"
                                    info={shortenString(selectedItem.token_address, 4)}
                                    infocolor="#0b72c4"
                                />
                                <Tooltip
                                    open={tooltip1Show}
                                    title="Copied to clipboard!"
                                    leaveDelay={1500}
                                    placement="right"
                                    onClose={() => setTooptip1Show(false)}
                                >
                                    <ContentCopyIcon
                                        onClick={() => {
                                            navigator.clipboard.writeText(selectedItem.token_address);
                                            setTooptip1Show(true);
                                        }}
                                        sx={{ color: '#0b72c4', cursor: 'pointer' }}
                                    />
                                </Tooltip>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <DetailedInfoItem
                                    title="Owner Address:"
                                    info={shortenString(selectedItem.owner_of, 4)}
                                    infocolor="#0b72c4"
                                />
                                <Tooltip
                                    open={tooltip2Show}
                                    title="Copied to clipboard!"
                                    leaveDelay={1500}
                                    placement="right"
                                    onClose={() => setTooptip2Show(false)}
                                >
                                    <ContentCopyIcon
                                        onClick={() => {
                                            navigator.clipboard.writeText(selectedItem.owner_of);
                                            setTooptip2Show(true);
                                        }}
                                        sx={{ color: '#0b72c4', cursor: 'pointer' }}
                                    />
                                </Tooltip>
                            </Stack>
                            <DetailedInfoItem
                                title="Description:"
                                info={selectedItem.metadata ? JSON.parse(selectedItem.metadata).description : ''}
                            />
                            <PurchaseBtn
                                onClick={() =>
                                    window.open(
                                        `https://opensea.io/assets/ethereum/${selectedItem.token_address}/${selectedItem.token_id}`,
                                        '_blank',
                                        'noopener,noreferrer'
                                    )
                                }
                            >
                                Purchase
                            </PurchaseBtn>
                        </Stack>
                    </InfoBox>
                </Stack>
            )}
        </div>
    );
};

export default DetailInfoBox;
