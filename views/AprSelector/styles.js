import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    
  },
  title: {
    fontSize: 16,
    fontFamily:'Inter_500Medium',
    color: '#424242',
    marginTop: '10%',
    marginBottom: '-2%',
  },
  listOptions: {
    marginVertical: '10%',
    height: 100
  },
  buttonSelect:{
    width:300,
    borderRadius:10,
    borderWidth: 3,
    textAlign: 'left',
    
  },
  buttonSelectDefault:{
    borderColor: '#ddd',
  },
  buttonSelectSelected:{
    borderColor: '#1295FA',
  }
})