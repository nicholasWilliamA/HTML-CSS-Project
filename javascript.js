var imageLength = $(".images").length
var imageWidth = $(".images").width()
// var imageHeight = $(".images").height()
var totalLength = imageLength * imageWidth

// $(".image-slider").css({
//     width: imageWidth,
//     height: imageHeight
// })

// $(".slider").css({
//     width: totalWidth,
//     marginLeft: -imageWidth
// })

// $(".images:last-child").prependTo("#slider")

// $(".prev").click(() => {
//     $("#slider").animate({
//         left: imageWidth
//     }, 2000, () => {
//         $(".images:last-child").prependTo("#slider")
//         $("#slider").css("left", "")
//     })
// })

// $(".next").click(() => {
//     $("#slider").animate({
//         left: -imageWidth
//     }, 2000, () => {
//         $(".images:first-child").appendTo("#slider")
//         $("#slider").css("left", "")
//     })
// })

$('.slider').css({
    width: totalLength,
    marginLeft: -imageWidth
})

$('.images:last-child').prependTo('.slider')

$('.image-slider').css({
    width: imageWidth,
    overflow: 'hidden'
})

$('.prev').click(() => {
    $('.slider').animate({
        left: +imageWidth
    },1000,() => {
        $('.images:last-child').prependTo('.slider')
        $('.slider').css({
            left: 0
        })
    })
})

$('.next').click(() => {
    $('.slider').animate({
        left: -imageWidth
    },1000,() => {
        $('.images:first-child').appendTo('.slider')
        $('.slider').css({
            left: 0
        })
    })
})

function submitForm(form){
    console.log(form.name.value);
    console.log(form.phone.value);
    console.log(form.address.value);
    console.log(form.products.value);
    console.log(form.quantity.value);
    console.log(form.color.value);

    if(!validateName(form.name.value)){
        alert("Invalid, you must input your name");
        return false;
    }
    if(!validateName(form.phone.value)){
        alert("Invalid, you must input your phone");
        return false;
    }
    else if(form.phone.value.length < 12){
        alert("Error: Phone number must be at least 12 numbers");
        return false;
    }
    if(!validateName(form.address.value)){
        alert("Invalid, you must input your address");
        return false;
    }
    if(!validateName(form.products.value)){
        alert("Invalid, you must select a product");
        return false;
    }
    if(!validateName(form.quantity.value)){
        alert("Invalid, you must choose a quantity");
        return false;
    }
    if(!validateName(form.color.value)){
        alert("Invalid, you must choose a color");
        return false;
    }

    
    return true;
}

function validateName(data){
    if(data == ""){
        return false;
    }
    return true;
}