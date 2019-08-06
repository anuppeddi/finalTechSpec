
import React, { Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './MicroStore.css';
import Tabs from '../Tabs/Tabs';

class MicroStore extends Component{

    render(){
        const {searchProductData} = this.props;
        return(
            <div className="surface">
        <div className="surface_nav_bar">
          {/* <h5>Surface Laptop 2</h5> */}
          <Tabs>
          <div label="Tech spec" className="Techspec_tab">
          <div className="row  techspec_container">
              {searchProductData.map((techSpec, index) => {
                return (
                  <div key={index} className="col-md-12  p-3">
                    <h1>{techSpec.TechSpec}</h1>
                    <p className="m-0 mb-4 ml-2 border-bottom Techpara">
                      <span className="tech_spec">  Dimensions </span>
                      <span className="tech_fields">{techSpec.Dimensions}</span>
                    </p>
                    <p className="m-0 mb-4 ml-2  border-bottom displayTechspec Techpara" >
                      <span className="tech_spec">Display </span>
                      <span className="tech_fields displayField ">{techSpec.Display}</span>
                    </p>
                    <p className="m-0 mb-4 ml-2 border-bottom Techpara">
                      <span className="tech_spec">Memory </span>
                      <span className="tech_fields">{techSpec.Memory}</span>
                    </p>
                    <p className="m-0 mb-4 ml-2 border-bottom Techpara">
                      <span className="tech_spec">Processor</span>
                      <span className="tech_fields">{techSpec.Processor}</span>
                    </p>
                    <p className="m-0 mb-4 ml-2 border-bottom Techpara">
                      <span className="tech_spec"> Batterylife</span>
                      <span className="tech_fields">{techSpec.Batterylife}</span>
                    </p>
                    <p className="m-0 mb-4 ml-2 border-bottom Techpara">
                      <span className="tech_spec"> Graphics</span>
                      <span className="tech_fields">{techSpec.Graphics}</span>
                    </p>
                    <p className="m-0 mb-4 ml-2 border-bottom Techpara">
                      <span className="tech_spec"> Storage5</span>
                      <span className="tech_fields">{techSpec.Storage5}</span>
                    </p>
                    <p className="m-0 mb-4 ml-2 border-bottom displayConnection Techpara">
                      <span className="tech_spec ">Connections</span>
                      <span className="tech_fields displayField">{techSpec.Connections}</span>
                    </p>
                    <p className="m-0 mb-4 ml-2 border-bottom displaySecurity Techpara">
                      <span className="tech_spec">Security</span>
                      <span className="tech_fields displayFieldSecurity">{techSpec.Security}</span>
                    </p>
                    <p className="m-0 mb-4 ml-2 border-bottom displaySoftware Techpara">
                      <span className="tech_spec "> Software</span>
                      <span className="tech_fields displayField ">{techSpec.Software}</span>
                    </p>
                  </div>
                );
              })}
            </div>
            </div>
            <div label="Reviews"  className="Review_tab">
            <div className="review_container">
              {searchProductData.map((review,index) => {
                return(
                <div key={index}>
                  {review.Reviews.map((item,index) => {
                    return(
                      <div key={index}>
                      <h1 className="review_Title">  {item.title}</h1>
                      <div className="row review_row">
                        <div className="col-md-2">
                          <div className="review">
                            <p>{item.rating}</p>
                          </div>
                        </div>
                        <div className="col-md-10">
                          <div className="review_rating">
                            <h5>{item.rateFive}</h5>
                            <h5><i className="fa fa-star"></i></h5>
                            <div className="container progress_review">
                              <div className="progress">
                                <div className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="70"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width:item.progressOne}}>
                                  <span className="sr-only">40% Complete</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="review_rating">
                            <h5>{item.rateFour}</h5>
                            <h5><i className="fa fa-star"></i></h5>
                            <div className="container progress_review">
                              <div className="progress">
                                <div className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="70"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width:item.progressTwo}}>
                                  {/* <span class="sr-only">70% Complete</span> */}
                                </div>
                              </div>
                            </div>

                          </div>
                          <div className="review_rating">
                            <h5>{item.rateThree}</h5>
                            <h5><i className="fa fa-star"></i></h5>
                            <div className="container progress_review">
                              <div className="progress">
                                <div className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="70"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width:item.progressThree}}>
                                  {/* <span class="sr-only">70% Complete</span> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="review_rating">
                            <h5>{item.rateTwo}</h5>
                            <h5><i className="fa fa-star"></i></h5>
                            <div className="container progress_review">
                              <div className="progress">
                                <div className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="70"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width:item.ProgressFour}}>
                                  {/* <span class="sr-only">70% Complete</span> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="review_rating">
                            <h5>{item.rateOne}</h5>
                            <h5><i className="fa fa-star"></i></h5>
                            <div className="container progress_review">
                              <div className="progress">
                                <div className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="70"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width:item.progressFive}}>
                                  {/* <span class="sr-only">70% Complete</span> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="comments_container">
                        { item && item.comments.map((item,index) => {
                          return(
                            <div key={index} className="reiew_comments">
                            <div className="row">
                              <div className="col-sm-3">
                                <h2 className="profile_icon">{item.profile_icon}</h2>
                                 
                                <h5 className="profile_name">{item.name}</h5>
                                </div>
                              <div className="col-sm-9">
                              <StarRatingComponent
                                    name="rate1"
                                    className="rating_icon"
                                    starCount={5}
                                    starColor={"black"}
                                    emptyStarColor={"gray"} 
                                    value={item.rate}
                                  />
                              <h5 className="comment">{item.comment}</h5>
                              <p className="comment_Date">{item.Date}</p>
                              <p className="descrption">{item.description}</p>
                              </div>
                              </div>
                              </div>
                          )
                        })}
                        </div>
                    </div>
                  )
                })
                    
                  }}
                  </div>
                  )
              })}
            </div> 
              </div>
              </Tabs>
          </div>
          </div>
        )
    }
}
export default MicroStore;
