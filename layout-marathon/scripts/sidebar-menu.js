(function() {
    const openingBtn = document.querySelector(".sidebar__hamburger");
    const closingBtn = document.querySelector(".sidebar__close");
    const sidebar = document.querySelector(".sidebar");

    openingBtn.addEventListener("click", openSidebar);

    function openSidebar() {
        sidebar.classList.add('sidebar--opened');
    }

    closingBtn.addEventListener("click", closeSidebar);

    function closeSidebar() {
        sidebar.classList.remove('sidebar--opened');
    }
})();