import { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";

import { COLORS, NFTData } from "../constants";
import { NFTCard, FocusedStatusBar, HomeHeader } from "../components";
function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
    </SafeAreaView>
  );
}

export default Home;
