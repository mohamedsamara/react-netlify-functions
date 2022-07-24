interface EmbeddedVideoProps {
  title?: string;
  src: string;
  className?: string;
}

const EmbeddedVideo = (props: EmbeddedVideoProps) => {
  const { title, src, className = '' } = props;
  return (
    <div className="mb-10">
      {title && (
        <h4 className="text-lg md:text-xl text-center mb-4">{title}</h4>
      )}
      <div className="relative rounded-lg">
        <iframe
          className={className}
          src={src}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media;"
          title={title}
        ></iframe>
      </div>
    </div>
  );
};

export default EmbeddedVideo;
