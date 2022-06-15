let age=Number(prompt(`what is your age?`))
let distance=Number(prompt(`How many km do you want to travel?`))
const pricePerKm=0.21
const discountUnder18=0.2
const discountOver64=0.4
let price=distance*pricePerKm
let discountPriceUnder18=price*discountUnder18
let discountPriceOver64=price*discountOver64
let priceAfterDiscountUnder18=price-discountPriceUnder18
let priceAfterDiscountOver64=price-discountPriceOver64
if(Number.isNaN(age) || Number.isNaN(distance)){
    console.log(`Please enter a valid age and distance`)
}
else if(age<=18) {
    console.log(`
    Your age: ${age}
    Your distance: ${distance}km
    Price: £${price}
    Discount: £${discountPriceUnder18.toFixed(2)}
    You have to pay £${priceAfterDiscountUnder18.toFixed(2)}`)
}
else if(age>18 && age<64) {
    console.log(`
    Your age: ${age}
    Your distance: ${distance}km
    You have to pay ${price}`)
}
else if(age>=65) {
    console.log(`
    Your age: ${age}
    Your distance: ${distance}km
    Price: £${price}
    Discount: £${discountPriceOver64.toFixed(2)}
    You have to pay £${priceAfterDiscountOver64.toFixed(2)}`)
}