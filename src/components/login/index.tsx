import styled from '@emotion/styled';
import { Flex } from '../Common';
import { KakaoButton } from '../common/Button/KakaoButton';
import { LogoIcon } from '../icons';

const Login = () => {
    return (
        <StyledFlex gap={36} direction="column">
            <div style={{ color: '#000' }}>
                <LogoIcon />
            </div>
            <a className="kakaoButton" href="https://deeplookingproject.com/api/oauth2/authorization/kakao">
                <KakaoButton />
            </a>
        </StyledFlex>
    );
};

export default Login;

const StyledFlex = styled(Flex)`
    .kakaoButton {
        width: 100%;
    }
`;
