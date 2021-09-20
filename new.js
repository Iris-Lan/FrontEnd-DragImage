function doFirst() {
    document.getElementById("cardArea").ondragover = startDrag;
    document.getElementById("cardArea").ondrop = dropped;

    function startDrag(e) {
        e.preventDefault();
    }

    //圖進方框
    function dropped(e) {
        e.preventDefault();
        let file = e.dataTransfer.files[0];

        let readFile = new FileReader();
        readFile.readAsDataURL(file);
        readFile.addEventListener("load", function () {
            image = document.getElementById("image");
            image.src = readFile.result;
            image.style.maxWidth = "330px";
            image.style.maxHeight = "250px";
        });

        //圖檔名稱
        document.getElementById('textContent').innerText = `
                圖檔名稱: ${file.name}\n
                檔案類型: ${file.type}\n
                檔案大小: ${file.size} byte (s) \n
                最後修改日期 : ${file.lastModifiedDate.toLocaleString()}

        `;
        
    }

    //5項功能: 縮、放、左轉、右轉、刪除
    let icons = document.querySelectorAll(`#btnBar div img`);
    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener('click', function(){
            switch (i) {
                case 0:
                    let enlargeNum = document.getElementById('enlargeNum').value;
                    image.style.transform = `scale(${enlargeNum}, ${enlargeNum})`;
                    break;
                case 1:
                    let smallNum = document.getElementById('smallNum').value;
                    image.style.transform = `scale(${smallNum}, ${smallNum})`;
                    break;
                case 2:
                    let leftNum = document.getElementById('leftNum').value;
                    image.style.transform = `scale(1, 1) rotate(-${leftNum}deg)`;
                    break;
                case 3:
                    let rightNum = document.getElementById('rightNum').value;
                    image.style.transform = `scale(1, 1) rotate(${rightNum}deg)`;
                    break;
                case 4:
                    // image.style.visibility = `hidden`;
                    image.remove();
                    document.getElementById('textContent').innerText = '圖檔名稱';
                    break;
                default:
                    break;
            }
        })
    }
}
window.addEventListener("load", doFirst);
