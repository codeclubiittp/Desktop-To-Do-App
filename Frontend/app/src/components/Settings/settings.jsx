import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const darkGreen = '16423C'; // Darker shade of green

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

const SettingsSection = styled.div`
  padding: 20px;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
    cursor: pointer;

    a {
      text-decoration: none;
      color: inherit;
    }

    svg {
      width: 24px;
      height: 24px;
      fill: ${darkGreen};
    }
  }
`;

const AppearanceSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
    fill: ${darkGreen};
  }

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

// SVG Icon Components
const UserIcon = () => (
  // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  //   <path d="M8 9a3 3 0 1 0-3-3a3 3 0 0 0 3 3zm4.5 0h-1A4.5 4.5 0 0 0 6 12.5V14h8v-1.5A4.5 4.5 0 0 0 12.5 9z"/>
  // </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<path d="M18 6C19.5913 6 21.1174 6.63214 22.2426 7.75736C23.3679 8.88258 24 10.4087 24 12C24 13.5913 23.3679 15.1174 22.2426 16.2426C21.1174 17.3679 19.5913 18 18 18C16.4087 18 14.8826 17.3679 13.7574 16.2426C12.6321 15.1174 12 13.5913 12 12C12 10.4087 12.6321 8.88258 13.7574 7.75736C14.8826 6.63214 16.4087 6 18 6ZM18 21C24.63 21 30 23.685 30 27V30H6V27C6 23.685 11.37 21 18 21Z" fill="#16423C"/>
</svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M15.2022 27L14.6592 22.662C14.1802 22.517 13.6627 22.29 13.1067 21.981C12.5497 21.671 12.0762 21.339 11.6862 20.985L7.68422 22.6875L4.88672 17.8125L8.34572 15.204C8.30072 14.934 8.26422 14.655 8.23622 14.367C8.20622 14.079 8.19122 13.7995 8.19122 13.5285C8.19122 13.2765 8.20622 13.0115 8.23622 12.7335C8.26422 12.4555 8.30072 12.1425 8.34572 11.7945L4.88672 9.189L7.68422 4.371L11.6562 6.045C12.1042 5.672 12.5892 5.3355 13.1112 5.0355C13.6312 4.7355 14.1377 4.5035 14.6307 4.3395L15.2007 0H20.7987L21.3402 4.368C21.9152 4.57 22.4232 4.8015 22.8642 5.0625C23.3052 5.3235 23.7597 5.6505 24.2277 6.0435L28.3152 4.371L31.1127 9.1875L27.5397 11.8815C27.6217 12.1915 27.6677 12.476 27.6777 12.735C27.6877 12.994 27.6927 13.249 27.6927 13.5C27.6927 13.733 27.6827 13.9785 27.6627 14.2365C27.6437 14.4955 27.5997 14.8085 27.5307 15.1755L31.0467 17.8125L28.2492 22.6875L24.2277 20.9565C23.7607 21.3495 23.2907 21.686 22.8177 21.966C22.3447 22.246 21.8522 22.4685 21.3402 22.6335L20.7987 27H15.2022ZM17.9592 17.25C19.0052 17.25 19.8917 16.8865 20.6187 16.1595C21.3457 15.4325 21.7092 14.546 21.7092 13.5C21.7092 12.454 21.3457 11.5675 20.6187 10.8405C19.8917 10.1135 19.0052 9.75 17.9592 9.75C16.9072 9.75 16.0192 10.1135 15.2952 10.8405C14.5712 11.5675 14.2092 12.454 14.2092 13.5C14.2092 14.546 14.5712 15.4325 15.2952 16.1595C16.0192 16.8865 16.9072 17.25 17.9592 17.25Z" fill="#16423C"/>
  </svg>
);

const PaletteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M26.25 18C25.6533 18 25.081 17.7629 24.659 17.341C24.2371 16.919 24 16.3467 24 15.75C24 15.1533 24.2371 14.581 24.659 14.159C25.081 13.7371 25.6533 13.5 26.25 13.5C26.8467 13.5 27.419 13.7371 27.841 14.159C28.2629 14.581 28.5 15.1533 28.5 15.75C28.5 16.3467 28.2629 16.919 27.841 17.341C27.419 17.7629 26.8467 18 26.25 18ZM21.75 12C21.1533 12 20.581 11.7629 20.159 11.341C19.7371 10.919 19.5 10.3467 19.5 9.75C19.5 9.15326 19.7371 8.58097 20.159 8.15901C20.581 7.73705 21.1533 7.5 21.75 7.5C22.3467 7.5 22.919 7.73705 23.341 8.15901C23.7629 8.58097 24 9.15326 24 9.75C24 10.3467 23.7629 10.919 23.341 11.341C22.919 11.7629 22.3467 12 21.75 12ZM14.25 12C13.6533 12 13.081 11.7629 12.659 11.341C12.2371 10.919 12 10.3467 12 9.75C12 9.15326 12.2371 8.58097 12.659 8.15901C13.081 7.73705 13.6533 7.5 14.25 7.5C14.8467 7.5 15.419 7.73705 15.841 8.15901C16.2629 8.58097 16.5 9.15326 16.5 9.75C16.5 10.3467 16.2629 10.919 15.841 11.341C15.419 11.7629 14.8467 12 14.25 12ZM9.75 18C9.15326 18 8.58097 17.7629 8.15901 17.341C7.73705 16.919 7.5 16.3467 7.5 15.75C7.5 15.1533 7.73705 14.581 8.15901 14.159C8.58097 13.7371 9.15326 13.5 9.75 13.5C10.3467 13.5 10.919 13.7371 11.341 14.159C11.7629 14.581 12 15.1533 12 15.75C12 16.3467 11.7629 16.919 11.341 17.341C10.919 17.7629 10.3467 18 9.75 18ZM18 4.5C14.4196 4.5 10.9858 5.92232 8.45406 8.45406C5.92232 10.9858 4.5 14.4196 4.5 18C4.5 21.5804 5.92232 25.0142 8.45406 27.5459C10.9858 30.0777 14.4196 31.5 18 31.5C18.5967 31.5 19.169 31.2629 19.591 30.841C20.0129 30.419 20.25 29.8467 20.25 29.25C20.25 28.665 20.025 28.14 19.665 27.75C19.32 27.345 19.095 26.82 19.095 26.25C19.095 25.6533 19.3321 25.081 19.754 24.659C20.176 24.2371 20.7483 24 21.345 24H24C25.9891 24 27.8968 23.2098 29.3033 21.8033C30.7098 20.3968 31.5 18.4891 31.5 16.5C31.5 9.87 25.455 4.5 18 4.5Z" fill="#16423C"/>
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
<path d="M18.5003 33.917C20.1962 33.917 21.5837 32.5295 21.5837 30.8337H15.417C15.417 31.6514 15.7418 32.4357 16.3201 33.0139C16.8983 33.5921 17.6826 33.917 18.5003 33.917ZM27.7503 24.667V16.9587C27.7503 12.2257 25.222 8.26366 20.8128 7.21533V6.16699C20.8128 4.88741 19.7799 3.85449 18.5003 3.85449C17.2207 3.85449 16.1878 4.88741 16.1878 6.16699V7.21533C11.7632 8.26366 9.25033 12.2103 9.25033 16.9587V24.667L6.16699 27.7503V29.292H30.8337V27.7503L27.7503 24.667Z" fill="#16423C"/>
</svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <path d="M25.333 17.417C27.9613 17.417 30.0672 15.2953 30.0672 12.667C30.0672 10.0387 27.9613 7.91699 25.333 7.91699C22.7047 7.91699 20.583 10.0387 20.583 12.667C20.583 15.2953 22.7047 17.417 25.333 17.417ZM12.6663 17.417C15.2947 17.417 17.4005 15.2953 17.4005 12.667C17.4005 10.0387 15.2947 7.91699 12.6663 7.91699C10.038 7.91699 7.91634 10.0387 7.91634 12.667C7.91634 15.2953 10.038 17.417 12.6663 17.417ZM12.6663 20.5837C8.97717 20.5837 1.58301 22.4362 1.58301 26.1253V30.0837H23.7497V26.1253C23.7497 22.4362 16.3555 20.5837 12.6663 20.5837ZM25.333 20.5837C24.8738 20.5837 24.3513 20.6153 23.7972 20.6628C25.6338 21.9928 26.9163 23.782 26.9163 26.1253V30.0837H36.4163V26.1253C36.4163 22.4362 29.0222 20.5837 25.333 20.5837Z" fill="#16423C"/>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M28.5 6H25.5V4.5C25.5 4.10218 25.342 3.72064 25.0607 3.43934C24.7794 3.15804 24.3978 3 24 3C23.6022 3 23.2206 3.15804 22.9393 3.43934C22.658 3.72064 22.5 4.10218 22.5 4.5V6H13.5V4.5C13.5 4.10218 13.342 3.72064 13.0607 3.43934C12.7794 3.15804 12.3978 3 12 3C11.6022 3 11.2206 3.15804 10.9393 3.43934C10.658 3.72064 10.5 4.10218 10.5 4.5V6H7.5C6.30653 6 5.16193 6.47411 4.31802 7.31802C3.47411 8.16193 3 9.30653 3 10.5V28.5C3 29.6935 3.47411 30.8381 4.31802 31.682C5.16193 32.5259 6.30653 33 7.5 33H28.5C29.6935 33 30.8381 32.5259 31.682 31.682C32.5259 30.8381 33 29.6935 33 28.5V10.5C33 9.30653 32.5259 8.16193 31.682 7.31802C30.8381 6.47411 29.6935 6 28.5 6ZM30 28.5C30 28.8978 29.842 29.2794 29.5607 29.5607C29.2794 29.842 28.8978 30 28.5 30H7.5C7.10218 30 6.72064 29.842 6.43934 29.5607C6.15804 29.2794 6 28.8978 6 28.5V18H30V28.5ZM30 15H6V10.5C6 10.1022 6.15804 9.72064 6.43934 9.43934C6.72064 9.15804 7.10218 9 7.5 9H10.5V10.5C10.5 10.8978 10.658 11.2794 10.9393 11.5607C11.2206 11.842 11.6022 12 12 12C12.3978 12 12.7794 11.842 13.0607 11.5607C13.342 11.2794 13.5 10.8978 13.5 10.5V9H22.5V10.5C22.5 10.8978 22.658 11.2794 22.9393 11.5607C23.2206 11.842 23.6022 12 24 12C24.3978 12 24.7794 11.842 25.0607 11.5607C25.342 11.2794 25.5 10.8978 25.5 10.5V9H28.5C28.8978 9 29.2794 9.15804 29.5607 9.43934C29.842 9.72064 30 10.1022 30 10.5V15Z" fill="#16423C"/>
  </svg>
);

const AdvIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
  <path d="M27.8184 30.9092V28.849H32.9694V30.9092H27.8184Z" fill="#16423C"/>
  <path d="M17.6588 28.8491H0L0 30.9082H17.6588C17.9096 31.8794 18.506 32.7259 19.3363 33.2888C20.1665 33.8517 21.1736 34.0926 22.1687 33.9661C23.1638 33.8397 24.0786 33.3547 24.7417 32.602C25.4048 31.8494 25.7707 30.8807 25.7707 29.8776C25.7707 28.8745 25.4048 27.9058 24.7417 27.1531C24.0786 26.4004 23.1638 25.9154 22.1687 25.789C21.1736 25.6626 20.1665 25.9034 19.3363 26.4664C18.506 27.0293 17.9096 27.8757 17.6588 28.847M23.6969 29.8776C23.7032 30.1521 23.6545 30.4252 23.5537 30.6806C23.453 30.9361 23.3022 31.1689 23.1102 31.3653C22.9182 31.5616 22.6889 31.7177 22.4358 31.8242C22.1827 31.9307 21.9108 31.9856 21.6362 31.9856C21.3616 31.9856 21.0897 31.9307 20.8366 31.8242C20.5835 31.7177 20.3542 31.5616 20.1622 31.3653C19.9703 31.1689 19.8195 30.9361 19.7187 30.6806C19.618 30.4252 19.5693 30.1521 19.5755 29.8776C19.5877 29.3391 19.8102 28.8269 20.1953 28.4504C20.5805 28.0739 21.0976 27.8631 21.6362 27.8631C22.1748 27.8631 22.692 28.0739 23.0771 28.4504C23.4622 28.8269 23.6847 29.3391 23.6969 29.8776Z" fill="#16423C"/>
  <path d="M17.5156 18.5459V16.4857H32.9697V18.5459H17.5156Z" fill="#16423C"/>
  <path d="M7.35675 16.4846H0L0 18.5459H7.35675C7.60759 19.5171 8.20403 20.3636 9.03428 20.9265C9.86454 21.4894 10.8716 21.7303 11.8667 21.6038C12.8618 21.4774 13.7766 20.9924 14.4397 20.2397C15.1028 19.4871 15.4687 18.5184 15.4687 17.5153C15.4687 16.5122 15.1028 15.5435 14.4397 14.7908C13.7766 14.0381 12.8618 13.5531 11.8667 13.4267C10.8716 13.3003 9.86454 13.5411 9.03428 14.104C8.20403 14.667 7.60759 15.5134 7.35675 16.4846ZM13.3939 17.5153C13.4001 17.7898 13.3514 18.0629 13.2507 18.3183C13.1499 18.5738 12.9991 18.8066 12.8071 19.003C12.6152 19.1993 12.3859 19.3554 12.1328 19.4619C11.8796 19.5684 11.6078 19.6233 11.3332 19.6233C11.0585 19.6233 10.7867 19.5684 10.5336 19.4619C10.2804 19.3554 10.0512 19.1993 9.85918 19.003C9.66721 18.8066 9.51641 18.5738 9.41565 18.3183C9.3149 18.0629 9.2662 17.7898 9.27244 17.5153C9.27244 16.9686 9.4896 16.4443 9.87616 16.0577C10.2627 15.6712 10.787 15.454 11.3337 15.454C11.8804 15.454 12.4047 15.6712 12.7912 16.0577C13.1778 16.4443 13.3949 16.9686 13.3949 17.5153" fill="#16423C"/>
  <path d="M27.8184 6.18164V4.12145H32.9694V6.18164H27.8184Z" fill="#16423C"/>
  <path d="M17.6588 4.12136L0 4.12136L0 6.18262L17.6588 6.18262C17.9096 7.15385 18.506 8.00027 19.3363 8.56321C20.1665 9.12616 21.1736 9.36699 22.1687 9.24056C23.1638 9.11413 24.0786 8.62913 24.7417 7.87645C25.4048 7.12377 25.7707 6.1551 25.7707 5.15199C25.7707 4.14888 25.4048 3.18021 24.7417 2.42753C24.0786 1.67485 23.1638 1.18985 22.1687 1.06342C21.1736 0.936989 20.1665 1.17782 19.3363 1.74076C18.506 2.30371 17.9096 3.15013 17.6588 4.12136ZM23.6969 5.15199C23.7032 5.42655 23.6545 5.69958 23.5537 5.95505C23.453 6.21052 23.3022 6.44329 23.1102 6.63967C22.9182 6.83605 22.6889 6.99209 22.4358 7.09862C22.1827 7.20516 21.9108 7.26003 21.6362 7.26003C21.3616 7.26003 21.0897 7.20516 20.8366 7.09862C20.5835 6.99209 20.3542 6.83605 20.1622 6.63967C19.9703 6.44329 19.8195 6.21052 19.7187 5.95505C19.618 5.69958 19.5693 5.42655 19.5755 5.15199C19.5877 4.61356 19.8102 4.10129 20.1953 3.72481C20.5805 3.34833 21.0976 3.13754 21.6362 3.13754C22.1748 3.13754 22.692 3.34833 23.0771 3.72481C23.4622 4.10129 23.6847 4.61356 23.6969 5.15199Z" fill="#16423C"/>
  </svg>
);

const SettingsComponent = () => {
  return (
    <Container>
      <SettingsSection>
        <h1>Settings</h1>
        <AppearanceSection>
          <PaletteIcon />
          <h2>Appearance</h2>
          <p>Current Theme:</p>
        </AppearanceSection>
      </SettingsSection>
      <Sidebar>
        <ul>
          <li><Link to="/settings/user"><UserIcon /> </Link></li>
          <li><Link to="/settings/general"><SettingsIcon /></Link></li>
          <li><Link to="/settings/appearance"><PaletteIcon /> </Link></li>
          <li><Link to="/settings/notifications"><BellIcon /> </Link></li>
          <li><Link to="/settings/calendar"><CalendarIcon /></Link></li>
          <li><Link to="/settings/users"><UsersIcon /> </Link></li>
          <li><Link to="/settings/advanced"><AdvIcon /></Link></li>
        </ul>
      </Sidebar>
    </Container>
  );
};



export default SettingsComponent;
