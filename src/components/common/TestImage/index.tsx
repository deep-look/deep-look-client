import { ChangeEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Flex, Text } from '@deeplook/components/Common';
import { theme } from '@deeplook/styles/theme';
import { CardImage } from 'react-bootstrap-icons';
import encodeFileToBase64 from '@deeplook/utils/encodeFileToBase64';
import { css } from '@emotion/css';

export interface TestImageProps {
    value: any;
    setValue: any;
}

export const TestImage = ({ value, setValue, ...props }: TestImageProps) => {
    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            // console.log(e.target.files);
            const data = await encodeFileToBase64(e.target.files[0]);
            setValue(data);
        }
    };

    const handleImageDelete = () => {
        setValue();
    };

    return (
        <Flex direction="column" align="flex-start" gap={36}>
            <Flex direction="column" gap={30}>
                {value && (
                    <>
                        <DeleteCover>
                            <Deletetag onClick={handleImageDelete}>삭제</Deletetag>
                        </DeleteCover>
                        <Img src={value} />
                    </>
                )}
                <Label>
                    <input
                        type="file"
                        id="profileImage"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                        accept="image/x-png, image/gif, image/jpeg"
                    />
                    <CardImage />
                    <Text typo="Button" color="White">
                        이미지 업로드
                    </Text>
                </Label>
            </Flex>
        </Flex>
    );
};

const Img = styled.img<{
    src: string;
}>`
    ${({ src }) =>
        css`
            background-image: url(${src});
        `};

    object-fit: cover;

    background-size: cover;
    background-position: center;
    background-color: ${theme.palette.Gray3};
    border: 1px dashed ${theme.palette.White};

    height: 180px;
    width: 180px;
    border-radius: 100%;

    position: absolute;
    z-index: 2;
`;

const Label = styled.label`
    color: white;
    background-color: transparent;

    border: 1px dashed ${theme.palette.White};
    box-sizing: border-box;

    height: 180px;
    width: 180px;

    border-radius: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    cursor: pointer;
`;

const DeleteCover = styled(Flex)`
    height: 180px;
    width: 180px;
    border-radius: 100%;
    opacity: 0;

    position: absolute;
    z-index: 3;

    &:hover {
        background: rgba(12, 12, 12, 0.6);
        opacity: 1;
    }
`;

const Deletetag = styled.button`
    width: 80px;
    height: 32px;

    border-radius: 8px;

    background-color: ${theme.palette.Red};
    color: ${theme.palette.White};

    ${theme.typo.Button}
`;
