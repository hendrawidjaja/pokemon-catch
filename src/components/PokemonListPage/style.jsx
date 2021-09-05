import styled from "@emotion/styled";
import { GCOLOR, GFONT, GSPACER, mq } from "../../styles/globalStyle";

export const ContainerCards = styled.div`
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

export const Img = styled.img`
  transform: scale(0.9);

  ${mq[3]} {
    transform: scale(1);
  }
`;

export const ListCards = styled.ul`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  position: relative;

  ${mq[2]} {
    grid-gap: 0.5rem;
  }

  ${mq[3]} {
    grid-gap: 1.2rem;
    padding-top: 0;
    padding-bottom: 2rem;
  }
`;

export const CardItem = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-top: 0.2rem;
`;

export const P = styled.p`
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  font-size: ${GFONT.SIZE[2]};

  ${mq[3]} {
    font-size: ${GFONT.SIZE[1]};
  }
`;

export const WrapperButton = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 30vw);
  padding-bottom: 1.2rem;
  padding-top: 1.2rem;
  position: relative;
  justify-content: space-between;
  margin-left: auto;
  width: 70%;

  ${mq[2]} {
    grid-template-columns: repeat(auto-fit, 25vw);
    width: 55%;
  }

  ${mq[3]} {
    grid-template-columns: repeat(auto-fit, 17vw);
    max-width: var(--screen-max-width);
    padding-bottom: 2.25rem;
    padding-top: 2.25rem;
    width: 40%;
    margin-left: auto;
  }
`;

export const WrapperLoadingScreen = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  min-height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

export const LoadingText = styled.p`
  color: ${GCOLOR.BLUEISH};
  font-size: ${GFONT.SIZE[7]};
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 1.5rem;
  padding-bottom: 1.5em;
`;

export const Title = styled.p`
  font-size: ${GFONT.SIZE[7]};

  ${mq[3]} {
    max-width: var(--screen-max-width);
  }
`;
