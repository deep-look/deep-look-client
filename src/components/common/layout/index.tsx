import { useAutoLogin } from '@deeplook/hooks/useAutoLogin';
import { media } from '@deeplook/styles/theme/theme';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    useAutoLogin();
    return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
    width: 600px;
    height: 100vh;

    ${media.mobile} {
        width: 100vw;
        max-width: 600px;
    }
`;
