import styled from "@emotion/styled";
import { BaseButton } from "../../styles/button";
import { GCOLOR, GFONT, GSPACER, mq } from "../../styles/globalStyle";

export const DetailPage = styled.div`
  bottom: 0;
  left: 0;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${GSPACER.GUTTER[0]};
  padding-right: ${GSPACER.GUTTER[0]};
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;

  ${mq[1]} {
    padding-left: ${GSPACER.GUTTER[1]};
    padding-right: ${GSPACER.GUTTER[1]};
    width: 85%;
  }

  ${mq[2]} {
    padding-left: ${GSPACER.GUTTER[2]};
    padding-right: ${GSPACER.GUTTER[2]};
    width: 45%;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  padding-top: 1rem;
  position: relative;
  width: 100%;

  span {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  border-radius: 0.8rem;
  border: 1px solid ${GCOLOR.BEIGE};
  display: grid;
  padding: 0.5rem 0;
  row-gap: 0.5rem;
  user-select: none;
  grid-template-areas:
    ". name name name ."
    ". image image image ."
    ". moves . abilities ."
    ". moves . types ."
    ". smallNote . . .";

  ${mq[3]} {
    padding: 0.5rem 0.5rem;
    row-gap: 0.8rem;
  }
`;

export const Name = styled.p`
  color: ${GCOLOR.TERTIER};
  font-size: ${GFONT.SIZE[5]};
  font-weight: 600;
  grid-area: name;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: center;

  ${mq[3]} {
    font-size: ${GFONT.SIZE[5]};
    letter-spacing: 0.8px;
  }
`;

export const WrapperImg = styled.div`
  display: flex;
  grid-area: image;
  justify-content: center;
`;

export const Img = styled.img`
  max-width: 100%;

  ${mq[3]} {
    transform: scale(1.15);
  }
`;

export const Pokeball = styled.div`
  grid-area: ball;
  align-self: flex-end;
`;

export const ULAbilities = styled.ul`
  grid-area: abilities;
`;

export const ULMoves = styled.ul`
  padding-top: 0.4rem;
  grid-area: moves;
`;

export const ULTypes = styled.ul`
  padding-top: 0.4rem;
  grid-area: types;
`;

export const Li = styled.li`
  color: ${GCOLOR.TERTIER};
  font-size: ${GFONT.SIZE[2]};
  min-width: 50%;
  padding-left: 1rem;
  padding-top: 0.15rem;
  position: relative;

  &:before {
    content: "✓";
    position: absolute;
    left: 0;
  }

  ${mq[3]} {
    font-size: ${GFONT.SIZE[1]};
    padding-left: 1.25rem;
  }
`;

export const Title = styled.p`
  color: ${GCOLOR.BEIGE};
  font-size: ${GFONT.SIZE[1]};
  font-weight: 600;

  ${mq[3]} {
    font-size: ${GFONT.SIZE[2]};
  }
`;

const DetailPageButton = styled(BaseButton)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.85rem;
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
  width: 250px;

  ${mq[3]} {
    font-size: ${GFONT.SIZE[2]};
  }
`;

export const Dice = styled(DetailPageButton)``;
export const Lucky = styled(DetailPageButton)``;
export const PokemonSecure = styled(DetailPageButton)``;
