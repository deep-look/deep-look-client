import { theme } from '@deeplook/styles/theme';
import encodeFileToBase64 from '@deeplook/utils/encodeFileToBase64';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Flex, Space, Text } from '../Common';
import { DropZone } from '../common/DropZone/index';
import { Navigation } from '../common/navigation';
import { typo } from '../../styles/theme/typo';
import { Button } from '../common/Button/index';
import { useRouter } from 'next/router';
const Test = () => {
    const router = useRouter();
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
        <div>
            <Navigation title="테스트 하기" />
            <StyledFlex direction="column" justify="space-between" gap={84}>
                <Flex direction="column">
                    <Space height={104} />
                    <Space height={48} />
                    <Text typo="Heading" color="Yellow">
                        정면으로 나온 사진을
                    </Text>
                    <Text typo="Heading" color="Yellow">
                        업로드 해 보세요.
                    </Text>
                    <Space height={24} />
                    <Text typo="Subtitle1" color="White">
                        최종 학습된 AI 모델을 사용하므로
                    </Text>
                    <Text typo="Subtitle1" color="White">
                        사진은 절대 저장되지 않습니다.
                    </Text>
                    <Space height={48} />
                    <DropZone
                        uploadFileHandler={uploadHandler}
                        fileTypeErrorHandler={() => {
                            console.log('file type err');
                        }}
                        fileNumErrorHandler={() => {
                            console.log('file num err');
                        }}
                    />
                </Flex>
                <div>
                    <Button
                        onClick={() => router.push('/result')}
                        text="테스트 결과 보기"
                        color="White"
                        varient="dark"
                    />
                    <Space height={60} />
                </div>
            </StyledFlex>
        </div>
    );
};

export default Test;

const StyledFlex = styled(Flex)`
    height: 100vh;
`;
