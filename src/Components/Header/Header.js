import React, { Component } from 'react';
import  Data  from '../../Json/techspec.json';
import Product from '../Product/Product';
import MicroStore from '../MicroStore/MicroStore';
import './Header.css'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            SerachByName: "",
            ProductData: [],
            searchProductData: []
        }
    }
    componentWillMount = () => {
        this.setState({ ProductData: Data })
    }
    changeHanlder = (e) => {
        this.setState({ SerachByName: e.target.value }, () => {
        console.log("searchname", this.state.SerachByName)

        })
    }
    isShowHandler = () => {
        const { isShow } = this.setState;
        this.setState({ isShow: !isShow })
    }
    onSumitHanlder = (e) => {
        e.preventDefault()
        let { ProductData, SerachByName } = this.state;
        let searchProductData = ProductData.products.filter((item, index) => {
            if (item.name.toLowerCase().includes(SerachByName.toLowerCase())) {
                return item
            }
        })
        this.setState({ searchProductData }, () => {this.isShowHandler()})
    }
    render() {
        console.log("searchProducData", this.state.searchProductData)
        return (
            <div className="Header_container">
                <div className="Header">
                    <ul className="Header_list_items">
                    <li className="Header_list_item">
                        </li>

                        <li className="Header_list_item">
                            <form onSubmit={this.onSumitHanlder}>
                                <input type="text" className="Header_inputWrapper" onChange={this.changeHanlder} />
                            </form>
                        </li>
                        {/* <li className="Header_list_item">
                            <span><i class="fa fa-search"></i></span>
                        </li> */}

                    </ul>
                </div>
                <div className={this.state.isShow && this.state.searchProductData.length ? "product_Details" : "product_Details_hide" }>
                    <Product
                        searchProductData={this.state.searchProductData}
                    />
                </div>
                <div className= {this.state.isShow && this.state.searchProductData.length  ? "Combined_Details" : "Combined_Details_hide"}>
                    <MicroStore
                        searchProductData={this.state.searchProductData}
                    />
                </div>
            </div>
        )
    }
}
export default Header;