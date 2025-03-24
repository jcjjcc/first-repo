import React, { useState } from 'react';
import { TabBar } from 'zarm';
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
    <TabBar className={s.tab} visible={showNav} activeKey={activeKey} onChange={changeTab}>
      <TabBar.Item
        itemKey="/"
        title="账单"
        icon={<CustomIcon type="zhangdan" />}
      />
      <TabBar.Item
        itemKey="/data"
        title="统计"
        icon={<CustomIcon type="tongji" />}
      />
      <TabBar.Item
        itemKey="/user"
        title="我的"
        icon={<CustomIcon type="wode" />}
      />
    </TabBar>
  );
};
// vue defineProps 
// react 申明组件的类型
NavBar.propTypes = {
  showNav: PropTypes.bool
}

export default NavBar;