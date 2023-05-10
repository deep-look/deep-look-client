/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { typo } from '@deeplook/styles/theme';

export interface CommentCardProps {
  name: string;
  comment: string;
  img?: string;
}

export const CommentCard = ({ name, comment, img }: CommentCardProps) => {
  return (
    <CommentCardWrapper>
      <CommentContent>
        <ImgWrapper>
          <Img />
        </ImgWrapper>
        <Text>
          <Name css={typo.Subtitle1}>{name}</Name>
          <Comment css={typo.Body4}>{comment}</Comment>
        </Text>
      </CommentContent>
    </CommentCardWrapper>
  );
};

const CommentCardWrapper = styled.div`
  width: 100%;

  border: 2px solid transparent;
  border-radius: 0.5rem;
  background-image: linear-gradient(
      ${({ theme }) => theme.palette.Gray3},
      ${({ theme }) => theme.palette.Gray3}
    ),
    ${({ theme }) => theme.palette.Line};
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const CommentContent = styled.div`
  padding: 1.2rem 0 1.2rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ImgWrapper = styled.div`
  width: 64px;
  height: 64px;

  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.palette.Gray2};
  object-fit: cover;
`;

const Text = styled.div`
  width: 68%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Name = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.palette.Yellow2};
`;
const Comment = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.palette.White};
`;
