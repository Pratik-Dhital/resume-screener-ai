import { motion } from "framer-motion";
import { Upload as UploadIcon, FileText, Loader2 } from "lucide-react";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [jobDescription, setJobDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    toast({
      title: "Files added",
      description: `${acceptedFiles.length} file(s) ready for upload`,
    });
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    multiple: true
  });

  const handleUpload = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload at least one resume",
        variant: "destructive"
      });
      return;
    }

    if (!jobDescription.trim()) {
      toast({
        title: "Job description required",
        description: "Please provide a job description",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      toast({
        title: "Upload successful!",
        description: "Resumes are being analyzed. Redirecting to dashboard...",
      });
      
      setTimeout(() => {
        setIsUploading(false);
        navigate("/dashboard");
      }, 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Upload Resumes</h1>
            <p className="text-lg text-muted-foreground">
              Upload candidate resumes and provide job description for AI analysis
            </p>
          </div>

          <Card className="p-8 mb-8">
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
                isDragActive
                  ? "border-primary bg-accent/50"
                  : "border-border hover:border-primary hover:bg-accent/30"
              }`}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <UploadIcon className="text-primary-foreground" size={40} />
                </div>
                {isDragActive ? (
                  <p className="text-lg font-medium text-foreground">Drop files here...</p>
                ) : (
                  <>
                    <p className="text-lg font-medium text-foreground">
                      Drag & drop resumes here
                    </p>
                    <p className="text-sm text-muted-foreground">
                      or click to browse (PDF, DOCX)
                    </p>
                  </>
                )}
              </div>
            </div>

            {files.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 space-y-2"
              >
                <p className="font-medium text-foreground mb-3">Selected Files:</p>
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-accent rounded-lg"
                  >
                    <FileText className="text-primary" size={20} />
                    <span className="text-sm text-foreground flex-1">{file.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {(file.size / 1024).toFixed(1)} KB
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </Card>

          <Card className="p-8 mb-8">
            <label className="block text-lg font-medium text-foreground mb-4">
              Job Description
            </label>
            <Textarea
              placeholder="Paste the job description here..."
              className="min-h-[200px] resize-none"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </Card>

          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg"
            onClick={handleUpload}
            disabled={isUploading}
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 animate-spin" size={20} />
                Processing...
              </>
            ) : (
              <>
                <UploadIcon className="mr-2" size={20} />
                Upload & Analyze
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Upload;
