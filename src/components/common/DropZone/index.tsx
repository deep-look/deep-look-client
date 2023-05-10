import { Flex } from '@deeplook/components/Common';
import styled from '@emotion/styled';
import { Text } from '@deeplook/components/Common';
import { CSSProperties } from '@emotion/serialize';
import { KeyOfTypo, KeyOfPalette } from '@deeplook/styles/theme';
import { CardImage } from 'react-bootstrap-icons';
import { FileUploader } from 'react-drag-drop-files';
import { ReactNode } from 'react';

export interface DropZoneProps {
    uploadFileHandler: (file: any) => void;
    fileTypeErrorHandler: (err: Error) => void;
    fileNumErrorHandler: () => void;
}

export const DropZone = ({ uploadFileHandler, fileTypeErrorHandler, fileNumErrorHandler }: DropZoneProps) => {
    const fileTypes = ['png', 'jpeg', 'jpg'];

    const fileUploaderHandler = (file: File[]) => {
        if (file.length !== 1) {
            fileNumErrorHandler();
        } else {
            uploadFileHandler(file[0]);
        }
    };

    return (
        <BorderBox>
            <FileUploader
                multiple={true} // 파일 여러개 업로드
                handleChange={fileUploaderHandler} // 파일 업로드시 핸들러
                onTypeError={fileTypeErrorHandler} // 파일 타입 에러 핸들러
                types={fileTypes} // 파일 타입 종류
                dropMessageStyle={{ background: 'none', border: 'none' }} // 호버시 컴포넌트 스타일
                hoverTitle=" " // 호버시 컴포넌트 text
            >
                <InputBox align={'center'} direction="column" gap={10}>
                    <CardImage />
                    <Text typo="Button" color="White">
                        이미지 업로드
                    </Text>
                </InputBox>
            </FileUploader>
        </BorderBox>
    );
};

const BorderBox = styled.div`
    border-radius: 100%;

    width: 15rem;
    height: 15rem;

    border: 1px dashed ${({ theme }) => theme.palette.White};

    box-sizing: border-box;

    & > input {
        display: none;
    }

    & > label {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
`;

const InputBox = styled(Flex)`
    height: 100%;

    & > svg > path {
        fill: ${({ theme }) => theme.palette.White};
    }
`;
