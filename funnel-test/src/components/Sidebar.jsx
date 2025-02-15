import React from "react";
import logo from "../assets/logoFc.png";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="content">
        <div className="logo">
          <img src={logo} alt="Logo Vaialavorare" />
          <p>Vaialavorare.it</p>
        </div>
        <nav>
          <ul>
            <li className="active">
              <a href="#dashboard">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1.875C0 0.84082 0.84082 0 1.875 0H13.125C14.1592 0 15 0.84082 15 1.875V11.25C15 12.2842 14.1592 13.125 13.125 13.125H1.875C0.84082 13.125 0 12.2842 0 11.25V1.875ZM1.875 3.75V11.25H6.5625V3.75H1.875ZM13.125 3.75H8.4375V11.25H13.125V3.75Z"
                    fill="#F700A9"
                  />
                </svg>
                Dashboard Form
              </a>
            </li>
            <li>
              <a href="#modificaform">
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1.66667C0 0.747396 0.747396 0 1.66667 0H8.33333C9.2526 0 10 0.747396 10 1.66667V8.33333C10 9.2526 9.2526 10 8.33333 10H1.66667C0.747396 10 0 9.2526 0 8.33333V1.66667ZM14.5599 0.932292C14.8307 1.07812 15 1.35938 15 1.66667V8.33333C15 8.64062 14.8307 8.92188 14.5599 9.06771C14.2891 9.21354 13.9609 9.19792 13.7031 9.02604L11.2031 7.35938L10.8333 7.11198V6.66667V3.33333V2.88802L11.2031 2.64062L13.7031 0.973958C13.9583 0.804688 14.2865 0.786458 14.5599 0.932292Z"
                    fill="#505151"
                  />
                </svg>
                Modifica form
              </a>
            </li>
            <li>
              <a href="#abbonamento">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.75 0.875C1.75 0.391016 1.35898 0 0.875 0C0.391016 0 0 0.391016 0 0.875V1.75V10.0625V13.125C0 13.609 0.391016 14 0.875 14C1.35898 14 1.75 13.609 1.75 13.125V9.625L3.5082 9.18477C4.63203 8.90312 5.82149 9.03437 6.85781 9.55117C8.06641 10.1555 9.46914 10.2293 10.7324 9.75352L11.6813 9.39805C12.023 9.26953 12.25 8.94414 12.25 8.57773V1.80469C12.25 1.17578 11.5883 0.765625 11.025 1.04727L10.7625 1.17852C9.49648 1.81289 8.00625 1.81289 6.74023 1.17852C5.78047 0.697266 4.67852 0.576953 3.63672 0.836719L1.75 1.3125V0.875Z"
                    fill="#272727"
                    fill-opacity="0.8"
                  />
                </svg>
                Abbonamento
              </a>
            </li>
          </ul>
          <button className="create-form">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.62532 16.4493C5.38246 18.2262 7.7735 19.2323 10.2724 19.2462C12.7713 19.2602 15.1735 18.2809 16.9503 16.5237C18.7272 14.7666 19.7333 12.3755 19.7472 9.87663C19.7612 7.37771 18.7819 4.97559 17.0247 3.19872C15.2676 1.42185 12.8765 0.415777 10.3776 0.401826C7.8787 0.387874 5.47659 1.36719 3.69972 3.12433C1.92285 4.88147 0.916775 7.2725 0.902823 9.77142C0.888872 12.2703 1.86818 14.6725 3.62532 16.4493ZM10.3486 5.60791C10.8378 5.61064 11.2312 6.00844 11.2259 6.4951L11.2122 8.94148L13.6586 8.95514C14.1479 8.95787 14.5413 9.35567 14.536 9.84233C14.5306 10.329 14.1354 10.725 13.6488 10.7197L11.2024 10.706L11.1887 13.1524C11.186 13.6417 10.7882 14.035 10.3015 14.0297C9.81488 14.0244 9.41889 13.6292 9.42421 13.1425L9.43786 10.6962L6.99148 10.6825C6.5022 10.6798 6.10882 10.282 6.11414 9.79531C6.11946 9.30865 6.51467 8.91265 7.00133 8.91797L9.44772 8.93163L9.46137 6.48525C9.4641 5.99597 9.8619 5.60259 10.3486 5.60791Z"
                fill="white"
              />
            </svg>
            Crea un form
          </button>
        </nav>
      </div>

      <div className="footer">
        <ul>
          <li>
            <a href="#assistenza">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15ZM4.97461 4.84277C5.20605 4.18945 5.82715 3.75 6.52148 3.75H8.22949C9.25195 3.75 10.0781 4.5791 10.0781 5.59863C10.0781 6.26074 9.72363 6.87305 9.14941 7.2041L8.20312 7.74609C8.19727 8.12695 7.88379 8.4375 7.5 8.4375C7.11035 8.4375 6.79688 8.12402 6.79688 7.73438V7.33887C6.79688 7.08691 6.93164 6.85547 7.15137 6.72949L8.44922 5.98535C8.58691 5.90625 8.67188 5.75977 8.67188 5.60156C8.67188 5.35547 8.47266 5.15918 8.22949 5.15918H6.52148C6.42188 5.15918 6.33398 5.2207 6.30176 5.31445L6.29004 5.34961C6.16113 5.71582 5.75684 5.90625 5.39355 5.77734C5.03027 5.64844 4.83691 5.24414 4.96582 4.88086L4.97754 4.8457L4.97461 4.84277ZM6.5625 10.3125C6.5625 10.0639 6.66127 9.8254 6.83709 9.64959C7.0129 9.47377 7.25136 9.375 7.5 9.375C7.74864 9.375 7.9871 9.47377 8.16291 9.64959C8.33873 9.8254 8.4375 10.0639 8.4375 10.3125C8.4375 10.5611 8.33873 10.7996 8.16291 10.9754C7.9871 11.1512 7.74864 11.25 7.5 11.25C7.25136 11.25 7.0129 11.1512 6.83709 10.9754C6.66127 10.7996 6.5625 10.5611 6.5625 10.3125Z"
                  fill="#272727"
                  fill-opacity="0.8"
                />
              </svg>
              Assistenza
            </a>
          </li>
          <li>
            <a href="#logout">
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.64314 11.1429L2.78599 11.1429C2.27238 11.1429 1.85742 10.7279 1.85742 10.2143L1.85742 2.78571C1.85742 2.2721 2.27238 1.85714 2.78599 1.85714L4.64314 1.85714C5.15675 1.85714 5.57171 1.44219 5.57171 0.928571C5.57171 0.414955 5.15675 -8.48059e-07 4.64314 -8.92961e-07L2.78599 -1.05532e-06C1.24805 -1.18977e-06 0.000280454 1.24777 0.00028032 2.78571L0.00027967 10.2143C0.000279536 11.7522 1.24805 13 2.78599 13L4.64314 13C5.15675 13 5.57171 12.585 5.57171 12.0714C5.57171 11.5578 5.15675 11.1429 4.64314 11.1429ZM4.9159 5.8442C4.55318 6.20692 4.55318 6.79598 4.9159 7.1587L8.63019 10.873C8.99291 11.2357 9.58198 11.2357 9.9447 10.873C10.3074 10.5103 10.3074 9.9212 9.9447 9.55848L7.81479 7.42857L13.9289 7.42857C14.4425 7.42857 14.8574 7.01362 14.8574 6.5C14.8574 5.98638 14.4425 5.57143 13.9289 5.57143L7.81479 5.57143L9.9447 3.44152C10.3074 3.0788 10.3074 2.48973 9.9447 2.12701C9.58198 1.76429 8.99291 1.76429 8.63019 2.12701L4.9159 5.84129L4.9159 5.8442Z"
                  fill="#272727"
                  fill-opacity="0.8"
                />
              </svg>
              Log out
            </a>
          </li>
        </ul>

        <div className="user">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 8C8.06087 8 9.07828 7.57857 9.82843 6.82843C10.5786 6.07828 11 5.06087 11 4C11 2.93913 10.5786 1.92172 9.82843 1.17157C9.07828 0.421427 8.06087 0 7 0C5.93913 0 4.92172 0.421427 4.17157 1.17157C3.42143 1.92172 3 2.93913 3 4C3 5.06087 3.42143 6.07828 4.17157 6.82843C4.92172 7.57857 5.93913 8 7 8ZM5.57188 9.5C2.49375 9.5 0 11.9938 0 15.0719C0 15.5844 0.415625 16 0.928125 16H13.0719C13.5844 16 14 15.5844 14 15.0719C14 11.9938 11.5063 9.5 8.42813 9.5H5.57188Z"
              fill="#505151"
            />
          </svg>
          <div>
            <p>Andrea Caruso </p>
            <small>andrea.caruso@funnelconsulting.it</small>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
