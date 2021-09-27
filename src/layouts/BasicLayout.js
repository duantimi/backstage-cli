import React, { PureComponent } from 'react';
import { Switch } from 'dva/router';
import { Layout, Icon } from 'antd';
import SiderMenu from './components/SiderMenu';
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';
import renderRoutes from './components/renderRoutes';
import localStorageUtil from '@/utils/storage';
import logo from '../assets/logo.png';
import { logout } from '@/utils/auth';
import style from './BasicLayout.less';
const { Content } = Layout;
export default class BasicLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      collapsed: true,
    };
  }

  handleMenuClick = (ev) => {
    const { key = '' } = ev;
    switch (key) {
      case 'logout':
        logout();
        location.reload();
        break;
      case 'cn':
        alert('中文');
        break;
      case 'en':
        alert('english');
        break;
    }
  };

  handleMenuCollapse = (type) => {
    this.setState({
      collapsed: type,
    });
  };

  render() {
    const { isMobile, collapsed } = this.state;
    //eslint-disable-next-line
    const { fetchingNotices, routerData = [], notices, match, location } = this.props;
    const currentUser = localStorageUtil.getItem('user');
    return (
      <div>
        <Layout className={style.globalLayout}>
          <SiderMenu
            logo={logo}
            menuData={routerData}
            collapsed={collapsed}
            location={location}
            isMobile={isMobile}
            currentUser={currentUser}
          />
          <Layout className={style.mainLayout}>
            <GlobalHeader
              logo={logo}
              currentUser={currentUser}
              fetchingNotices={fetchingNotices}
              notices={notices}
              collapsed={collapsed}
              isMobile={isMobile}
              onMenuClick={this.handleMenuClick}
              onCollapse={this.handleMenuCollapse}
            />
            <Content style={{ margin: '24px 24px 0', height: '100%' }}>
              <div style={{ minHeight: 'calc(100vh - 183px)' }}>
                <Switch>{renderRoutes(routerData, currentUser)}</Switch>
              </div>
              <GlobalFooter
                copyright={
                  <div>
                    ecoer <Icon type="copyright" /> 宜所智能
                  </div>
                }
              />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
