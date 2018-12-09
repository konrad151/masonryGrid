const domElements = {
    images: document.querySelectorAll("#images img"),
    galleryColumnOne: document.querySelector('.gallery__column--one'),
    galleryColumnTwo: document.querySelector('.gallery__column--two'),
    galleryColumnThree: document.querySelector('.gallery__column--three')
}

const clearColumns = () => {
    domElements.galleryColumnOne.innerHTML = '';
    domElements.galleryColumnTwo.innerHTML = '';
    domElements.galleryColumnThree.innerHTML = '';
}

const averageHeightOfColumn = columns => {
    let height = 0;
    let allImages = [...domElements.images];
    allImages.map((image) => {
        height += image.height;
    });
    const averageHeight = height / columns;
    return averageHeight;
}

const insertImageToDom = (height, averageHeight, markup, item) => {
    if (window.innerWidth >= 769) {
        
        if (height <= averageHeight - item.height / 2) {
            domElements.galleryColumnOne.insertAdjacentHTML('beforeend', markup);
        } else if (height > averageHeight && height <= averageHeight*2) {
            domElements.galleryColumnTwo.insertAdjacentHTML('beforeend', markup);
        } else {
            domElements.galleryColumnThree.insertAdjacentHTML('beforeend', markup);
        }
    } else if (window.innerWidth < 769 && window.innerWidth > 480) {
        if (height < averageHeight - item.height / 2) {
            domElements.galleryColumnOne.insertAdjacentHTML('beforeend', markup);
        } else if (height >= averageHeight - item.height / 2) {
            domElements.galleryColumnTwo.insertAdjacentHTML('beforeend', markup);
        }
    } else {
        domElements.galleryColumnOne.insertAdjacentHTML('beforeend', markup);
    }
}

const renderAllImages = (columns) => {
    const averageHeight = averageHeightOfColumn(columns);
    let height = 0;
    let allImages = [...domElements.images];
    allImages.map((image) => {
        const renderImage = item => {
            const markup = `
                <div class="gallery__item" style="background: url(${item.src})">
                    <img src="${item.src}">
                </div>
            `;
            insertImageToDom(height, averageHeight, markup, item);
            height += item.height;
        }
        renderImage(image);
    });
}

window.addEventListener("load", () => {
    window.addEventListener("resize", () => {
        clearColumns();
        if (window.innerWidth >= 769) {
            renderAllImages(3);
        } else if (window.innerWidth < 769 && window.innerWidth > 480) {
            renderAllImages(2);
        } else {
            renderAllImages(1);
        }
    });
    if (window.innerWidth >= 769) {
        renderAllImages(3);
    } else if (window.innerWidth < 769 && window.innerWidth > 480) {
        renderAllImages(2);
    } else {
        renderAllImages(1);
    }
});