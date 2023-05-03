import { KeyOfPalette, KeyOfTypo, theme } from '@deeplook/styles/theme';
import styled from '@emotion/styled';

export const Text = styled.div<{
  typo: KeyOfTypo;
  color: KeyOfPalette;
}>`
  ${({ typo }) => theme.typo[typo]};
  color: ${({ color }) => theme.palette[color]};
  display: flex;
  align-items: center;
`;

export const Space = styled.div<{
  height: number;
}>`
  height: ${({ height }) => `${height}px`};
`;

export const Flex = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  gap?: number;
  width?: number;
  height?: number;
}>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'center')};
  align-items: ${({ align }) => (align ? `${align}` : 'center')};
  gap: ${({ gap }) => (gap ? `${gap}px` : '0px')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
`;

export const Line = styled.div<{
  width?: number;
  height?: number;
}>`
  width: ${({ width }) => (width ? `${width}px` : '0px')};
  height: ${({ height }) => (height ? `${height}px` : '0px')};
  background-color: ${theme.palette.Gray1};
  border-radius: 25px;
`;
