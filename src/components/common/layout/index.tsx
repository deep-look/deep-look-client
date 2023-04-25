import { media } from '@deeplook/styles/theme/theme';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 450px;
  height: 100vh;

  ${media.mobile} {
    width: 100vw;
  }
`;
