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
    </div>
  );
};

export default Login;
