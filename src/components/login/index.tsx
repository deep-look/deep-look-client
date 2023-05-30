import { Flex } from '../Common';
import { KakaoButton } from '../common/Button/KakaoButton';
import { LogoIcon } from '../icons';

const Login = () => {
    return (
        <div>
            <Flex>
                <div style={{ color: '#000' }}>
                    <LogoIcon />
                </div>
            </Flex>
            <KakaoButton />
            <a href="https://deeplookingproject.com/api/oauth2/authorization/kakao">카카오 로그인</a>
        </div>
    );
};

export default Login;
