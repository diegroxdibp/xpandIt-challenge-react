import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const GlobalStyles = createGlobalStyle`
        @font-face {
            font-family: 'Roboto';
            src: url('roboto.eot'); /* IE9 Compat Modes */
            src: url('roboto.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('roboto.woff') format('woff'), /* Modern Browsers */
            url('roboto.ttf')  format('truetype'), /* Safari, Android, iOS */
            url('roboto.svg#svgFontName') format('svg'); /* Legacy iOS */
        }
  
        * {
             font: 400 16px/1em Roboto,Helvetica Neue,sans-serif;
             scrollbar-width: thin;
             scrollbar-color: ${colors.icon} transparent;

             &::-webkit-scrollbar {
                width: 5px;
              }
              
              &::-webkit-scrollbar-track {
                background: ${colors.icon};
              }
              
              &::-webkit-scrollbar-thumb {
                background-color: ${colors.pill};
                border-radius: 20px;
                border: 3px solid transparent;
              }
        }

        h1 {
            text-align: left;
            font-size : 24px;
            line-height : 30px;
            font-weight: normal;
            letter-spacing: 0px;
            margin: 16px 0;
            color: ${colors.primary};
          }
          
          p,
          span {
            color: ${colors.text};
          }
          
          span {
            font-size: 16px;
          }

`

export default GlobalStyles
