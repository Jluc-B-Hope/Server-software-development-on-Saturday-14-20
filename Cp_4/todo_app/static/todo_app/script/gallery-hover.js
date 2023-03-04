let galleryItems = document.body.getElementsByClassName('gallery-item');
for(let i = 0; i < 6; i++){
    let number = i + 1;
    galleryItems[i].style.background = `url('${DJANGO_BASE_URL}online_shop/images/work-${number}.jpg') no-repeat center`;
    galleryItems[i].style.backgroundSize = "cover";
    galleryItems[i].addEventListener('mouseover',function () {
            let item = galleryItems[i].getElementsByClassName('gallery-hover')[0];
            item.style.display = "flex";
            item.style.justifyContent = "center";
            item.style.flexDirection = "column";
            item.style.alignItems = "center";
            galleryItems[i].style.background = `linear-gradient(rgba(238, 238, 238,.7), rgba(238, 238, 238, .7)), url('${DJANGO_BASE_URL}online_shop/images/work-${number}.jpg') no-repeat center`;
            galleryItems[i].style.backgroundSize = "cover";
    });
    galleryItems[i].addEventListener('mouseout',function(){
        let item = galleryItems[i].getElementsByClassName('gallery-hover')[0];
        item.style.display = "none";
        galleryItems[i].style.background = `url('${DJANGO_BASE_URL}online_shop/images/work-${number}.jpg') no-repeat center`;
        galleryItems[i].style.backgroundSize = "cover";
    });
}

// let position = () => {
//     let positionOf = window.pageYOffset|| document.documentElement.scrollTop;
//     accBlock.style.backgroundPosition = window.pageXOffset+ 'px' + positionOf + 'px';
// };
// document.body.addEventListener('scroll', position);








