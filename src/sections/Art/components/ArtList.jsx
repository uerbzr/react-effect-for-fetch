import React from "react";
import ArtsItem from "../../Advice/components/ArtsItem";

function ArtList({ artData }) {
  return (
    <>
      <h1>?</h1>
      <ul className="art-list">
        {artData &&
          artData.map((item, index) => {
            return (
              <>
                <li key={item.id}>
                  <div className="frame">
                    <img src="https://boolean-api-server.fly.dev/images/paris-street-rainy-day.jpg" />
                  </div>
                  <h3>Paris Street; Rainy Day</h3>
                  <p>Artist: Gustave Caillebotte</p>
                  <h4>Publication History:</h4>
                  <ul>
                    <li>
                      Catalogue de la 3e exposition de peinture, exh. cat. (E.
                      Capiomont et V. Renault, 1877), p. 3, cat. 1.
                    </li>
                    <li>
                      Léon Mancino, “La descente de la courtille,” L’art 9 (Apr.
                      1877), p. 70.
                    </li>
                    <li>
                      Anonymous [possibly Gaston Vassy], “La journée à Paris:
                      L’exposition des impressionnalistes,” L’événement, Apr. 6,
                      1877, p. 2.
                    </li>
                  </ul>
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
}

export default ArtList;
