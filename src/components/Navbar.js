import React from "react";
import logo from "../assets/images/snapcraft-logo--web-white-text.svg";
import "./styles.css";

import { Navigation } from "@canonical/react-components";

const Navbar = () => {
  return (
    <>
      <div className="p-navigation is-dark" style={{ height: "32px" }}></div>
      <Navigation
        logo={
          <div className="p-navigation__item">
            <img
              className="p-navigation__image"
              src={logo}
              alt="Snapcraft"
              width={132}
            />
          </div>
        }
        items={[
          {
            label: "Store",
            url: "https://snapcraft.io/store",
          },
          {
            label: "About",
            url: "https://snapcraft.io/about",
          },
          {
            label: "Blog",
            url: "https://snapcraft.io/blog",
          },
          {
            label: "IoT",
            url: "https://snapcraft.io/iot",
          },
          {
            label: "Build",
            url: "https://snapcraft.io/build",
          },
          {
            label: "Docs",
            url: "https://snapcraft.io/docs/",
          },
          {
            label: "Tutorials",
            url: "https://snapcraft.io/tutorials",
          },
          {
            label: "Forum",
            url: "https://forum.snapcraft.io/",
          },
        ]}
        itemsRight={[
          {
            label: "Developer account",
            url: "https://snapcraft.io/snaps",
          },
        ]}
        theme="dark"
      />
    </>
  );
};

export default Navbar;
