import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './Product.css';


class Product extends Component {

    render() {
        const { searchProductData } = this.props
        return (
            <div className="product_container">
                {
                    searchProductData.map((item, index) => {
                        return (
                            <div key={index} className="row product_Store">
                                <div className="col col-3 d-flex justify-content-center">
                                    <img src={item.imgurl} alt="laptop_img"
                                        style={{ height: '200px', width: '200px' }} />
                                </div>
                                <div className="col col-6">
                                    <h4 className="text-monospace  font-weight-bold product_title">{item.title}</h4>
                                    <span className="product_rate_review">
                                    <StarRatingComponent
                                        name="rate1"
                                        className="rating_icon"
                                        starCount={5}
                                        starColor={"black"}
                                        emptyStarColor={"gray"}
                                        value={item.stars}
                                    />
                                    <p className="product_numofreviews">{item.num_of_reviews}</p>
                                    </span>
                                    <p className="product_description">{item.description}</p>
                                </div>
                                <div className="col col-3 buy_box">
                                    <h5 className="product_price">${item.price}</h5>
                                    <div className="btn btn-lg btn-primary"> Buy Now
                                     </div>
                                </div>

                            </div>

                        )
                    })
                }

            </div>
        )
    }
}
export default Product;