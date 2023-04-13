import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccordeonItem.module.scss';
import $ from 'jquery';
import { useEffect, useRef } from 'react';
function AccordeonItem({header, children,...props}) {
    const headerRef = useRef();
    useEffect(() => {
        let toggleContainer = (event) => {
            $(event.target).parent().toggleClass(styles.open);
            $(event.target).next().slideToggle('fast');
        }
        headerRef.current.addEventListener('click', toggleContainer)
        return () => headerRef.current.removeEventListener('click', toggleContainer)
    },[]);
    return ( 
        <div className={styles.accordeonItem} {...props}>
            <div className={styles.accordeonHeader} ref={headerRef}>
                {header}
                <FontAwesomeIcon icon="fa-solid fa-chevron-down"/>
            </div>
            <div className={styles.accordeonContent}>
                {children}
            </div>
        </div>
     );
}

export default AccordeonItem;