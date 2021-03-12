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
// Edit Product Form
function viewEdit() {
    editProduct.style.display = "block";
    viewButtons.style.display = "none";
    confirmEditButton.style.display = "block";
    addButtonDesk.disabled = true;
    addButtonDesk.classList.add("disabled");
    allProducts.style.display = "none";
}
// Cancel the Edit
function closeEdit() {
    editProduct.style.display = "none";
    confirmEditButton.style.display = "none";
    productDetails.style.display = "block";
    viewButtons.style.display = "flex";
    allProducts.style.display = "block";
}
// Edit Product Confirm Overlay
function confirmEdit() {
    editConfirm.style.display = "block";
    overEditButtons.style.display = "flex";
}
// Delete Product Confirm Overlay
function confirmDelete() {
    deleteConfirm.style.display = "block";
    overDeleteButtons.style.display = "flex";
}
// Close Edit and Delete Overlay
function closeOverlay() {
    editConfirm.style.display = "none";
    deleteConfirm.style.display = "none";
    overEditButtons.style.display = "none";
    overDeleteButtons.style.display = "none";
}
// Confirm the Edit in the Overlay
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
// Confirm the Delete in the Overlay
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
//brilliant Code 
//name
let name_print = document.querySelector("#name");
name_print.addEventListener('input', () => {
    
    let regex = /[a-zA-Z]/;

    if (regex.test(name_print.value)) {
            name_print.style.border="2px solid green";
    }
    else {
        name_print.style.border="none";
}
});
//brand
let brand_print = document.querySelector("#brand");
brand_print.addEventListener('input', () => {
    
    let regex = /[a-zA-Z]/;

    if (regex.test(brand_print.value)) {
            brand_print.style.border="2px solid green";     
    }
    else {
        brand_print.style.border="none";
}
});
//microprocessor
let microprocessor = document.querySelector("#microprocessor");
microprocessor.addEventListener('input', () => {
    
    let regex = /^([\d.\dGHz]+\s[A-Z]+\s[A-z-]+-[A-z]+)/gi;

    if (regex.test(microprocessor.value)) {
        microprocessor.style.border="2px solid green"; 
    }
    else {
        microprocessor.style.border="none";
}
});
//memory
let memory = document.querySelector("#memory");
memory.addEventListener('input', () => {
    
    let regex = /^[\d]{1,2}[GB]+/g;

    if (regex.test(memory.value)) {
        memory.style.border="2px solid green";
    }
    else {
        memory.style.border="none";
}
});
//video card 
let video_card = document.querySelector("#video-card");
video_card.addEventListener('input', () => {
    
    let regex =/^[A-z]+\s[A-z]+\s[\d]+/g
    if (regex.test(video_card.value)) {
        video_card.style.border="2px solid green";
    }
    else {
        video_card.style.border="none";
}
});
let drive = document.querySelector("#drive");
drive.addEventListener('input', () => {
    
    let regex =  /^[\d]{3,4}GB$/ig;//ig;

    if (regex.test(drive.value)) {
        drive.style.border="2px solid green";
        // alert("hi");
    }
    else {
        drive.style.border="2px solid red";
}
});
//Edit part
let microprocessor_edit = document.querySelector("#micro-edit");
microprocessor_edit.addEventListener('input', () => {
    
    let regex = /^([\d.\dGHz]+\s[A-Z]+\s[A-z-]+-[A-z]+)/gi;

    if (regex.test(microprocessor_edit.value)) {
        microprocessor_edit.style.border="2px solid green";
    }
    else {
        microprocessor_edit.style.border="none";
}
});

let memory_edit = document.querySelector("#memory-edit");
memory_edit.addEventListener('input', () => {
    
    let regex = /^[\d]{1,2}[GB]+/g;

    if (regex.test(memory_edit.value)) {
        memory_edit.style.border="2px solid green";
        // alert("hi");
    }
    else {
        memory_edit.style.border="none";
}
});
let video_card_edit = document.querySelector("#graphique-edit");
video_card_edit.addEventListener('input', () => {
    
    let regex =/^[A-z]+\s[A-z]+\s[\d]+/g
    if (regex.test(video_card_edit.value)) {
        video_card_edit.style.border="2px solid green";
    }
    else {
        video_card_edit.style.border="none";
}
});
let drive_edit = document.querySelector("#drive-edit");
drive_edit.addEventListener('input', () => {
    
    let regex = /^[\d]{3,4}GB$/ig;

    if (regex.test(drive_edit.value)) {
        drive_edit.style.border="2px solid green";
    }
    else {
        drive_edit.style.border="none";
}
});