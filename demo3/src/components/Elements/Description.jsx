import css from "./description.module.css";

import text from "../../assets/descriptionText";

export default function Description() {
  return (
    <div className={css.description}>
      <h2>{text.title}</h2>
      <p>{text.p1}</p>
      <p>{text.p2}</p>
    </div>
  );
}
