

import classes from './NumberStats.module.css';

const NumberStats = (props) => {
  return (
    <div className={classes.numberStats__single}>
      <div className={classes.numberStats__number}>{props.number}</div>
      <div className={classes.numberStats__text}>{props.text}</div>
    </div>
  )
}

export default NumberStats;