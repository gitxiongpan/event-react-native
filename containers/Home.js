import React from "react";
import { SafeAreaView } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import { connect } from "react-redux";
import { TopTabs } from "../components/TopTabs";
import { ThemeContext } from "../theme-context";

const HomeScreen = (props) => {
  const themeContext = React.useContext(ThemeContext);

  const navigateDetails = () => {
    props.navigation.navigate("Details");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopTabs />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button style={{ marginVertical: 4 }} onPress={navigateDetails}>
          OPEN DETAILS
        </Button>
        <Button
          style={{ marginVertical: 4 }}
          onPress={themeContext.toggleTheme}
        >
          TOGGLE THEME {props.count}
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  count: state.user.count,
});

export default connect(mapStateToProps, {})(HomeScreen);
