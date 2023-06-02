import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { KakaoIcon } from '@deeplook/components/icons';
import { theme } from '@deeplook/styles/theme';
import { Flex } from '@deeplook/components/Common';

export const KakaoButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <StyledButton {...props}>
            <KakaoIcon />
            <Flex>
                <Text>카카오로 시작하기</Text>
            </Flex>
        </StyledButton>
    );
};

const StyledButton = styled.button`
    border-radius: 5px;
    width: 100%;
    height: 54px;

    display: flex;
    align-items: center;
    background-color: #fee500;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 17px 0px 17px;
`;

const Text = styled.div<{}>`
    ${theme.typo.Button}
    color: #000000
`;
