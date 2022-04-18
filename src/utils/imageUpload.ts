export const imageUpload = async (images: any) => {
  let imgArr = [];

  for (const item of images) {
    const formData = new FormData();
    if (item?.camera) {
      formData.append("file", item?.camera);
    } else {
      formData.append("file", item);
    }

    formData.append("upload_preset", "rmgmprzk");
    formData.append("cloud_name", "vuongute");

    const res = await fetch("https://api.cloudinary.com/v1_1/vuongute/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    imgArr.push({
      public_id: data.public_id,
      url: data.secure_url,
    });
  }

  return imgArr;
};
