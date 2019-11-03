import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateNameAction } from "./actions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      open: false,
      name: ""
    };
  }

  previousSlide = e => {
    const { imageData } = this.props;
    const lastIndex = imageData.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  nextSlide = e => {
    const { imageData } = this.props;
    const lastIndex = imageData.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  };
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };
  handleTag = e => {
    this.setState({
      open: false
    });
    debugger;
    this.props.updateNameAction({ id: e, name: this.state.name });
  };
  handleChange = e => {
    this.setState({
      ...this.state,
      name: e.target.value
    });
  };
  render() {
    const { imageData } = this.props;
    const item = imageData[this.state.currentImageIndex];
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />

        <div className={`image-slide `}>
          <div className="image-container">
            <img src={item.url} style={{ width: "500px" }}></img>
            <div className="image-label">{item.name}</div>
          </div>
        </div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Tag Name
        </Button>

        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Tag Name"}</DialogTitle>
          <DialogContent>
            <TextField
              id="outlined-basic"
              label="Outlined"
              margin="normal"
              variant="outlined"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <Button
              onClick={() => this.handleTag(item.id)}
              color="primary"
              autoFocus
            >
              Tag
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);

const mapDispatchtoProps = dispatch =>
  bindActionCreators(
    {
      updateNameAction: updateNameAction
    },
    dispatch
  );

const mapStateToProps = state => {
  const { imageData } = state;
  return {
    imageData
  };
};

const imageCarousel = connect(
  mapStateToProps,
  mapDispatchtoProps
)(Carousel);
export { imageCarousel as Carousel };
