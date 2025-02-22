import { BaseTheme } from './themes/types'

interface StyledProps {
  theme: BaseTheme
}

export const backgroundColor = ({ theme }: StyledProps) =>
  `background-color: ${theme.backgroundColor};`

export const secondaryBackgroundColor = ({ theme }: StyledProps) =>
  `background-color: ${theme.secondaryBackgroundColor};`

export const activeBackgroundColor = ({ theme }: StyledProps) =>
  `background-color: ${theme.activeBackgroundColor};`

export const activeSideBarSecondaryTextColor = ({ theme }: StyledProps) =>
  `color: ${theme.activeSideBarSecondaryTextColor};`

export const sideBarBackgroundColor = ({ theme }: StyledProps) =>
  `background-color: ${theme.sideBarBackgroundColor};`

export const iconColor = ({ theme }: StyledProps) => `color: ${theme.iconColor};
&:hover,
&:focus {
  color: ${theme.activeIconColor};
}
&:active,
&.active {
  color: ${theme.primaryColor};
}`

export const textColor = ({ theme }: StyledProps) =>
  `color: ${theme.textColor};`

export const disabledUiTextColor = ({ theme }: StyledProps) =>
  `color: ${theme.disabledUiTextColor};`

export const PrimaryTextColor = ({ theme }: StyledProps) =>
  `color: ${theme.primaryColor};`

export const uiTextColor = ({
  theme
}: StyledProps) => `color: ${theme.uiTextColor};
transition: 200ms color;
&:hover,
&:focus,
&:active,
&.active{
  color: ${theme.textColor};
}
&:disabled {
  color: ${theme.disabledUiTextColor};
}`

export const sideBarTextColor = ({
  theme
}: StyledProps) => `color: ${theme.sideBarTextColor};
  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${theme.activeSideBarSecondaryTextColor};
  }`

export const sideBarSecondaryTextColor = ({ theme }: StyledProps) =>
  `color: ${theme.sideBarSecondaryTextColor};`

export const borderColor = ({ theme }: StyledProps) =>
  `border-color: ${theme.borderColor};`

export const border = ({ theme }: StyledProps) =>
  `border: 1px solid ${theme.borderColor};`

export const borderBottom = ({ theme }: StyledProps) =>
  `border-bottom: 1px solid ${theme.borderColor};`

export const borderTop = ({ theme }: StyledProps) =>
  `border-top: 1px solid ${theme.borderColor};`

export const borderLeft = ({ theme }: StyledProps) =>
  `border-left: 1px solid ${theme.borderColor};`

export const borderRight = ({ theme }: StyledProps) =>
  `border-right: 1px solid ${theme.borderColor};`

export const contextMenuShadow = ({ theme }: StyledProps) =>
  `box-shadow: ${theme.shadow};`

export const inputStyle = ({ theme }: StyledProps) =>
  `background-color: ${theme.inputBackground};
border: none;
border-radius: 4px;
color: ${theme.textColor};
&:focus {
  box-shadow: 0 0 0 2px ${theme.primaryColor};
}
`

export const primaryButtonStyle = ({ theme }: StyledProps) => `border: none;
background-color: ${theme.primaryColor};
color: ${theme.primaryButtonLabelColor};
font-size: 13px;
&:focus {
  box-shadow: 0 0 0 2px ${theme.primaryColor};
}
&:disabled {
  opacity: .5;
  cursor: default;
}
`

export const secondaryButtonStyle = ({ theme }: StyledProps) => `border: none;
background-color: ${theme.inputBackground};
color: ${theme.secondaryButtonLabelColor};
font-size: 13px;
&:focus {
  box-shadow: 0 0 0 2px ${theme.primaryColor};
}
&:active,
&.active {
  background-color: ${theme.primaryColor};
}
&:disabled {
  opacity: .5;
  cursor: default;
}
`

export const selectStyle = ({ theme }: StyledProps) => `
  border: ${theme.borderColor};
  background-color: ${theme.inputBackground};
  color: ${theme.textColor};
  &:focus {
    box-shadow: 0 0 0 2px ${theme.primaryColor};
  }
`

export const tableStyle = ({ theme }: StyledProps) => `
  border: 1px solid ${theme.borderColor};
  border-collapse: collapse;
  color: ${theme.textColor};
  text-align: left;

  th, td {
    padding: 16px 24px;
    border: 1px solid ${theme.borderColor};
    font-weight: 400;
  }

  thead th {
    font-size: 20px;
    font-weight: 500;

    span {
      display: block;
    }
  }

  tbody td {
    text-align: center;
  }
`
