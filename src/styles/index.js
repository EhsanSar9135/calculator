import styled from "styled-components";

export const Container = styled.section`
   display: grid;
   justify-content: center;
   align-items: center;
   width: 25rem;
   height: 30rem;
   margin: 2.4rem auto;
   grid-template-columns: repeat(4, 6rem);
   grid-template-rows: minmax(7.2rem auto) repeat(5, 6rem);
   box-shadow: 2px 2px 10px hsl(0, 0%, 20%);
   border-radius: 0.6rem;
`;
