import { useEffect, useId, useRef } from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import styles from "./OptionItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function OptionItem({ text, src, style, link, background ,icon}) {
  const player = useRef(null);
  const id = useId();
  const containerId = useId();
  // useEffect(() => {
  //     const hoverHandler = (e)=>{
  //         create({
  //             mode:'cursor',
  //             container:`#${CSS.escape(containerId)}`,
  //             player:`#${CSS.escape(id)}`,
  //             actions:[
  //                 {
  //                     type: "loop",
  //                 },
  //             ]
  //         })
  //     };
  //     player.current.addEventListener('load', hoverHandler);
  //     return () => player.current.removeEventListener('load',hoverHandler);
  // },[])
  return (
    <Link to={link} className={styles.optionsItem} id={containerId}>
      <div className={styles.backgroundWrapper}>
        <img src={background} className={styles.backgroundImage} alt="" />
      </div>
      {/* <lottie-player
        ref={player}
        id={id}
        loop
        hover
        mode="normal"
        src={src}
        style={style}
      ></lottie-player> */}
      <div className={styles.optionsText}>
        <FontAwesomeIcon icon={icon} size="xl"/>
        <p>{text}</p> 
      </div>
    </Link>
  );
}

export default OptionItem;
