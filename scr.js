document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn-search').addEventListener('click', function() {
        var searchInput = document.querySelector('.search-input');
        searchInput.classList.toggle('active'); // Bật/tắt lớp 'active' để hiển thị thanh tìm kiếm
        if (searchInput.classList.contains('active')) {
            searchInput.focus(); // Đưa con trỏ vào thanh tìm kiếm ngay sau khi nó hiện ra
        }
    });
});

