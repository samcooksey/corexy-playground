/** @jsxImportSource @emotion/react */

export function BeltLength({ length }: Readonly<{ length: number }>) {
  return (
    <span
      css={{
        backgroundColor: 'pink',
      }}
    >
      {length}
    </span>
  );
}
