import { Avatar } from '@mui/material'
import React from 'react'
import '../../../assets/rightbar.css'
import DropDown from '../../Header/DropDown';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import { Link, BrowserRouter as Router } from "react-router-dom";

const Rightbar = () => {
    const user = useSelector(selectUser)

  return (
    <Router>
      <div className="rightbar">
        {/* profile */}
        <div className="rightbar_first">
          {/* title */}
          <div className="rightbar_title">
            <h3>Add to your feed</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="info-square"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#191919"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <polyline points="11 12 12 12 12 16 13 16" />
            </svg>
          </div>

          <div className="rightbar_companyCard">
            <img src="https://media.licdn.com/dms/image/C4E0BAQFBqMOuGfFAaA/company-logo_100_100/0/1657002295648?e=1686787200&v=beta&t=QSXgirwOzrkEW3Qg-QqfhMG2EqZfJhbdanRJDNZGsW8"></img>
            <div className="rightbar_companyCard_info">
              <h4>ITM Business School</h4>
              <p>Company • Education Management</p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon-tabler-plus"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#191919"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <span>Follow</span>
              </button>
            </div>
          </div>

          <div className="rightbar_companyCard">
            <img src="https://media.licdn.com/dms/image/C560BAQGgJ6XIqm5uFw/company-logo_100_100/0/1671049348269?e=1686787200&v=beta&t=ECppj4A9URidvPtiTAID10cTekLYyik9nB-izah53HM"></img>
            <div className="rightbar_companyCard_info">
              <h4>Microsoft Research</h4>
              <p>Company • Think Tanks</p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon-tabler-plus"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#191919"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <span>Follow</span>
              </button>
            </div>
          </div>

          <div className="rightbar_companyCard">
            <img src="https://media.licdn.com/dms/image/C560BAQF2blurxAgPlA/company-logo_100_100/0/1617134012515?e=1686787200&v=beta&t=5BqaRgilGg8hHt37yBaFVpkw4tnMkUL3vNPD_VcvYrA"></img>
            <div className="rightbar_companyCard_info">
              <h4>Work From Home/ Fresher & Experience Jobs</h4>
              <p>Company • Human Resources</p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon-tabler-plus"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#191919"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <span>Follow</span>
              </button>
            </div>
          </div>

          <div className="profile-my-items_view">
            <span>View all recommendations</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-right"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000ce"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="13" y1="18" x2="19" y2="12" />
              <line x1="13" y1="6" x2="19" y2="12" />
            </svg>
          </div>
        </div>
        {/* Photo "See Who is hiring" */}
        <Link
          to="https://www.linkedin.com/jobs/?trk=li_FA_global_careers_jobsgtm_jsFA_v1&mcid=6899045044465016833"
          target="_blank"
        >
          <img
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            className="who_is_hiring"
          ></img>
        </Link>

        {/* Links */}
        <div className="rightbar__links">
          <a href="https://about.linkedin.com/" target="_blank">
            <span className="rightbar__links_link">About</span>
          </a>
          <a href="https://www.linkedin.com/accessibility" target="_blank">
            <span className="rightbar__links_link">Accessibility</span>
          </a>
          <a href="https://www.linkedin.com//help/" target="_blank">
            <span className="rightbar__links_link">Help Center</span>
          </a>
          <br></br>
          <a
            href="https://www.linkedin.com/static?key=privacy_policy&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B5RxmtnhiQUanqhBLZnebIg%3D%3D"
            target="_blank"
          >
            <span className="rightbar__links_link">
              <DropDown
                title="Privacy & Terms"
                Icon={ArrowDropDownIcon}
                onClick={console.log(1)}
              />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/help/linkedin/answer/62931?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B5RxmtnhiQUanqhBLZnebIg%3D%3D"
            target="_blank"
          >
            <span className="rightbar__links_link">Ad Choices</span>
          </a>
          <br></br>
          <a href="https://www.linkedin.com//help/" target="_blank">
            <span className="rightbar__links_link">Advertising</span>
          </a>
          <a href="https://www.linkedin.com//help/" target="_blank">
            <span className="rightbar__links_link">
              <DropDown
                title="Business Services"
                Icon={ArrowDropDownIcon}
                onClick={console.log(1)}
              />
            </span>
          </a>
          <br></br>
          <a href="" target="_blank">
            <span className="rightbar__links_link">Get the LinkedIn app</span>
          </a>
          <a href="" target="_blank">
            <span className="rightbar__links_link">More</span>
          </a>

          <div className="links__footer">
            <img
              className="login-logo footer_img"
              src="https://i.ibb.co/5BG3mpB/Linkedin-Logo-PNG5.png"
              alt="Linkedin-Logo-PNG5"
            ></img>
            <span>LinkedIn Corporation © 2023</span>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Rightbar