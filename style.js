import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container : {
    flex: 1,
        paddingHorizontal: 24,
        marginTop: 40,
        backgroundColor: "rgb(255, 68, 68)",
  },
  lembreteView : {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  lembreteTextInput: {
    width: '80%',
    height: 55,
    backgroundColor: '#FFF',
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 5,
    color: '#999',
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10

  },
  itemNaLista: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
  },
  listaTitle: {
      fontSize: 14,
      color: '#41414D',
      fontWeight: 'bold',
  },

  listaPhone: {
      marginTop: 8,
      fontSize: 15,
      color: '#737380',
  },
  datailsButton: {
    borderRadius: 8,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "rgb(255, 68, 68)",
    alignItems: 'center'
  },
  detailsButtonText: {
    color:'#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  welcome: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  welcomeTitle: {
    marginBottom: 10,
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#F5F5F8',
  },

});