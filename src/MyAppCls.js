import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { storeAction } from "./Actions";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function MyAppCls() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const myStoreData = useSelector((state) => state);
  console.log(myStoreData, "==");

  const [age, setAge] = useState("");
  const [BoxValue, setBoxValue] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleBoxValue = (event) => {
    setBoxValue(event.target.value);
  };
  const handleMyButton = () => {
    dispatch(storeAction);
  };
  return (
    <div>
      <h1>
        Material ui ( {age} {BoxValue} ) {myStoreData && myStoreData.myData}
      </h1>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>let'ssee</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={handleBoxValue}
        />
      </form>
      <button onClick={handleMyButton}>click to dispatch</button>
    </div>
  );
}
export default MyAppCls;
