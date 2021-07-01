import "./Testimonials.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Thomas from "../Images/people/image-thomas.jpg";
import Jennie from "../Images/people/image-jennie.jpg";
import Emily from "../Images/people/image-emily.jpg";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  return (
    <div className="testimonials">
      <h1>Client Testimonials</h1>
      <div className="testimonials__clients">
        <section>
          <Avatar
            src={Thomas}
            alt="Thomas avatar"
            style={{ marginBottom: 50 }}
            className={classes.large}
          />
          <div>
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <div className="testimonials__avatar__info">
              <h3>Thomas S.</h3>
              <p>Chief Operating Officer</p>
            </div>
          </div>
        </section>

        <section>
          <Avatar
            className={classes.large}
            style={{ marginBottom: 50 }}
            src={Jennie}
            alt="Jennie avatar"
          />
          <div>
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div className="testimonials__avatar__info">
              <h3>Jennie F.</h3>
              <p>Business Owner</p>
            </div>
          </div>
        </section>

        <section>
          <Avatar
            className={classes.large}
            style={{ marginBottom: 50 }}
            src={Emily}
            alt="Emily avatar"
          />
          <div>
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div className="testimonials__avatar__info">
              <h3>Emily R.</h3>
              <p>Marketing Director</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
