/** @jsxImportSource @emotion/react */

import { PropsWithChildren } from 'react';

export function BeltGear({ children, color, marginLeft, marginTop, rotation, size }: PropsWithChildren<BeltGearProps>) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        color: 'white',
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color || 'brown',
        marginLeft,
        marginTop,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {children}
    </div>
  );
}

interface BeltGearProps
  extends Readonly<{
    color?: string;
    marginLeft?: number;
    marginTop?: number;
    rotation?: number;
    size: number;
  }> {}
