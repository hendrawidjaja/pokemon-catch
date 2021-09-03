import styled from "@emotion/styled";
import { GCOLOR, GFONT, GSPACER, mq } from "./globalStyle";

export const Button = styled.button`
  background-color: ${GCOLOR.SECONDARY};
  border-radius: calc(0.25em + 0.15vw);
  border: 1px solid ${GCOLOR.TERTIER};
  color: ${GCOLOR.TERTIER};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  margin-top: 0.4rem;
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
  padding-bottom: 0.6rem;
  padding-top: 0.6rem;

  span {
    font-size: ${GFONT.SIZE[4]};
  }

  &:first-of-type {
    margin-right: calc(0.4rem + 2vw);
  }

  ${mq[3]} {
    span {
      padding-left: calc(0.5vw + ${GSPACER.GUTTER[3]});
      padding-right: calc(0.5vw + ${GSPACER.GUTTER[3]});
    }
  }
`;
