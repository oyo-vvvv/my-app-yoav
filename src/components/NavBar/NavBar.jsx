import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { TimelineLite, gsap } from "gsap";
import "./NavBar.css";
import { Helmet } from "react-helmet";
import { useLocation  } from "react-router-dom"


const NavBar = () => {
  const topLeftSliderRef = useRef(null);
  const bottomLeftSliderRef = useRef(null);
  const topRightSliderRef = useRef(null);
  const middleRightSliderRef = useRef(null);
  const bottomRightSliderRef = useRef(null);
  const eksOneRef = useRef(null);
  const eksTwoRef = useRef(null);
  const eksThreeRef = useRef(null);
  let location = useLocation()

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const tl = new TimelineLite();
    const tlEksThree = new TimelineLite();

    topLeftSliderRef.current.classList.toggle("top-left-slide-show");
    bottomLeftSliderRef.current.classList.toggle("bottom-left-slide-show");
    topRightSliderRef.current.classList.toggle("top-right-slide-show");
    middleRightSliderRef.current.classList.toggle("middle-right-slide-show");
    bottomRightSliderRef.current.classList.toggle("bottom-right-slide-show");
    eksTwoRef.current.classList.toggle("eks-two-fade");

    if (!isOpen) {
      tl.to(eksOneRef.current, {
        y: isOpen ? 0 : 9,
      }).to(eksOneRef.current, {
        rotate: isOpen ? 0 : 45,
      });

      tlEksThree
        .to(eksThreeRef.current, {
          y: isOpen ? 0 : -9,
        })
        .to(eksThreeRef.current, {
          rotate: isOpen ? 0 : -45,
        });
    } else {
      tl.to(eksOneRef.current, {
        rotate: isOpen ? 0 : 45,
      }).to(eksOneRef.current, {
        y: isOpen ? 0 : 9,
      });

      tlEksThree
        .to(eksThreeRef.current, {
          rotate: isOpen ? 0 : -45,
        })
        .to(eksThreeRef.current, {
          y: isOpen ? 0 : -9,
        });
    }

    setIsOpen(!isOpen);
  };

  useEffect(() => {
    gsap.from(".simple", {
      x: -100,
      duration: 1,
    });
    gsap.from(".menu", {
      x: -100,
      duration: 1.2,
      delay: 0.3,
      opacity: 0,
    });
    gsap.from(".navi", {
      y: -500,
      duration: 2,
      delay: 0.4,
      opacity: 0,
    });
  }, []);

  return (
    <nav id="navBar">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="container2">
        <div className="top-right-slide" ref={topRightSliderRef}>
          <div className="inner-container-top">
            <Link to="/portfolio" className="nav-links" onClick={toggleMenu}>
              HOME
            </Link>
          </div>
        </div>
        <div className="middle-right-slide" ref={middleRightSliderRef}>
          <div className="inner-container-middle">
            <Link to="/cv" className="nav-links">
              ABOUT
            </Link>
          </div>
        </div>
        <div className="bottom-right-slide" ref={bottomRightSliderRef}>
          <div className="inner-container-bottom">
          <Link to="/portfolio" className="nav-links" onClick={toggleMenu}>
              CONTACT
            </Link>
          </div>
        </div>

        <div className="top-left-slide" ref={topLeftSliderRef}>
          <div className="inner-container-left-top">
            <Link to="/projects" className="nav-links">
              PROJECTS
            </Link>
          </div>
        </div>
        <div className="bottom-left-slide" ref={bottomLeftSliderRef}>
          <div className="inner-container-left-bottom">
            <Link to="/blog" className="nav-links">
            <span className={`${location.pathname === "/blog" ? "fw-bold" : ""}  `}>BLOG</span>
            </Link>
          </div>
        </div>

        <div className="menu-btn" onClick={toggleMenu}>
          <div className="eks-one" ref={eksOneRef}></div>
          <div className="eks-two" ref={eksTwoRef}></div>
          <div className="eks-three" ref={eksThreeRef}></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
