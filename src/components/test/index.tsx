import { theme } from '@deeplook/styles/theme';
import encodeFileToBase64 from '@deeplook/utils/encodeFileToBase64';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Flex } from '../Common';
import { DropZone } from '../common/DropZone/index';
const Test = () => {
    const [image, setImage] = useState<string | null>(null);

    const uploadHandler = (image: File) => {
        // encodeFileToBase64(image, setImage);
    };

    const deleteImageHandler = () => {
        setImage(null);
    };

    useEffect(() => {
        document.body.style.backgroundColor = `${theme.palette.Gray3}`;
        return () => {
            document.body.style.backgroundColor = 'transparent';
        };
    }, []);

    return (
        <>
            <DropZone
                uploadFileHandler={uploadHandler}
                fileTypeErrorHandler={() => {
                    console.log('file type err');
                }}
                fileNumErrorHandler={() => {
                    console.log('file num err');
                }}
            />
        </>
    );
};

export default Test;
