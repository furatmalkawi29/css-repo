import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/Favorite';

let chipArr = [
  { key: 0, label: 'Yoga' },
  { key: 1, label: 'Painting' },
  { key: 2, label: 'Programming' },
  { key: 3, label: 'Hiking' },
  { key: 4, label: 'React' },
];


const styles = theme => ({
  root: {
    // position: "absolute",
    // top:"27em",
    marginRight: theme.spacing.unit *6,
    marginLeft: theme.spacing.unit *6,
    height:theme.spacing.unit *(chipArr.length*3),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit,
    backgroundColor: "#f6f2fa",
    borderRadius:".4em"

  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class ChipsArray extends React.Component {
  state = {
    chipData: chipArr,
  };

  handleDelete = data => () => {

    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        {this.state.chipData.map(data => {
          let avatar = (
              <Avatar>
                <TagFacesIcon style={{ color: "#00dbed", fontSize:"small" }} className={classes.svgIcon} />
              </Avatar>
            );

          return (
            <Chip
              key={data.key}
              avatar={avatar}
              label={data.label}
              onDelete={this.handleDelete(data)}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    );
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipsArray);