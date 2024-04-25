window.addEventListener('DOMContentLoaded', function() {
  const addButtons = document.querySelectorAll('.add-button');

  addButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const menuItemCode = button.id;

      const quantityInput = document.querySelector(`#${menuItemCode}-qty`);
      const image = document.querySelector(`#${menuItemCode}-img`);

      const description = image.alt || image.title;

      const orderedItemsTable = document.querySelector('#ordered-items');

      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td class="description">${description}</td>
        <td class="quantity">${quantityInput.value}</td>
      `;

      orderedItemsTable.appendChild(newRow);

      recal();
    });
  });

  const undoLink = document.querySelector('.block-orderitems a');

  undoLink.addEventListener('click', function(event) {
    event.preventDefault();

    const orderedItemsRows = document.querySelectorAll('#ordered-items tr');

    if (orderedItemsRows.length > 2) {
      const lastRow = orderedItemsRows[orderedItemsRows.length - 2];
      lastRow.parentNode.removeChild(lastRow);
      recal();
    }
  });
});

function recal() {
  const quantityCells = document.querySelectorAll('#ordered-items .quantity');

  let totalQuantity = 0;

  quantityCells.forEach(function(cell) {
    const quantity = parseInt(cell.textContent);

    if (!isNaN(quantity)) {
      totalQuantity += quantity;
    }
  });

  const footerQuantityCell = document.querySelector('#ordered-items tfoot .quantity');
  footerQuantityCell.textContent = totalQuantity.toString();
}