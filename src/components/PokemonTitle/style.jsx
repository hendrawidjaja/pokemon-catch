import styled from "@emotion/styled";
import { GCOLOR, GFONT, GSPACER, mq } from "../../styles/globalStyle";

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  width: 100%;

  ${mq[0]} {
    padding: 0.7rem ${GSPACER.GUTTER[0]};
  }

  ${mq[3]} {
    margin: 0 auto;
    max-width: var(--screen-max-width);
    padding: 1rem ${GSPACER.GUTTER[3]};
  }
`;

export const H1 = styled.h1`
  ${mq[0]} {
    font-size: ${GFONT.SIZE[5]};
  }

  ${mq[3]} {
    font-size: ${GFONT.SIZE[7]};
  }
`;

export const P = styled.p`
  ${mq[0]} {
    padding-top: 0.2rem;
    font-size: ${GFONT.SIZE[1]};
  }

  ${mq[3]} {
    padding-top: 0.4rem;
    font-size: ${GFONT.SIZE[2]};
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 1rem;
  overflow: auto;
  white-space: nowrap;
  width: 100%;

  &::-webkit-scrollbar {
    background: ${GCOLOR.SECONDARY};
    height: 0.5rem;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    background: ${GCOLOR.BEIGE};
    border-radius: 5px;
  }

  ${mq[0]} {
    padding: 2rem ${GSPACER.GUTTER[0]} 0;
  }

  ${mq[3]} {
    padding: 2rem ${GSPACER.GUTTER[4]} 0;
  }
`;

export const Li = styled.li`
  color: white;
  display: flex;
  height: 40px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  text-align: center;
  text-decoration: none;
`;
