import classes from "../../styles/plan.module.css";

export default function Plan() {
  return (
    <main className={classes.plan}>
      <h1 className={classes.title}>خطـــة الحفظ</h1>

      <ul className={classes.tasksTable}>
        <li className={[classes.task, classes.done].join(" ")}>
          <span>1</span>
          <p>3 أرباع</p>
        </li>
        <li className={[classes.task, classes.doing].join(" ")}>
          <span>2</span>
          <p>3 أرباع</p>
        </li>
        <li className={classes.task}>
          <span>3</span>
          <p>3 أرباع</p>
        </li>
        <li className={classes.task}>
          <span>4</span>
          <p>3 أرباع</p>
        </li>
        <li className={classes.task}>
          <span>5</span>
          <p>3 أرباع</p>
        </li>
      </ul>
    </main>
  );
}
