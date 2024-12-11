const onLoad = () => {
  const buttonEl = document.getElementById("button");
  const fileEl = document.getElementById("file");

  buttonEl.onclick = onButtonClick;
  fileEl.onchange = onFileChange;
};

const onButtonClick = () => {
  const fileEl = document.getElementById("file");
  fileEl.click();
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  uploadFile(file);
};

localStorage.setItem("file", "MeMfile");

const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("video", file);
  console.log(formData);

  fetch("http://46.17.251.107:8000/upload_video/", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log("Video URL:", data.video_url); // Добавьте это для отладки
      location = `video_page.html?url=${encodeURI(data.video_url)}`;
    })
    .catch((error) => {
      console.error("Error:", error);
      location = "index.html";
    });
};
