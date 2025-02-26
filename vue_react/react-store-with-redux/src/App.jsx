import React from 'react'
import { connect } from 'react-redux';

const App = (props) => {
  const { count } = props;
  console.log(props)
  //中央状态请到本地
  return (
    <>
      计数：{count}
    </>
  )
}

//redux state映射到props
const mapStateToProps = (state) => {
  return {
    count: state.counter.value
  }
}

const mapActionToProps = (dispatch) => {
  return {
    add: () => dispatch({ type: 'ADD' }),
    minus: () => dispatch({ type: 'MINUS' })
  }
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(App);