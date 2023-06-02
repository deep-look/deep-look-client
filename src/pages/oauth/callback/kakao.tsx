/* eslint-disable react-hooks/exhaustive-deps */
import authAPI from '@deeplook/apis/auth';
import { client } from '@deeplook/apis/client';
import { useAuth } from '@deeplook/hooks/useAuth';
import { getCookie } from '@deeplook/utils/cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
// import { useAuth } from '../../../hooks/useAuth';
// import { useUser } from '../../../hooks/useUser';
import { accessTokenState } from '../../../store/Auth/userState';

const Callback = () => {
    const router = useRouter();
    const { userId } = router.query;
    const { kakaoValidationMutation } = useAuth();

    useEffect(() => {
        if (userId && typeof userId === 'string') {
            // console.log('되나??', userId);
            kakaoValidationMutation.mutate(Number(userId));
        }
    }, [userId]);
    // const { kakaoValidationMutation } = useAuth();

    // useEffect(() => {
    //     if (code && typeof code === 'string') {
    //         kakaoValidationMutation.mutate(code);
    //     }
    // }, [code]);

    return <div></div>;
};

export default Callback;
