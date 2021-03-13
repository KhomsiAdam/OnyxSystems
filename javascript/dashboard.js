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
/* RegEx Form Validation */
// Initializing the variables for submitting the Add form
var nameSubmitAdd = false, brandSubmitAdd = false, cpuSubmitAdd = false, ramSubmitAdd = false, gpuSubmitAdd = false, hddSubmitAdd = false;
// Initializing the variables for submitting the Edit form
var nameSubmitEdit = false, brandSubmitEdit = false, cpuSubmitEdit = false, ramSubmitEdit = false, gpuSubmitEdit = false, hddSubmitEdit = false;
// Add Product Form
//name add
let name_print = document.querySelector("#name");
name_print.addEventListener('input', () => {
    
    let regexName = /^[\d\w\s]+$/g;

    if (name_print.value === '') {
        name_print.style.border="none";
        nameSubmitAdd = false;
    } else if (regexName.test(name_print.value)) {
        name_print.style.border="2px solid green";
        nameSubmitAdd = true;
    }
    else if (!regexName.test(name_print.value)) {
        name_print.style.border="2px solid red";
        nameSubmitAdd = false;
    }
});
//brand add
let brand_print = document.querySelector("#brand");
brand_print.addEventListener('input', () => {
    
    let regexBrand = /^[\d\w\s()-]+$/g;

    if (brand_print.value === '') {
        brand_print.style.border="none";
        brandSubmitAdd = false;
    } else if (regexBrand.test(brand_print.value)) {
        brand_print.style.border="2px solid green";
        brandSubmitAdd = true;  
    }
    else if (!regexBrand.test(brand_print.value)) {
        brand_print.style.border="2px solid red";
        brandSubmitAdd = false;
}
});
//microprocessor add
let microprocessor = document.querySelector("#microprocessor");
microprocessor.addEventListener('input', () => {
    
    let regexCpu = /^([\d.\dGHz]+\s[\w]+\s[\w]+-[\w]+$)/g;

    if (microprocessor.value === '') {
        microprocessor.style.border="none";
        cpuSubmitAdd = false;
    } else if (regexCpu.test(microprocessor.value)) {
        microprocessor.style.border="2px solid green";
        cpuSubmitAdd = true;
    }
    else if (!regexCpu.test(microprocessor.value))  {
        microprocessor.style.border="2px solid red";
        cpuSubmitAdd = false;
}
});
//memory add
let memory = document.querySelector("#memory");
memory.addEventListener('input', () => {
    
    let regexRam = /^[\d]{1,2}GB$/g;

    if (memory.value === '') {
        memory.style.border="none";
        ramSubmitAdd = false;
    } else if (regexRam.test(memory.value)) {
        memory.style.border="2px solid green";
        ramSubmitAdd = true;
    }
    else if (!regexRam.test(memory.value)) {
        memory.style.border="2px solid red";
        ramSubmitAdd = false;
}
});
//video card add
let video_card = document.querySelector("#video-card");
video_card.addEventListener('input', () => {
    
    let regexGpu = /^[\w]+\s[\w]+\s[\d]{4}[\w]{1,2}$/g;

    if (video_card.value === '') {
        video_card.style.border="none";
        gpuSubmitAdd = false;
    } else if (regexGpu.test(video_card.value)) {
        video_card.style.border="2px solid green";
        gpuSubmitAdd = true;
    }
    else if (!regexGpu.test(video_card.value)) {
        video_card.style.border="2px solid red";
        gpuSubmitAdd = false;
}
});
//drive add
let drive = document.querySelector("#drive");
drive.addEventListener('input', () => {
    
    let regexHdd = /^[\d]{3,4}GB$/g;

    if (drive.value === '') {
        drive.style.border="none";
        hddSubmitAdd = false;
    } else if (regexHdd.test(drive.value)) {
        drive.style.border="2px solid green";
        hddSubmitAdd = true;
    }
    else if (!regexHdd.test(drive.value)) {
        drive.style.border="2px solid red";
        hddSubmitAdd = false;
}
});
// Submit Add Form Only if conditions above are true
var add_form = document.getElementById('add-form');
var add_button = document.getElementById('confirm-add');

add_button.addEventListener('click', function(event) {
    event.preventDefault();
    if (nameSubmitAdd === true && brandSubmitAdd === true && cpuSubmitAdd === true && ramSubmitAdd === true && gpuSubmitAdd === true && hddSubmitAdd === true) {
        add_form.submit();
    }
})

//Edit Product Form
//microprocessor edit
let microprocessor_edit = document.querySelector("#micro-edit");
microprocessor_edit.addEventListener('input', () => {
    
    let regexCpu = /^([\d.\dGHz]+\s[\w]+\s[\w]+-[\w]+$)/g;

    if (microprocessor_edit.value === '') {
        microprocessor_edit.style.border="none";
        cpuSubmitEdit = false;
    } else if (regexCpu.test(microprocessor_edit.value)) {
        microprocessor_edit.style.border="2px solid green";
        cpuSubmitEdit = true;
    }
    else if (!regexCpu.test(microprocessor_edit.value)) {
        microprocessor_edit.style.border="2px solid red";
        cpuSubmitEdit = false;
}
});
//memory edit
let memory_edit = document.querySelector("#memory-edit");
memory_edit.addEventListener('input', () => {
    
    let regexRam = /^[\d]{1,2}GB$/g;

    if (memory_edit.value === '') {
        memory_edit.style.border="none";
        ramSubmitEdit = false;
    } else if (regexRam.test(memory_edit.value)) {
        memory_edit.style.border="2px solid green";
        ramSubmitEdit = true;
    }
    else if (!regexRam.test(memory_edit.value)) {
        memory_edit.style.border="2px solid red";
        ramSubmitEdit = false;
}
});
//video card edit
let video_card_edit = document.querySelector("#graphique-edit");
video_card_edit.addEventListener('input', () => {
    
    let regexGpu = /^[\w]+\s[\w]+\s[\d]{4}[\w]{1,2}$/g;
    
    if (video_card_edit.value === '') {
        video_card_edit.style.border="none";
        gpuSubmitEdit = false;
    } else if (regexGpu.test(video_card_edit.value)) {
        video_card_edit.style.border="2px solid green";
        gpuSubmitEdit = true;
    }
    else if (!regexGpu.test(video_card_edit.value)) {
        video_card_edit.style.border="2px solid red";
        gpuSubmitEdit = false;
}
});
//drive edit
let drive_edit = document.querySelector("#drive-edit");
drive_edit.addEventListener('input', () => {
    
    let regexHdd = /^[\d]{3,4}GB$/g;

    if (drive_edit.value === '') {
        drive_edit.style.border="none";
        hddSubmitEdit = false;
    } else if (regexHdd.test(drive_edit.value)) {
        drive_edit.style.border="2px solid green";
        hddSubmitEdit = true;
    }
    else if (!regexHdd.test(drive_edit.value)) {
        drive_edit.style.border="2px solid red";
        hddSubmitEdit = false;
}
});
// Submit Edit Form only if above conditions are true
var edit_form = document.getElementById('edit-form');
var edit_button = document.getElementById('yes-edit');

edit_button.addEventListener('click', function(event) {
    event.preventDefault();
    if (cpuSubmitEdit === true && ramSubmitEdit === true && gpuSubmitEdit === true && hddSubmitEdit === true ) {
        edit_form.submit();
    }
})