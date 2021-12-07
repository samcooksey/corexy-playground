export interface BeltProps extends Readonly<{
    beltColor: string;
    beltWidth: number;
    side: 'left' | 'right';

    backgroundColor?: string;
    offset?: Coordinates;
}>{}

export interface ContainerProps extends Readonly<{
    scale: number;
    offset: Coordinates;
    backgroundColor: string;
    beltColors: ReadonlyArray<string>;
    beltWidth: number;
    showInfo: boolean;
}>{}

export interface HalfContainerProps extends Readonly<{
    backgroundColors: ReadonlyArray<string>;
    beltColors: ReadonlyArray<string>;
    beltWidth: number;
    gearWidth: number;
    offset: Coordinates;
    scale: number;
    showInfo: boolean;
}>{}

interface Coordinates extends Readonly<{
    x: number;
    y: number;
}>{}