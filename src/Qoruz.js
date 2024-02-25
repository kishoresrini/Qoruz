import React, { Component } from "react";
import './Qoruz.css'
import { ImagePaths } from "./ImagePaths";

const Profile_Data = [
    {
        img: "verified",
        Title: "MSL (Global)",
        sections: ["Brand development", "Community management"],
        Para: "The Mavericks: Transforming brands through strategic reputation management and consumer engagement",
        Emp_count: "1,001-5000",
        Place: "Paris",
        year: 2009,
        Agency: "PR Agency"
    },
    {
        img: "verified",
        Title: "MSL (Global)",
        sections: ["Brand development", "Community management"],
        Para: "The Mavericks: Transforming brands through strategic reputation management and consumer engagement",
        Emp_count: "1,001-5000",
        Place: "Paris",
        year: 2009,
        Agency: "PR Agency"
    },
    {
        img: "verified",
        Title: "MSL (Global)",
        sections: ["Brand development", "Community management"],
        Para: "The Mavericks: Transforming brands through strategic reputation management and consumer engagement",
        Emp_count: "1,001-5000",
        Place: "Paris",
        year: 2009,
        Agency: "PR Agency"
    },
    {
        img: "verified",
        Title: "MSL (Global)",
        sections: ["Brand development", "Community management"],
        Para: "The Mavericks: Transforming brands through strategic reputation management and consumer engagement",
        Emp_count: "1,001-5000",
        Place: "Paris",
        year: 2009,
        Agency: "PR Agency"
    },
    {
        img: "verified",
        Title: "MSL (Global)",
        sections: ["Brand development", "Community management"],
        Para: "The Mavericks: Transforming brands through strategic reputation management and consumer engagement",
        Emp_count: "1,001-5000",
        Place: "Paris",
        year: 2009,
        Agency: "PR Agency"
    },
    {
        img: "verified",
        Title: "MSL (Global)",
        sections: ["Brand development", "Community management"],
        Para: "The Mavericks: Transforming brands through strategic reputation management and consumer engagement",
        Emp_count: "1,001-5000",
        Place: "Paris",
        year: 2009,
        Agency: "PR Agency"
    },
    {
        img: "verified",
        Title: "MSL (Global)",
        sections: ["Brand development", "Community management"],
        Para: "The Mavericks: Transforming brands through strategic reputation management and consumer engagement",
        Emp_count: "1,001-5000",
        Place: "Paris",
        year: 2009,
        Agency: "PR Agency"
    },
    {
        img: "verified",
        Title: "MSL (Global)",
        sections: ["Brand development", "Community management"],
        Para: "The Mavericks: Transforming brands through strategic reputation management and consumer engagement",
        Emp_count: "1,001-5000",
        Place: "Paris",
        year: 2009,
        Agency: "PR Agency"
    },
    {
        img: "verified",
        Title: "MSL (Global)",
        sections: ["Brand development", "Community management"],
        Para: "The Mavericks: Transforming brands through strategic reputation management and consumer engagement",
        Emp_count: "1,001-5000",
        Place: "Paris",
        year: 2009,
        Agency: "PR Agency"
    }
]

class Qoruz extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: "gray"
        }
    }

    renderProfileDataMobile = () => {
        return (
            <div>
                {Profile_Data.map((item, index) => (
                    <div key={index} className="Map_containet_mob">
                        <div className="mob_section_1">
                            <img className="header_icon_style" src={ImagePaths.NotVerified.default} alt="Icon" />
                            <div>
                                <div className="profile_Title">{item?.Title}</div>
                                <div className="employee_title">{`${item?.Emp_count} employees`}</div>
                            </div>
                        </div>
                        <div className="profile_section">
                            {item?.sections.map((item) => (
                                <div className="section_data">{item}</div>
                            ))}
                        </div>
                        <div className="profile_para">{item?.Para.slice(15)}</div>
                        <div className="profile_Other_details">
                            <div className="profile_Icons"><img className="header_icon_style" src={ImagePaths.Place.default} alt="Icon" /> <div className="profile_data">{item?.Place}</div></div>
                            <div className="profile_Icons"><img className="header_icon_style" src={ImagePaths.Year.default} alt="Icon" /> <div className="profile_data">{item?.year}</div></div>
                            <div className="profile_Icons"><img className="header_icon_style" src={ImagePaths.Agency.default} alt="Icon" /> <div className="profile_data">{item?.Agency}</div></div>
                        </div>
                        <div className="Map_Section_button"> Post Brief
                            <img className="icon-wrapper icon" src={ImagePaths.WhiteIcon.default} alt="Icon" />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    renderProfileData = () => {
        return (
            <div>
                {Profile_Data.map((item, index) => (
                    <div className="Map_containet" style={{ borderBottom: index === Profile_Data.length - 1 ? "1px solid white" : "1px solid #b7b4b2", }} key={index}>
                        <div className="Map_Section1">
                            <div>{item?.img === "verified" ? <img className="header_icon_style" src={ImagePaths.Verified.default} alt="Icon" /> : <img className="header_icon_style" src={ImagePaths.NotVerified.default} alt="Icon" />}</div>
                            <div className="Map_Profile_Data">
                                <div className="profile_Title">{item?.Title}</div>
                                <div className="profile_section">
                                    {item?.sections.map((item) => (
                                        <div className="section_data">{item}</div>
                                    ))}
                                </div>
                                <div className="profile_para">{item?.Para}</div>
                                <div className="profile_Other_details">
                                    <div className="profile_Icons"><img className="header_icon_style" src={ImagePaths.Employer.default} alt="Icon" /> <div className="profile_data">{`${item?.Emp_count} employees`}</div></div>
                                    <div className="profile_Icons"><img className="header_icon_style" src={ImagePaths.Place.default} alt="Icon" /> <div className="profile_data">{item?.Place}</div></div>
                                    <div className="profile_Icons"><img className="header_icon_style" src={ImagePaths.Year.default} alt="Icon" /> <div className="profile_data">{item?.year}</div></div>
                                    <div className="profile_Icons"><img className="header_icon_style" src={ImagePaths.Agency.default} alt="Icon" /> <div className="profile_data">{item?.Agency}</div></div>
                                </div>
                            </div>
                        </div>
                        <div className="Map_Section2"> Post Brief
                            <img className="icon-wrapper white-icon" src={ImagePaths.WhiteIcon.default} alt="Icon" />
                            <img className="icon-wrapper black-icon" src={ImagePaths.Icon.default} alt="Icon" />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="navi_container">
                    <div className="navi_header">
                        <img className="Header_logo" src={ImagePaths.Logo.default} alt="Logo" />
                        <div className="navi_section_1">
                            <div className="drop_downs">Solutions <span><img src={ImagePaths.DownIcon.default} alt="Down Arrow" /></span></div>
                            <div className="drop_downs">Resources <span><img src={ImagePaths.DownIcon.default} alt="Down Arrow" /></span></div>
                            <div className="drop_downs">Features <span><img src={ImagePaths.DownIcon.default} alt="Down Arrow" /></span></div>
                            <div className="drop_downs" style={{ color: this.state.color }} onClick={() => { this.setState({ color: this.state.color === "gray" ? "black" : "gray" }) }}>Pricing</div>
                        </div>
                        <div className="navi_section_2">
                            <div className="login-container">
                                Login <span className="icon-wrapper"> <img src={ImagePaths.Icon.default} alt="Icon" /></span>
                            </div>
                            <div className="navi_button">
                                Get started free <span className="icon-wrapper"> <img className="header_icon_style" src={ImagePaths.WhiteIcon.default} alt="Icon" /></span>
                            </div>
                        </div>
                        <img className="Menu_Icon" src={ImagePaths.menu.default} alt="Menu" />
                    </div>
                </div>
                <div className="page_header">
                    <div className="header_wraper">
                        <div className="header_1">REACH AND CONNECT WITH TOP AGENCIES</div>
                        <div className="header_2">Top 100 Public Relations Agencies in India (2024)</div>
                        <div className="para">
                            With a user base of around 100M, India stands next to the US in the Instagram users count. With the advent of the internet in India, there was a huge spike in the total social media users and also the Influencers. Among different Social media platforms, Instagram always remains a <a href="no_link" className="anchore">read more...</a>
                        </div>
                    </div>
                </div>
                <div className="Profile_header">
                    <div className="Profile_wrapper">
                        <div><img src={ImagePaths.Profile.default} alt="Profile" /></div>
                        <div className="personal_details">
                            <div>Curated by</div>
                            <div className="name_style">Jithin</div>
                            <div>Qoruz</div>
                        </div>
                    </div>
                    <div>Updated on Feb 25th 2024</div>
                </div>
                <div className="profileData_web">
                    {this.renderProfileData()}
                </div>
                <div className="profileData_mobile">
                    {this.renderProfileDataMobile()}
                </div>
                <div className="Profile_wrapper_mob">
                    <div><img src={ImagePaths.Profile.default} alt="Profile" /></div>
                    <div className="personal_details">
                        <div>Curated by</div>
                        <div className="name_style">Jithin</div>
                        <div>Qoruz</div>
                    </div>
                </div>
                <div className="mid_area_mob">
                    <div className="mid_area_text">Agen...</div>
                    <img className="mid_area_image" src={ImagePaths.Greater.default} alt="Profile" />
                    <div className="mid_area_text">Public...</div>
                    <img className="mid_area_image" src={ImagePaths.Greater.default} alt="Profile" />
                    <div className="mid_area_text">Top 100 Public...</div>
                </div>
                <div className="mid_area">
                    <div className="mid_area_text">Agency PartnerShip</div>
                    <img src={ImagePaths.Greater.default} alt="Profile" />
                    <div className="mid_area_text">Public Relation Agencies</div>
                    <img src={ImagePaths.Greater.default} alt="Profile" />
                    <div className="mid_area_text">Top 100 Public Relations Agencies in India (2024)</div>
                </div>
                <div className="para_mob">
                    With a user base of around 100M, India stands next to the US in the Instagram users count. With the advent of the internet in India, there was a huge spike in the total social media users and also the Influencers. Among different Social media platforms, Instagram always remains a <a href="no_link" className="anchore">read more...</a>
                </div>
                <div className="page_header_2">
                    <div className="header_wraper">
                        <div className="header_1">LEVERAGE INFLUENCER TOOLS</div>
                        <div className="header_2_sub">Explore More Top Public Relations Agencies</div>
                        <div className="para_2">
                            Discover more top PR agencies for effective communication that elevates your brand. Explore innovation and influence in every strategy.
                        </div>
                    </div>
                </div>
                <div className="image_container">
                    <div className="image_Wrapper image1">
                        <div><img src={ImagePaths.India.default} alt="India" /></div>
                        <div className="image_text">Top 100 Public Relations Agencies in India (2024)</div>
                        <div className="image_button">Explore <span><img className="icon-wrapper image" src={ImagePaths.Icon.default} alt="Icon" /></span></div>
                    </div>
                    <div className="image_Wrapper">
                        <div><img src={ImagePaths.Mumbai.default} alt="Mumbai" /></div>
                        <div className="image_text">Top 25 Public Relations Agencies in Mumbai (2024)</div>
                        <div className="image_button">Explore <span><img className="icon-wrapper image" src={ImagePaths.Icon.default} alt="Icon" /></span></div>
                    </div>
                    <div className="image_Wrapper">
                        <div><img src={ImagePaths.Bangalore.default} alt="Bangalore" /></div>
                        <div className="image_text">Top 25 Public Relations Agencies in Bangalore (2024)</div>
                        <div className="image_button">Explore <span><img className="icon-wrapper image" src={ImagePaths.Icon.default} alt="Icon" /></span></div>
                    </div>
                </div>
                <div className="agency_container">
                    <div className="agency_section1">
                        <div className="section1_title">Are you an agency ?</div>
                        <div className="section1_Para">Join the Qoruz agency partnership programme!</div>
                        <div className="section1_button_container">
                            <div className="section1_button1">Register Now <img className="" src={ImagePaths.WhiteIcon.default} alt="Icon" /></div>
                            <div className="section1_button2">why Register?</div>
                        </div>
                    </div>
                    <div className="agency_section2">
                        <img className="agency_image" src={ImagePaths.AgencyPort.default} alt="Profile" />
                        <img className="agency_image_mob" src={ImagePaths.AgencyPortMob.default} alt="Profile" />
                    </div>
                </div>
                <div className="bottom_container">
                    <div className="bottom_wrapper_1">
                        <div className="wrapper_section_1">
                            <div>
                                <img src={ImagePaths.Logo2.default} alt="logo" />
                            </div>
                            <div className="bottom_para">
                                Qoruz is an influencer marketing and intelligence platform, that enables superior influencer discovery, quick and easy influencer outreach.
                            </div>
                            <div className="social_media">
                                <img src={ImagePaths.facebook.default} alt="logo" />
                                <img src={ImagePaths.instagram.default} alt="logo" />
                                <img src={ImagePaths.twitter.default} alt="logo" />
                                <img src={ImagePaths.linkedin.default} alt="logo" />
                            </div>
                        </div>
                        <div className="wrapper_section_2">
                            <div className="section2_first line_item_wrapper">
                                <div className="line_header">Company</div>
                                <div className="line_item_container">
                                    <div className="line_items">About us</div>
                                    <div className="line_items">Pricing</div>
                                    <div className="line_items">Book a demo</div>
                                    <div className="line_items">Terms of use</div>
                                    <div className="line_items">Privacy Policy</div>
                                </div>
                            </div>
                            <div className="section2_second line_item_wrapper">
                                <div className="line_header">Why Qoruz</div>
                                <div className="line_item_container">
                                    <div className="line_items">For Brands</div>
                                    <div className="line_items">For Agencies</div>
                                </div>
                            </div>
                            <div className="section2_third line_item_wrapper">
                                <div className="line_header">Resources</div>
                                <div className="line_item_container">
                                    <div className="line_items">Find Creators</div>
                                    <div className="line_items">Case Study</div>
                                    <div className="line_items">Reports</div>
                                    <div className="line_items">Blogs</div>
                                    <div className="line_items">Playbooks</div>
                                    <div className="line_items">Compare</div>
                                    <div className="line_items">Marketing Tools</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_wrapper_2">
                        <div className="wrapper_2_text">2023 Qoruz, inc. All rights reserved.</div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Qoruz