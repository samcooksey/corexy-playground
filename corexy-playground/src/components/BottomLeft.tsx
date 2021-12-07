/** @jsxImportSource @emotion/react */
import { ContainerProps } from '../Props';
import { BeltLength } from './BeltLength';

export function BottomLeft({ backgroundColor, beltColors, beltWidth, offset, scale, showInfo }: ContainerProps) {
  return (
    <div
      css={{
        boxSizing: 'border-box',
        height: '100%',
        width: offset.x,
        borderLeft: `${beltWidth}px solid ${beltColors[0]}`,
        paddingLeft: beltWidth,
      }}
    >
      <div
        css={{
          position: 'absolute',
          height: scale - offset.y,
          backgroundColor,
          opacity: 0.75,
          zIndex: -1,
          marginLeft: -beltWidth,
          width: offset.x - beltWidth,
        }}
      />
      <div
        css={{
          boxSizing: 'border-box',
          height: '100%',
          width: '100%',
          borderTop: `${beltWidth}px solid ${beltColors[0]}`,
          borderLeft: `${beltWidth}px solid ${beltColors[0]}`,
          borderTopLeftRadius: beltWidth * 1.25,
        }}
      >
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
                marginBottom: 'auto',
                marginTop: 5,
              }}
            >
              <BeltLength length={offset.x} />
            </div>
          </div>
        )}
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
                textAlign: 'left',
                marginBottom: 'auto',
                marginLeft: 5,
              }}
            >
              <BeltLength length={scale - offset.y} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
