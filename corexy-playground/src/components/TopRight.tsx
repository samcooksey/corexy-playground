/** @jsxImportSource @emotion/react */

import { ContainerProps } from '../Props';
import { BeltLength } from './BeltLength';

export function TopRight({ backgroundColor, beltColors, beltWidth, offset, scale, showInfo }: ContainerProps) {
  return (
    <div
      css={{
        boxSizing: 'border-box',
        borderRight: `${beltWidth}px solid ${beltColors[1]}`,
        borderTopRightRadius: beltWidth * 1.25,
        height: '100%',
        flexGrow: 1,
      }}
    >
      <div
        css={{
          position: 'absolute',
          height: offset.y,
          backgroundColor,
          opacity: 0.75,
          zIndex: -1,
          width: scale - offset.x - beltWidth,
        }}
      />
      <div
        css={{
          boxSizing: 'border-box',
          height: '100%',
          width: '100%',
          borderBottom: `${beltWidth}px solid ${beltColors[0]}`,
          borderRight: `${beltWidth}px solid ${beltColors[0]}`,
          borderTopRightRadius: beltWidth * 1.25,
          borderBottomRightRadius: beltWidth * 1.25,
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
                textAlign: 'right',
                marginRight: 5,
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
              <BeltLength length={scale - offset.x} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
