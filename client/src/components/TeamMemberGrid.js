import React, { Component } from "react";

class TeamMemberGrid extends Component {
  render() {
    /* team member data */

    let data = [
      {
        profileImage: "assets/img/team/neeraj.jpeg",
        profileTitle: "Neeraj Kr. Sahu",
        profileDesignation: "Team Member 1",
        profileEmail: "coe17b036@iiitk.ac.in",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com"
        }
      },
      {
        profileImage: "assets/img/team/lalitanjali.jpg",
        profileTitle: "Lalithanjali Pulakurthi",
        profileDesignation: "Team Member 2",
        profileEmail: "coe17b015@iiitk.ac.in",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com"
        }
      },
      {
        profileImage: "assets/img/team/anik.jpg",
        profileTitle: "Anik Das",
        profileDesignation: "Team Member 3",
        profileEmail: "coe16b001@iiitk.ac.in",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com"
        }
      },
      {
        profileImage: "assets/img/team/saya_sir.jpg",
        profileTitle: "Saya Sreenivasula",
        profileDesignation: "Mentor",
        profileEmail: "sreeni@iiitk.ac.in",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com"
        }
      }
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-3 col-sm-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="team">
          <img src={val.profileImage} style={{width: "100%", height: "auto"}} />
            
            <div className="content">
              <h3 className="title">{val.profileTitle}</h3>
              <span>{val.profileDesignation}</span>
              <a href={"mailto:" + val.profileEmail} className="email">
                {val.profileEmail}
              </a>
              
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {/*====================  team member area ====================*/}
        <div className="team-member-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                    Our Team <span className="title-icon" />
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="team-member-wrapper">
                  <div className="row">
                    {/* team member list */}
                    {Datalist}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of team member area  ====================*/}
      </div>
    );
  }
}

export default TeamMemberGrid;
