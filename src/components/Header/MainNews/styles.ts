import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listContainer:{
        marginTop:20,
    },
    container:{
        paddingHorizontal:20,
        borderRadius:10,
        overflow: 'hidden',
        width: 300,
    },
    whiteDev:{
        backgroundColor:"rgba(255,255,255,0.7)",
        padding:10,
        marginTop:100,
        marginBlock:20,
        marginHorizontal:20 ,
        borderRadius:14
    },
    RedDev:{
        backgroundColor:"red",
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:4,
        alignSelf:"flex-start"
    },
    deadlineText:{
        color:"white",
        fontWeight:"bold",
        fontSize:12,
    },
    name:{
        color:"black",
        marginTop:10,
        lineHeight:1.5,
    },
})