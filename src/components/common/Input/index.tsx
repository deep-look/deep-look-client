/* eslint-disable react/display-name */
/** @jsxImportSource @emotion/react */
import { jsx ,css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { Flex } from '@deeplook/components/Common'; 
import { KeyOfPalette } from '@deeplook/styles/theme'; 
import { calcRem } from '@deeplook/styles/theme';
import { Text } from '@deeplook/components/Common'; 

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  width?: number;
  height?: number;
  styles?: SerializedStyles;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

/**
 * @default: input (input 태그 속성 그대로)
 *
 * @param width: number (기본값: 100%)
 * @param height: number (기본값: 56px)
 * @param leftImage: 왼쪽에 들어갈 수 있는 element
 * @param rightImage: 오른쪽에 들어갈 수 있는 element
 * @param messageColor: KeyOfPalette
 */

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      height,
      styles,
      ...props
    }: InputProps,
    ref,
  ) => {
    return (
      <Flex
        align={'flex-start'}
        justify={'center'}
        direction={'column'}
        gap={10}
        style={{ width: '100%' }}
      >
        <InputWrapper width={props.width} height={height} css={styles}>
          {props.leftIcon}
          <StyledInput
            value={value}
            ref={ref}
            onClick={props.onClick}
            autoComplete="off"
            {...props}
          />
          {props.rightIcon}
        </InputWrapper>
       
      </Flex>
    );
  },
);

const InputWrapper = styled.div<{
  width?: number;
  height?: number;
}>`
  box-sizing: border-box;
  background: ${({ theme }) => theme.palette.White};
  border-radius: 12px;

  padding: 16px;
  gap: 10px;

  height: ${({ height }) => (height ? `${height}px` : `48px`)};
  width: ${({ width }) => (width ? `${width}px` : '100%')};

  // ㅡ.ㅡ
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  border: none;
  background: transparent;
  padding: 0;

  width: 100%;
  line-height: 100%;

  color: ${({ theme }) => theme.palette.Black};

  ::placeholder {
    color: ${({ theme }) => theme.palette.Gray1};
  }

  &:disabled {
    ::placeholder {
      color: ${({ theme }) => theme.palette.Gray1} !important;
    }
  }
`;

const MessageWrapper = styled.div<{
  errorMessage?: string;
}>`
  padding-left: 16px;
  padding-bottom: ${({ errorMessage }) =>
    errorMessage ? `${calcRem(18)}` : '0'};
  height: ${({ errorMessage }) => (errorMessage ? '0' : `${calcRem(18)}`)};
`;