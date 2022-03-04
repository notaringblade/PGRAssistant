import React, { useState } from "react";
import { View, Text, Switch, Button } from "react-native";
import ListOfConstructs from "./ListOfConstructs";
import HomeScreen from "../HomeScreen";
import styles from "./styles";
import CompleteFlatList from "react-native-complete-flatlist";
import { FAB, Overlay, Divider } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

const ConstructList = ({ route, navigation }) => {
  //FilterButton
  const {characterIndex} = route.params
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  // All
  const [showAll, setShowAll] = useState(true);

  //Rank Filter
  const [showRankFilter, setShowRankFilter] = useState(false);
  const [rankFilterA, setRankFilterA] = useState(false);
  const [rankFilterS, setRankFilterS] = useState(false);
  const [rankFilter, setRankFilter] = useState("");
  const [filter, setFilter] = useState();

  //Battle Type Filter
  const [showBattleType, setShowBattleType] = useState(false);
  const [battleTypeFilter, setBattleTypeFilter] = useState("");

  //ConstructTYpe Filter
  const [showConstructType, setShowConstructType] = useState(false);
  const [attackerType, setAttackerType] = useState(false);
  const [tankType, setTankType] = useState(false);
  const [supportType, setSupportType] = useState(false);
  const [constructTypeFilter, setConstructTypeFilter] = useState("");

  const filterOptions = () => {
    setShowFilterOptions(!showFilterOptions);
  };
  const setAll = () => {
    setShowAll(true);
    setShowRankFilter(false);
    setRankFilterA(false);
    setRankFilterS(false);
    setShowBattleType(false);
    setShowConstructType(false)
    setAttackerType(false);
    setSupportType(false)
    setTankType(false)
  };
  const setS = () => {
    setShowAll(false);
    setShowRankFilter(true);
    setRankFilterA(false);
    setShowConstructType(false)
    setRankFilterS(true);
    setShowBattleType(false);
    setAttackerType(false);
    setSupportType(false)
    setTankType(false)
    setRankFilter("S");
  };
  const setA = () => {
    setShowAll(false);
    setShowRankFilter(true);
    setRankFilterS(false);
    setShowConstructType(false)
    setRankFilterA(true);
    setShowBattleType(false);
    setAttackerType(false);
    setSupportType(false)
    setTankType(false)

    setRankFilter("A");
  };
  const setBattleTypeT = () => {
    setShowAll(false);
    setShowRankFilter(false);
    setShowBattleType(true);
    setShowConstructType(false)
    setRankFilterA(false);
    setRankFilterS(false);
    setAttackerType(false);
    setSupportType(false)
    setTankType(false)
    setBattleTypeFilter("Transcendant");
  };
  const setConstructTypeA = () =>{
    setShowAll(false);
    setShowRankFilter(false);
    setShowBattleType(false);
    setShowConstructType(true)
    setRankFilterA(false);
    setRankFilterS(false);
    setAttackerType(true);
    setTankType(false)
    setSupportType(false)
    setConstructTypeFilter("Attacker");
  }
  const setConstructTypeT = () =>{
    setShowAll(false);
    setShowRankFilter(false);
    setShowBattleType(false);
    setShowConstructType(true)
    setRankFilterA(false);
    setRankFilterS(false);
    setAttackerType(false);
    setTankType(true)
    setSupportType(false)
    setConstructTypeFilter("Tank");
  }
  const setConstructTypeS = () =>{
    setShowAll(false);
    setShowRankFilter(false);
    setShowBattleType(false);
    setShowConstructType(true)
    setRankFilterA(false);
    setRankFilterS(false);
    setAttackerType(false);
    setTankType(false)
    setSupportType(true)
    setConstructTypeFilter("Support");
  }
    const getItemLayout =(data, index)=>{
      return{offset: 155 * index, length: 155, index}
  }

  const ItemSeparator = () => {
    return <View style={styles.ItemSeparator} />;
  };

  return (
    <View style={styles.list}>
      {showAll ? (
        <CompleteFlatList
          searchKey={["construct_Name", "construct_Model", "construct_Battle", "construct_Type"]}
          slide={"Left"}
          initialNumToRender = {39}
          keyExtractor={(item) => item.constructID}
          getItemLayout = {getItemLayout}
          initialScrollIndex = {characterIndex}
          data={ListOfConstructs}
          renderItem={({ item }) => <HomeScreen construct={item} />}
          backgroundStyles={styles.backgroundStyles}
          searchBarBackgroundStyles={styles.searchBarBackgroundStyles}
          renderSeparator={ItemSeparator}
        />
      ) : showRankFilter ? (
        <CompleteFlatList
          searchKey={["construct_Name", "construct_Model", "construct_Battle", "construct_Type"]}
          data={ListOfConstructs.filter(
            (ListOfConstructs) => ListOfConstructs.construct_Rank === rankFilter
          )}
          initialScrollIndex = {0}
          renderItem={({ item }) => <HomeScreen construct={item} />}
          backgroundStyles={styles.backgroundStyles}
          searchBarBackgroundStyles={styles.searchBarBackgroundStyles}
          renderSeparator={ItemSeparator}
        />
      ) : showBattleType ? (
        <CompleteFlatList
          searchKey={["construct_Name", "construct_Model", "construct_Battle", "construct_Type"]}
          data={ListOfConstructs.filter(
            (ListOfConstructs) =>
              ListOfConstructs.construct_Battle === battleTypeFilter
          )}
          initialScrollIndex = {0}
          renderItem={({ item }) => <HomeScreen construct={item} />}
          backgroundStyles={styles.backgroundStyles}
          searchBarBackgroundStyles={styles.searchBarBackgroundStyles}
          renderSeparator={ItemSeparator}
        />
      ) : showConstructType? (
        <CompleteFlatList
            searchKey={["construct_Name", "construct_Model", "construct_Battle", "construct_Type"]}
            data={ListOfConstructs.filter(
            (ListOfConstructs) =>
                ListOfConstructs.construct_Type === constructTypeFilter
            )}
            initialScrollIndex = {0}
            renderItem={({ item }) => <HomeScreen construct={item} />}
            backgroundStyles={styles.backgroundStyles}
            searchBarBackgroundStyles={styles.searchBarBackgroundStyles}
            renderSeparator={ItemSeparator}
      />
      ): null}
            <FAB style={{position: 'absolute', alignSelf: 'center', elevation: 50, marginTop: '120%'}}
              title="Filter"
              icon = {<Icon name="filter" color={'#121212'} size={20}/>}
              onPress={filterOptions}
            />
      <Overlay
        isVisible={showFilterOptions}
        animationType="slide"
        onBackdropPress={filterOptions}
        overlayStyle={{
          backgroundColor: "#121212",
          marginTop: "130%",
          borderRadius: 10,
          alignItems: "center",
        }}
        backdropStyle={{ opacity: 0, backgroundColor: "#121212" }}
      >
        <View style={{ backgroundColor: "#121212", marginTop: 30 }}>

                {/* Rank */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                  alignSelf: 'center',
                }}
              >
                
                {/* Show All Constructs */}
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "white" }}> All</Text>
                  <Switch style={{}} onValueChange={setAll} value={showAll} />
                </View>

                {/* Show S Constructs */}
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "white" }}>S Rank</Text>
                  <Switch style={{}} onValueChange={setS} value={rankFilterS} />
                </View>

                <View style={{ flexDirection: "column" }}>
                  {/* Show A Constructs */}
                  <Text style={{ color: "white" }}>A Rank</Text>
                  <Switch style={{}} onValueChange={setA} value={rankFilterA} />
                </View>
              </View>
            <Divider/>
                
            <Divider/>
              {/* Type */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                  alignSelf: 'center',
                  marginTop: 20
                }}
              >
                
                {/* Show All Constructs */}
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "white" }}>Attackers</Text>
                  <Switch style={{}} onValueChange={setConstructTypeA} value={attackerType} />
                </View>

                {/* Show S Constructs */}
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "white" }}>Tank</Text>
                  <Switch style={{}} onValueChange={setConstructTypeT} value={tankType} />
                </View>

                <View style={{ flexDirection: "column" }}>
                  {/* Show A Constructs */}
                  <Text style={{ color: "white" }}>Support</Text>
                  <Switch style={{}} onValueChange={setConstructTypeS} value={supportType} />
                </View>
              </View>
              <Divider/>
              <Divider/>

              {/* Battle Type */}
              <View style={{
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: 20
                  }}>
                {/* Show Transcendants or Constructs */}
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "white"}}>Transcendants Only
                  </Text>
                  <Switch style={{marginTop: -13}} onValueChange={setBattleTypeT} value={showBattleType} />
                </View>
              </View>
          </View>
      </Overlay>
      
    </View>
  );
};

export default ConstructList;
