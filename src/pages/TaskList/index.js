import React, { PureComponent } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import theme from '@/common/styles/variables';
import EmptyOrder from '@/components/EmptyOrder';
import OrderList from './OrderList';

import styles from './style';

const { $primaryColor, $textColor } = theme;

class TaskList extends PureComponent {
  static navigationOptions = {
    title: '任务列表',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    },
    headerStyle: {
      borderBottomWidth: 0,
      elevation: 0
    }
  };

  render() {
    const tabs = [{ title: '转单申请(0)' }, { title: '订单取消申请(0)' }];
    return (
      <SafeAreaView style={styles.page}>
        <Tabs
          tabs={tabs}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
          tabBarActiveTextColor={$primaryColor}
          tabBarInactiveTextColor={$textColor}
        >
          <View>
            <OrderList />
          </View>
          <View>
            <EmptyOrder />
          </View>
        </Tabs>
      </SafeAreaView>
    );
  }
}

export default TaskList;
