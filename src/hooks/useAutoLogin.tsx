/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import authAPI from '../apis/auth';
import { getCookie } from '../utils/cookie';
import { useAuth } from './useAuth';

export function useAutoLogin() {
    const router = useRouter();
    const accessToken = getCookie();
    const { tokenValidationMutation } = useAuth();
    const { pathname } = router;

    useEffect(() => {
        if (accessToken) {
            tokenValidationMutation.mutate(accessToken);
        }
    }, []);

    // const accessTokenMutation = useMutation(authAPI.TOKEN_VALIDATION, {
    //     onSuccess: (data: any) => {
    //         tokenValidationMutation.mutate(accessToken);
    //     },
    //     onError: (error: any) => console.log(error),
    // });

    // return { accessTokenMutation };
}
