import styled from '@emotion/styled';
import AnimatedCursor from 'react-animated-cursor';

interface CursorProps {
  color?: string;
  innerSize?: number;
  outerScale?: number;
  outerSize?: number;
}

export default function Cursor({
  color,
  innerSize,
  outerScale,
  outerSize,
}: CursorProps) {
  return (
    <Wrapper>
      <AnimatedCursor
        color={color}
        innerSize={innerSize}
        outerScale={outerScale}
        outerSize={outerSize}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
