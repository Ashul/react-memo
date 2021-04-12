import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../assets/images/other/icon1.jpg';
import './style.css';

class Index extends Component {
  render() {
    return (
      <div id="home">
        

				<div className="features-area in-section section-padding-md ">
				<div className="container">

            <div className="row features-wrapper">
            <div className="col-lg-12 col-md-12 col-12 jt-heading">
							<h3 className="jt-main-head">About us</h3>
							<div className="jt-sep"></div>
							<h4 className="sub-heading" >We are here to provide you with the various fertilizers franchisee.</h4>
							</div>
						<div className="col-lg-8 col-md-6 col-12">
							<div className="in-feature in-feature-small">
								<span className="in-feature-icon">
									<i className="flaticon-lock"></i>
								</span>
									<p className="mT20"><b>Fertilizer Frenchie is one of the leading National Fertilizers Limited (NFL) certified company in the private sector producing fertilizers and chemicals
									</b>
									</p>
									
								<p>With the motto of easy growth and based on past research by our experts in agro field we are able to bring some best fertilizers as well as seeds for our farmers which will help them in yielding high productivity. Not only keeping in mind about the productivity we have also researched about minimising the damages in crops. Our products can be classified as: pesticides, herbicides, fungicides and plant growth regulators. We dream to motivate our farmers to construct their farms and crops.

									</p>
									<p>
									<Link to="/apply-now" className="in-button in-button-theme">APPLY NOW</Link>
									<Link to="/contact" className="in-button in-button-theme">CONTACT</Link>

									</p>
							</div>

							</div>
							<div className="col-lg-4 col-md-6 col-12">
							<img src={icon1}/>

              </div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default Index;
