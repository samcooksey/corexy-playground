/** @jsxImportSource @emotion/react */
import { ContainerProps } from '../Props';
import { BeltLength } from './BeltLength';

export function TopLeft({ backgroundColor, beltColors, beltWidth, offset, showInfo }: ContainerProps) {
  return (
    <div
      css={{
        boxSizing: 'border-box',
        borderLeft: `${beltWidth}px solid ${beltColors[0]}`,
        borderTopLeftRadius: beltWidth * 1.25,
        height: offset.y,
        width: offset.x,
      }}
    >
      <div
        css={{
          position: 'absolute',
          height: offset.y,
          backgroundColor,
          opacity: 0.75,
          zIndex: -1,
          width: offset.x - beltWidth,
        }}
      />
      <div
        css={{
          boxSizing: 'border-box',
          height: '100%',
          width: '100%',
          borderBottom: `${beltWidth}px solid ${beltColors[1]}`,
          borderLeft: `${beltWidth}px solid ${beltColors[1]}`,
          borderTopLeftRadius: beltWidth * 1.25,
          borderBottomLeftRadius: beltWidth * 1.25,
        }}
      >
        {showInfo && (
          <div
            css={{
              height: '55%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <div
              css={{
                marginTop: 'auto',
                textAlign: 'left',
                marginLeft: 5,
              }}
            >
              <BeltLength length={offset.y} />
            </div>
          </div>
        )}
        {showInfo && (
          <div
            css={{
              height: '45%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <div
              css={{
                marginTop: 'auto',
                marginBottom: 5,
              }}
            >
              <BeltLength length={offset.x} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
