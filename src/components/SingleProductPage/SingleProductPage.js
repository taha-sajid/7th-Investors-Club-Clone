import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./SingleProductPage.css";
const SingleProductPage = () => {
  return (
    <>
      <Navbar />
      <section className="single-product-page-section">
        <div className="single-product-page-container">
          <div className="single-product-page">
            <div className="single-product-container">
              <div className="product-heading">
                <h1 className="product-title">Leather Jackets</h1>
                <div className="product-subtitle">
                  <p className="product-url">
                    URL: https://theleatherjacketes.com/
                  </p>
                  <div className="product-category">e-commerce</div>
                </div>
              </div>
              <div className="product-body">
                <div className="product-image">
                  <img
                    src="https://media.istockphoto.com/id/637540630/photo/handsome-tourist.jpg?s=1024x1024&w=is&k=20&c=ndeErXJtDgUSmcLQEnc0rjpdvNKJZnpxpFuH6V3mRMY="
                    alt=""
                  />
                </div>
                <div className="product-details">
                  <div className="product-details-header">
                    <div className="product-price">
                      <h1>$32,232</h1>
                      <p className="caption">Asking price</p>
                    </div>
                    <div className="product-revenue">
                      <h1>$3,571</h1>
                      <p className="caption">Avg. monthly net revenue</p>
                    </div>
                  </div>
                  <div className="product-details-footer">
                    <div className="product-details-wrapper">
                      <div className="general-info">
                        <p>Monetization methods</p>
                        <p>e-Commerce- 53%</p>
                        <p>Display advertising- 43%</p>
                      </div>
                      <div className="general-info">
                        <p>Domain registration</p>
                        <p>2020</p>
                      </div>
                      <div className="general-info">
                        <p>Multiple</p>
                        <p>46x</p>
                      </div>
                    </div>
                    <div className="product-details-wrapper">
                      <div className="general-info">
                        <p>Business Type</p>
                        <p>Content site</p>
                      </div>
                      <div className="general-info">
                        <p>Listing published</p>
                        <p>2023-09-18</p>
                      </div>
                      <div className="general-info">
                        <p>Listing updated</p>
                        <p>2024-02-03</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;
