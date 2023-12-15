import { StyleSheet, Dimensions } from "react-native";
const widthScreen = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  layoutGrid: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth:1
  },
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  column1:{
    width:50,
    justifyContent: "center",
    alignItems: "center",
  },
  boxIcon:{
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  icon:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  layoutTextHeader:{
    color: 'green'
  },
  stt:{
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userName:{
    width: 170,
    marginRight:10
  },
  position:{
    width: 80
  },

});

export default styles;