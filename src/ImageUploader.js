import { Button } from "@mui/material";
import React from "react";
import ImageLogo from "./image.svg";
import "./ImageUpload.css";

const ImageUploader = () => {

  // uiで画像を投稿/保存（アップロード）したら、
  // firebase上に保存していく関数
  const OnFileUploadFirebase = () => {

  }

  return (
    <div className="outerBox">
      <div className="title">
        <h2>画像アップローダー</h2>
        <p>JpegかPngの画像ファイル</p>
      </div>
      <div className="imageUplodeBox">
        <div className="imageLogoAndText">
          <img src={ImageLogo} alt="imagelogo" />
          <p>ここにドラッグ＆ドロップしてね</p>
        </div>
        <input
          className="imageUploadInput"
          multiple
          name="imageURL"
          type="file"
          accept=".png .jpeg .jpg"
        onChange={OnFileUploadFirebase}/>
      </div>
      <p>または</p>
      <Button variant="contained">
        ファイルを選択
        <input
          className="imageUploadInput"
          type="file"
          onChange={OnFileUploadFirebase}
          accept=".png .jpeg .jpg"
        />
      </Button>
    </div>
  );
};

export default ImageUploader;
