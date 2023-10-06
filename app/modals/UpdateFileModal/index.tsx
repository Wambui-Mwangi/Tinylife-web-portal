// components/UpdateFileModal.tsx
import React, { useState } from 'react';

interface UpdateFileModalProps {
  fileData: { name: string; timestamp: string };
  onClose: () => void;
  onUpdate: (updatedData: { name: string; timestamp: string }) => void;
}

const UpdateFileModal: React.FC<UpdateFileModalProps> = ({ fileData, onClose, onUpdate }) => {
  const [updatedName, setUpdatedName] = useState<string>(fileData.name);

  const handleUpdate = () => {
    const updatedTimestamp = new Date().toLocaleString();
    onUpdate({ name: updatedName, timestamp: updatedTimestamp });
    onClose();
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500">
      </div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-white p-5 shadow-md rounded-md border-gray-500  mr-10 w-1/3 h-1/2 flex flex-col justify-center items-center" style={{       boxShadow:
'0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.2), 0px 12px 24px rgba(0, 0, 0, 0.3)'}}>

          <h2 className="font-bold text-2xl text-green-500">Update File</h2>
          <br />
          <p>
            <span className="text-green-500 font-bold text-1xl">Original Name:</span> {fileData.name}
          </p>
          <br />
          <p>
            <span className="text-green-500 font-bold text-1xl">Uploaded at: </span>
            {fileData.timestamp}
          </p>
          <br />
          <label htmlFor="updated-name">
            <span className="text-green-500 font-bold text-1xl">Updated Name:</span>
          </label>
          <input
            className="border border-2"
            type="text"
            id="updated-name"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <br />
          <br />
          <button className="bg-[#2CCD1F] text-black px-4 py-2 rounded-md" onClick={handleUpdate}>
            Update
          </button>
          <br />
          <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateFileModal;
