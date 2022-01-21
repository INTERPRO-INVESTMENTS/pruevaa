class Product {
  constructor(nombre, compra, venta, total) {
      this.nombre = nombre;
      this.compra = compra;
      this.venta = venta;
      this.total = total;
  }
}

class UI {

  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-5">
                <div class="card-body">
                    <strong>product nombre</strong>: ${product.nombre} -
                    <strong>product compra</strong>: ${product.compra} - 
                    <strong>product venta</strong>: ${product.venta}
                    <strong>product total</strong>: ${product.total}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
            `;
    productList.appendChild(element);
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Product Deleted Succsssfully", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    container.insertBefore(div, app);
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}


// DOM Events

document.getElementById("product-form")
  .addEventListener("submit", function (e) {
    

    
   const nombre = document.getElementById("nombre").value,
   const compra = document.getElementById("compra").value,
   const venta = document.getElementById("venta").value;
   const total = document.getElementById("total").value;
      

    
   const product = new Product(nombre, compra, venta , total,);

    
   const ui = new UI();

    
   if (nombre === "" || compra === "" || venta === ""|| total === "" ) {
   ui.showMessage("Please Insert data in all fields", "danger");
   }

    
   ui.addProduct(product);
   ui.showMessage("Product Added Successfully", "success");
   ui.resetForm();
    e.preventDefault();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});
