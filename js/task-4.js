function getShippingCost(country) {
    let chinaPrice = 100;
    let chilePrice = 250;
    let australiaPrice = 170;
    let jamaicaPrice = 120;

    switch (country) {
        case "China":
            message = `Shipping to China will cost ${chinaPrice} credits`
            break;
        
        case "Chile":
            message = `Shipping to Chile will cost ${chilePrice} credits`
            break;
        
        case "Australia":
            message = `Shipping to Australia will cost ${australiaPrice} credits`
            break;
        
        case "Jamaica":
            message = `Shipping to Jamaica will cost ${jamaicaPrice} credits`
            break;
        
        default:
            message = "Sorry, there is no delivery to your country"
    }
    return message;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
