"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}
const UploadPage = () => {
  const [publishId, setPublishId] = useState("");
  return (
    <>
      {publishId && (
        <CldImage src={publishId} width={270} alt="" height={180}></CldImage>
      )}
      <CldUploadWidget
        uploadPreset="woonq4sy"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        onUpload={(res, widget) => {
          if (res.event !== "success") return;
          const info = res.info as CloudinaryResult;
          setPublishId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            上传
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
