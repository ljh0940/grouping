import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import Splash from './app/src/view/Splash';
import { inject, observer, Provider } from 'mobx-react';
import { USER_STATUS } from './app/src/constant/UserStatus';
import Main from './app/src/view/main/Main';
import Entrance from './app/src/view/entrance/Entrance';
import { decorate } from 'mobx';
import SplashStore from './app/src/store/SplashStore';

@inject("splashStore")
@observer
class App extends Component {
  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
  // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
  // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
  componentDidMount() {
    this.props.splashStore.ready();
  }

  render() {
    let view;
    if (this.props.splashStore.userStatus === USER_STATUS.READY) {
      view = <Splash />;
    } else if (this.props.splashStore.userStatus === USER_STATUS.GUEST) {
      view = <Entrance />;
    } else {
      view = <Main />;
    }
    return <View style={styles.body}>{view}</View>;
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;