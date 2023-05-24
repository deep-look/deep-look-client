import { setAccessToken } from '@deeplook/utils/cookie';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { userIdState, isLoggedInState, accessTokenState } from '../store/Auth/userState';
import { useRecoilState } from 'recoil';
import authAPI from '../apis/auth';

export const useAuth = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const [userId, setUserId] = useRecoilState(userIdState);
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
    const [token, setToken] = useRecoilState(accessTokenState);

    // 가입 여부 확인
    const kakaoValidationMutation = useMutation(authAPI.KAKAO_VALIDATION, {
        onSuccess: async (data: any) => {
            setAccessToken(data.accessToken);
            setToken(data.accessToken);
            // // 가입한 유저인 경우 로그인
            // kakaoLoginMutation.mutate(data);
        },
        onError: (error: any) => {
            alert('현재 가입 여부 확인이 어려워요.');
        },
    });

    // // // 로그인
    // const kakaoLoginMutation = useMutation(authAPI.TEST, {
    //     onSuccess: (data: any) => {
    //         setIsLoggedIn(true);
    //         router.push('/test');
    //     },
    //     onError: (error: any) => {
    //         alert('로그인에 실패했어요.');
    //     },
    // });

    return {
        kakaoValidationMutation,
    };
};
