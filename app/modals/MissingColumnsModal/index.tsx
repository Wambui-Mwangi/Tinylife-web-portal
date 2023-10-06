import React from 'react';
import { WarningRounded } from '@mui/icons-material'; 

interface MissingColumnsModalProps {
  isOpen: boolean;
  missingColumns: string[];
  onClose: () => void;
}

const MissingColumnsModal: React.FC<MissingColumnsModalProps> = ({ isOpen, missingColumns, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500">
          <div className="bg-white shadow-md rounded-md border-gray-500 ml-10 w-1/4 h-1/2 flex flex-col justify-center items-center" style={{
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.2), 0px 12px 24px rgba(0, 0, 0, 0.3)'
          }}>
            <WarningRounded style={{ color: 'yellow', fontSize: '4rem', marginBottom: '0.5rem' }} />

            <h2 className="font-bold text-2xl text-yellow-400">Missing Columns</h2>
            <ul>
              {missingColumns.map((column, idx) => (
                <li key={idx}>
                  {idx + 1}. {column}
                </li>
              ))}
            </ul>
            <br />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MissingColumnsModal;
