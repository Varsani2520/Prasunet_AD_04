import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.playerContainer}>
        <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg' }} style={styles.avatar} />
        <Text style={styles.playerText}>Player 1 </Text>
        <Text style={styles.contentText}>X </Text>
      </View>
      <Image source={{ uri: 'https://t4.ftcdn.net/jpg/03/14/06/47/360_F_314064760_kYuSNOW983FhCgbnCsiXvevPDcK3ZyG9.jpg' }} style={styles.avatar} />      <View style={styles.playerContainer}>
        <Image source={{ uri: 'https://img.freepik.com/premium-photo/business-woman-3d-cartoon-avatar-portrait_839035-520858.jpg' }} style={styles.avatar} />
        <Text style={styles.playerText}>Player 2 </Text>
        <Text style={styles.contentText}>0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 20,
    marginTop:30
  },
  playerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'white',
    borderRadius:'15px',
    width:'100px',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginBottom:10,
    position:"relative",
    top:"-20px",
    borderColor:'white',
    borderWidth:3
  },
  playerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentText:{
    backgroundColor:'red',
    borderRadius:'15px',
    padding:'10px',
    width:'50px',
    color:'white',
    textAlign:'center',
    marginBottom:'10px',
    marginTop:'10px'
  }
});

export default Header;
