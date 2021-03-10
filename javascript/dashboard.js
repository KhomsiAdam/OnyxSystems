// Variables
var addProduct = document.getElementById("add-product");
var confirmAddButton = document.getElementById("confirm-add");
var addButton = document.getElementById("add");
var allProducts = document.getElementById("all-products");
var addButtonDesk = document.getElementById("add-desktop");
var productDetails = document.getElementById("product-details");
var viewButtons = document.getElementById("view-buttons");
var editProduct = document.getElementById("edit-product");
var confirmEditButton = document.getElementById("confirm-edit");
var editConfirm = document.getElementById("edit-confirm");
var overEditButtons = document.getElementById("overlay-edit-buttons");
var deleteConfirm = document.getElementById("delete-confirm");
var overDeleteButtons = document.getElementById("overlay-delete-buttons");

// Add products
function viewAdd() {
    addProduct.style.display = "flex";
    confirmAddButton.style.display = "block";
    addButton.style.display = "none";
    allProducts.style.display = "none";
    addButtonDesk.classList.add("disabled");
}
function closeAdd() {
    addProduct.style.display = "none";
    confirmAddButton.style.display = "none";
    addButton.style.display = "block";
    allProducts.style.display = "block";
    addButtonDesk.classList.remove("disabled");
}
// View Product Details
function viewDetails() {
    productDetails.style.display = "block";
    viewButtons.style.display = "flex";
    addButton.style.display = "none";
    addButtonDesk.disabled = true;
    allProducts.style.display = "none";
    addButtonDesk.classList.add("disabled");
}
function closeDetails() {
    productDetails.style.display = "none";
    viewButtons.style.display = "none";
    addButton.style.display = "block";
    addButtonDesk.disabled = false;
    allProducts.style.display = "block";
    addButtonDesk.classList.remove("disabled");
}
// Edit Product
function viewEdit() {
    editProduct.style.display = "block";
    viewButtons.style.display = "none";
    confirmEditButton.style.display = "block";
    addButtonDesk.disabled = true;
    addButtonDesk.classList.add("disabled");
    allProducts.style.display = "none";
}
function confirmEdit() {
    editConfirm.style.display = "block";
    overEditButtons.style.display = "flex";
}
function confirmDelete() {
    deleteConfirm.style.display = "block";
    overDeleteButtons.style.display = "flex";
}
function closeOverlay() {
    editConfirm.style.display = "none";
    deleteConfirm.style.display = "none";
    overEditButtons.style.display = "none";
    overDeleteButtons.style.display = "none";
}
function closeEditOverlay() {
    editConfirm.style.display = "none";
    deleteConfirm.style.display = "none";
    overEditButtons.style.display = "none";
    overDeleteButtons.style.display = "none";
    editProduct.style.display = "none";
    confirmEditButton.style.display = "none";
    productDetails.style.display = "none";
    viewButtons.style.display = "none";
    addButton.style.display = "block";
    addButtonDesk.disabled = false;
    addButtonDesk.classList.remove("disabled");
    allProducts.style.display = "block";
}
function closeDeleteOverlay() {
    editConfirm.style.display = "none";
    deleteConfirm.style.display = "none";
    overEditButtons.style.display = "none";
    overDeleteButtons.style.display = "none";
    productDetails.style.display = "none";
    viewButtons.style.display = "none";
    addButton.style.display = "block";
    addButtonDesk.disabled = false;
    addButtonDesk.classList.remove("disabled");
    allProducts.style.display = "block";
}
function closeEdit() {
    editProduct.style.display = "none";
    confirmEditButton.style.display = "none";
    productDetails.style.display = "block";
    viewButtons.style.display = "flex";
    allProducts.style.display = "block";
}
