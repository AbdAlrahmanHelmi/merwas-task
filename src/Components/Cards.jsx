import React from "react";
import card1 from "../img/card1.jpg";
import card2 from "../img/card2.jpg";
import card3 from "../img/card3.jpg";
import card4 from "../img/card4.jpg";
import card5 from "../img/card5.jpg";
import card6 from "../img/card6.jpg";
import card7 from "../img/card7.jpg";
import card8 from "../img/card8.jpg";
import "./cards.css";

export default function Cards() {
  return (
    <div>
      <div className="container-me">
        <div className="continer-grid">
          {/* card1 */}
          <div>
            <div class="card">
              <img src={card1} class="card-img-top" alt="card1" />
              <div className="overlay">Discover Auckland</div>

              <div class="card-body">
                <h5 class="card-title">Discover Auckland</h5>
                <p className="p-title">Multiple deals</p>
                <button class="btn-card">View Collection ></button>
              </div>
            </div>
            <div className="index">"</div>
            <div className="index2"></div>
          </div>
          {/* card2 */}
          <div>
            <div class="card">
              <img src={card2} class="card-img-top" alt="card2" />
              <div className="overlay">Wander Wellington</div>
              <div class="card-body">
                <h5 class="card-title">Wander Wellington</h5>
                <p className="p-title">Multiple deals</p>
                <button class="btn-card">View Collection ></button>
              </div>
            </div>
            <div className="index">"</div>
            <div className="index2"></div>
          </div>
          {/* card3 */}
          <div>
            <div class="card">
              <img src={card3} class="card-img-top" alt="card3" />
              <div className="overlay">Discover Queenstown</div>
              <div class="card-body">
                <h5 class="card-title">Discover Queenstown</h5>
                <p className="p-title">Multiple deals</p>
                <button class="btn-card">View Collection ></button>
              </div>
            </div>
            <div className="index">"</div>
            <div className="index2"></div>
          </div>
          {/* card4 */}
          <div>
            <div class="card">
              <img src={card4} class="card-img-top" alt="card4" />
              <div className="overlay">Visit Rotorua & Taupo</div>
              <div class="card-body">
                <h5 class="card-title">Visit Rotorua & Taupo</h5>
                <p className="p-title">Multiple deals</p>
                <button class="btn-card">View Collection ></button>
              </div>
            </div>
            <div className="index">"</div>
            <div className="index2"></div>
          </div>
          {/* card5 */}
          <div>
            <div class="card">
              <img src={card5} class="card-img-top" alt="card5" />
              <div className="overlay">Explore Christchurch</div>
              <div class="card-body">
                <h5 class="card-title">Explore Christchurch</h5>
                <p className="p-title">Multiple deals</p>
                <button class="btn-card">View Collection ></button>
              </div>
            </div>
            <div className="index">"</div>
            <div className="index2"></div>
          </div>
          {/* card6 */}
          <div>
            <div class="card">
              <img src={card6} class="card-img-top" alt="card6" />
              <div className="overlay">Vist the Bay of Islands</div>
              <div class="card-body">
                <h5 class="card-title">Vist the Bay of Islands</h5>
                <p className="p-title">Multiple deals</p>
                <button class="btn-card">View Collection ></button>
              </div>
            </div>
            <div className="index">"</div>
            <div className="index2"></div>
          </div>
          {/* card7 */}
          <div>
            <div class="card">
              <img src={card7} class="card-img-top" alt="card1" />
              <div className="overlay">North Island Getaways</div>
              <div class="card-body">
                <h5 class="card-title">North Island Getaways</h5>
                <p className="p-title">Multiple deals</p>
                <button class="btn-card">View Collection ></button>
              </div>
            </div>
            <div className="index">"</div>
            <div className="index2"></div>
          </div>
          {/* card8 */}
          <div>
            <div class="card">
              <img src={card8} class="card-img-top" alt="card1" />
              <div className="overlay">South Island Getaways</div>
              <div class="card-body">
                <h5 class="card-title">South Island Getaways</h5>
                <p className="p-title">Multiple deals</p>
                <button class="btn-card">View Collection ></button>
              </div>
            </div>
            <div className="index">"</div>
            <div className="index2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
