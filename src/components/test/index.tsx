/* eslint-disable react-hooks/exhaustive-deps */
import { theme } from '@deeplook/styles/theme';

import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Flex, Space, Text } from '../Common';
import { TestImage } from '../common/TestImage/index';
import { Navigation } from '../common/navigation';
import { Button } from '../common/Button/index';
import { useRouter } from 'next/router';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import predictAPI from '@deeplook/apis/predict';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataState, successState, userIdState } from '@deeplook/store/Auth/userState';
import { getCookie } from '@deeplook/utils/cookie';
const Test = () => {
  const router = useRouter();
  const [image, setImage] = useState<string>('');
  const [isQueryEnabled, setIsQueryEnabled] = useState(false);
  const userId = useRecoilValue(userIdState);
  const queryClient = useQueryClient();
  const [isSuccess, setIsSuccess] = useRecoilState(successState);
  const [data, setData] = useRecoilState(dataState);
  //   const { data, status } = useQuery(['test', userId], () => predictAPI.POST_PREDICT(image, getCookie()), {
  //     enabled: isQueryEnabled,
  //   });

  //   console.log(data, status);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['test', userId] });
  }, []);

  const deleteImageHandler = () => {
    setImage('');
  };

  useEffect(() => {
    document.body.style.backgroundColor = `${theme.palette.Gray3}`;
    return () => {
      document.body.style.backgroundColor = 'transparent';
    };
  }, []);

  const handleResultButtonClick = async () => {
    setIsQueryEnabled(true);
    const { isSuccess, data } = await predictAPI.POST_PREDICT(image, getCookie());

    if (isSuccess) {
      setIsSuccess(isSuccess);
      setData(data);
      router.push('/result');
    } else {
      alert(data);
      router.reload();
    }
  };

  return (
    <>
      <Navigation title="테스트 하기" />
      <Content>
        <StyledFlex direction="column">
          <Text typo="Heading" color="Yellow2">
            정면으로 나온 사진을
          </Text>
          <Text typo="Heading" color="Yellow2">
            업로드 해 보세요.
          </Text>
          <Space height={24} />
          <Text typo="Body3" color="White">
            최종 학습된 AI 모델을 사용하므로
          </Text>
          <Text typo="Body3" color="White">
            사진은 절대 저장되지 않습니다.
          </Text>
          <Space height={48} />
          <TestImage value={image} setValue={setImage} />
          <Space height={144} />
          <Button fullWidth onClick={handleResultButtonClick} text="테스트 결과 보기" color="White" varient="dark" />
          <Space height={60} />
        </StyledFlex>
      </Content>
    </>
  );
};

export default Test;

const Content = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 160px 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

const StyledFlex = styled(Flex)`
  min-height: 640px;
`;
