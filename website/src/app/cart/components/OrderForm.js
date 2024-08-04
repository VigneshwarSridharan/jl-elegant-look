"use client";
import { ENDPOINTS } from "@/constants";
import APIService from "@/lib/APIService";
import { useCartStore } from "@/providers/cart-store-provider";
import { useRouter } from "next/navigation";
import { useState } from "react";

const OrderForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { items, clearCart } = useCartStore();
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerMobileNumber: "",
  });

  const handleOnChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    APIService.post(
      `${ENDPOINTS.ORDERS}/api`,
      {
        data: {
          ...formData,
          cart: items.map((item) => ({
            product: {
              connect: [
                {
                  id: item.id,
                  position: {
                    end: true,
                  },
                },
              ],
            },
            quantity: item.qty,
          })),
        },
      },
      {
        baseURL: "/",
      }
    ).then((res) => {
      console.log(res.data);
      setIsLoading(false);
      setFormData({
        customerName: "",
        customerEmail: "",
        customerMobileNumber: "",
      });
      clearCart();
      router.push("/order-success");
    });
  };

  if (items.length == 0) {
    return null;
  }
  return (
    <form
      data-toggle="validator"
      className="contact-form"
      id="contactForm"
      onSubmit={handleSubmit}
    >
      <div className="form-confirm">
        <div className="success-confirm">
          Thanks! Your message has been sent. We will get back to you soon!
        </div>
        <div className="error-confirm">
          Oops! There was an error submitting form. Refresh and send again.
        </div>
      </div>
      <div className="form-group">
        <div className="row vert-margin-middle">
          <div className="col-lg">
            <input
              type="text"
              name="name"
              className="form-control form-control--sm"
              placeholder="Name"
              required
              value={formData.customerName}
              onChange={handleOnChange("customerName")}
            />
          </div>
          <div className="col-lg">
            <input
              type="email"
              name="email"
              className="form-control form-control--sm"
              placeholder="Email"
              required
              value={formData.customerEmail}
              onChange={handleOnChange("customerEmail")}
            />
          </div>
          <div className="col-lg">
            <input
              type="text"
              name="phone"
              className="form-control form-control--sm"
              placeholder="Phone"
              required
              minLength={10}
              maxLength={10}
              value={formData.customerMobileNumber}
              onChange={handleOnChange("customerMobileNumber")}
            />
          </div>
        </div>
      </div>
      <button disabled={isLoading} className="btn" type="submit">
        {isLoading ? "Processing..." : "Order Now"}
      </button>
    </form>
  );
};

export default OrderForm;
