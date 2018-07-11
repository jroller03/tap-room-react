import React from "react";

class NewKegForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      name: props.name,
      city: props.city,
      cost: props.cost,
      description: props.description,
      IBU: props.IBU,
      ABV: props.ABV
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { name, city, cost, description, IBU, ABV } = this.state;
    return (
      <div>
        <div className="container">
          <div id="editForm" className="col-md-6">
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
                    this.props.editKeg(this.state);
                    this.setState({ success: true });
                  }
                }}
                className="btn btn-info"
                type="submit"
              >
                Edit Keg!
              </button>


            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewKegForm;
