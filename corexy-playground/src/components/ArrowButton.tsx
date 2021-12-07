/** @jsxImportSource @emotion/react */

export function ArrowButton({
  text,
  onClick,
}: Readonly<{
  text: string;
  onClick(): void;
}>) {
  return <button onClick={onClick}>{text}</button>;
}
