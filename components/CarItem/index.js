import React from 'react';
import { View, Text, ImageBackground  } from 'react-native';
import styles from './styles';
import StyledButtom from '../../StyledButtom';

const CarItem = (props) => {

   const { name, taggline, taglineCTA, image } = props.car;


  return (
     <View style={styles.carContainer}>

       <ImageBackground 
          source={image}
          style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {taggline}
            {' '}
            <Text style={styles.subtitleCTA}>
              {taglineCTA}
            </Text>
            </Text>
       </View>
       
      <View style={styles.buttonsContainer}>

      <StyledButtom 
         type="primary" 
         content={"Custom Order"} 
         onPress={() => {
         console.warn("Custom Order button was Pressed")
       }}/>

      <StyledButtom 
        type="secondary" 
        content={"Existing Inventory"} 
        onPress={() => {
         console.warn("Existing Inventory button was Pressed")
       }}/>
        
        </View> 

      </View>
    );

};

export default CarItem;