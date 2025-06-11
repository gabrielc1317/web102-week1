import React, { useState } from "react";
import './weaponPreview.css';
import h2 from './weaponAttacks/h2.mp4';
import h3 from './weaponAttacks/h3.mp4';
import h1 from './weaponAttacks/h1.mp4';
import h4 from './weaponAttacks/h4.mp4';
import h5 from './weaponAttacks/h5.mp4';
import h6 from './weaponAttacks/h6.mp4';
import s1 from './weaponAttacks/s1.mp4';
import s2 from './weaponAttacks/s2.mp4';
import s3 from './weaponAttacks/s3.mp4';
import s4 from './weaponAttacks/s4.mp4';
import s5 from './weaponAttacks/s5.mp4';
import s6 from './weaponAttacks/s6.mp4';
import b1 from './weaponAttacks/b1.mp4';
import b2 from './weaponAttacks/b2.mp4';
import b3 from './weaponAttacks/b3.mp4';
import b4 from './weaponAttacks/b4.mp4';
import b5 from './weaponAttacks/b5.mp4';
import b6 from './weaponAttacks/b6.mp4';
import r1 from './weaponAttacks/r1.mp4';
import r2 from './weaponAttacks/r2.mp4';
import r3 from './weaponAttacks/r3.mp4';
import r4 from './weaponAttacks/r4.mp4';
import r5 from './weaponAttacks/r5.mp4';
import r6 from './weaponAttacks/r6.mp4';
import ss1 from './weaponAttacks/ss1.mp4';
import ss2 from './weaponAttacks/ss2.mp4';
import ss3 from './weaponAttacks/ss3.mp4';
import ss4 from './weaponAttacks/ss4.mp4';
import ss5 from './weaponAttacks/ss5.mp4';
import ss6 from './weaponAttacks/ss6.mp4';
import k1 from './weaponAttacks/k1.mp4';
import k2 from './weaponAttacks/k2.mp4';
import k3 from './weaponAttacks/k3.mp4';
import k4 from './weaponAttacks/k4.mp4';
import k5 from './weaponAttacks/k5.mp4';
import k6 from './weaponAttacks/k6.mp4';
import a1 from './weaponAttacks/a1.mp4';
import a2 from './weaponAttacks/a2.mp4';
import a3 from './weaponAttacks/a3.mp4';
import a4 from './weaponAttacks/a4.mp4';
import a5 from './weaponAttacks/a5.mp4';
import a6 from './weaponAttacks/a6.mp4';
import bb1 from './weaponAttacks/bb1.mp4';
import bb2 from './weaponAttacks/bb2.mp4';
import bb3 from './weaponAttacks/bb3.mp4';
import bb4 from './weaponAttacks/bb4.mp4';
import bb5 from './weaponAttacks/bb5.mp4';
import bb6 from './weaponAttacks/bb6.mp4';
import g1 from './weaponAttacks/g1.mp4';
import g2 from './weaponAttacks/g2.mp4';
import g3 from './weaponAttacks/g3.mp4';
import g4 from './weaponAttacks/g4.mp4';
import g5 from './weaponAttacks/g5.mp4';
import g6 from './weaponAttacks/g6.mp4';
import sss1 from './weaponAttacks/sss1.mp4';
import sss2 from './weaponAttacks/sss2.mp4';
import sss3 from './weaponAttacks/sss3.mp4';
import sss4 from './weaponAttacks/sss4.mp4';
import sss5 from './weaponAttacks/sss5.mp4';
import sss6 from './weaponAttacks/sss6.mp4';
import c1 from './weaponAttacks/c1.mp4';
import c2 from './weaponAttacks/c2.mp4';
import c3 from './weaponAttacks/c3.mp4';
import c4 from './weaponAttacks/c4.mp4';
import c5 from './weaponAttacks/c5.mp4';
import c6 from './weaponAttacks/c6.mp4';
import o1 from './weaponAttacks/o1.mp4';
import o2 from './weaponAttacks/o2.mp4';
import o3 from './weaponAttacks/o3.mp4';
import o4 from './weaponAttacks/o4.mp4';
import o5 from './weaponAttacks/o5.mp4';
import o6 from './weaponAttacks/o6.mp4';
import gg1 from './weaponAttacks/gg1.mp4';
import gg2 from './weaponAttacks/gg2.mp4';
import gg3 from './weaponAttacks/gg3.mp4';
import gg4 from './weaponAttacks/gg4.mp4';
import gg5 from './weaponAttacks/gg5.mp4';
import gg6 from './weaponAttacks/gg6.mp4';
import bbb1 from './weaponAttacks/bbb1.mp4';
import bbb2 from './weaponAttacks/bbb2.mp4';
import bbb3 from './weaponAttacks/bbb3.mp4';
import bbb4 from './weaponAttacks/bbb4.mp4';
import bbb5 from './weaponAttacks/bbb5.mp4';
import bbb6 from './weaponAttacks/bbb6.mp4';
import cc1 from './weaponAttacks/cc1.mp4';
import cc2 from './weaponAttacks/cc2.mp4';
import cc3 from './weaponAttacks/cc3.mp4';
import cc4 from './weaponAttacks/cc4.mp4';
import cc5 from './weaponAttacks/cc5.mp4';
import cc6 from './weaponAttacks/cc6.mp4';


const videoMap = {
    "Hammer": {
      grounded: { side: h2, neutral: h3, down: h1 },
      air: { side: h5, neutral: h6, down: h4 }
    },
    "Sword": {
        grounded: { side: s2, neutral: s3, down: s1 },
        air: { side: s5, neutral: s6, down: s4 }
      },
      "Blasters": {
        grounded: { side: b2, neutral: b3, down: b1 },
        air: { side: b5, neutral: b6, down: b4 }
      },
      "Rocket Lance": {
        grounded: { side: r2, neutral: r3, down: r1 },
        air: { side: r5, neutral: r6, down: r4 }
      },
      "Spear": {
        grounded: { side: ss2, neutral: ss3, down: ss1 },
        air: { side: ss5, neutral: ss6, down: ss4 }
      },
      "Katars": {
        grounded: { side: k2, neutral: k3, down: k1 },
        air: { side: k5, neutral: k6, down: k4 }
      },
      "Axe": {
        grounded: { side: a2, neutral: a3, down: a1 },
        air: { side: a5, neutral: a6, down: a4 }
      },
      "Bow": {
        grounded: { side: bb2, neutral: bb3, down: bb1 },
        air: { side: bb5, neutral: bb6, down: bb4 }
      },
      "Gauntlets": {
        grounded: { side: g2, neutral: g3, down: g1 },
        air: { side: g5, neutral: g6, down: g4 }
      },
      "Scythe": {
        grounded: { side: sss2, neutral: sss3, down: sss1 },
        air: { side: sss5, neutral: sss6, down: sss4 }
      },
      "Cannon": {
        grounded: { side: c2, neutral: c3, down: c1 },
        air: { side: c5, neutral: c6, down: c4 }
      },
      "Orb": {
        grounded: { side: o2, neutral: o3, down: o1 },
        air: { side: o5, neutral: o6, down: o4 }
      },
      "Greatsword": {
        grounded: { side: gg2, neutral: gg3, down: gg1 },
        air: { side: gg5, neutral: gg6, down: gg4 }
      },
      "Battle Boots": {
        grounded: { side: bbb2, neutral: bbb3, down: bbb1 },
        air: { side: bbb5, neutral: bbb6, down: bbb4 }
      },
      "Chakram": {
        grounded: { side: cc2, neutral: cc3, down: cc1 },
        air: { side: cc5, neutral: cc6, down: cc4 }
      }
};

const WeaponPreview = ({ weapon, onClose }) => {
    if (!weapon) return null; 
  
    const [view, setView] = useState("menu");
    const [videoSrc, setVideoSrc] = useState(null);

    return (
      <div className="preview-overlay">
        <div className="preview-content">
          <button className="close-button" onClick={onClose}>X</button>
          <h2>{weapon.weapon}</h2>
  
          
          <video controls width="480" height="270" key={videoSrc || "empty"}>
            {videoSrc && <source src={videoSrc} type="video/mp4" />}
            </video>
  
          {view === "menu" && (
          <div className="button-row">
            <button onClick={() => setView("grounded")}>Grounded Attacks</button>
            <button onClick={() => setView("air")}>Air Attacks</button>
          </div>
        )}

        {view === "grounded" && (
          <div className="button-row">
            <button onClick={() => setVideoSrc(videoMap[weapon.weapon]?.grounded?.side)}>Side Light</button>
            <button onClick={() => setVideoSrc(videoMap[weapon.weapon]?.grounded?.neutral)}>Neutral Light</button>
            <button onClick={() => setVideoSrc(videoMap[weapon.weapon]?.grounded?.down)}>Down Light</button>
            <button onClick={() => {setView("menu"); setVideoSrc(null);}}>Back</button>
          </div>
        )}

        {view === "air" && (
          <div className="button-row">
            <button onClick={() => setVideoSrc(videoMap[weapon.weapon]?.air?.side)}>Side Air</button>
            <button onClick={() => setVideoSrc(videoMap[weapon.weapon]?.air?.neutral)}>Neutral Air</button>
            <button onClick={() => setVideoSrc(videoMap[weapon.weapon]?.air?.down)}>Down Air</button>
            <button onClick={() => setView("menu")}>Back</button>
          </div>
        )}

        </div>
      </div>
    );
  };
  
  export default WeaponPreview;