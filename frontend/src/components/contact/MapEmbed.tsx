export default function MapEmbed({ src }: { src: string }) {
  return (
    <iframe
      src={src}
      className="h-80 w-full rounded-lg border border-line"
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      title="The Half Plate location"
    />
  );
}
