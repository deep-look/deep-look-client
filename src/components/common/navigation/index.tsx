import styled from '@emotion/styled';
import { BackIcon } from '@deeplook/components/icons';
import { theme } from '@deeplook/styles/theme';
import { Text } from '@deeplook/components/Common';

export interface NavProps {
  title: string;
}

export const Navigation = ({ title }: NavProps) => {
  return (
    <NavWrapper>
      <NavContent>
        <IconWrapper>
          <BackIcon />
        </IconWrapper>
        <Text typo="Button" color="White">
          {title}
        </Text>
        <Spacing />
      </NavContent>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  height: 104px;

  display: flex;
  align-items: flex-end;

  position: fixed;

  background: ${({ theme }) => theme.palette.Gray3};
`;

const NavContent = styled.div`
  width: 100%;
  height: 56px;

  padding: 0 1rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.palette.White};
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spacing = styled.div`
  width: 40px;
  height: 40px;
`;
