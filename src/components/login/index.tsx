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
            <a href="https://deeplookingproject.com/api/oauth2/authorization/kakao">
                <KakaoButton />
            </a>
        </div>
    );
};

export default Login;
