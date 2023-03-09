import React, { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import { fixURL, fixURL2 } from '../utils/common';

interface ComponentProps {
    token_uri: string;
}

const NftImgBox: React.FC<ComponentProps> = ({ token_uri }): JSX.Element => {
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        getImgUrl(token_uri);
    }, [token_uri]);

    const getImgUrl = (token_uri: string) => {
        let url = fixURL(token_uri);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(fixURL2(data.image));
            });
    };

    return (
        <img
            width="100%"
            height="320px"
            src={imageUrl}
            style={{ borderRadius: '12px', objectFit: 'contain' }}
            alt="No Image Found."
        />
    );
};

export default NftImgBox;
