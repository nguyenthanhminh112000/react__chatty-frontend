import React, { useState } from 'react';
import { useTranslations } from '@utils/intlTools';
import backgroundImage from './../../../assets/images/background.jpg';
import './AuthTabs.scss';

const SIGN_IN = 'SIGN_IN';
const SIGN_UP = 'SIGN_UP';
type PageType = typeof SIGN_IN | typeof SIGN_UP | '';
const AuthTabs = () => {
  const [pageType, setPageType] = useState<PageType>('');
  const [sign_in_title, sign_up_title] = useTranslations(['sign_in_title', 'sign_up_title']);
  const handleSetPage = (pageType: PageType) => {
    setPageType(pageType);
  };
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li
                className="tab active"
                onClick={() => {
                  handleSetPage(SIGN_IN);
                }}
              >
                <button className="login">{sign_in_title}</button>
              </li>
              <li
                className="tab"
                onClick={() => {
                  handleSetPage(SIGN_UP);
                }}
              >
                <button className="signup">{sign_up_title}</button>
              </li>
            </ul>
            {pageType === SIGN_IN && <div className="tab-item">SIGN IN component</div>}
            {pageType === SIGN_UP && <div className="tab-item">SIGN UP component</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthTabs;
