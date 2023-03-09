import React, { useState } from 'react';
import { Container, Grid, TextField, Dialog, Stack, Typography } from '@mui/material';
import { NFTItemCard, GetNftBtn } from './styles';
import DetailInfoBox from './components/DetailInfoBox';
import { getImgUrl, shortenString } from './utils/common';

export default function App() {
    const [ownerAddr, setOwnerAddr] = useState<string>('');
    const [nftList, setNFTList] = useState<any[]>([]);
    const [selectedItem, setSelectedItem] = useState<any>();
    const [errorMsg, setErrorMsg] = useState<string>('');

    const [dlgOpen, setDlgOpen] = useState(false);

    const getNFTList = () => {
        const web3ApiKey = 'jsaJe1aAH60wSQbiFwdwwKi2OAcyQmLqDu7aQyHZWlz5mpo0LHa54fbWYF4yhezA';
        const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
        const options = {
            method: 'GET',
            headers,
            params: { chain: '0x1' }
        };

        fetch(`https://deep-index.moralis.io/api/v2/${ownerAddr}/nft`, options)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.message) {
                    setErrorMsg(data.message);
                    setNFTList([]);
                } else {
                    setErrorMsg('');
                    setNFTList(data.result);
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <Container maxWidth="lg" sx={{ my: 4 }}>
            <Stack spacing={2} alignItems="center">
                <Stack direction="row" spacing={2}>
                    <TextField
                        sx={{ width: 480 }}
                        value={ownerAddr}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setOwnerAddr(event.target.value);
                        }}
                    ></TextField>
                    <GetNftBtn onClick={getNFTList}>Get NFT List</GetNftBtn>
                </Stack>
                <Typography color={errorMsg.length > 0 ? '#B71C1C' : 'black'}>
                    {errorMsg.length > 0
                        ? errorMsg
                        : nftList.length === 0
                        ? 'No NFT in this address.'
                        : `${nftList.length} items found.`}
                </Typography>
            </Stack>
            <Grid container spacing={3} marginTop={4}>
                {nftList.map((item, index) => (
                    <Grid item xs={4}>
                        <NFTItemCard
                            gap={1}
                            onClick={() => {
                                setSelectedItem(item);
                                setDlgOpen(true);
                            }}
                        >
                            <img
                                width="100%"
                                height="320px"
                                src={item.metadata ? getImgUrl(JSON.parse(item.metadata).image) : ''}
                                style={{ borderRadius: '12px', objectFit: 'contain' }}
                                alt="No Image Found."
                            />
                            <Typography fontWeight={600} marginX="auto">
                                {item.name}
                            </Typography>
                            <Typography>
                                <span style={{ fontWeight: 600 }}>Token ID:</span>{' '}
                                {item.token_id.length < 15 ? item.token_id : shortenString(item.token_id, 8)}
                            </Typography>
                        </NFTItemCard>
                    </Grid>
                ))}
            </Grid>
            <Dialog
                open={dlgOpen}
                onClose={() => {
                    setDlgOpen(false);
                }}
                maxWidth="lg"
                PaperProps={{
                    sx: {
                        padding: 4,
                        borderRadius: 2
                    }
                }}
            >
                <DetailInfoBox selectedItem={selectedItem} />
            </Dialog>
        </Container>
    );
}
