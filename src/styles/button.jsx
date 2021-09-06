import styled from "@emotion/styled";
import { GCOLOR, GFONT, GSPACER, mq } from "./globalStyle";

export const BaseButton = styled.button`
  align-items: center;
  border-radius: calc(0.25em + 0.3vw);
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  display: flex;
  justify-content: center;
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
  position: relative;
`;

export const Button = styled(BaseButton)`
  background-color: ${GCOLOR.SECONDARY};
  border: 1px solid ${GCOLOR.TERTIER};
  color: ${GCOLOR.TERTIER};
  padding-bottom: 0.7rem;
  padding-top: 0.7rem;

  span {
    font-size: ${GFONT.SIZE[4]};
  }

  ${mq[3]} {
    max-width: 220px;

    span {
      padding-left: calc(0.5vw + ${GSPACER.GUTTER[3]});
      padding-right: calc(0.5vw + ${GSPACER.GUTTER[3]});
    }
  }
`;
