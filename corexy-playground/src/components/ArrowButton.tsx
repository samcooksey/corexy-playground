/** @jsxImportSource @emotion/react */

export function ArrowButton({
  text,
  onClick,
}: Readonly<{
  text: string;
  onClick(): void;
}>) {
  return (
    <button css={{ height: 30, width: 30 }} onClick={onClick}>
      {text}
    </button>
  );
}
