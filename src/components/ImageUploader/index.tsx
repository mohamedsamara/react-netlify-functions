import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface ImageUploaderProps {
  initialFiles: File[];
  multiple?: false;
  handleDrop: (files: File[]) => void;
}

const ImageUploader = (props: ImageUploaderProps) => {
  const { initialFiles, multiple, handleDrop } = props;
  const [files, setFiles] = useState<File[]>(initialFiles);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    handleDrop(acceptedFiles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
  });

  useEffect(() => {
    if (initialFiles) {
      setFiles(initialFiles);
    }
  }, [initialFiles]);

  useEffect(() => {
    if (acceptedFiles) {
      setFiles(acceptedFiles);
    }
  }, [acceptedFiles]);

  const acceptedFileItems = files.map((file: File, index: number) => {
    const src = URL.createObjectURL(file);

    return (
      <li key={index} className="mr-4">
        <img
          src={src}
          alt={src}
          className="w-20 h-20 rounded-lg object-cover"
        />
      </li>
    );
  });

  return (
    <div className="image-uploader">
      <div
        {...getRootProps({
          className:
            'text-center p-10 bg-white border border-dashed border-gray-600 text-[#bdbdbd]',
        })}
      >
        <input {...getInputProps()} />
        <p>Drag drop some files here, or click to select files</p>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      <div>
        <ul className="flex pt-3">{acceptedFileItems}</ul>
      </div>
    </div>
  );
};

export default ImageUploader;
