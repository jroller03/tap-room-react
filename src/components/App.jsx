import React from "react";
import Header from "./Header";
import KegList from "./KegList";
import Admin from "./Admin";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404";
import waffles from "../assets/images/waffles.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          id: 5,
          name: "Pirahna",
          city: "Chandler",
          ABV: "ABV:5.6",
          IBU: "IBU:35",
          cost: "9 per pint",
          description:
            "Piranha Pale Ale is a American Pale Ale (APA) style beer brewed by BJ's Restaurant & Brewhouse in Chandler, AZ."
        },
        {
          id: 2,
          name: "Yuengling",
          city: "Pottsville",
          ABV: "ABV:4.2",
          IBU: "IBU:80",
          cost: "9 per pint",
          description:
            "Famous for its rich amber color and medium-bodied flavor with roasted caramel malt for a subtle sweetness and a combination of cluster and cascade hops, this true original delivers a well-balanced taste with very distinct character. Born from a historic recipe that was resurrected in 1987, Yuengling Traditional Lager is a true classic."
        },
        {
          id: 1,
          name: "Goose Island IPA",
          city: "Chicago",
          ABV: "ABV:5.9",
          IBU: "IBU:80",
          cost: "9 per pint",
          description:
            "Our India Pale Ale recalls a time when ales shipped from England to India were highly hopped to preserve their distinct taste during the long journey. The result is a hop lover’s dream with a fruity aroma, set off by a dry malt middle, and long hop finish."
        }
      ]
    };
  }

  editKeg(editKeg) {
    const kegs = this.state.masterKegList;
    const keg = kegs.filter(item => item.id === editKeg.id)[0];
    Object.assign(keg, editKeg);

    this.setState({ masterKegList: kegs });
  }

  deleteKeg(deleteKeg) {

    this.setState({
      masterKegList: this.state.masterKegList.filter(
        keg => keg.id !== deleteKeg.id
      )
    });
  }
  addKeg(newKeg) {
    this.setState({ masterKegList: [...this.state.masterKegList, newKeg] });
  }

  componentWillUnmount() {}

  render() {
    return <div>
        <style global jsx>
          {`
            document {
              height: 100%;
            }
            html {
              margin: 0;
              padding: 0;
              height: 100%;
            }
            @import url("https://fonts.googleapis.com/css?family=Amatic+SC|Pacifico");
            h1 {
              margin-bottom: 35px;
            }
            h2 {
              color: red;
            }

            .panel {
              border:0px;
            }
            .btn {
              margin: 10px;
              border-top-width: 3px;
              border-right-width: 3px;
              border-bottom-width: 3px;
              border-left-width: 3px;
              border-color: red;
            }
            #editForm {
              float: right;
              position: fixed;
              bottom: 0;
              right: 0;
              width: 150px;
              border: 3px solid red;
            }
            #addForm {
              float: right;
              position: fixed;
              top: 0;
              right: 0;
              width: 150px;
              border: 3px solid red;
            }'
            body {
              font-family: "Amatic SC", cursive;
              color: brown;
              margin: 0;
              padding: 0;
              height: 100%;
              background-repeat: no-repeat;
            }`}
        </style>
        <Header />
        <Switch>
          <Route exact path="/" render={props => <KegList {...props} masterKegList={this.state.masterKegList} />} />
          <Route path="/Admin" render={props => <Admin {...props} masterKegList={this.state.masterKegList} addKeg={keg => this.addKeg(keg)} editKeg={editKeg => this.editKeg(editKeg)} deleteKeg={deleteKeg => this.deleteKeg(deleteKeg)} />} />
          <Route component={Error404} />
        </Switch>
      </div>;
  }
}
export default App;
