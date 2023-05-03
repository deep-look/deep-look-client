import { css } from '@emotion/react';

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  Heading: css`
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: ${calcRem(20)};
    line-height: 140%;
  `,
  Body1: css`
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: ${calcRem(14)};
    line-height: 160%;
    letter-spacing: -0.004em;
  `,
  Subtitle1: css`
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    font-size: ${calcRem(16)};
    line-height: 140%;
  `,
  Subtitle2: css`
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: ${calcRem(20)};
    line-height: 140%;
  `,
  Button: css`
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: ${calcRem(16)};
    line-height: 140%;
    letter-spacing: -0.004em;
  `,
} as const;
