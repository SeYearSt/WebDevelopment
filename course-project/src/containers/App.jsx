import React from 'react';

import { LeftMenu } from '../components/LeftMenu';
import { MenuIcon, SearchIcon, SettingsIcon, LogOutIcon, BanknoteIcon, CubeIcon, DocumentIcon, DatabaseIcon } from '../components/Icons';
import { SmallCard, SmallSquareCard, BigSquareCard } from '../components/Card';
// import { SmallCard, SmallSquareCard } from '../components/Card';
import { UserCard } from '../components/User';
import { ProductVisitors } from '../components/ProductVisitors';
import { CustomerRating } from '../components/CustomerRating';
import { WebsiteTraffic } from '../components/WebsiteTraffic';


import card2 from '../resources/images/card2.png';
import card3 from '../resources/images/card3.png';
import refresh from '../resources/images/refresh.png';

const App = () => {
  const [menuOpen, setMenuOpen] = React.useState(true);

  return (
    <div style={ { display: 'flex' } }>
      <LeftMenu style={ { display: menuOpen ? 'block' : 'none' } } />
      <div style={ { backgroundColor: '#eceef2', flexGrow: 1 } }>
        <div style={ { width: '100%', height: 80, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 2px rgba(0, 0, 0, 0.2)' } }>
          <div style={ { marginLeft: 30 } }>
            <MenuIcon style={ { marginRight: 30 } } onClick={ () => setMenuOpen(!menuOpen) } />
            <SearchIcon />
          </div>
          <div style={ { marginRight: 30 } }>
            <SettingsIcon style={ { marginRight: 30 } } />
            <LogOutIcon />
          </div>
        </div>
        <div style={ { width: 'calc(100% - 60px)', minHeight: 'calc(100vh - 140px)', padding: 30 } }>
          <div style={ { justifyContent: 'flex-start', display: 'flex', flexWrap: 'wrap'} }>
            {/* <div style={{ }}> */}
              <div style={{ backgroundColor: 'white', marginLeft: 5, marginBottom: 5 }}>
                <SmallCard
                  Icon={ <BanknoteIcon /> }
                  color="#ff8761"
                  caption="Total sales"
                  pretext="$"
                  text="215,645"
                />
              </div>
              <div style={{  backgroundColor: 'white', marginLeft: 5, marginBottom: 5 }}>
                <SmallCard
                  Icon={ <DocumentIcon /> }
                  color="#57bdde"
                  caption="New quote"
                  text="523,543"
                />
              </div>
              <div style={{  backgroundColor: 'white', marginLeft: 5, marginBottom: 5 }}>
                <SmallCard
                  Icon={ <DatabaseIcon /> }
                  color="#b198dc"
                  caption="Orders"
                  text="23,414"
                />
              </div>
              <div style={{  backgroundColor: 'white', marginLeft: 5, marginBottom: 5 }}>
                <SmallCard
                  Icon={ <CubeIcon /> }
                  color="#6dc7be"
                  caption="Products"
                  text="19,087"
                />
              </div>
            {/* </div> */}
            <div style={{  backgroundColor: 'white'}}>
              <ProductVisitors />
            </div>
            <div style={{ margin: 5}}>
              <div style={{ backgroundColor: 'white', marginBottom: 10}}>

                <SmallSquareCard src={ card2 } name="Weekly Sales & Expense" colorFg="#b198dc" colorBg="#e7e0f4" isTop />
              </div>
            {/* </div> */}  
            <div style={{ backgroundColor: 'white', marginBottom: 10}}>
              <SmallSquareCard src={ card3 }  name="Total charge & Profit" colorFg="#6dc7be" colorBg="#cdedea"/>
            </div>
            </div>
            <div style={ { display: 'flex' } }>
              <WebsiteTraffic 
              icon={refresh}
              />
              <UserCard />
            </div>
            <div style={ { width: 940, height: 270, backgroundColor: 'white', margin: 10 } }>
              <CustomerRating />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
