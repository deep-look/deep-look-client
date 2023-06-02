import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { userIdState } from '@deeplook/store/Auth/userState';
import { useQueryClient } from '@tanstack/react-query';

import { theme } from '@deeplook/styles/theme';
import { Navigation } from '@deeplook/components/common/navigation';
import { Flex, Text } from '../Common';
import { Button } from '../common/Button';
import Comment from '../comment';
import { names } from '@deeplook/constants/name';

const Result = () => {
    useEffect(() => {
        document.body.style.backgroundColor = `${theme.palette.Gray3}`;
        return () => {
            document.body.style.backgroundColor = 'transparent';
        };
    }, []);

    const router = useRouter();

    const queryClient = useQueryClient();
    const userId = useRecoilValue(userIdState);
    const predicts = queryClient.getQueryData<any>(['test', userId]);
    // console.log(predicts?.data.celebrityInitial);

    return (
        <>
            <Navigation title="테스트 결과" />
            <Content bg="dark">
                {predicts ? (
                    <>
                        <StyledFlex direction="column" justify="space-around" gap={72}>
                            <Flex direction="column" gap={16}>
                                <Text typo="Heading" color="Yellow2">
                                    당신과 닮은 유명인은
                                </Text>
                                <Flex direction="column">
                                    <Text typo="Body2" color="White">
                                        {names[predicts?.data.celebrityInitial]}
                                    </Text>
                                    <Text typo="Heading" color="White">
                                        {Math.round(predicts?.data.accuracy * 100) + '%'}
                                    </Text>
                                </Flex>
                                <ImgWrapper>
                                    <Img src={`/img/drama/${predicts?.data.celebrityInitial}.png`} />
                                </ImgWrapper>
                            </Flex>
                            <Flex direction="column" gap={16}>
                                <Text typo="Heading" color="Yellow2">
                                    당신과 어울리는 브랜드는
                                </Text>
                                <ImgWrapper>
                                    <Img src={`/img/luxury_icon/${predicts?.data.celebrityInitial}.png`} />
                                </ImgWrapper>
                            </Flex>
                        </StyledFlex>
                    </>
                ) : (
                    <Flex direction="column">
                        <Text className="error-image" typo="Heading" color="Yellow2">
                            사진에서 얼굴이 인식되지 않았습니다.
                        </Text>
                        <Text className="error-image" typo="Heading" color="Yellow2">
                            얼굴이 더 잘 보이게 촬영해주세요.
                        </Text>
                    </Flex>
                )}

                <Button
                    fullWidth
                    text="테스트 다시 하기"
                    varient="yellow"
                    color="Gray3"
                    onClick={() => router.push('/test')}
                />

                <Line />
                <Flex direction="column" justify="space-around" gap={48}>
                    <Comment />
                </Flex>
            </Content>
        </>
    );
};

const Content = styled.div<{ bg: string }>`
    width: 100%;
    max-width: 600px;
    padding: 160px 32px;

    background: ${({ bg }) =>
        bg == 'dark' ? ({ theme }) => theme.palette.Gray3 : ({ theme }) => theme.palette.Yellow2};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`;

const ImgWrapper = styled.div`
    width: 200px;
    height: 200px;

    border-radius: 50%;
    overflow: hidden;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

const Line = styled.hr`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.Yellow2};
    border: 0;
`;

const StyledFlex = styled(Flex)`
    min-height: 640px;
`;

export default Result;
