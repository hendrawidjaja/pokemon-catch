import styled from "@emotion/styled";
import { GCOLOR, GFONT, GSPACER, mq } from "../../styles/globalStyle";

export const ButtonClear = styled.button`
  background-color: transparent;
  cursor: pointer;
  display: flex;
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translateY(-50%) scale(0.825);

  ${mq[0]} {
    padding-right: ${GSPACER.GUTTER[0]};
  }

  ${mq[3]} {
    padding-right: ${GSPACER.GUTTER[3]};
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding-top: 1.25rem;
  column-gap: 0.5rem;
  position: relative;

  ${mq[3]} {
    padding-top: 1.5rem;
  }
`;

export const Input = styled.input`
  background-color: ${GCOLOR.SECONDARY};
  border-radius: calc(0.25em + 0.15vw);
  border: 1px solid ${GCOLOR.TERTIER};
  color: ${GCOLOR.TERTIER};
  font-size: ${GFONT.SIZE[1]};
  padding-bottom: 0.65rem;
  padding-top: 0.7rem;
  width: 100%;

  &::placeholder {
    color: ${GCOLOR.GRAY24};
    opacity: 1; /* Firefox */
  }

  ${mq[0]} {
    padding-left: ${GSPACER.GUTTER[0]};
    padding-right: ${GSPACER.GUTTER[0]};
  }

  ${mq[3]} {
    padding-left: ${GSPACER.GUTTER[3]};
    padding-right: ${GSPACER.GUTTER[3]};
  }
`;

export const WrapperInput = styled.div`
  position: relative;
`;
