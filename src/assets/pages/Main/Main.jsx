import OptionItem from "../../components/ui/OptionItem/OptionItem";
import PageWrapper from "../../components/ui/PageWrapper/PageWrapper";
import styles from "./Main.module.scss";
function Main() {
  return (
    <PageWrapper>
      <div className={styles.screen}>
        <div className={styles.contentWrapper + " content-wrapper"}>
          <div className={styles.inner}>
            <div className={styles.text}>
              <p className={styles.today}>Сегодня</p>
              <p className={styles.date}>
                <span>29</span> августа
              </p>
              <p className={styles.desc}>
                Отличный день, чтобы попробовать что-то новое!
              </p>
            </div>
            <img src="/main-bg.png" alt="" className="screen-bg" />
          </div>
        </div>
      </div>
      <div className={styles.options}>
        <div className="content-wrapper">
          <div className={styles.optionsInner}>
            <OptionItem
              icon="fa-solid fa-dice"
              text="Наугад"
              style={{ width: 320, height: 480 }}
              link="/lol"
              background="/options/1.jpg"
            />
            <OptionItem
              icon="fa-regular fa-square-plus"
              text="Новый рецепт"
              style={{ width: 160, height: 480 }}
              link="/lol"
              background="/options/2.jpg"
            />
            <OptionItem
              icon="fa-solid fa-magnifying-glass"
              text="Найти"
              style={{ width: 160, height: 480 }}
              link="/lol"
              background="/options/3.jpg"
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Main;
