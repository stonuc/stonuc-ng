"use client";

import React, { useCallback, useRef, useState, useTransition } from "react";
import { useDropzone } from "react-dropzone";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { submitApplicationForm } from "@/actions/submitForm";

type FormErrors = {
  [key: string]: string[];
};

const FileUploadForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [phone, setPhone] = useState<string>("");
  const maxFiles = 5;
  const maxFileSize = 20 * 1024 * 1024; // 20MB overall limit

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isPending, startTransition] = useTransition();
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Check total file size before adding the new files
      const totalSize = acceptedFiles.reduce((sum, file) => sum + file.size, 0);
      const currentSize = files.reduce((sum, file) => sum + file.size, 0);

      if (totalSize + currentSize > maxFileSize) {
        setUploadMessage("You can only upload a maximum of 20MB.");

        return;
      }

      if (files.length + acceptedFiles.length > maxFiles) {
        setUploadMessage("You can upload a maximum of 5 files.");
        return;
      }

      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: maxFileSize,
    multiple: true,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
      "application/pdf": [".pdf"],
    },
  });

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  type Attachment = {
    filename: string;
    content: string;
  }[];
  const handleSubmit = async (formData: FormData) => {
    setFormErrors(null);
    setFormStatus(null);
    startTransition(async () => {
      let attachment: Attachment | null = null;

      if (files.length > 0) {
        attachment = await Promise.all(
          files.map(async (file) => {
            const fileContent = await file.arrayBuffer();
            const base64Content = Buffer.from(fileContent).toString("base64");

            return {
              filename: file.name,
              content: base64Content,
            };
          })
        );
      }

      const parsedAttachment = attachment as Attachment;
      console.log({
        phone,
        files: files.map((file) => file.name),
        attachment: attachment?.map((attachment) => ({
          filename: attachment.filename,
          content: attachment.content,
        })),
      })
      const result = await submitApplicationForm(
        formData,
        phone,
        parsedAttachment
      );
      if ("errors" in result) {
        setFormErrors(result.errors as FormErrors);
      } else {
        setFormStatus(result);
        formRef.current?.reset();
      }
    });
  };
  return (
    <motion.section ref={ref} className="">
      <motion.form
        variants={itemVariants}
        action={handleSubmit}
        ref={formRef}
        className="max-w-xl mx-auto mt-10 mb-10 p-6 bg-white shadow-md rounded-md"
      >
        {/* Show upload message */}
        {uploadMessage && (
          <p className="text-red-500 bg-red-100 p-2 rounded text-center text-sm mb-1 mt-1">
            {uploadMessage}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Name*"
            name="name"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          {formErrors?.name && (
            <p className="text-red-500 text-sm mt-1">{formErrors.name[0]}</p>
          )}
          <input
            type="text"
            placeholder="Surname*"
            name="surname"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          {formErrors?.surname && (
            <p className="text-red-500 text-sm mt-1">{formErrors.surname[0]}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="email"
            name="email"
            placeholder="E-Mail*"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          {formErrors?.email && (
            <p className="text-red-500 text-sm mt-1">{formErrors.email[0]}</p>
          )}
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={setPhone}
            inputClass="!w-full !h-full !border !rounded-md !p-2 !pl-11  focus:outline-none focus:ring-2 focus:ring-primary"
            containerClass="w-full"
            autoFormat
            enableSearch
          />
          {formErrors?.phone && (
            <p className="text-red-500 text-sm mt-1">{formErrors.phone[0]}</p>
          )}
        </div>

        {/* Drag and Drop Zone */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed p-4 rounded-md mb-4 cursor-pointer ${
            isDragActive ? "border-primary" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-gray-600 text-sm">
            {isDragActive
              ? "Drop the files here..."
              : "Drag and drop or browse to upload your files (up to 5 files of 20MB overall)"}
          </p>
        </div>

        {/* Display the list of uploaded files */}
        <ul className="mb-4">
          {files.map((file, index) => (
            <li key={index} className="text-sm text-gray-700">
              {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </li>
          ))}
        </ul>

        <motion.button
          variants={itemVariants}
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {isPending ? "Sending..." : "Send"}
        </motion.button>
        {formStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 p-2 text-white rounded ${
              formStatus.success ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {formStatus.message}
          </motion.div>
        )}
      </motion.form>
    </motion.section>
  );
};

export default FileUploadForm;
