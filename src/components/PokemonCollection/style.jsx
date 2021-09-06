import styled from "@emotion/styled";
import { GCOLOR, GFONT, mq } from "../../styles/globalStyle";

export const Container = styled.div`
  position: relative;
  width: 100%;

  ${mq[3]} {
    margin: 0 auto;
    max-width: var(--screen-max-width);
  }
`;

export const WrapperTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5em;
  padding-top: 1.5rem;
  flex-direction: column;
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

export const Title = styled.p`
  align-items: center;
  display: flex;
  font-size: ${GFONT.SIZE[7]};
  height: ${(props) => props.center && `calc(100vh - 5.75rem)`};
  justify-content: ${(props) => props.center && `center`};
  width: 100%;

  ${mq[3]} {
    max-width: var(--screen-max-width);
  }
`;

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 5rem);
  column-gap: 1.5rem;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;

  ${mq[3]} {
    column-gap: 2rem;
  }
`;

export const Card = styled.li`
  cursor: pointer;
`;

export const Name = styled.p`
  color: ${GCOLOR.TERTIER};
  font-size: ${GFONT.SIZE[3]};
  font-weight: 600;
  grid-area: name;
  letter-spacing: 0.5px;
  text-align: center;
  width: 100%;

  font-size: ${(props) =>
    props.smaller ? `${GFONT.SIZE[1]}` : `${GFONT.SIZE[3]}`};
`;

export const SmallNote = styled.p`
  font-size: ${GFONT.SIZE[2]};
  font-style: italic;
  width: 100%;

  ${mq[3]} {
    font-size: ${GFONT.SIZE[1]};
  }
`;
