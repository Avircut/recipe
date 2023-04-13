import AccordeonItem from "../../components/ui/AccordeonItem/AccordeonItem";
import MenuItem from "../../components/ui/MenuItem/MenuItem";
import PageWrapper from "../../components/ui/PageWrapper/PageWrapper";
import SearchField from "../../components/ui/SearchField/SearchField";
import styles from "./Menu.module.scss";
function Menu() {
  return (
    <PageWrapper>
      <div className={styles.menu}>
        <div className="content-wrapper">
          <SearchField />
          <div className={styles.accordeonList}>
            <AccordeonItem header="Тип блюда">
              <div className={styles.menuList}>
                <MenuItem name={'Первое'} imgSrc={'./main-bg.png'}/>
              </div>
            </AccordeonItem>
            <AccordeonItem header="Ингридиенты" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Menu;
