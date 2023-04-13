import styles from "./SearchField.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
function SearchField(props) {
  let iconRef = useRef();
  let inputRef = useRef();
  useEffect(() => {
    const applyFilter = () => {};
    if(iconRef && iconRef.current){
      iconRef.current.addEventListener("click", applyFilter);
      return () => iconRef.current.removeEventListener("click", applyFilter);  
    }
  }, []);
  return (
    <div className={styles.wrapper}>
      <input
        {...props}
        className={styles.input}
        ref={inputRef}
        type="text"
        placeholder="Что бы вы хотели сегодня?"
      />
      <FontAwesomeIcon
        ref={iconRef}
        className={styles.icon}
        icon="fa-solid fa-magnifying-glass"
      />
    </div>
  );
}

export default SearchField;
