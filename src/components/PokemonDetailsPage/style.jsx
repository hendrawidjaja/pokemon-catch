import styled from "@emotion/styled";
import { GCOLOR, GFONT, GSPACER, mq } from "../../styles/globalStyle";

export const DetailPage = styled.div`
  bottom: 0;
  left: 0;
  min-height: 100vh;
  padding-left: ${GSPACER.GUTTER[0]};
  padding-right: ${GSPACER.GUTTER[0]};
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  z-index: 1;

  ${mq[3]} {
    padding-left: ${GSPACER.GUTTER[3]};
    padding-right: ${GSPACER.GUTTER[3]};
  }
`;

export const ButtonBack = styled.button`
  align-items center;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: center;
  position: relative;
  width: 50px;

  ${mq[3]} {
    height: 85px;
    width: 85px;
    margin-bottom: 1rem;
  }
`;

export const Name = styled.p`
  color: ${GCOLOR.TERTIER};
  font-size: ${GFONT.SIZE[5]};
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  ${mq[3]} {
    font-size: ${GFONT.SIZE[6]};
    letter-spacing: 0.8px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "one . . ."
    "one . . ."
    "three four . ."
    "three four . ."
    "three four . ."
    "three four . ."
    "three five . .";
  position: relative;
  width: 100%;
`;

export const WrapperImg = styled.div`
  grid-area: one;
`;

export const Img = styled.img`
  padding-top: 0.5rem;
  max-width: 100%;

  ${mq[3]} {
    transform: scale(1.1);
  }
`;

export const ULAbilities = styled.ul`
  grid-area: four;
`;

export const ULMoves = styled.ul`
  padding-top: 0.4rem;
  grid-area: three;
`;

export const ULTypes = styled.ul`
  padding-top: 0.4rem;
  grid-area: five;
`;

export const SmallNote = styled.p`
  color: ${GCOLOR.TERTIER};
  font-size: ${GFONT.SIZE[0]};
  padding-top: 0.2rem;
  font-style: italic;

  ${mq[3]} {
    padding-top: 0.15rem;
  }
`;

export const Li = styled.li`
  color: ${GCOLOR.TERTIER};
  font-size: ${GFONT.SIZE[2]};
  min-width: 50%;
  padding-left: 1rem;
  padding-top: 0.1rem;
  position: relative;

  &:before {
    content: "✓";
    position: absolute;
    left: 0;
  }

  ${mq[3]} {
    padding-left: 2rem;
    transform: scale(1.1);

    &:before {
      left: 1rem;
    }
  }
`;

export const Title = styled.p`
  color: ${GCOLOR.BEIGE};
  font-size: ${GFONT.SIZE[2]};
  font-weight: 600;

  ${mq[3]} {
    font-size: ${GFONT.SIZE[3]};
  }
`;

export const Dice = styled.button`
  align-items: center;
  border-radius: 0.6rem;
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 1rem;
  padding-top: 1rem;
  width: 250px;
  margin-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;

  ${mq[3]} {
    font-size: ${GFONT.SIZE[2]};
  }
`;
