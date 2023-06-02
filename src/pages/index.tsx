import Head from 'next/head';
import styled from '@emotion/styled';
import { MainCard } from '@deeplook/components/common/card/main';
import { Button } from '@deeplook/components/common/Button';
import { DownIcon, LogoIcon, LogoImage } from '@deeplook/components/icons';
import { Space, Flex } from '@deeplook/components/Common';
import { theme } from '@deeplook/styles/theme';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isLoggedInState } from '../store/Auth/userState';
import { useRecoilValue } from 'recoil';

export default function Home() {
    const router = useRouter();
    const isLoggedIn = useRecoilValue(isLoggedInState);

    useEffect(() => {
        document.body.style.backgroundColor = `${theme.palette.Black}`;
        return () => {
            document.body.style.backgroundColor = 'transparent';
        };
    }, []);

    return (
        <>
            <Head>
                <title>DEEPLOOK</title>
            </Head>
            <Content bg="dark">
                <Logo>
                    <div style={{ color: `${theme.palette.White}` }}>
                        <LogoIcon />
                    </div>
                    <LogoImage />
                </Logo>
                <DownIcon />
            </Content>
            <Content bg="yellow">
                <StyledFlex gap={16} direction="column">
                    <MainCard title="나랑 닮은 연예인이 누굴까?" description="설명설명어쩌구" />
                    <MainCard title="나랑 잘 어울릴 것 같은 명품 브랜드가 궁금해!" description="설명설명어쩌구" />
                    <MainCard title="나는 누구와 가장 닮았을까?" description="설명설명어쩌구" />
                    <MainCard title="어떤 결과가 나올지 궁금해!" description="설명설명어쩌구" />
                </StyledFlex>
                <StyledButton
                    onClick={isLoggedIn ? () => router.push('/test') : () => router.push('/login')}
                    text="테스트 하러 가기"
                    color="White"
                    varient="dark"
                    fullWidth
                ></StyledButton>
                <Space height={60} />
            </Content>
        </>
    );
}

const Content = styled.div<{ bg: string }>`
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: 100vh;
    min-height: 816px;
    padding: 0 1rem;
    background: ${({ bg }) =>
        bg == 'dark' ? ({ theme }) => theme.palette.Black : ({ theme }) => theme.palette.Yellow2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

const StyledFlex = styled(Flex)`
    height: 100%;
`;

const StyledButton = styled(Button)`
    max-width: 600px;
`;
