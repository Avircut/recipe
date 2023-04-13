import TagGroup from "../TagGroup/TagGroup";
import styles from "./MenuItem.module.scss";
function MenuItem({  tags, color, name, imgSrc }) {
  return (
    <div className={styles.menuItem}>
      <div className={styles.content}>
        <p className={styles.menuTitle}>{name}</p>
        {tags && <TagGroup clickable={false} color={color} tags={tags}/>}
      </div>
      <img src={imgSrc} alt={name} />
    </div>
  );
}

export default MenuItem;
