/* eslint-disable react-hooks/exhaustive-deps */
import { isLoggedInState } from '@deeplook/store/Auth/userState';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import authAPI from '../apis/auth';
import { getCookie, removeCookie } from '../utils/cookie';
import { useAuth } from './useAuth';

export function useAutoLogin() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
    const accessToken = getCookie();
    const { tokenValidationMutation } = useAuth();
    const { pathname } = router;

    useEffect(() => {
        if (accessToken) {
            tokenValidationMutation.mutate(accessToken);
        } else if (pathname === '/result' || pathname === '/test') {
            router.push('/login');
            alert('시간이 지나 자동으로 로그아웃 되었습니다.');
            setIsLoggedIn(false);
            removeCookie();
        }
    }, []);
}
