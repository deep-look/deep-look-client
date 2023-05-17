import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Callback = () => {
    const router = useRouter();
    const { userId } = router.query;

    useEffect(() => {
        if (userId && typeof userId === 'string') {
            console.log(userId, '됐나?');
            router.push('/home');
        }
    }, [userId]);

    return <div></div>;
};

export default Callback;
