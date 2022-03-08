import React from "react";
import styles from "./profileCard.module.css";
import "./profileCard.css";

function ProfileCard() {
  return (
    // <div className={styles.container}>
    //   <div className={styles.book}>
    //     <div className={styles.cover}></div>

    //     <div className={styles.page}>
    //       <div className={styles.page_content}>
    //         <img src="/image/milky-way.jpg" alt="" />
    //         <h2>와우</h2>
    //       </div>
    //     </div>

    //     <div className={styles.last_page}>
    //       <img src="/image/milky-way.jpg" alt="" />
    //       <h2>와우</h2>
    //     </div>
    //     <div className={styles.back_cover}></div>
    //   </div>
    // </div>
    <div className="container">
      <div id="book">
        <div id="top"></div>
        <div id="front"></div>
        <div id="right"></div>
        <div id="bottom"></div>
        <div id="shadow"></div>
        <div id="bookmark">
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div id="bookmark-shadow"></div>
      </div>
      <div id="flip">
        <div id="front">
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="back">
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
