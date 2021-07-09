import React from 'react'
import { Card } from '@material-ui/core'
import './css/ChartsSecondRow.css'
import { Timeline } from '@material-ui/icons'
import ChartistGraph from 'react-chartist'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const ChartsSecondRow = () => {

  var data1 = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
      [78, 80, 84, 63, 74, 78, 82, 70, 68, 78]
    ]
  };


  var data2 = {
    labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
    series: [
      [78, 66, 82, 90, 70, 63],
      [60, 75, 90, 85, 69, 80],
      [86, 80, 70, 80, 74, 90]
    ]
  };

  var options1 = {
    high: 100,
    low: 0,
    height: 300,
    axisX: {
      showGrid: false,

    }
  };


  var options2 = {
    low: 0,
    high: 100,
    height: 300,
    showPoint: false,

    lineSmooth: false,

    axisX: {

      showGrid: false,

    },

    axisY: {

      offset: 60,

    }
  };

  var type1 = 'Line'
  var type2 = 'Line'


  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: "6px",
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="scrContainer">
      <div className="scrItem">
        <Card>
          <div className="srcTitle">
            
              <div>OEE</div>
              <div>
                <select name="cars" id="cars" form="carform">
                  <option value="volvo">Overall</option>
                  <option value="saab">Workstation1</option>
                  <option value="opel">Workstation2</option>
                  <option value="audi">Workstation3</option>
                </select>
             
            </div>
            <div>
              {/* <FormControl variant="outlined" className={classes.formControl}>
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
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
            </div>
          </div>
          <div className="srcChartItem">
            <ChartistGraph data={data1} options={options1} type={type1} />
          </div>
        </Card>
        <div className="scrIcon first">
          <Timeline />
        </div>

      </div>
      <div className="scrItem">
        <Card>
          <div className="srcTitle second">Performance<div></div>  Availibility<div></div>  Quality<div></div></div>
          <div className="srcChartItem">
            <ChartistGraph data={data2} options={options2} type={type2} />
          </div>
        </Card>
        <div className="scrIcon second">
          <Timeline />
        </div>

      </div>

    </div>
  )
}
