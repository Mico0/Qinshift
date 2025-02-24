export default class HTMLHelpers {
    static createOptionElement(text, value, isSelected = false) {
        let option = document.createElement('option');
        option.value = value;
        option.setAttribute('name', text);
        option.innerText = text;
        option.selected = isSelected
        return option;
    }

    static changeTextInElement(element, text) {
        element.innerText = text;
    }

    static createCardElement(id, title, description, price, imageUrl) {
        return `
            <div class='col-md-3 mt-2'>
                <div class="card" style="width: 18rem;">
                    <img src="${imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <abbr title='${description}'><p class="card-text text-truncate">${description}</p></abbr>
                        <p class="card-text fw-bold">Only for ${price}$</p></abbr>
                        <button class="btn btn-primary add-to-cart" value=${id}>Add to cart</button>
                    </div>
                </div>
            </div>
        `;
    }

    static createNotificationElement(type, message) {
        return `
                <div class="toast-container position-fixed bottom-0 end-0 p-3">
                    <div id="liveToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <strong class="me-auto">${type}</strong>
                        </div>
                        <div class="toast-body">
                            ${message}
                        </div>
                    </div>
                </div>
        `;
    }

    static createUnorderedListElement(items) {
        const ul = document.createElement('ul');
        ul.classList.add('list-group');

        let html = '';
        for(const item of items) {
            console.log(item);
            html += `
                <li class='list-group-item'>
                    <img src=${item.image} alt='...' style='width: 50px' />
                    <span>${item.title} ${item.price} $</span>
                    <button type='button' class='btn btn-secondary remove-product' value='${item.id}'>X</button>
                </li>
            `;
        }
        ul.innerHTML = html;
        return ul;
    }
}
