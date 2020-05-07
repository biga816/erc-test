import css from 'styled-jsx/css';

export default css.global`
  @font-face {
    font-family: PixelMplus;
    src: url('/font/pixelmplus/PixelMplus12-Regular.ttf') format("truetype");
  }
  @font-face {
    font-family: PixelMplus-Bold;
    src: url('/font/pixelmplus/PixelMplus12-Bold.ttf') format("truetype");
  }
  .pixel-mplus {
    font-family: PixelMplus;
  }
  .pixel-mplus-bold {
    font-family: PixelMplus-Bold;
  }
  body {
    font-family: PixelMplus!important;
    margin: 0;
  }
  button {
    font-family: PixelMplus-Bold!important;
  }
`;