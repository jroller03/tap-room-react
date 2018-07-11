import React from "react";
import Keg from "./Keg";
import { Panel } from "react-bootstrap";

var ListStyling = {
  textAlign: "center",
  width: "300px",
  backgroundColor: "transparent"
};

class KegList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    if (this.props.masterKegList) {
      return (
        <div>
          <div className="container">
            <div className="col-md-6">
              <Panel style={ListStyling}>
                <h2>
                  <strong>K'Eggo list</strong>
                </h2>
                {this.props.masterKegList.map((keg, index) => {
                  return (
                    <div key={index}>
                      {this.props.admin && (
                        <div>
                          <button
                            className="btn btn-outline-warning"
                            onClick={() => this.props.deleteKeg(keg)}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-outline-warning"
                            onClick={() => this.props.editKeg(keg)}
                          >
                            Edit
                          </button>
                        </div>
                      )}
                      <Keg
                        name={keg.name}
                        city={keg.city}
                        ABV={keg.ABV}
                        IBU={keg.IBU}
                        cost={keg.cost}
                        description={keg.description}
                      />
                    </div>
                  );
                })}
              </Panel>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Failure</div>;
    }
  }
}

export default KegList;
