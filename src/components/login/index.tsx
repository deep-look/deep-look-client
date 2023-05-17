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
            <KakaoButton onClick={() => {}} />
            <a href="https://kauth.kakao.com/oauth/authorize?client_id=40dbbef94591db718a3d21b49c4823e2&redirect_uri=http://localhost:8080/login/oauth2/code/kakao&response_type=code">
                카카오 로그인
            </a>
        </div>
    );
};

export default Login;
