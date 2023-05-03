import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { KakaoIcon } from '@deeplook/components/icons';
import { theme } from '@deeplook/styles/theme';

export const KakaoButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton {...props}>
      <KakaoIcon />
      <Text>카카오 로그인/회원가입</Text>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border-radius: 12px;
  width: 384px;
  height: 70px;

  display: flex;
  align-items: center;
  background-color: #fee500;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 57px 0px 29px;
`;

const Text = styled.div<{}>`
  ${theme.typo.Button}
  color: #000000
`;
