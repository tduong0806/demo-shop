
class products {
    productsList = [
        {
            id: '0',
            imgName: 'kinhmat',
            productsName: 'Kính Râm Thời Trang REEMAN 58217 C4 Gọng đen mắt vàng',
            priceOld: '1.000.000',
            priceCurrent: '900.000',
            itemBrand: 'Ree-man',
            origin: 'Việt Nam',
            saleOffPercent: '10%'
        },
        {
            id: '1',
            imgName: 'giayden',
            productsName: 'Giày Thể Thao Nam Nữ ( Đen Sọc Đen )',
            priceOld: '220.000',
            priceCurrent: '195.000',
            itemBrand: 'NATO',
            origin: 'Việt Nam',
            saleOffPercent: '13%'
        },
        {
            id: '2',
            imgName: 'giaytrang',
            productsName: 'Giày thể thao nam màu trắng đế dày 5cm nhẹ thoáng khí phiên bản thời trang học sinh hàn quốc sp G977',
            priceOld: '259.000',
            priceCurrent: '178.000',
            itemBrand: 'NATO',
            origin: 'Việt Nam',
            saleOffPercent: '31%'
        },
        {
            id: '3',
            imgName: 'khanquang',
            productsName: 'Khăn Choàng Cổ Bảo Vệ Mùa Đông Thời Trang Zheng Mới Kẻ Caro Và Chim Cho Nữ vn',
            priceOld: '64.000',
            priceCurrent: '44.000',
            itemBrand: 'YUANZHEN',
            origin: 'Nước ngoài',
            saleOffPercent: '38%'
        }, 
        {
            id: '4',
            imgName: 'taingheLenovo',
            productsName: 'Tai nghe Lenovo TH10 Bluetooth âm thanh nổi giảm ồn thoải mái chống thấm nước có mic thích hợp cho Android IOS PC',
            priceOld: '700.000',
            priceCurrent: '399.000',
            itemBrand: 'LENOVO',
            origin: 'Nước ngoài',
            saleOffPercent: '31%'
        }, 
        {
            id: '5',
            imgName: 'taingheM10',
            productsName: 'Tai Nghe Bluetooth M10 nâng cấp Phiên Bản Pro Pin Trâu, Nút Cảm Ứng, Hỗ Trợ Đàm Thoại, Nghe Nhạc, Tự Động Kết Nối',
            priceOld: '118.000',
            priceCurrent: '65.000',
            itemBrand: 'Phukien264',
            origin: 'Việt Nam',
            saleOffPercent: '45%'
        },
        {
            id: '6',
            imgName: 'goiom',
            productsName: 'Gối ôm người lớn cotton 100% LIDACO có khóa kéo tiện lợi kích thước 35x100cm',
            priceOld: '180.000',
            priceCurrent: '115.000',
            itemBrand: 'Phukien264',
            origin: 'Việt Nam',
            saleOffPercent: '38%'
        },
        {
            id: '7',
            imgName: 'banlamviec',
            productsName: 'HỎA TỐC - bàn làm việc cho văn phòng, gia đình có ảnh thật',
            priceOld: '400.000',
            priceCurrent: '259.000',
            itemBrand: 'GDV',
            origin: 'Việt Nam',
            saleOffPercent: '43%'
        },
        {
            id: '8',
            imgName: 'dongho',
            productsName: 'Ruirwfa Đồng Hồ Điện Tử Dạ Quang Hình anime kuromi cinnamoroll kawaii sanrio Cho Bé Gái Mới',
            priceOld: '47.000',
            priceCurrent: '37.000',
            itemBrand: 'RUIRWFA',
            origin: 'Việt Nam',
            saleOffPercent: '34%'
        },
        {
            id: '9',
            imgName: 'lixi',
            productsName: 'Set bộ 5 chiếc lì xì tết Coolmate 2024',
            priceOld: '20.000',
            priceCurrent: '10.000',
            itemBrand: 'COOLMATE',
            origin: 'Việt Nam',
            saleOffPercent: '50%'
        },
        {
            id: '10',
            imgName: 'bongda',
            productsName: 'Deukio Bóng Đá Chống Nổ Số 5 Chuyên Dụng Cho Người Lớn',
            priceOld: '128.000',
            priceCurrent: '64.000',
            itemBrand: 'DEUKIO',
            origin: 'Nước ngoài',
            saleOffPercent: '50%'
        },
        {
            id: '11',
            imgName: 'tinhchatduong',
            productsName: 'Serum The Ordinary Niacinamide 10% + Zinc 1% 30ml, giảm mụn giảm thâm, se khít lỗ chân lông',
            priceOld: '300.000',
            priceCurrent: '169.000',
            itemBrand: 'Ordinary',
            origin: 'Nước ngoài',
            saleOffPercent: '44%'
        },

    ];

    listedHomeProductItem() {
        let homeProductGrid = document.querySelector('.home-product').querySelector('.grid__row');
        for(let product of this.productsList) {
             homeProductGrid.innerHTML += `
                     <div class="grid__column-2-4">
                     <a class="home-product-item" href="product.html">
                         <img src="../assets/products-img/${product.imgName}" alt="${product.imgName}" class="home-product-item__img" id="item|${product.id}">
                         <h4 class="home-product-item__name">
                             ${product.productsName}
                         </h4>
                         <div class="home-product-item__price">
                             <span class="home-product-item__price-old"><sub class="price-type">đ</sub>${product.priceOld}</span>
                             <span class="home-product-item__price-current"><sub class="price-type">đ</sub>${product.priceCurrent}</span>
                         </div>
                         <div class="home-product-item__action">
                             <span class="home-product-item__like">
                                 <i class="fa-regular fa-heart"></i> 
                                 <!-- <i class="fa-solid fa-heart"></i> -->
                             </span>
                             <div class="home-product-item__rating">
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                                 <i class="fa-solid fa-star"></i>
                             </div>
                         </div>

                         <div class="home-product-item__origin">
                             <span class="home-product-item__brand">${product.itemBrand}</span>
                             <span class="home-product-item__origin-name">${product.origin}</span>
                         </div>
                         <div class="home-product-item__sale-off">
                             <span class="home-product-item__sale-off-percent">${product.saleOffPercent}</span>
                             <span class="home-product-item__sale-off-label">GIẢM</span>
                         </div>
                     </a>
                 </div>`;
        };
        let productLinks = document.querySelectorAll('.home-product-item'); 
        for(let product of productLinks) {
            product.onclick = function(event) {
                //chua xong
                let productID = event.target.id;
                localStorage.setItem("productID", productID.split('|')[1]);
                console.log(productID);
                return productID;
            }
        }

    }


    listedCategoryItem() {
        var category = document.querySelector('.category');
        for(let product of this.productsList) {
            category.innerHTML += `
                <li class="category-item">
                    <a href="product.html" class="category-item__link" id="category|${product.id}">${product.productsName}</a>
                </li>
            `;
        }
        let productLinks = document.querySelectorAll('.category-item'); 
        for(let product of productLinks) {
            product.onclick = function(event) {
                //chua xong
                let productID = event.target.id;
                localStorage.setItem("productID", productID.split('|')[1]);
                console.log(productID);
                return productID;
            }
        }
    }
}