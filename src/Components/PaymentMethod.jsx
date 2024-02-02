import { Title } from "@tremor/react";
import Mastercard from "../assets/Paymethods/mastercard.svg"

export function PaymentMethod() {

  return(
    <>
    <Title className="font-inter font-medium"> Payment Method</Title>
    <img src={Mastercard} alt="" className="w-full h-32" />
    <div className="flex lg:gap-3 justify-center gap-5 mb-10 lg:mb-5">
      <button className="btn  btn-active btn-secondary">
          <p className="text-xs">Add Method</p>
      </button>
              
      </div>
    
    
        </>
    
        
  );
}