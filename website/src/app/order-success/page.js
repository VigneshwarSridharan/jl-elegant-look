import Link from "next/link";

const OrderSuccess = async () => {
  return (
    <>
      <div className="holder breadcrumbs-wrap mt-0">
        <div className="container">
          <ul className="breadcrumbs">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span>Orders</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="holder">
        <div className="container">
          <h1 className="text-center">Order Placed Successfully</h1>
          <div className="text-center">
            <h3>Our team will contact you soon.</h3>
            <p>Thanks for shopping with us.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
