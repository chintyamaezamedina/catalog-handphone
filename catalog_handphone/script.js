
document.addEventListener("DOMContentLoaded", function () {
    // FILTER MEREK HANDPHONE
    const filterButtons = document.querySelectorAll(".filter");
    const brandSections = document.querySelectorAll(".brand-section");
    const products = document.querySelectorAll(
        ".product-card, .horizontal-card, .list-card"
    );

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedBrand = button.dataset.brand;

            // Ubah tombol aktif
            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            // Tampilkan atau sembunyikan produk
            products.forEach(function (product) {
                const brand = product.dataset.brand;

                if (
                    selectedBrand === "semua" ||
                    brand === selectedBrand
                ) {
                    product.classList.remove("hidden");
                } else {
                    product.classList.add("hidden");
                }
            });

            // Tampilkan bagian merek yang dipilih
            brandSections.forEach(function (section) {
                if (
                    selectedBrand === "semua" ||
                    section.id === selectedBrand
                ) {
                    section.classList.remove("hidden");
                } else {
                    section.classList.add("hidden");
                }
            });
        });
    });

    // MODAL DETAIL PRODUK
    const modal = document.getElementById("productModal");
    const modalName = document.getElementById("modalName");
    const modalPrice = document.getElementById("modalPrice");
    const modalDescription = document.getElementById(
        "modalDescription"
    );

    const detailButtons = document.querySelectorAll(".detail-btn");
    const closeModal = document.getElementById("closeModal");
    const modalOk = document.getElementById("modalOk");

    // Buka detail produk
    detailButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            modalName.textContent = button.dataset.name;
            modalPrice.textContent = button.dataset.price;
            modalDescription.textContent =
                button.dataset.description;

            modal.classList.add("show");
        });
    });

    // Fungsi menutup modal
    function hideModal() {
        modal.classList.remove("show");
    }

    closeModal.addEventListener("click", hideModal);
    modalOk.addEventListener("click", hideModal);

    // Tutup jika pengguna mengeklik area luar modal
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            hideModal();
        }
    });

    // Tutup dengan tombol Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            hideModal();
        }
    });
});
