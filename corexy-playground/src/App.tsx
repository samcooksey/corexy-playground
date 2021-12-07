/** @jsxImportSource @emotion/react */

import { useCallback, useMemo, useState } from 'react';
import { ArrowButton } from './components/ArrowButton';
import { BottomHalfBelt } from './components/BottomHalfBelt';
import { TopHalfBelt } from './components/TopHalfBelt';

// const scale = window.innerWidth > 550 ? 500 : window.innerWidth > 450 ? 400 : 350;
const beltWidth = 10;
const gearWidth = beltWidth * 2.5;
const rotationScale = 3;
const rotationLimit = 60;
const limit = rotationLimit * rotationScale;
const beltColors = ['#0072B2', '#F0E442'];
const backgroundColorsColorful = ['#CC79A7', '#56B4E9', '#D55E00', '#009E73'];
const backgroundColorsBlank = ['none', 'none', 'none', 'none'];

function App() {
  const [{ leftMotorPosition, rightMotorPosition }, setMotorPositions] = useState({
    leftMotorPosition: 0,
    rightMotorPosition: 0,
  });
  const [backgroundColors, setbackgroundColors] = useState(backgroundColorsBlank);
  const [showInfo, setShowInfo] = useState(false);
  const { innerWidth, innerHeight } = window;

  const scale = useMemo(() => (innerWidth > 550 ? 500 : innerWidth > 450 ? 400 : 350), [innerWidth]);
  const scaledMargin = scale * 0.14;

  const center = useMemo(
    () => ({
      x: innerWidth / 2,
      y: (innerHeight * 0.95) / 2 - scale / 2,
    }),
    [scale, innerWidth, innerHeight]
  );

  const centerPointOffset = useMemo(
    () => ({
      x: Math.round(scale / 2 - leftMotorPosition - rightMotorPosition),
      y: Math.round(scale / 2 + leftMotorPosition - rightMotorPosition),
    }),
    [scale, leftMotorPosition, rightMotorPosition]
  );

  const incrementRight = () => {
    setMotors((prev) => ({
      ...prev,
      rightMotorPosition: prev.rightMotorPosition + rotationScale,
    }));
  };
  const incrementLeft = () => {
    setMotors((prev) => ({
      ...prev,
      leftMotorPosition: prev.leftMotorPosition + rotationScale,
    }));
  };
  const decrementRight = () => {
    setMotors((prev) => ({
      ...prev,
      rightMotorPosition: prev.rightMotorPosition - rotationScale,
    }));
  };
  const decrementLeft = () => {
    setMotors((prev) => ({
      ...prev,
      leftMotorPosition: prev.leftMotorPosition - rotationScale,
    }));
  };

  const setMotors = (
    callback: (
      prev: Readonly<{
        leftMotorPosition: number;
        rightMotorPosition: number;
      }>
    ) => Readonly<{
      leftMotorPosition: number;
      rightMotorPosition: number;
    }>
  ) => {
    setMotorPositions((prev) => {
      const newVal = callback(prev);
      return Math.abs(newVal.leftMotorPosition) + Math.abs(newVal.rightMotorPosition) <= limit ? newVal : prev;
    });
  };

  const moveTo = useCallback(
    (x: number, y: number) => {
      const left = (y - x) / 2;
      const right = (scale - x - y) / 2;
      const roundedLeft = left - (left % rotationScale);
      const roundedRight = right - (right % rotationScale);

      const leftDiff = roundedLeft - leftMotorPosition;
      const rightDiff = roundedRight - rightMotorPosition;

      const rotationAmount = Math.max(Math.abs(leftDiff), Math.abs(rightDiff)) / rotationScale;
      const leftMoveAmount = leftDiff / rotationAmount;
      const rightMoveAmount = rightDiff / rotationAmount;
      for (let i = 0; i <= rotationAmount; i++) {
        window.setTimeout(() => {
          setMotors((prev) => ({
            leftMotorPosition: prev.leftMotorPosition + leftMoveAmount,
            rightMotorPosition: prev.rightMotorPosition + rightMoveAmount,
          }));
          if (i === rotationAmount) {
            setMotors((prev) => ({
              leftMotorPosition: roundedLeft,
              rightMotorPosition: roundedRight,
            }));
          }
        }, 0);
      }
    },
    [scale, leftMotorPosition, rightMotorPosition]
  );
  const onDrag = useCallback(
    (clientX: number, clientY: number) => {
      if (clientX && clientY) {
        const offsetY = clientY - center.y + scale / 2;
        const offsetX = clientX - center.x + scale / 2;
        const newLeftMotorPosition = (offsetY - offsetX) / 2;
        const newRightMotorPosition = (scale - offsetX - offsetY) / 2;

        setMotors((prev) => ({
          leftMotorPosition:
            newLeftMotorPosition >= prev.leftMotorPosition + rotationScale ||
            newLeftMotorPosition <= prev.leftMotorPosition - rotationScale
              ? newLeftMotorPosition - (newLeftMotorPosition % rotationScale)
              : prev.leftMotorPosition,
          rightMotorPosition:
            newRightMotorPosition >= prev.rightMotorPosition + rotationScale ||
            newRightMotorPosition <= prev.rightMotorPosition - rotationScale
              ? newRightMotorPosition - (newRightMotorPosition % rotationScale)
              : prev.rightMotorPosition,
        }));
      }
    },
    [center.x, center.y, scale]
  );

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '95vh',
        flexDirection: 'column',
        backgroundColor: 'gainsboro',
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          height: scale,
          width: scale,
          backgroundColor: 'white',
          borderRadius: gearWidth / 2,
          zIndex: 0,
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
        <div
          css={{
            position: 'absolute',
            height: scale - scaledMargin * 2,
            width: scale - scaledMargin * 2,
            marginLeft: scaledMargin,
            marginTop: scaledMargin,
            zIndex: 2,
            cursor: 'crosshair',
          }}
          onClick={(event) => {
            const newX = event.nativeEvent.offsetX + scaledMargin;
            const newY = event.nativeEvent.offsetY + scaledMargin;
            moveTo(newX, newY);
          }}
        />
        <div
          css={{
            position: 'absolute',
            height: scale - scaledMargin * 2,
            width: scale - scaledMargin * 2,
            marginLeft: scaledMargin,
            marginTop: scaledMargin,
            border: '2px solid black',
            backgroundColor: 'silver',
            zIndex: -1,
          }}
        />
        <div
          draggable="true"
          onTouchMove={({ changedTouches }) => {
            const { clientX, clientY } = changedTouches[0];
            onDrag(clientX, clientY);
          }}
          onDrag={({ clientX, clientY }) => {
            onDrag(clientX, clientY);
          }}
          css={{
            position: 'absolute',
            height: 40,
            width: 40,
            backgroundColor: 'black',
            marginLeft: centerPointOffset.x - 20,
            marginTop: centerPointOffset.y - 20,
            cursor: 'pointer',
            zIndex: 3,
          }}
        />
        <TopHalfBelt
          backgroundColors={backgroundColors}
          beltWidth={beltWidth}
          gearWidth={gearWidth}
          beltColors={beltColors}
          offset={centerPointOffset}
          scale={scale}
          showInfo={showInfo}
        />
        <BottomHalfBelt
          backgroundColors={backgroundColors}
          beltWidth={beltWidth}
          gearWidth={gearWidth}
          beltColors={beltColors}
          offset={centerPointOffset}
          scale={scale}
          showInfo={showInfo}
        />
      </div>
      <div
        css={{
          width: scale,
          height: scale,
          backgroundColor: 'lightsteelblue',
        }}
      >
        <div
          css={{
            display: 'flex',
          }}
        >
          <div
            css={{
              flex: '1 1 0px',
            }}
          >
            <h2>{Math.round(leftMotorPosition * 5)}&#176;</h2>
            <ArrowButton
              text="&#10226;"
              onClick={() => {
                decrementLeft();
              }}
            />
            <ArrowButton
              text="&#10227;"
              onClick={() => {
                incrementLeft();
              }}
            />
            <h4>Rotate Left Motor</h4>
          </div>
          <div
            css={{
              flex: '1 1 0px',
            }}
          >
            <h3>{`x:${-(scale / 2 - centerPointOffset.x)}, y:${scale / 2 - centerPointOffset.y}`}</h3>
            <div>
              <ArrowButton
                text="&#8598;"
                onClick={() => {
                  incrementRight();
                }}
              />
              <ArrowButton
                text="&#8593;"
                onClick={() => {
                  setMotors((prev) => ({
                    leftMotorPosition: prev.leftMotorPosition - rotationScale,
                    rightMotorPosition: prev.rightMotorPosition + rotationScale,
                  }));
                }}
              />
              <ArrowButton
                text="&#8599;"
                onClick={() => {
                  decrementLeft();
                }}
              />
            </div>
            <div>
              <ArrowButton
                text="&#8592;"
                onClick={() => {
                  setMotors((prev) => ({
                    leftMotorPosition: prev.leftMotorPosition + rotationScale,
                    rightMotorPosition: prev.rightMotorPosition + rotationScale,
                  }));
                }}
              />
              <ArrowButton
                text="&#8226;"
                onClick={() => {
                  setMotors((prev) => ({
                    leftMotorPosition: 0,
                    rightMotorPosition: 0,
                  }));
                }}
              />

              <ArrowButton
                text="&#8594;"
                onClick={() => {
                  setMotors((prev) => ({
                    leftMotorPosition: prev.leftMotorPosition - rotationScale,
                    rightMotorPosition: prev.rightMotorPosition - rotationScale,
                  }));
                }}
              />
            </div>
            <div>
              <ArrowButton
                text="&#8601;"
                onClick={() => {
                  incrementLeft();
                }}
              />
              <ArrowButton
                text="&#8595;"
                onClick={() => {
                  setMotors((prev) => ({
                    leftMotorPosition: prev.leftMotorPosition + rotationScale,
                    rightMotorPosition: prev.rightMotorPosition - rotationScale,
                  }));
                }}
              />
              <ArrowButton
                text="&#8600;"
                onClick={() => {
                  decrementRight();
                }}
              />
            </div>
            <h4>Move Tool</h4>
          </div>
          <div
            css={{
              flex: '1 1 0px',
            }}
          >
            <h2>{Math.round(rightMotorPosition * 5)}&#176;</h2>
            <ArrowButton
              text="&#10226;"
              onClick={() => {
                decrementRight();
              }}
            />
            <ArrowButton
              text="&#10227;"
              onClick={() => {
                setMotors((prev) => ({
                  ...prev,
                  rightMotorPosition: prev.rightMotorPosition + rotationScale,
                }));
              }}
            />
            <h4>Rotate Right Motor</h4>
          </div>
        </div>
        <div>
          <p
            css={{
              marginTop: 0,
            }}
          >
            Move the tool using the buttons above, clicking on the bed, or dragging it.
          </p>
          <p>Use the buttons below to help visualize how the belts are moving.</p>
        </div>
        <div>
          <button
            onClick={() => {
              if (backgroundColors === backgroundColorsBlank) {
                setbackgroundColors(backgroundColorsColorful);
              } else {
                setbackgroundColors(backgroundColorsBlank);
              }
            }}
          >
            {backgroundColors === backgroundColorsBlank ? 'Show' : 'Hide'} Belt Quadrants
          </button>
          <button
            onClick={() => {
              setShowInfo((prev) => !prev);
            }}
          >
            {showInfo ? 'Hide' : 'Show'} Belt Lengths
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
