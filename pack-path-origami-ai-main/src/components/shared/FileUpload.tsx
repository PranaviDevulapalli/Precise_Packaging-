
import { useState } from 'react';
import { Upload, CheckCircle, X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  acceptedFileTypes?: string;
}

export const FileUpload = ({ 
  onFileUpload,
  acceptedFileTypes = ".csv"
}: FileUploadProps) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      validateAndSetFile(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    // Check if file type is valid
    if (!file.name.endsWith('.csv')) {
      toast.error("Only CSV files are accepted");
      return;
    }
    
    setFile(file);
    onFileUpload(file);
    toast.success("File uploaded successfully");
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="w-full">
      {!file ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            isDragActive 
              ? 'border-eco-500 bg-eco-50' 
              : 'border-gray-300 hover:border-eco-400 hover:bg-gray-50'
          } transition-all`}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm font-medium text-gray-600">
            Drag and drop your file here, or{" "}
            <label className="text-eco-600 hover:text-eco-500 cursor-pointer">
              browse
              <input
                type="file"
                className="hidden"
                accept={acceptedFileTypes}
                onChange={handleFileChange}
              />
            </label>
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Only .csv files are supported
          </p>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-sm">{file.name}</p>
              <p className="text-xs text-gray-500">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={removeFile}
            className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Remove file</span>
          </Button>
        </div>
      )}
    </div>
  );
};
