document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send_whatsapp_btn');

    sendBtn.addEventListener('click', () => {
        const businessPhoneNumber = '9315444699'; 

        const userPhone = document.getElementById('whatsapp_phone').value;
        const userAddress = document.getElementById('whatsapp_address').value;
        const userQuery = document.getElementById('whatsapp_query').value;

        if (!userPhone || !userAddress || !userQuery) {
            alert('Please fill out all fields before sending.');
            return;
        }

        const message = `Hello Orris!
I have a new query.

My Contact Number: ${userPhone}
My Address: ${userAddress}

My Question:
"${userQuery}"
`;

        const encodedMessage = encodeURIComponent(message);

        const whatsappURL = `https://wa.me/${businessPhoneNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    });
});