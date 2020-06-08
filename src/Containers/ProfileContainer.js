import React, { Component } from "react";
import { Container, Row, Col, Tabs, Tab, Table, Form } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { FaCommentAlt, FaCheck } from "react-icons/fa";

import bookmark from "../Images/bookmark.png";
import location from "../Images/location.png";
import profileImage from "../Images/download.jpeg";
import "../style.css";

class ProfileContainer extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1,
    };
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }
  render() {
    const { rating } = this.state;
    return (
      <Container className="main-container">
        <Row sm={12} md={12} lg={12} className="row_wrapper">
          <Col md={2} md={12} lg={3} className="col-wrapper">
            <div className="img-container">
              <div style={{ textAlign: "center" }}>
                <img alt="" src={profileImage} />
              </div>
              <div className="partition_container">
                <div className="partition-color">Work</div>
                <div className="partition_border"></div>
              </div>

              <div className="address_container">
                <div>
                  <div className="address_main_container">
                    <div className="busines-type">
                      Bussiness type:{" "}
                      <span style={{ fontWeight: 400, color: "#908C8C" }}>
                        Whole Sale
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="address_main_container">
                      <div className="address_main_heading">
                        Tariq Nursery Kasur
                      </div>
                      <div>
                        <div className="address_status">Primary</div>
                      </div>
                    </div>
                  </div>

                  <div className="full_address">
                    Tariq nursery near noor mehal cenima,kasur
                  </div>
                </div>

                <div className="info_container">
                  <div>
                    <div className="address_main_container">
                      <div className="address_main_heading">
                        Tariq Nursery Kasur
                      </div>
                      <div>
                        <div className="address_status">Secondary</div>
                      </div>
                    </div>
                  </div>

                  <div className="full_address">
                    Tariq nursery near noor mehal cenima,kasur
                  </div>
                </div>
              </div>
            </div>

            <div className="partition_container">
              <div className="partition-color">DEALS IN</div>
              <div className="partition_border"></div>
            </div>

            <div className="list_container">
              <div className="list_option">Wheat</div>
              <div className="list_option">Rice</div>
              <div className="list_option">Sugarcane</div>
              <div className="list_option">Maize</div>
              <div className="list_option">Oilseeds</div>
            </div>
          </Col>
          <Col
            sm={12}
            md={10}
            lg={9}
            style={{ minHeight: "100vh", padding: "20px" }}
          >
            <div className="user-detail-container">
              <div className="personal_info_wrrapeer">
                <div className="user-detail-name">
                  <div className="user-detail-role">
                    <div>
                      <h1>Jermey Rose</h1>
                    </div>
                    <div>
                      <span>Farmer</span>
                    </div>
                  </div>
                  <div className="user-detail-city">
                    <div>
                      <img
                        src={location}
                        alt="location"
                        className="user-detail-city-image"
                      />
                    </div>
                    <di>
                      <h3 className="user-detail-city-name">New York City</h3>
                    </di>
                  </div>
                  <div className="user-detail-bookmark">
                    <div>
                      <img
                        src={bookmark}
                        alt="bookmark"
                        className="user-detail-bookmark-image"
                      />
                    </div>
                    <div>
                      <h3 className="user-detail-city-name">Bookmark</h3>
                    </div>
                  </div>
                </div>

                {/* Ranking */}
                <div className="user-detail-ranking-container">
                  <div>
                    <div>
                      <h1 className="user-detail-ranking-name">Ranking</h1>
                    </div>
                    <div className="user-detail-ranking">
                      <h4>8.6</h4>
                      <div style={{ marginLeft: "20px" }}>
                        <StarRatingComponent
                          name="rate1"
                          starCount={5}
                          value={rating}
                          onStarClick={this.onStarClick.bind(this)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}

              <div className="user-detail-message-container">
                <div className="user-detail-message-box">
                  <FaCommentAlt className="user-detail-message-image" />
                  Send Messages
                </div>
                <div className="user-detail-message-box user_contact_btn user-detail-message-side">
                  <FaCheck className="user-detail-message-image" />
                  Contacts
                </div>
                <div className="user-detail-message-box user-detail-message-side">
                  Report User
                </div>
              </div>

              {/* Tabs */}
              <div className="user-detail-tab-container">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                  <Tab eventKey="profile" title="About">
                    <div className="user-detail-tab-about">
                      <div className="user-detail-contact">
                        <h4 className="user-detail-contact-heading">
                          Contact Information
                        </h4>
                      </div>

                      <div className="user-detail-tab-about-info">
                        <div className="user-detail-tab-data">
                          <div className="user-detail-tab-data-heading">
                            Phone:
                          </div>
                          <div className="user-detail-tab-data-record user-detail-tab-data-record-blue">
                            123456789789
                          </div>
                        </div>

                        <div className="user-detail-tab-data">
                          <div className="user-detail-tab-data-heading">
                            Address:
                          </div>
                          <div className="user-detail-tab-data-record">
                            525 E 68th street New York
                          </div>
                        </div>

                        <div className="user-detail-tab-data">
                          <div className="user-detail-tab-data-heading">
                            Email:
                          </div>
                          <div className="user-detail-tab-data-record user-detail-tab-data-record-blue">
                            hello@jermeyrose.com
                          </div>
                        </div>

                        <div className="user-detail-tab-data">
                          <div className="user-detail-tab-data-heading">
                            Site:
                          </div>
                          <div className="user-detail-tab-data-record user-detail-tab-data-record-blue">
                            www.jermeyrose.com
                          </div>
                        </div>
                      </div>
                      <div className="user-detail-basic-info">
                        <div className="user-detail-contact">
                          <h4 className="user-detail-contact-heading">
                            Basic Information
                          </h4>
                        </div>

                        <div
                          className="user-detail-tab-data"
                          style={{ marginTop: "30px" }}
                        >
                          <div className="user-detail-tab-data-heading">
                            Birthday:
                          </div>
                          <div className="user-detail-tab-data-record">
                            June 5, 1992
                          </div>
                        </div>

                        <div className="user-detail-tab-data">
                          <div className="user-detail-tab-data-heading">
                            Gender:
                          </div>
                          <div className="user-detail-tab-data-record">
                            Male
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>

                    <Tab eventKey="home" title="Stock Detail">
                      <div>

                      <Table responsive >
                        <thead>
                          <tr>
                            <th className="crop_table_heading">Sr #</th>
                            <th className="crop_table_heading">Crop name</th>
                            <th className="crop_table_heading">Min qty stock</th>
                            <th className="crop_table_heading">Min price</th>
                            <th className="crop_table_heading">Bidding status</th>
                            <th className="crop_table_heading">Date to open bidding</th>
                            <th className="crop_table_heading">Change bidding status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="crop_table_data">1</td>
                            <td className="crop_table_data">Wheat</td>
                            <td className="crop_table_data">3680 KG</td>
                            <td className="crop_table_data">128,800 RS</td>
                            <td><div className="crop_active_status">Active</div></td>
                            <td className="crop_table_data">6/17/2020</td>
                            <td>
                              <label class="crop_table_switch">
                                <input type="checkbox"/>
                                <span class="crop_table_slider round"></span>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="crop_table_data">2</td>
                            <td className="crop_table_data">Rice</td>
                            <td className="crop_table_data">4000 KG</td>
                            <td className="crop_table_data">128,800 RS</td>
                            <td><div className="crop_pending_status">Pending</div></td>
                            <td className="crop_table_data">6/16/2020</td>
                            <td>
                              <label class="crop_table_switch">
                                <input type="checkbox"/>
                                <span class="crop_table_slider round"></span>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="crop_table_data">3</td>
                            <td className="crop_table_data">Sugercane</td>
                            <td className="crop_table_data">12000 KG</td>
                            <td className="crop_table_data">200,800 RS</td>
                            <td><div className="crop_active_status">Active</div></td>
                            <td className="crop_table_data">6/15/2020</td>
                            <td>
                              <label class="crop_table_switch">
                                <input type="checkbox"/>
                                <span class="crop_table_slider round"></span>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="crop_table_data">3</td>
                            <td className="crop_table_data">Maize</td>
                            <td className="crop_table_data">12000 KG</td>
                            <td className="crop_table_data">20,800 RS</td>
                            <td><div className="crop_pending_status">Pending</div></td>
                            <td className="crop_table_data">6/14/2020</td>
                            <td>
                              <label class="crop_table_switch">
                                <input type="checkbox"/>
                                <span class="crop_table_slider round"></span>
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="crop_table_data">3</td>
                            <td className="crop_table_data">Oilseeds</td>
                            <td className="crop_table_data">100 KG</td>
                            <td className="crop_table_data">28,800 RS</td>
                            <td><div className="crop_active_status">Active</div></td>
                            <td className="crop_table_data">6/13/2020</td>
                            <td>
                              <label class="crop_table_switch">
                                <input type="checkbox"/>
                                <span class="crop_table_slider round"></span>
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      </div>

                    </Tab>
                </Tabs>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfileContainer;
