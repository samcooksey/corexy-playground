/** @jsxImportSource @emotion/react */

import { HalfContainerProps } from '../Props';
import { BeltGear } from './BeltGear';
import { TopLeft } from './TopLeft';
import { TopRight } from './TopRight';

export function TopHalfBelt({
  backgroundColors,
  beltWidth,
  gearWidth,
  beltColors,
  offset,
  scale,
  showInfo,
}: HalfContainerProps) {
  return (
    <>
      <div
        css={{
          position: 'absolute',
          paddingLeft: 10,
        }}
      >
        <div
          css={{
            marginTop: 4,
            position: 'absolute',
            width: scale - 20,
            borderTop: `${beltWidth}px solid ${beltColors[0]}`,
            transform: 'rotate(1deg)',
          }}
        />
        <div
          css={{
            marginTop: 4,
            position: 'absolute',
            width: scale - 20,
            borderTop: `${beltWidth}px solid ${beltColors[1]}`,
            transform: 'rotate(-1deg)',
          }}
        />
      </div>
      <BeltGear size={gearWidth} />
      <BeltGear size={gearWidth} marginLeft={scale - gearWidth} />
      <BeltGear size={gearWidth} marginLeft={beltWidth} marginTop={offset.y - gearWidth} />
      <BeltGear size={gearWidth} marginLeft={scale - gearWidth - beltWidth} marginTop={offset.y - gearWidth} />
      <div
        css={{
          display: 'flex',
        }}
      >
        <TopLeft
          backgroundColor={backgroundColors[0]}
          beltColors={beltColors}
          beltWidth={beltWidth}
          offset={offset}
          scale={scale}
          showInfo={showInfo}
        />
        <TopRight
          backgroundColor={backgroundColors[1]}
          beltColors={beltColors}
          beltWidth={beltWidth}
          offset={offset}
          scale={scale}
          showInfo={showInfo}
        />
      </div>
    </>
  );
}
