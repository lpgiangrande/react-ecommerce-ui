import styles from "../assets/css/_shoppingcart.scss?inline"

export default function ShoppingCart({ totalQuantity }) {

  return (
    <>
        <div className='text-center pt-2'>
          <span className='me-2'>CURRENT PRICE X {totalQuantity}</span>
          <span className='me-2'>TOTAL PRICE</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
            </svg>
          </span>
          <div className='pt-3 mb-3'>
            <button className={styles.checkOutButton}>Checkout</button>
          </div>
        </div>
    </>
  );
}
