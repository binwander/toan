var modal_resign = document.getElementById("modal_resign")
var modal_login = document.getElementById("modal_login")
var search_select = document.getElementById('search_select')
var option1 = document.getElementById('list_option1')
var option2 = document.getElementById('list_option2')
var check1 = document.getElementById("check1")
var check2 = document.getElementById("check2")
var items = document.querySelectorAll('.category-item_link')
var list_heading = document.getElementById('list_heading')
var label = document.getElementById('label')
var option_show1 = document.getElementById('option_show1')
var option_show2 = document.getElementById('option_show2')
var check_option1 = document.getElementById("check_option1")
var check_option2 = document.getElementById("check_option2")
var box_option = document.getElementById('box_option')
var filter_nametag = document.getElementById('filter_nametag')
var item1 = document.getElementById('item1')
var item2 = document.getElementById('item2')
var item3 = document.getElementById('item3')
var btn_default1 = document.getElementById("btn_default1")
var btn_default2 = document.getElementById("btn_default2")
var btn_default3 = document.getElementById("btn_default3")
var instore = document.getElementById('option1')
var outstore = document.getElementById('option2')
var category_item1 = document.getElementById('category-item1')
var category_item2 = document.getElementById('category-item2')
var category_item3 = document.getElementById('category-item3')
const cart_notify = document.getElementById("cart_notify-item")
var sort_default1 = document.getElementById("sort_default1")
var sort_default2 = document.getElementById("sort_default2")
var sort_default3 = document.getElementById("sort_default3")
var sort_default4 = document.getElementById("sort_default4")
var nav_overlay = document.getElementById("nav_overlay")
var sibeBar_menu = document.getElementById("sibeBar_menu")
var search_bar = document.getElementById("search_bar")
var search_box = document.getElementById("search_box")
var container = document.getElementById("container")

function Open_sideBar(){
    nav_overlay.classList.add("open_overlay")
    sibeBar_menu.classList.add("open_mobile")
    sibeBar_menu.classList.remove("close_mobile")
}
nav_overlay.addEventListener("click", function(){
    nav_overlay.classList.remove("open_overlay")
    sibeBar_menu.classList.remove("open_mobile")
    sibeBar_menu.classList.add("close_mobile")
})

function searchBar_mobile(){
    search_bar.classList.toggle("sideinBar")
    container.classList.toggle("container_padding--80")
    container.classList.toggle("container_padding--50")
}
document.getElementById("search-control").addEventListener("click",function(e){
    e.stopPropagation()
})
document.getElementById("search_select").addEventListener("click",function(e){
    e.stopPropagation()
})
window.addEventListener("click",function (event) {
    if (!event.target.matches('.ti-search')) {
        var search_Box = document.getElementsByClassName("search_bar")
        var i;
        for (i = 0; i < search_Box.length; i++) {
            var openSearchbox = search_Box[i];
            if (openSearchbox.classList.contains('sideinBar')) {
                console.log("bingo")
                openSearchbox.classList.remove('sideinBar');
                container.classList.remove("container_padding--80")
            }
        }
    }
})

/* ------------------------ */
function open_cartBox(){
    cart_notify.classList.toggle("active_cartBox")
    console.log("đúng rồi nè :))))")
}
document.getElementById("cart_notify-item").addEventListener("click", function (event) {
    event.stopPropagation()
})
window.addEventListener("click",function (event) {
    if (!event.target.matches('.wrap_cart')) {
        var cartBox = document.getElementsByClassName("cart_notify-item")
        var i;
        for (i = 0; i < cartBox.length; i++) {
            var openCart = cartBox[i];
            if (openCart.classList.contains('active_cartBox')) {
                console.log("bingo")
                openCart.classList.remove('active_cartBox');
            }
        }
    }
})
/* ------------------------------sort default---------------- */
function choose_sort1() {
    sort_default1.classList.add("sort_default")
    sort_default2.classList.remove("sort_default")
    sort_default3.classList.remove("sort_default")
    sort_default4.classList.remove("sort_default")
}
function choose_sort2() {
    sort_default1.classList.remove("sort_default")
    sort_default2.classList.add("sort_default")
    sort_default3.classList.remove("sort_default")
    sort_default4.classList.remove("sort_default")
}
function choose_sort3() {
    sort_default1.classList.remove("sort_default")
    sort_default2.classList.remove("sort_default")
    sort_default3.classList.add("sort_default")
    sort_default4.classList.remove("sort_default")
}
function choose_sort4() {
    sort_default1.classList.remove("sort_default")
    sort_default2.classList.remove("sort_default")
    sort_default3.classList.remove("sort_default")
    sort_default4.classList.add("sort_default")
}


/*  */
function choose_default2() {
    btn_default1.style.background = `white`
    btn_default1.style.color = `black`
    btn_default2.style.background = `#FA5130`
    btn_default2.style.color = `white`
    btn_default3.style.color = `black`
    btn_default3.style.background = `white`
}
function choose_default3() {
    btn_default1.style.background = `white`
    btn_default1.style.color = `black`
    btn_default3.style.color = `white`
    btn_default3.style.background = `#FA5130`
    btn_default2.style.color = `black`
    btn_default2.style.background = `white`
}
function choose_default1() {
    btn_default1.style.background = `#FA5130`
    btn_default1.style.color = `white`
    btn_default3.style.color = `black`
    btn_default3.style.background = `white`
    btn_default2.style.color = `black`
    btn_default2.style.background = `white`
}



/* -----chọn danh mục sản phảm-------------- */
function choose_item1() {
    item1.style.color = `#fa5130`
    item2.style.color = `black`
    item3.style.color = `black`
    list_heading.style.color = `black`
    btn_default1.style.background = `#FA5130`
    btn_default1.style.color = `white`
    btn_default3.style.color = `black`
    btn_default3.style.background = `white`
    btn_default2.style.color = `black`
    btn_default2.style.background = `white`
    if (category_item1) {
        category_item1.classList.add(`category-item-active`)
        category_item2.classList.remove(`category-item-active`)
        category_item3.classList.remove(`category-item-active`)
        list_heading.classList.remove(`category-item-active`)
    }

}
function choose_item2() {
    item2.style.color = `#fa5130`
    item1.style.color = `black`
    item3.style.color = `black`
    list_heading.style.color = `black`
    btn_default1.style.background = `#FA5130`
    btn_default1.style.color = `white`
    btn_default3.style.color = `black`
    btn_default3.style.background = `white`
    btn_default2.style.color = `black`
    btn_default2.style.background = `white`
    if (category_item2) {
        category_item2.classList.add(`category-item-active`)
        category_item1.classList.remove(`category-item-active`)
        category_item3.classList.remove(`category-item-active`)
        list_heading.classList.remove(`category-item-active`)
    }

}
function choose_item3() {
    item3.style.color = `#fa5130`
    item1.style.color = `black`
    item2.style.color = `black`
    list_heading.style.color = `black`
    btn_default1.style.background = `#FA5130`
    btn_default1.style.color = `white`
    btn_default3.style.color = `black`
    btn_default3.style.background = `white`
    btn_default2.style.color = `black`
    btn_default2.style.background = `white`
    if (category_item3) {
        category_item3.classList.add(`category-item-active`)
        category_item1.classList.remove(`category-item-active`)
        category_item2.classList.remove(`category-item-active`)
        list_heading.classList.remove(`category-item-active`)
    }

}
function choose_heading() {
    list_heading.style.color = `red`
    item1.style.color = `black`
    item2.style.color = `black`
    item3.style.color = `black`
    btn_default1.style.background = `#FA5130`
    btn_default1.style.color = `white`
    btn_default3.style.color = `black`
    btn_default3.style.background = `white`
    btn_default2.style.color = `black`
    btn_default2.style.background = `white`
    if (list_heading) {
        list_heading.classList.add(`category-item-active`)
        category_item1.classList.remove(`category-item-active`)
        category_item2.classList.remove(`category-item-active`)
        category_item3.classList.remove(`category-item-active`)
    }
}

/*----------------- option_filter------------------ */
function load_option1() {
    label.style.display = `none`
    option_show1.style.display = `block`
    option_show2.style.display = `none`
    check_option1.style.display = `block`
    check_option2.style.display = `none`
    box_option.style.display = `none`
}
function load_option2() {
    label.style.display = `none`
    option_show2.style.display = `block`
    option_show1.style.display = `none`
    check_option2.style.display = `block`
    check_option1.style.display = `none`
    box_option.style.display = `none`
}
function load_option() {
    box_option.style.display = `block`
}

/* -----------modal------- */
function resign_box() {
    modal_resign.style.display = `block`
    modal_login.style.display = `none`
    nav_overlay.classList.remove("open_overlay")
    sibeBar_menu.classList.remove("open_mobile")
    sibeBar_menu.classList.add("close_mobile")
    var btn = document.getElementById("btn")
    btn.onclick = function () {
        console.log('đúug rồi')
        modal_resign.style.display = `none`
    }
    var btn_close = document.getElementById("btnclose")
    btn_close.onclick = function () {
        modal_resign.style.display = `none`
    }
}

function login_box() {
    modal_resign.style.display = `none`
    modal_login.style.display = `block`
    nav_overlay.classList.remove("open_overlay")
    sibeBar_menu.classList.remove("open_mobile")
    sibeBar_menu.classList.add("close_mobile")
    var btn = document.getElementById("btn_back")
    btn.onclick = function () {
        console.log('đúug rồi')
        modal_login.style.display = `none`
    }
    var btn_close = document.getElementById("btn_close")
    btn_close.onclick = function () {
        modal_login.style.display = `none`
    }
}


search_select.style.cursor = `pointer`
option1.onclick = function () {
    check1.style.display = `block`
    check2.style.display = `none`
    instore.style.display = `block`
    outstore.style.display = `none`
}
option2.onclick = function () {
    check2.style.display = `block`
    check1.style.display = `none`
    instore.style.display = `none`
    outstore.style.display = `block`
}

document.getElementById("modal_body--resign").addEventListener("click",function(){
    modal_resign.style.display = `none`
})
document.getElementById("modal_body--login").addEventListener("click",function(){
    modal_login.style.display = `none`
})

document.getElementById("modal_resign--box").addEventListener("click",function(e){
    e.stopPropagation()
})
document.getElementById("modal_login--box").addEventListener("click",function(e){
    e.stopPropagation()
})
/* -------like or unlike-------------- */

function product_quantity() {
    for (let i = 1; i < 15; i++) {
        console.log(i)
        var grid_row = document.getElementById('grid_row')
        if (grid_row) {
            console.log(grid_row)
            var product_list = document.createElement('div')
            product_list.classList.add(`col`,`l-2-4`,`m-3`,`c-6`)
            var product_item = document.createElement('div')
            product_item.classList.add(`product_item`)
            product_item.innerHTML = `
            <div class="product_img"  style="background-image: url(/shopee/assests/img/hinh${i}.jpg)">
            </div>
        <div class="product_info">
            <div class="product_desc">
                Sản phẩm mascara của maybelline
                mang đến những trải nghiệm tuyệt vời nhất
            </div>
            <div class="product_price">
                <span class="old_price"><del>800.000đ</del></span>
                <span class="new_price">650.000đ</span>
            </div>
            <div class="product_rating_like">
                <div class="product_like" id="product_like">
                    <i class="far fa-heart unlike" id="unlike"
                        ></i>
                    <i class="fas fa-heart like" id="like"
                        ></i>
                </div>
                <div class="product_rating">
                    <i class="product_rating-gold fas fa-star"></i>
                    <i class="product_rating-gold fas fa-star"></i>
                    <i class="product_rating-gold fas fa-star"></i>
                    <i class="product_rating-gold fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <span class="number_sold">88 đã bán</span>
            </div>
            <div class="product_places">
            Tp Hồ Chí Minh
            </div>
            <div class="product_favorite">
                <span>
                    <i class="ti-check check_favorite"></i>
                    Yêu thích                                           
                </span>
            </div>
            <div class="product_saleoff">                                          
                <span class="saleoff_percent">10%</span>
                    <span class="saleoff_label">GIẢM</span>
            </div>
        </div>`
            product_list.appendChild(product_item)
            grid_row.appendChild(product_list)
        }
    }
}
product_quantity()

function product_into() {
    for (let i = 1; i < 5; i++) {
        console.log(i)
        var swiper_wrapper = document.getElementById("swiper-wrapper")
        if (swiper_wrapper) {
            var product_list_header = document.createElement('div')
            product_list_header.classList.add(`swiper-slide`,`col`,`l-2-4`,`m-3`,`c-6`)
            var product_item_header = document.createElement('div')
            product_item_header.classList.add(`product_item`)
            product_item_header.innerHTML = `
            <div class="product_img"  style="background-image: url(/shopee/assests/img/hinh${i}.jpg)">
            </div>
        <div class="product_info">
            <div class="product_desc">
                Sản phẩm mascara của maybelline
                mang đến những trải nghiệm tuyệt vời nhất
            </div>
            <div class="product_price">
                <span class="old_price"><del>800.000đ</del></span>
                <span class="new_price">650.000đ</span>
            </div>
            <div class="product_rating_like" id="product_like_raitng">
                <div class="product_like" id="product_like_header">
                <i class="far fa-heart unlike" id="unlike_header"></i>
                <i class="fas fa-heart like" id="like_header"></i>
                </div>
                <div class="product_rating">
                    <i class="product_rating-gold fas fa-star"></i>
                    <i class="product_rating-gold fas fa-star"></i>
                    <i class="product_rating-gold fas fa-star"></i>
                    <i class="product_rating-gold fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <span class="number_sold">88 đã bán</span>
            </div>
            <div class="product_places">
            Tp Hồ Chí Minh
            </div>
            <div class="product_favorite">
                <span>
                    <i class="ti-check check_favorite"></i>
                    Yêu thích                                           
                </span>
            </div>
            <div class="product_saleoff">                                          
                <span class="saleoff_percent">10%</span>
                    <span class="saleoff_label">GIẢM</span>
            </div>
        </div>`
            product_list_header.appendChild(product_item_header)
            swiper_wrapper.appendChild(product_list_header)
        }
    }
}
product_into()

function product_sale() {
    for (let i = 1; i < 5; i++) {
        console.log(i)
        var swiper_wrapper2 = document.getElementById("swiper-wrapper2")
        if (swiper_wrapper2) {
            var product_list_header = document.createElement('div')
            product_list_header.classList.add(`swiper-slide`,`col`,`l-2-4`,`m-3`,`c-6`)
            var product_item_header = document.createElement('div')
            product_item_header.classList.add(`product_item`)
            product_item_header.innerHTML = `
            <div class="product_img"  style="background-image: url(/shopee/assests/img/hinh${i}.jpg)">
            </div>
        <div class="product_info">
            <div class="product_desc">
                Sản phẩm mascara của maybelline
                mang đến những trải nghiệm tuyệt vời nhất
            </div>
            <div class="product_price">
                <span class="old_price"><del>800.000đ</del></span>
                <span class="new_price">650.000đ</span>
            </div>
            <div class="product_rating_like" id="product_like_raitng">
                <div class="product_like" id="product_like_header">
                <i class="far fa-heart unlike" id="unlike_header"></i>
                <i class="fas fa-heart like" id="like_header"></i>
                </div>
                <div class="product_rating">
                    <i class="product_rating-gold fas fa-star"></i>
                    <i class="product_rating-gold fas fa-star"></i>
                    <i class="product_rating-gold fas fa-star"></i>
                    <i class="product_rating-gold fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <span class="number_sold">88 đã bán</span>
            </div>
            <div class="product_places">
            Tp Hồ Chí Minh
            </div>
            <div class="product_favorite">
                <span>
                    <i class="ti-check check_favorite"></i>
                    Yêu thích                                           
                </span>
            </div>
            <div class="product_saleoff">                                          
                <span class="saleoff_percent">10%</span>
                    <span class="saleoff_label">GIẢM</span>
            </div>
        </div>`
            product_list_header.appendChild(product_item_header)
            swiper_wrapper2.appendChild(product_list_header)
        }
    }
}
product_sale()


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    loop:true,
    speed:0 ,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 5,
    direction: 'horizontal',
    spaceBetween: 0,
    loop: true,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    direction: 'horizontal',
    spaceBetween: 0,
    loop: true,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

{/* <div class="shopee_nation">
<div class="copyright">
    <i class="far fa-copyright icon-copyright"></i>
    <span class="shopee_copyright"> 2021 Shopee. Tất cả các quyền được bảo lưu.</span>
</div>
<div class="footer_nation">
    <p class="nation_heading">
        Quốc gia & Khu vực :
    </p>
    <div class="nation_item border-right">
        <a href="https://shopee.sg" target="_blank">Singapore</a>
    </div>
    <div class="nation_item border-right">
        <a href="https://shopee.co.id" target="_blank">Indonesia</a>
    </div>
    <div class="nation_item border-right">
        <a href="https://shopee.tw" target="_blank">Đài Loan</a>
    </div>
    <div class="nation_item border-right">
        <a href="https://shopee.co.th" target="_blank">Thái Lan</a>
    </div>
    <div class="nation_item border-right">
        <a href="https://shopee.com.my" target="_blank">Malaysia</a>
    </div>
    <div class="nation_item border-right">
        <a href="https://shopee.vn" target="_blank">Việt Nam</a>
    </div>
    <div class="nation_item">
        <a href="https://shopee.ph" target="_blank">Philippines</a>
    </div>
</div>
</div> */}