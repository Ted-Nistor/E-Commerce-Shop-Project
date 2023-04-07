const updateBtns = document.querySelectorAll('.update-cart');

updateBtns.forEach(btn => {
    btn.addEventListener('click', function(){
        const productId = this.dataset.product;
        const action = this.dataset.action;
        console.log(`productId: ${productId}, action: ${action}`)

        const updateUserOrder = function(productId, action){
            console.log('User is logged in, sending data to server')
            const url = '/update_item/';
            fetch(url,{
                method: 'POST',
                headers: {'Content-Type': 'application/json',
                          'X-CSRFToken': csrftoken
                          },
                body: JSON.stringify({'productId': productId, 'action': action}),
            })

            .then(response => {return response.json()})
            .then(data =>{
                console.log('data:', data);
                location.reload();
            })
        }

        console.log(`User: ${user}`)
        if (user === 'AnonymousUser')
        {
            console.log('Not logged in')
        }
        else
        {
            updateUserOrder(productId, action);

        }
    })
})