export const getImgUrl = (url: string) => {
    if (url.startsWith('ipfs://ipfs/')) return url.replace('ipfs://ipfs/', 'https://ipfs.io/ipfs/');
    else if (url.startsWith('ipfs://')) return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
    else return url;
};

// Get Abbrevation of long address //
export const shortenString = (orgStr: string, nDigits: number) =>
    orgStr ? `${orgStr.substring(0, nDigits)}...${orgStr.substring(orgStr.length - nDigits, orgStr.length)}` : '';

export const fixURL = (url: string) => {
    if (url.startsWith('ipfs')) {
        return 'https://ipfs.moralis.io:2053/ipfs/' + url.split('ipfs://ipfs/').slice(-1)[0];
    } else {
        return url + '?format=json';
    }
};
export const fixURL2 = (url: string) => {
    if (url.startsWith('ipfs')) {
        return 'https://ipfs.moralis.io:2053/ipfs/' + url.split('ipfs://').slice(-1)[0];
    } else {
        return url;
    }
};
