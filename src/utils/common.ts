export const getImgUrl = (url: string) => {
    let newUrl = url;
    if (url.startsWith('ipfs')) return newUrl.replace('ipfs://', 'https://ipfs.io/ipfs/');

    return newUrl;
};

// Get Abbrevation of long address //
export const shortenString = (orgStr: string, nDigits: number) =>
    orgStr ? `${orgStr.substring(0, nDigits)}...${orgStr.substring(orgStr.length - nDigits, orgStr.length)}` : '';
