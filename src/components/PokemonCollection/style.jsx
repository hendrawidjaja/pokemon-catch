import styled from "@emotion/styled";
import { GCOLOR, GFONT, GSPACER, mq } from "../../styles/globalStyle";

export const Container = styled.div`
  padding-left: ${GSPACER.GUTTER[0]};
  padding-right: ${GSPACER.GUTTER[0]};
  position: relative;
  width: 100%;

  ${mq[3]} {
    margin: 0 auto;
    max-width: var(--screen-max-width);
    padding-left: ${GSPACER.GUTTER[3]};
    padding-right: ${GSPACER.GUTTER[3]};
  }
`;

export const WrapperTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5em;
  padding-top: 1.5rem;
`;

export const Title = styled.p`
  font-size: ${GFONT.SIZE[7]};

  ${mq[3]} {
    max-width: var(--screen-max-width);
  }
`;

export const Card = styled.div`
  position: relative;
`;

export const Name = styled.p`
  color: ${GCOLOR.TERTIER};
  font-size: ${GFONT.SIZE[1]};
  font-weight: 600;
  grid-area: name;
  letter-spacing: 0.5px;
  text-align: center;

  ${mq[3]} {
    font-size: ${GFONT.SIZE[2]};
    letter-spacing: 0.8px;
  }
`;
