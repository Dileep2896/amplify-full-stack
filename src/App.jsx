import logo from "/vite.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

// eslint-disable-next-line react-refresh/only-export-components
const App = ({ signOut }) => {
  return (
    <View>
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withAuthenticator(App);
