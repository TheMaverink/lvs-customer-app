import getEnvVars from '../config/environment'
export const SPLASH_TIMEOUT = 1500

export const FONTS = {
  DEFAULT: 'Lato-Regular',
  DEFAULT_LIGHT: 'Lato-Light',
  DEFAULT_BOLD: 'Lato-Bold',
}

export const FONT_SIZES = {
  MAXLARGE: 40,
  SUPERLARGE: 35,
  EXTRALARGE: 32,
  LARGE: 28,
  SEMILARGE: 22,
  MIDLARGE: 24,
  TITLE: 20,
  HEADER: 18,
  ITEMHEADER: 17,
  MEDIUM: 16,
  NORMAL: 15,
  MIDREGULAR: 14,
  SMALLMEDIUM: 13,
  SMALL: 12,
  MIDSMALL: 10.5,
  SEMISMALL: 9,
  TINY: 7,

}

export const COLORS = {


  YELLOW:'#FFD500',
  BLACK:'#1A1B1C',
  ///

  // MID_GRAY: '#D8D8D8',
  // ////
  // WHITE: '#FFFFFF',
  // LIGHT_GRAY: '#fbfbfb',
  
  // DARK_GRAY: '#abb3c0',
  // DARKEST_GRAY: '#5b5b5b',
  // PURPLE: '#353f8f',
  // GREEN: '#00ffab',
  // RED: '#d95b5d',
  // LIGHT_BLUE: '#497e93',
  // BLUE: '#0e427f',

}

export const DESIGN_RESOLUTION={
  width:812,
  HEIGHT:375
}

export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oc", "Nov", "Dec"
];


export const { API_URL } = getEnvVars()