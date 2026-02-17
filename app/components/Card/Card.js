import { StyledCardContainer } from "../Card/styled-card";
import Image from "next/image";
import UberUns from "../Über Uns/UberUns";

const Card = ({ FotoData }) => {
  return (
    <section id="about-us">
      <div className="wrapper">
        <UberUns />
        <StyledCardContainer>
          {FotoData.map((element) => (
            <div className="card" key={element.name}>
              <div className="card-image">
                <Image
                  src={element.bild}
                  alt="Foto"
                  width={250}
                  height={250}
                  // vorher war die objectFit Position auf 14%
                  style={{ objectFit: "cover", objectPosition: "center 10%" }}
                  placeholder="empty"
                />
              </div>
              <div className="card-name">{element.name}</div>
              <div className="card-graphic">
                <img
                  src={element.svg}
                  alt={`${element.name} SVG`}
                  role="img"
                  aria-label={`Symbol für ${element.name} `}
                />
              </div>
            </div>
          ))}
        </StyledCardContainer>
      </div>
    </section>
  );
};

export default Card;
