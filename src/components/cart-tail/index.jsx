import { useDispatch } from "react-redux"
import {  removeFromCart } from '../../store/slice/cart-slice'

export default function CartTail({cartItem}){
    const dispatch = useDispatch()

    function handleRemoveToCart(){
      dispatch(removeFromCart(cartItem.id))
    }
    return <>
    <div className="flex justify-center items-center ">
     <div className="border-solid border-2 flex  border-red-950  items-center p-5 justify-between  mt-2 mb-2 rounded-xl transition ease-in-out delay-150 bg-green-500 hover:bg-red-500">
        <div className="p-3 md:flex">
            <img src={cartItem?.image} className="h-28 rounded-lg justify-center items-center flex" alt={cartItem.title} />
            <div className="ml-10 space-y-5 lg:w-[80vh] ">
                <h1 className=" text-xl  font-bold text-white hidden md:flex md:visible">{cartItem.title}</h1>
                <p className=" font-extrabold text-white sm:justify-end">${cartItem.price}</p>
            </div>
        </div>
        <div>
        <button onClick={ handleRemoveToCart } className='bg-red-950 text-white border-2 rounded-lg font-semibold p-4  hover:bg-gradient-to-r from-red-950 to-red-700'>
              Remove From Cart
              </button>
        </div>
     </div>
     </div>
    </>
}