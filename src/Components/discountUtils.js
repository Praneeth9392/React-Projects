

  // Calculate totalAmount
export function totalAmount(cartItems)
{
    return cartItems.reduce((total, item) => total + item.price * item.quantity,0);
}


// Discount button logic
export function discountAmount(totalAmount,discount){
   return (totalAmount * discount)/100;
}


// COUPON CODE DISCOUNT
export function getCouponDiscount(couponCode, totalAmount){
  let couponDiscountPercent = 0;
  switch(couponCode.toUpperCase()){
     case "RATAN10" :
           couponDiscountPercent = 10;
           break;
    case "RATAN20" :
           couponDiscountPercent= 20;
           break;  
    case "RATAN30" :
           couponDiscountPercent = 30;
           break;
    case "ZOMO20" :
           couponDiscountPercent = 20;
           break;       
    default :
          couponDiscountPercent = 0;
  }

  const couponDiscountAmount = (totalAmount * couponDiscountPercent)/100;

  return{
      isValid : couponDiscountPercent > 0, //checks condition return true or false
      couponDiscountPercent,
      couponDiscountAmount
  }
}
