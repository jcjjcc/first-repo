import React, { useState } from 'react';
import { Tabbar, TabbarItem } from 'vant';
// 有哪些类型
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import s from './style.module.less'
import CustomIcon from '@/components/CustomIcon';

const NavBar = ({ showNav }) => {
  const [activeKey, setActiveKey] = useState('/');
  const navigateTo = useNavigate()

  const changeTab = (path) => {
    // console.log(path)
    setActiveKey(path)
    navigateTo(path)
  }

  return (
    <Tabbar
      className={s.tab}
      value={activeKey}
      onChange={changeTab}
      fixed={showNav}
    >
      <TabbarItem
        name="/"
        icon={<CustomIcon name="notes-o" />}
      >
        账单
      </TabbarItem>
      <TabbarItem
        name="/data"
        icon={<CustomIcon name="chart-trending-o" />}
      >
        统计
      </TabbarItem>
      <TabbarItem
        name="/user"
        icon={<CustomIcon name="user-o" />}
      >
        我的
      </TabbarItem>
    </Tabbar>
  );
};
// vue defineProps 
// react 申明组件的类型
// 为什么函数也能加属性呢，
NavBar.propTypes = {
  showNav: PropTypes.bool
}

export default NavBar;