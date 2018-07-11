import React from "react";

class NewKegForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Math.random()
        .toString(36)
        .substring(7),
      name: "",
      city: "",
      cost: 0,
      description: "",
      IBU: "",
      ABV: ""
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { name, city, cost, description, IBU, ABV } = this.state;
    return (
      <div>
        <div className="container">
          <div id="addForm" className="col-md-6">
            <br />
            <form>
              <input
                type="text"
                id="name"
                placeholder="Beer Name"
                value={name}
                onChange={event => {
                  this.setState({ name: event.target.value });
                }}
              />
              <br />
              <input
                type="text"
                id="city"
                placeholder="city"
                value={city}
                onChange={event => {
                  this.setState({ city: event.target.value });
                }}
              />
              <br />
              <input
                id="Cost"
                placeholder="Cost"
                type="number"
                value={cost}
                onChange={event => {
                  this.setState({ cost: event.target.value });
                }}
              />
              <br />
              <textarea
                id="description"
                placeholder="Description"
                value={description}
                onChange={event => {
                  this.setState({ description: event.target.value });
                }}
              />
              <br />
              <input
                id="ABV"
                placeholder="ABV%"
                value={ABV}
                onChange={event => {
                  this.setState({ ABV: event.target.value });
                }}
              />
              <br />
              <input
                id="IBU"
                placeholder="IBU%"
                value={IBU}
                onChange={event => {
                  this.setState({ IBU: event.target.value });
                }}
              />
              <br />
              <button
                disabled={!(name && city && cost && description && IBU && ABV)}
                onClick={() => {
                  if (name && city && cost && description && IBU && ABV) {
                    this.props.addKeg(this.state);
                    this.setState({
                      id: Math.random()
                        .toString(36)
                        .substring(7),
                      name: "",
                      city: "",
                      cost: 0,
                      description: "",
                      IBU: "",
                      ABV: ""
                    });
                  }
                }}
                className="btn btn-info"
                type="submit"
              >
                ADD Keg!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewKegForm;
