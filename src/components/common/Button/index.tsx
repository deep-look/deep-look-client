/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { darken } from 'polished';
import { ButtonHTMLAttributes } from 'react';
import { Flex, Text } from '@deeplook/components/Common'; 
import { KeyOfPalette, theme } from '@deeplook/styles/theme';
import { ArrowIcon } from '@deeplook/components/icons';

export type ButtonVarient =
  | 'dark'
  | 'yellow'

/**
 * @param types 버튼의 종류 :  'dark' | 'yellow';
 * @param size 버튼의 사이즈 : 화면에 꽉차게 / 크기 고정
 * @param text 
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient: ButtonVarient;
  fullWidth: boolean;
  isLoading: boolean;
  width: number;
  text: string;
  color: KeyOfPalette;
}

type Props = Partial<ButtonProps>;

const TEXT_COLOR = {
  normal: {
    dark: `${theme.palette.White}`,
    yellow: `${theme.palette.Gray3}`,
  },
};

const BUTTON_COLOR = {
  normal: {
    dark: `${theme.palette.Gray2}`,
    yellow: `${theme.palette.Yellow2}`,
  },
  hover: {
    dark: `${darken(0.01, theme.palette.Gray2)}`,
    yellow: `${darken(0.035, theme.palette.Yellow2)}`,
  },
  active: {
    dark: `${darken(0.03, theme.palette.Gray2)}`,
    yellow: `${darken(0.06, theme.palette.Yellow2)}`,
  },
  disabled: {
    dark: `${theme.palette.Gray1}`,
    yellow: `${theme.palette.Gray1}`,
  },
};

export const Button = ({
  text = '',
  color= 'Black',
  varient = 'dark',
  fullWidth = false,
  width,
  ...props
}: Props) => {
  return (
    <StyledButton
      varient={varient}
      fullWidth={fullWidth}
      width={width}
      {...props}
    >
    <Flex gap={16}>
    <Text typo={'Button'} color={color}>{text}</Text>
    <ArrowIcon/>
    </Flex>
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  varient: ButtonVarient;
  fullWidth: boolean;
  width?: number;
}>`
  height: 54px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ fullWidth, width }) =>
    width ? `${width}px` : fullWidth ? '100%' : '340px'};

  ${({ theme, varient }) =>
    css`
      border: 1px solid ${theme.palette.Black};
    `}
  background-color: ${({ varient }) => BUTTON_COLOR.normal[varient]};

  color: ${({ varient }) => TEXT_COLOR.normal[varient]};

  &:hover {
    background-color: ${({ varient }) => BUTTON_COLOR.hover[varient]};
  }
  &:active {
    background-color: ${({ varient }) => BUTTON_COLOR.active[varient]};
  }
  &:disabled {
    color: ${({ theme }) => theme.palette.White} !important;
    background-color: ${({ varient }) =>
      BUTTON_COLOR.disabled[varient]} !important;
    border: none;
  }
`;