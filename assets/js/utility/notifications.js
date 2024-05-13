function showNotification(type, title, message) {
    const options = {
        title: title,
        message: message,
        position: "center",
        zindex: 2000,
        overlay: true,
        timeout: 3000,
    };

    switch (type) {
        case 'success':
            iziToast.success(options);
            break;
        case 'warning':
            iziToast.warning(options);
            break;
        case 'error':
            iziToast.error(options);
            break;
        default:
            iziToast.info(options);
    }
}

function startLoading() {
    Notiflix.Loading.init({
        svgColor: "#ffffff",
    });
    Notiflix.Loading.pulse();
}

function stopLoading() {
    Notiflix.Loading.remove();
}
