import { Button } from "@mui/material";
import React, { useState } from "react";
import ImageLogo from "./image.svg";
import "./ImageUpload.css";
import storage from "./firebase";
import { ref,uploadBytes, uploadBytesResumable } from "firebase/storage";

const ImageUploader = () => {

  // ローディングを監視するuseState。
  // ローディングは開始していないので、最初はfalse
  const [loading,setLoading] =useState(false)
  const [isUploaded, setIsUploaded] =useState(false)

  // uiで画像を投稿/保存（アップロード）したら、
  // firebase上に保存していく関数
  const OnFileUploadFirebase = (e) => {
    // console.log(e.target.files[0].name);
    const file = e.target.files[0]
    const storageRef = ref(storage, "image/" + file.name);

    // uploadBytes(storageRef, file).then((snapshot) => {
    //   console.log('Uploaded a blob or file!');
    // });

    // 画像をアップロードした時にローディング状況を監視する
    const uploadImage = uploadBytesResumable(storageRef, file)
    uploadImage.on(
      "state_changed", (snapShot) => {
        setLoading(true)
      },
      // エラー文
      (err) => {
        console.log("エラーが起きました。");
      },
      () => {
        console.log("アップロード完成");
        setLoading(false)
        setIsUploaded(true)
      }
    );
  }; // fin onFileuploadfirebase

  return (

    // アップロード中と完成のバリデーションメッセージを表示するために三項演算子を用いて記述する
    <>
      {loading ? (<h1>Now Uploading・・・</h1>
      ) : (
          <>
            {isUploaded ? (
              <h1>アップロードが完了しました！！！！</h1>
            ) : (
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
                    accept=".png, .jpeg, .jpg"
                    onChange={OnFileUploadFirebase} />
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
            )
          }
        </>
      )

      }

    </>


  );
};

export default ImageUploader;
