import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize:25,
    color: "#424242",
    fontFamily: "Inter_500Medium",
    marginVertical:10
  },
  titleBox:{
    width:"100%",
    alignItems: "center"
  },
  text:{
    fontFamily: "Inter_300Light",
    fontSize:16,
    lineHeight:22,
    textAlign: "justify",
    width:"70%",
  },
  animationItem:{
    backgroundColor:'transparent',
    width:100,
    padding:0,
    margin:0
  },
  infoBox:{
    justifyContent: 'space-between',
    width:"80%",
    marginVertical:20,
    flexDirection:"row",
  },
})