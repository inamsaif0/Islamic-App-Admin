import React, { useState, useEffect } from 'react';
import Baseurl from '../../Baseurl/Baseurl';

const CustomDropzone = ({ onFileChange, multiple = false, initialFiles = [] }) => {
  const [files, setFiles] = useState([]);

  // Initialize files when component mounts or when initialFiles prop changes
  useEffect(() => {
    setFiles(initialFiles);
  }, [initialFiles]);

  const handleFileDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const newFiles = Array.from(event.dataTransfer.files);
    if (!multiple && newFiles.length > 1) {
      alert('Only one file is allowed.');
      return;
    }

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    onFileChange([...files, ...newFiles]);  // Notify parent of file changes
  };

  const handleFileInputChange = (event) => {
    const newFiles = Array.from(event.target.files);
    if (!multiple && newFiles.length > 1) {
      alert('Only one file is allowed.');
      return;
    }

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    onFileChange([...files, ...newFiles]);  // Notify parent of file changes
  };

  const handleFileRemove = (index) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((_, i) => i !== index);
      onFileChange(updatedFiles);  // Notify parent of file changes
      return updatedFiles;
    });
  };

  return (
    <div
      onDrop={handleFileDrop}
      onDragOver={(event) => event.preventDefault()}
      style={{
        border: '2px dashed #ccc',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <input
        type="file"
        multiple={multiple}
        onChange={handleFileInputChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        style={{
          display: 'block',
          cursor: 'pointer',
          marginBottom: '10px'
        }}
      >
        Drag & drop files here or click to select
      </label>

      <div>
        {files.length === 0 && <p>No files selected</p>}
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {files.map((file, index) => (
            <li key={index} style={{ marginBottom: '10px', position: 'relative' }}>
              <img
                src={file.preview ?  `${Baseurl.baseUrl}${file.preview} `  : URL.createObjectURL(file)}
                alt={`Preview ${index}`}
                style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }}
              />
              <button
                onClick={() => handleFileRemove(index)}
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}
              >
                X
              </button>
              <p>{file.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomDropzone;
