const cartCount = document.querySelector(".cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

let panier = [];

// Met à jour le nombre affiché
function updateCartCount() {
    cartCount.textContent = panier.length;
}

addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {

        // Récupère la carte du produit
        const productCard = this.closest(".product-card");

        // Récupère le nom du produit
        const productName = productCard.querySelector("h3").textContent;

        // Vérifie si le produit existe déjà
        const index = panier.indexOf(productName);

        if (index === -1) {
            // Ajouter au panier
            panier.push(productName);

            this.innerHTML = `
                <i class="ri-delete-bin-line"></i>
                Retirer du panier
            `;

            this.classList.add("selected");

        } else {
            // Retirer du panier
            panier.splice(index, 1);

            this.innerHTML = `
                <i class="ri-shopping-cart-2-fill"></i>
                Ajouter au panier
            `;

            this.classList.remove("selected");
        }

        updateCartCount();
    });
});