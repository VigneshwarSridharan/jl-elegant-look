import Link from "next/link";
import CartTable from "./components/CartTable";

const Cart = () => {
  return (
    <>
      <div className="holder breadcrumbs-wrap mt-0">
        <div className="container">
          <ul className="breadcrumbs">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span>Cart</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="holder">
        <div className="container">
          <h1 className="text-center">Shopping Cart</h1>
          <CartTable />
        </div>
      </div>
    </>
  );
};

export default Cart;
