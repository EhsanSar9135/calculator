import styled from "styled-components";

export const Container = styled.section`
   display: grid;
   justify-content: center;
   align-content: center;
   width: 400px;
   margin: 30px auto;
   grid-template-columns: repeat(4, 100px);
   grid-template-rows: minmax(120px, auto) repeat(5, 90px);
   box-shadow: 2px 2px 10px hsl(0, 0%, 20%);
   border-radius: 0.6rem;
`;

export const Screen = styled.div`
   grid-column: 1 / -1;
   display: flex;
   background: hsla(205, 5%, 25%, 0.75);
   justify-content: space-around;
   flex-direction: column;
   padding: 0.6rem;
   word-wrap: break-word;
   word-break: break-all;
   text-align: right;
   border-radius: 0.6rem 0.6rem 0 0;
`;

export const Previous = styled.div`
   color: hsla(0, 0%, 100%, 0.5);
   font-size: 1.5rem;
`;

export const Current = styled.div`
   color: hsl(0, 0%, 100%);
   font-size: 2.5rem;
`;

export const Button = styled.button`
   cursor: pointer;
   font-size: 2rem;
   border: 1px outset hsl(0, 0%, 100%);
   outline: none;
   background: hsla(0, 0%, 100%, 0.7);

   &:hover {
      background: hsla(0, 0%, 100%, 0.5);
   }

   ${({ gridSpan }) => gridSpan && `grid-column: span ${gridSpan};`}
   ${({ operation }) => operation && `background-color: hsl(0, 0%, 45%);`}
   ${({ control }) => control && `background-color: hsl(200, 70%, 75%);`}
`;
