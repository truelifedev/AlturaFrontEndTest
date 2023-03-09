import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { getImgUrl, shortenString } from '../utils/common';
import DetailedInfoItem from './DetailedInfoItem';
import Tooltip from '@mui/material/Tooltip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { PurchaseBtn } from './styles';

interface ComponentProps {
    selectedItem: any;
}

const DetailInfoBox: React.FC<ComponentProps> = ({ selectedItem }): JSX.Element => {
    const [copyTooltipShow, setCopyTooltipShow] = useState(false);

    return (
        selectedItem && (
            <Stack width={480} gap={1}>
                <img
                    width="100%"
                    height="320px"
                    src={getImgUrl(JSON.parse(selectedItem.metadata).image)}
                    style={{ borderRadius: '12px', objectFit: 'contain' }}
                    alt=""
                />
                <Typography fontSize={24} fontWeight={600} marginX="auto">
                    {selectedItem.name}
                </Typography>
                <DetailedInfoItem
                    title="Token ID:"
                    info={
                        selectedItem.token_id.length < 15
                            ? selectedItem.token_id
                            : shortenString(selectedItem.token_id, 8)
                    }
                />
                <Stack direction="row" spacing={1}>
                    <DetailedInfoItem title="Owner Address:" info={shortenString(selectedItem.owner_of, 4)} />
                    <Tooltip
                        open={copyTooltipShow}
                        title="Copied to clipboard!"
                        leaveDelay={1500}
                        placement="right"
                        onClose={() => setCopyTooltipShow(false)}
                    >
                        <ContentCopyIcon
                            onClick={() => {
                                navigator.clipboard.writeText(selectedItem.owner_of);
                                setCopyTooltipShow(true);
                            }}
                            sx={{ cursor: 'pointer' }}
                        />
                    </Tooltip>
                </Stack>
                <DetailedInfoItem title="Description:" info={JSON.parse(selectedItem.metadata).description} />
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
        )
    );
};

export default DetailInfoBox;
