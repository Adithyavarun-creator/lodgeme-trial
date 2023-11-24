import styled from "styled-components";

export const FooterStyles = styled.footer`
  .footer_section {
    height: 592px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://images.unsplash.com/photo-1535262412227-85541e910204?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGJlYWNofGVufDB8fDB8fHww");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-color: #3333;
    object-fit: fill;
    width: 100%;
    z-index: -5;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .footer_contents {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 40px;
  }

  .footer_grids {
    display: grid;
    grid-template-columns: 400px 400px 400px 400px;
    z-index: 15;
    padding: 40px;
    justify-content: space-evenly;
    align-items: center;
  }

  .footer_grid1 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--white-color);
    font-size: 30px;
  }
  .footer_grid2 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--white-color);
    font-size: 30px;
    list-style: none;
  }
  .footer_grid3 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--white-color);
    font-size: 30px;
    list-style: none;
  }
  .footer_grid4 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--white-color);
    font-size: 30px;
  }
  .footer-grid4-box {
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    gap: 30px;
    color: var(--white-color);
  }

  .flex-gap10 {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .footer_width {
    width: 100%;
    border: 3px solid #5b5a5a;
  }

  .footer_copyright {
    font-family: Lato;
    font-size: 30px;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    color: var(--white-color);
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    .footer_section {
      height: 592px;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("https://images.unsplash.com/photo-1535262412227-85541e910204?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGJlYWNofGVufDB8fDB8fHww");
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-color: #3333;
      object-fit: fill;
      width: 100%;
      z-index: -5;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .footer_contents {
      display: flex;
      flex-direction: column;
      gap: 35px;
      padding: 40px;
    }

    .footer_grids {
      display: grid;
      grid-template-columns: 200px 200px 200px 200px;
      z-index: 15;
      padding: 30px;
      justify-content: space-evenly;
      align-items: center;
    }

    .footer_grid1 {
      display: flex;
      flex-direction: column;
      gap: 30px;
      color: var(--white-color);
      font-size: 16px;
    }
    .footer_grid2 {
      display: flex;
      flex-direction: column;
      gap: 30px;
      color: var(--white-color);
      font-size: 16px;
      list-style: none;
    }
    .footer_grid3 {
      display: flex;
      flex-direction: column;
      gap: 30px;
      color: var(--white-color);
      font-size: 16px;
      list-style: none;
    }
    .footer_grid4 {
      display: flex;
      flex-direction: column;
      gap: 30px;
      color: var(--white-color);
      font-size: 16px;
    }
    .footer-grid4-box {
      display: flex;
      /* align-items: center; */
      flex-direction: column;
      gap: 30px;
      color: var(--white-color);
    }

    .flex-gap10 {
      display: flex;
      gap: 20px;
      align-items: center;
    }

    .footer_width {
      width: 100%;
      border: 3px solid #5b5a5a;
    }

    .footer_copyright {
      font-family: Lato;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      text-align: center;
      color: var(--white-color);
      margin-top: 30px;
    }
  }
`;
