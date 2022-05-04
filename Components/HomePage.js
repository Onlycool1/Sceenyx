import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class HomePage extends React.Component {
    render() {
        return(
             <view style={StyleSheet.container}>

                <view style={ styles.top}>
                    <view style={styles.border}></view>
                </view>

               <view style={styles.center}></view>

               <view style={styles.bottom}></view>

                 <view style={styles.bottomItem}>
                     <view styles={styles.bottomeItemInner}></view>
                 </view>

                 <view style={styles.bottomItem}>
                     <view styles={styles.bottomeItemInner}></view>
                 </view>

                 <view style={styles.bottomItem}>
                     <view styles={styles.bottomeItemInner}></view>
                 </view>

                 <view style={styles.bottomItem}>
                     <view styles={styles.bottomeItemInner}></view>
                 </view>

             </view>
        );
    }
}

const styles = StyleSheet.create({
     container: {
         flex: 1,
     },
     top: {
         height: '30%',
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor:'red',
     },
     
})