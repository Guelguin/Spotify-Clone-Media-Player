import { Text } from "@nextui-org/react";
import { ReactElement } from "react";

import styles from "./../../../styles/Case.module.css"

export const AlbumCase = (props: any): ReactElement => {
  return (
      <div className={styles.page +" "+ styles.flex +" "+ styles.justify_center +" "+ styles.items_center}>
        <div className={styles.disk_container}>
          <div className={styles.disk +" "+ styles.show_side}>
            <div className={styles.disk_face +" "+ styles.disk_cover +" "+ styles.shadow_2xl}>
             
              <div className={styles.bottom}>
                <img src={props.track.cover} />
              </div>
            </div>
            <div className={styles.disk_side +" " + styles.shadow_2xl}>
              <div className={styles.top  +" "+ styles.flex +" "+ styles.justify_center +" "+ styles.items_center}></div>
              <div className={styles.bottom  +" "+ styles.flex +" "+ styles.justify_center +" "+ styles.items_center}>
                <h3>{props.track.album}</h3>
              </div>
            </div>
            <div className={styles.disk_face +" "+ styles.disk_back}></div>
          </div>
        </div>
      </div>
  );
};
