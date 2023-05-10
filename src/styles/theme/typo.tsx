import { css } from '@emotion/react';

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  Heading: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: ${calcRem(20)};
    line-height: 140%;
  `,
  Body1: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: ${calcRem(14)};
    line-height: 160%;
    letter-spacing: -0.004em;
  `,
  Body2: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: ${calcRem(50)};
    line-height: 140%;
  `,
  Body3: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: ${calcRem(14)};
    line-height: 140%;
  `,
  Body4: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 300;
    font-size: ${calcRem(14)};
    line-height: 160%;
  `,
  Body5: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: ${calcRem(16)};
    line-height: 150%;
  `,
  Subtitle1: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: ${calcRem(16)};
    line-height: 140%;
  `,
  Subtitle2: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: ${calcRem(20)};
    line-height: 140%;
  `,
  Button: css`
    font-family: 'pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: ${calcRem(15)};
    letter-spacing: -0.004em;
  `,
} as const;
