import {StyleSheet } from 'react-native';
import Constants from 'expo-constants';



export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop:Constants.statusBarHeight + 20,        
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    incident:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16,
        marginTop:15,
    },
    incidentProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
        marginTop:24,
    },
    incidentValues:{
        marginTop:8,
        fontSize:15,
        color:'#737380'
    },
    contacBox:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16,
        marginTop:15,
    },
    heroTitle:{
        fontSize:20,
        color:'#13131a',
        fontWeight:'bold',
        marginTop:30,
    },
    heroTitleDescription:{
         fontSize:15,
         color:"#737380",
         marginTop:16,
    },
    actions:{
        marginTop:16,
        flexDirection:'row', 
        justifyContent:'space-between',
        
    },
    action:{
        backgroundColor:'#e02041',
        borderRadius:8,
        height:50,
        width:'48%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionText:{
        color:'#000',
        fontSize:15,
        fontWeight:'bold',
    }
});