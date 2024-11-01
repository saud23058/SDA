
interface AudioPlayerProps {
  name: string;
  url: string;
}

export default function AudioPlayer({ name, url }: AudioPlayerProps) {
  return (
    <div className="flex flex-col items-start">
      <p className="font-medium text-gray-700">{name}</p>
      <audio controls className="w-full mt-1">
        <source src={url} type="audio/mpeg" />
      </audio>
      <p className="text-sm text-gray-500 mt-1">{url}</p>
    </div>
  );
}
