function navigateToHTML(filename) {
    sessionStorage.setItem('previousPage', window.location.href); // Lưu trang trước khi chuyển hướng
    window.location.href = filename;
}

// Kiểm tra xem trang có được tải lại hay không
if (performance.navigation.type === 1) {
    var previousPage = sessionStorage.getItem('previousPage');
    if (previousPage) {
        sessionStorage.removeItem('previousPage'); // Xóa trang đã lưu
        if (window.location.href !== previousPage) {
            window.location.href = 'index.html'; // Chuyển hướng đến trang index
        }
    }
}
///

function showContent(category) {
   
    var contents = document.getElementsByClassName('trandau1');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    var selectedContents = document.getElementsByClassName(category);
    for (var j = 0; j < selectedContents.length; j++) {
        selectedContents[j].style.display = 'block';
    }
    document.getElementById("categoryTitle").textContent = category;
}


