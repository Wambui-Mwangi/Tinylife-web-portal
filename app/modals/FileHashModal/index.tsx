import React from 'react';
interface FileHashModalProps {
  fileHash: string;
  files: Array<{ file_hash: string;}>;
  onClose: () => void;
}

function FileHashModal({ fileHash, files, onClose }: FileHashModalProps) {
  const filteredFiles = files.filter((file) => file.file_hash === fileHash);
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Files with File Hash: {fileHash}</h2>
        <ul>
          {filteredFiles.map((file, index) => (
            <li key={index}>
              
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
export default FileHashModal;