import React, { useEffect, useRef } from "react";

function Profile3dCard({ scrollIndex }) {
  const wrapRef = useRef();

  useEffect(() => {
    if (scrollIndex !== 0) return;
    let wrap;
    let x = 0,
      y = 0;

    let mx = 0,
      my = 0;

    let isMobile = false;
    let isIos = false;

    function init() {
      wrap = document.querySelector(".contentWrap");
      isMobile = mobileChk();
      isIos = iosChk();

      if (isMobile) {
        // 모바일
        if (isIos) {
          //ios일때만 실행
          if (DeviceOrientationEvent.requestPermission) {
            DeviceOrientationEvent.requestPermission()
              .then(function () {
                // console.log('DeviceOrientationEvent, DeviceMotionEvent enabled');
                mobileOrientationChk();
              })
              .catch(console.error);
          } else {
            mobileOrientationChk();
          }
        } else {
          mobileOrientationChk();
        }

        function mobileOrientationChk() {
          window.addEventListener("deviceorientation", function (event) {
            //디바이스가 움직임 감지될때 실행
            x = event.gamma;
            y = event.beta;
          });
          loopMobile();
        }
      } else {
        // PC
        window.addEventListener("mousemove", function (e) {
          x = e.clientX - window.innerWidth / 2;
          y = e.clientY - window.innerHeight / 2;
        });
        loop();
      }
    }

    function loopMobile() {
      mx += (x - mx) * 0.1;
      my += (y - my) * 0.1;
      // 가속도 설정. 뒤의 값을 변경하면 가속도 값 변경

      wrap.style.transform = `translate3d(-50%, -50%, 0) rotateX(${
        my - 70
      }deg) rotateY(${mx}deg)`;

      window.requestAnimationFrame(loopMobile);
    }

    function loop() {
      mx += (x - mx) * 0.1;
      my += (y - my) * 0.1;
      // 가속도 설정. 뒤의 값을 변경하면 가속도 값 변경

      wrap.style.transform = `translate3d(-50%, -50%, 0) rotateX(${
        my / 12
      }deg) rotateY(${-mx / 12}deg)`;

      window.requestAnimationFrame(loop);
    }

    function mobileChk() {
      let mobileKeyWords = [
        "Android",
        "iPhone",
        "iPad",
        "BlackBerry",
        "Windows CE",
        "SAMSUNG",
        "LG",
        "MOT",
        "SonyEricsson",
      ];

      for (let info in mobileKeyWords) {
        if (navigator.userAgent.match(mobileKeyWords[info]) !== null) {
          return true;
        }
      }
      return false;
    }

    function iosChk() {
      let mobileKeyWords = ["iPhone", "iPad"];
      for (let info in mobileKeyWords) {
        if (navigator.userAgent.match(mobileKeyWords[info]) !== null) {
          return true;
        }
      }
      return false;
    }
    init();

    return () => {
      window.removeEventListener("mousemove", function (e) {
        x = e.clientX - window.innerWidth / 2;
        y = e.clientY - window.innerHeight / 2;
      });
      window.removeEventListener("deviceorientation", function (event) {
        //디바이스가 움직임 감지될때 실행
        x = event.gamma;
        y = event.beta;
      });
    };
  }, [scrollIndex]);

  return (
    <div className="contentWrap" ref={wrapRef}>
      <div className="front">
        <h1 />
        <div className="sun"></div>
        <div className="cloud1"></div>
        <div className="cloud2"></div>

        <div className="m1"></div>
        <div className="m2"></div>
        <div className="snow"></div>
        <div className="m3"></div>
        <div className="cow"></div>
      </div>

      <div className="back">
        <p className="msg">
          안녕하세요! 프론트엔드 개발자 오주영입니다!
          <br />잘 부탁드립니다!
        </p>
        <h3>from. OhJooYeong</h3>
      </div>
    </div>
  );
}

export default Profile3dCard;
