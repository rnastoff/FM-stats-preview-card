import classes from './StatsPreviewCard.module.css';
// import headerDesktop from '../images/image-header-desktop.jpg';

import Card from './Card';
import NumberStats from './NumberStats';


const StatsPreviewCard = () => {
  return (
    <Card>
      <div className={classes.left}>
        <h1>Get <span className={classes.purple}>insights</span> that help
          your business grow.</h1>
        <p>Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>

        <div className={classes.numberStats__group}>
          <NumberStats number={"10k+"} text={"COMPANIES"} />
          <NumberStats number={"314"} text={"TEMPLATES"} />
          <NumberStats number={"12M+"} text={"QUERIES"} />
        </div>
      </div>

      <div className={classes.right}>
        <div className={classes.right__overlay}></div>
      </div>
    </Card>
  )
}

export default StatsPreviewCard;