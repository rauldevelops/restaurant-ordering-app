import { menuArray } from './data.js'

const menuArrayHtml = menuArray.map(function(item) {
    return `
    <div class="menu-item">
        <div class="menu-emoji">
            ${item.emoji}
        </div>
        <div class="menu-details">
            <h3 class="menu-name">${item.name}</h3>
            <p class="menu-ingredients">${item.ingredients.join(', ')}</p>
            <p class="menu-price">$${item.price}</p>
        </div>
        <button class="add-btn" data-item-id="${item.id}">+</button>
    </div>
        `
})

document.addEventListener('click', function(e) {
    if (e.target.dataset.itemId) {
        handleAddItem(e.target.dataset.itemId)
        console.log(e.target.dataset.itemId)
    }
    else if (e.target.dataset.removeItemId) {
        handleRemoveItem(e.target.dataset.removeItemId)
    }
    else if (e.target.id === 'complete-order-btn') {
        document.getElementById('modal').classList.remove('hidden')
    }
    else if (e.target.id === 'pay-btn') {
        e.preventDefault()
        handlePayBtn()
    }
})

function handlePayBtn() {
    const paymentFormData = new FormData(document.getElementById('payment-form'))
    const name = paymentFormData.get('name')
    const orderCompleteMessage = document.createElement('div')
    orderCompleteMessage.id = "order-complete-message"
    orderCompleteMessage.innerHTML = `
        <h2>Thanks, ${name}! Your order is on its way!</h2>
        `
    const orderDiv = document.getElementById('order')
    orderDiv.replaceWith(orderCompleteMessage)

    document.getElementById('modal').classList.add('hidden')
}

function handleRemoveItem(itemId) {
    const orderItemsContainer = document.getElementById('order-items')
    const orderItemElements = orderItemsContainer.querySelectorAll('.order-item')

    for (const orderItemElement of orderItemElements) {
        if (orderItemElement.querySelector('.remove-btn').dataset.removeItemId === itemId) {
            orderItemsContainer.removeChild(orderItemElement)
            break
        }
    }
        const remainingOrderItem = orderItemsContainer.querySelectorAll('.order-item')
        if (remainingOrderItem.length === 0) {
            document.getElementById('order').classList.add('hidden')
        }

        document.getElementById('total-price-dollars').textContent = `$${calculateTotalPrice()}`

    const remainingOrderItems = orderItemsContainer.querySelectorAll('.order-item')
    if (remainingOrderItems.length === 0) {
        document.getElementById('order').classList.add('hidden')
        }
    }

    document.getElementById('total-price-dollars').textContent = `$${calculateTotalPrice()}`

function handleAddItem(itemId) {

    document.getElementById('order').classList.remove('hidden')

    const orderItemObj = menuArray.filter(function(item) {
        return item.id === Number(itemId)
    })[0]

    const orderItemHtml = `
    <div class="order-item">
        <h3 id="order-item-name">${orderItemObj.name}</h3>
        <button class="remove-btn" data-remove-item-id="${orderItemObj.id}">remove</button>
        <h3 id="order-item-price">$${orderItemObj.price}</h3> 
    </div>`

    document.getElementById('order-items').innerHTML += orderItemHtml

    document.getElementById('total-price-dollars').textContent = `$${calculateTotalPrice()}`
}

function calculateTotalPrice() {
    const orderItemPricesArr = []
    const priceElements = document.querySelectorAll('#order-item-price')
    priceElements.forEach(priceElement => {
        const priceText = priceElement.textContent.replace('$', '')
        orderItemPricesArr.push(Number(priceText))
    })
    return orderItemPricesArr.reduce((total, currentItem) => total + currentItem, 0)
}

document.getElementById('menu').innerHTML = menuArrayHtml.join('')