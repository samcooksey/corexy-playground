/** @jsxImportSource @emotion/react */
import { ContainerProps } from '../Props';
import { BeltLength } from './BeltLength';

export function BottomRight({ backgroundColor, beltColors, beltWidth, offset, scale, showInfo }: ContainerProps) {
  return (
    <div
      css={{
        boxSizing: 'border-box',
        height: '100%',
        borderRight: `${beltWidth}px solid ${beltColors[1]}`,
        flexGrow: 1,
        paddingRight: beltWidth,
      }}
    >
      <div
        css={{
          position: 'absolute',
          height: 500 - offset.y,
          backgroundColor,
          opacity: 0.75,
          zIndex: -1,
          width: 500 - offset.x - beltWidth,
        }}
      />
      <div
        css={{
          boxSizing: 'border-box',
          height: '100%',
          width: '100%',
          borderTop: `${beltWidth}px solid ${beltColors[1]}`,
          borderRight: `${beltWidth}px solid ${beltColors[1]}`,
          borderTopRightRadius: beltWidth * 1.25,
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
              <BeltLength length={scale - offset.x} />
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
                textAlign: 'right',
                marginBottom: 'auto',
                marginRight: 5,
              }}
            >
              <BeltLength length={500 - offset.y} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
