const onLoad = () => {
    const buttonEl = document.getElementById('button');
    const fileEl = document.getElementById('file');

    buttonEl.onclick = onButtonClick;
    fileEl.onchange = onFileChange;
}

const onButtonClick = () => {
    const fileEl = document.getElementById('file');
    fileEl.click()
}

const onFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        const fileContent = event.target.result;
        console.log(fileContent);
        uploadFile(fileContent);
        // Use the file content here
    };
    reader.readAsArrayBuffer(file);
}

const uploadFile = (fileContent) => {
    fetch('/upload', { method: 'POST', body: {file: fileContent} })
       .then(
        response => {
            if(response.json().result === 'success') {
                location= 'https://ya.ru';
            }
        },

        error => {
            console.error('Error:', error);
            location= 'https://ya.ru';
        }
    )
}