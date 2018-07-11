import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editOpen: false };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
            <NewKegForm {...this.props} />
        <KegList
          {...this.props}
          admin={true}
          editKeg={keg => {
            this.setState({ editingKeg: keg, editOpen: true });
          }}
        />
        {this.state.editOpen && (
          <EditKegForm
            {...this.state.editingKeg}
            {...this.props}
            editKeg={keg => {
              this.setState({ editOpen: false });
              this.props.editKeg(keg);
            }}
          />
        )}

      </div>
    );
  }
}

export default Admin;
