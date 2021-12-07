/** @jsxImportSource @emotion/react */

import { HalfContainerProps } from '../Props';
import { BeltGear } from './BeltGear';
import { BottomLeft } from './BottomLeft';
import { BottomRight } from './BottomRIght';
// import { BottomOuterBelt } from './BottomOuterBelt';

export function BottomHalfBelt({
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
          display: 'flex',
          flexGrow: 1,
        }}
      >
        <BeltGear size={gearWidth} marginLeft={beltWidth * 2} />
        <BeltGear size={gearWidth} marginLeft={scale - gearWidth - beltWidth * 2} />
        <Motor
          beltColor={beltColors[0]}
          beltWidth={beltWidth}
          gearColor={'black'}
          marginLeft={-beltWidth}
          offset={offset}
          rotation={2.5 * (offset.y - offset.x)}
          scale={scale}
        />
        <Motor
          beltColor={beltColors[1]}
          beltWidth={beltWidth}
          gearColor={'black'}
          marginLeft={scale - beltWidth * 4}
          offset={offset}
          rotation={2.5 * (scale - offset.x - offset.y)}
          scale={scale}
        />
        <BottomLeft
          backgroundColor={backgroundColors[2]}
          beltColors={beltColors}
          beltWidth={beltWidth}
          offset={offset}
          scale={scale}
          showInfo={showInfo}
        />
        <BottomRight
          backgroundColor={backgroundColors[3]}
          beltColors={beltColors}
          beltWidth={beltWidth}
          offset={offset}
          showInfo={showInfo}
          scale={scale}
        />
      </div>
    </>
  );
}

function Motor({
  beltColor,
  beltWidth,
  gearColor,
  marginLeft,
  offset,
  rotation,
  scale,
}: Pick<HalfContainerProps, 'beltWidth' | 'offset' | 'scale'> &
  Readonly<{ gearColor: string; beltColor: string; marginLeft: number; rotation: number }>) {
  const motorSize = beltWidth * 5;
  return (
    <div
      css={{
        boxSizing: 'border-box',
        paddingLeft: beltWidth,
        paddingRight: beltWidth,
        position: 'absolute',
        width: motorSize,
        height: motorSize,
        borderRadius: '10%',
        backgroundColor: 'grey',
        marginLeft,
        marginTop: scale - offset.y - motorSize * 0.75,
      }}
    >
      <BeltGear color={gearColor} size={beltWidth * 3} marginTop={beltWidth} rotation={rotation}>
        &#8593;
      </BeltGear>
      <div
        css={{
          height: motorSize / 2,
          borderLeft: `${beltWidth}px solid ${beltColor}`,
          borderRight: `${beltWidth}px solid ${beltColor}`,
        }}
      />
    </div>
  );
}
