import React from 'react';
import {View, Pressable, Text } from 'react-native';
import styles from '../StyledButtom/style';

const StyledButtom = (props) => {

    const { type, content, onPress } = props;
    
    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';

    return(
        <View style={styles.container}>
            <Pressable
            style={[styles.button, {backgroundColor: backgroundColor} ]}
            onPress={()=> onPress()}
             >
                 <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
            
        </View>
    );
};

export default StyledButtom;