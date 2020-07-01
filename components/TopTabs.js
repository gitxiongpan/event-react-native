import React from "react";
import { Icon, Tab, TabBar } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  TabBar: {
    marginTop: 20,
    alignSelf: "stretch",
  },
});

const RestaurantIcon = (props) => <Icon {...props} name="star-outline" />;

const PersonIcon = (props) => <Icon {...props} name="smiling-face-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

const EmailIcon = (props) => <Icon {...props} name="email-outline" />;

export const TopTabs = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <TabBar
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
      style={styles.TabBar}
    >
      <Tab icon={RestaurantIcon} title="Food" />
      <Tab icon={PersonIcon} title="Shopping" />
      <Tab icon={PersonIcon} title="Hotel" />
      <Tab icon={BellIcon} title="Coupon" />
      <Tab icon={EmailIcon} title="Service" />
    </TabBar>
  );
};
