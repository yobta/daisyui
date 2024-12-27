import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

import { animationPreset } from './animation/animationPreset.ts'
import { badgePreset } from './Badge/badgePreset.ts'
import { basePreset } from './Base/basePreset.ts'
import { buttonPreset } from './Button/buttonPreset.ts'
import { cardPreset } from './Card/cardPreset.ts'
import { colorsPreset } from './colorPreset/colorsPreset.ts'
import { dropdownPreset } from './Dropdown/dropdownPreset.ts'
import { groupPreset } from './Group/groupPreset.ts'
import { inputPreset } from './Input/inputPreset.ts'
import { linkPreset } from './Link/linkPreset.ts'
import { maskPreset } from './Mask/maskPreset.ts'
import { menuPreset } from './Menu/menuPreset.ts'
import { modalPreset } from './Modal/modalPreset.ts'
import { navbarPreset } from './Navbar/navbarPreset.ts'
import { progressPreset } from './Progress/progressPreset.ts'
import { ratingPreset } from './Rating/ratingPreset.ts'
import { themesPreset } from './themes/themesPreset.ts'
import { togglePreset } from './Toggle/togglePreset.ts'
import { viewSwitchlPreset } from './ViewSwitch/viewSwitchPreset.ts'

export const uiPreset: Partial<Config> = {
  plugins: [typographyPlugin],
  presets: [
    themesPreset,
    animationPreset,
    badgePreset,
    basePreset,
    buttonPreset,
    cardPreset,
    colorsPreset,
    dropdownPreset,
    inputPreset,
    groupPreset,
    linkPreset,
    maskPreset,
    menuPreset,
    modalPreset,
    navbarPreset,
    progressPreset,
    ratingPreset,
    togglePreset,
    viewSwitchlPreset,
  ],
}
