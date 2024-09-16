/**
 Copyright (C) 2024, MobiusFlow®
 All Rights Reserved
 ALL INFORMATION CONTAINED HEREIN IS, AND REMAINS THE PROPERTY OF
 MOBIUSFLOW® AND ITS SUPPLIERS,IF ANY.
 THE INTELLECTUAL AND TECHNICAL CONCEPTS CONTAINED HEREIN ARE PROPRIETARY
 TO MOBIUSFLOW® AND ITS SUPPLIERS AND ARE PROTECTED BY TRADE SECRET OR 
 COPYRIGHT LAW. DISSEMINATION OF THIS INFORMATION OR REPRODUCTION OF THIS
 MATERIAL IS STRICTLY FORBIDDEN UNLESS PRIOR WRITTEN PERMISSION IS OBTAINED
 FROM MOBIUSFLOW®.
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS
 BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
 **/

import { createTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { blue, green, red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
  interface TypographyVariants {
    widgetTitle: React.CSSProperties;
    widgetSubtitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    widgetTitle?: React.CSSProperties;
    widgetSubtitle?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    widgetTitle: true;
    widgetSubtitle: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1900,
      xxl: 2000,
    },
  },
  palette: {
    mode: 'light',
    background: {
      default: '#e2e7e9',
      paper: '#f0f3f4',
    },
    text: {
      primary: '#364e63',
      secondary: '#7b8d9d',
      disabled: '#737373',
    },
    primary: {
      light: '#5b82a4',
      main: '#364e63',
      dark: '#243442',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e88930',
      main: '#cf7017',
      dark: '#a15712',
      contrastText: '#fff',
    },
    success: {
      main: green[600],
    },
    error: {
      main: red[400],
    },
    info: {
      main: blue[200],
    },
  },
  typography: {
    widgetTitle: {
      fontSize: 16,
      fontWeight: 600,
    },
    widgetSubtitle: {
      fontSize: 12,
      fontWeight: 300,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        color: 'primary',
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: 'primary',
      },
    },
  },
});

export const themeStyles = makeStyles(() => ({
  hideNumberSpinner: {
    '& .MuiOutlinedInput-input': {
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
      },
    },
  },
  root: {
    '& .MuiIconButton-root': {
      color: theme.palette.secondary.main,
      '&:disabled': {
        color: theme.palette.text.disabled,
      },
    },
  },
  dialogs: {
    '& .MuiDialog-paper': {
      borderRadius: 5,
      border: '2px solid #435970',
    },
    '& .MuiDialogActions-root': {
      gap: 5,
      margin: 3,
    },
  },
}));
