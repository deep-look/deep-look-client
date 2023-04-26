/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { typo } from '@deeplook/styles/theme';
import { Space, Text } from '@deeplook/components/Common';

export interface MainCardProps {
  description: string;
  title: string;
  img?: string;
}

export const MainCard = ({ title, description, img }: MainCardProps) => {
  return (
    <MainCardWrapper>
        <Wrapper>
        <Space height={28}/>
        <Text typo='Subtitle1' color='Yellow3'>{description}</Text>
        <Space height={8}/>
        <Text typo='Heading' color='Gray3'>{title}</Text>
        <Space height={56}/>
        </Wrapper>
        <Img src='question.png'/>  
    </MainCardWrapper>
  );
};

const MainCardWrapper = styled.div`
  width: 100%;
  height: 142px;
  padding-left: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.palette.Black};
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
 position: absolute;
 z-index: 1;
`

const Img = styled.img`
 position: absolute;
 
 right: 1rem;
 top: -2.36px;
`