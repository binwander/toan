const ulTag = document.querySelector("ul");
let totalPages = 20;

function element (totalPages, page){
    let litag = '';
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;
    // if page value > 1 then show then add new li which is prev button
    if (page == 1){   
        litag += `<button type="button" class="btn prev " onclick="element (totalPages, ${page-1})" disabled><span><i class="ti-angle-left"></i></span></button>`
    }
    else{
        litag += `<button type="button" class="btn prev " onclick="element (totalPages, ${page-1})"><span><i class="ti-angle-left"></i></span></button>`
    }
    if(page > 2 ){
        litag += `<li class="numb" onclick="element (totalPages, ${totalPages})">1</li>`;
        if(page > 5 ){
            litag += ` <li class="dots">...</li>`;
        }
    }

    if(page == totalPages){
        beforePages = beforePages - 2 ;
    }
    else if(page == totalPages - 1 ){
        beforePages = beforePages - 1
    }

    if(page == 1 ){
        afterPages = afterPages + 3;
    }
    else if (page == 2 ){
        afterPages = afterPages + 2;
    }
    if(page == 3){
        afterPages = afterPages + 1;
    }
    if( page == 4){
        beforePages = beforePages -1;
    }
    else if( page == 5){
        beforePages = beforePages -1;
    }
    for ( let pageLength = beforePages ; pageLength <= afterPages; pageLength++ ){
        if( pageLength > totalPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1;
        }
        if(page  == pageLength){
            activeLi = "active "
            console.log('dung roi')
            console.log("page", page)
        }
        else{
            activeLi = "";
        }
        litag +=`<li class="numb ${activeLi}" onclick="element (totalPages, ${pageLength})">${pageLength}</li>`;
        console.log("loop for" , litag)
        console.log("before",beforePages)
        console.log("page length",pageLength)
        console.log("after page " ,afterPages)
    }
    if(page < totalPages - 1 ){
        if(page < totalPages - 2 ){
            litag += ` <li class="dots">...</li>`;
        }
        litag += `<li class="numb" onclick="element (totalPages, ${totalPages})">${totalPages}</li>`;
    }

    if(page == totalPages){
        litag += `<button type="button" class="btn next" onclick="element (totalPages, ${page + 1})" disabled><span><i class="ti-angle-right"></i></span></button>`
    }
    // if page value < total page then show then add new li which is next button
    if(page < totalPages){
        litag += `<button class="btn next" onclick="element (totalPages, ${page + 1})"><span><i class="ti-angle-right"></i></span></button>`
    }
    ulTag.innerHTML = litag
}
element(totalPages, 1);
