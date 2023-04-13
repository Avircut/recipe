import styles from "./TagGroup.module.scss";
function TagGroup({ tags, clickable,color, ...props }) {
  return (
    <div {...props} className={styles.tagGroup}>
      {clickable
        ? tags.map((tag) => (
            <a key={tag.id} href={tag.link} className={styles.tag + " " + color}>
              {tag.name}
            </a>
          ))
        : tags.map((tag) => (
            <div key={tag.id} className={styles.tag}>
              {tag.name}
            </div>
          ))}
      {}
    </div>
  );
}

export default TagGroup;
