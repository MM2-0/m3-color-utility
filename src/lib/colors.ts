import { Hct, Scheme } from '@material/material-color-utilities'

export interface BaseColors {
    primary: string
    secondary: string
    tertiary: string
    neutral: string
    neutralVariant: string
    error: string
}

export interface ColorTones {
    [0]: string
    [4]: string
    [6]: string
    [10]: string
    [12]: string
    [17]: string
    [20]: string
    [22]: string
    [24]: string
    [30]: string
    [40]: string
    [50]: string
    [60]: string
    [70]: string
    [80]: string
    [87]: string
    [90]: string
    [92]: string
    [94]: string
    [95]: string
    [96]: string
    [98]: string
    [99]: string
    [100]: string
}

export interface ColorScheme {
    primary: string
    onPrimary: string
    primaryContainer: string
    onPrimaryContainer: string
    secondary: string
    onSecondary: string
    secondaryContainer: string
    onSecondaryContainer: string
    tertiary: string
    onTertiary: string
    tertiaryContainer: string
    onTertiaryContainer: string
    background: string
    onBackground: string
    surface: string
    onSurface: string
    surfaceVariant: string
    onSurfaceVariant: string
    outline: string
    outlineVariant: string
    error: string
    onError: string
    errorContainer: string
    onErrorContainer: string
    inverseSurface: string
    inverseOnSurface: string
    inversePrimary: string
    scrim: string
    shadow: string
    surfaceDim: string
    surfaceBright: string
    surfaceContainerLowest: string
    surfaceContainerLow: string
    surfaceContainer: string
    surfaceContainerHigh: string
    surfaceContainerHighest: string
}

function generateTones(color: string): ColorTones {
    return {
        [0]: generateTone(color, 0),
        [4]: generateTone(color, 4),
        [6]: generateTone(color, 6),
        [10]: generateTone(color, 10),
        [12]: generateTone(color, 12),
        [17]: generateTone(color, 17),
        [20]: generateTone(color, 20),
        [22]: generateTone(color, 22),
        [24]: generateTone(color, 24),
        [30]: generateTone(color, 30),
        [40]: generateTone(color, 40),
        [50]: generateTone(color, 50),
        [60]: generateTone(color, 60),
        [70]: generateTone(color, 70),
        [80]: generateTone(color, 80),
        [87]: generateTone(color, 87),
        [90]: generateTone(color, 90),
        [92]: generateTone(color, 92),
        [94]: generateTone(color, 94),
        [95]: generateTone(color, 95),
        [96]: generateTone(color, 96),
        [98]: generateTone(color, 98),
        [99]: generateTone(color, 99),
        [100]: generateTone(color, 100),
    }
}

function generateTone(color: string, lightness: number): string {
    const clr = Hct.fromInt(parseInt('FF' + color.substring(1), 16))
    clr.tone = lightness
    return argbToHex(clr.toInt())
}

export function generateLightColorScheme(baseColors: BaseColors): ColorScheme {
    const primary = generateTones(baseColors.primary)
    const secondary = generateTones(baseColors.secondary)
    const tertiary = generateTones(baseColors.tertiary)
    const neutral = generateTones(baseColors.neutral)
    const neutralVariant = generateTones(baseColors.neutralVariant)
    const error = generateTones(baseColors.error)

    return {
        primary: primary[40],
        primaryContainer: primary[90],
        secondary: secondary[40],
        secondaryContainer: secondary[90],
        tertiary: tertiary[40],
        tertiaryContainer: tertiary[90],
        surface: neutral[98],
        surfaceVariant: neutralVariant[90],
        background: neutral[99],
        error: error[40],
        errorContainer: error[90],
        onPrimary: primary[100],
        onPrimaryContainer: primary[10],
        onSecondary: secondary[100],
        onSecondaryContainer: secondary[10],
        onTertiary: tertiary[100],
        onTertiaryContainer: tertiary[10],
        onSurface: neutral[10],
        onSurfaceVariant: neutralVariant[30],
        onError: error[100],
        onErrorContainer: error[10],
        onBackground: neutral[10],
        outline: neutralVariant[50],
        outlineVariant: neutralVariant[80],
        inverseSurface: neutral[20],
        inverseOnSurface: neutral[95],
        inversePrimary: primary[80],
        scrim: neutral[0],
        shadow: neutral[0],
        surfaceDim: neutral[87],
        surfaceBright: neutral[98],
        surfaceContainerLowest: neutral[100],
        surfaceContainerLow: neutral[96],
        surfaceContainer: neutral[94],
        surfaceContainerHigh: neutral[92],
        surfaceContainerHighest: neutral[90],
    }
}

export function generateDarkColorScheme(baseColors: BaseColors): ColorScheme {
    const primary = generateTones(baseColors.primary)
    const secondary = generateTones(baseColors.secondary)
    const tertiary = generateTones(baseColors.tertiary)
    const neutral = generateTones(baseColors.neutral)
    const neutralVariant = generateTones(baseColors.neutralVariant)
    const error = generateTones(baseColors.error)

    return {
        primary: primary[80],
        primaryContainer: primary[30],
        secondary: secondary[80],
        secondaryContainer: secondary[30],
        tertiary: tertiary[80],
        tertiaryContainer: tertiary[30],
        surface: neutral[10],
        surfaceVariant: neutralVariant[30],
        background: neutral[10],
        error: error[80],
        errorContainer: error[30],
        onPrimary: primary[20],
        onPrimaryContainer: primary[90],
        onSecondary: secondary[20],
        onSecondaryContainer: secondary[90],
        onTertiary: tertiary[20],
        onTertiaryContainer: tertiary[90],
        onSurface: neutral[90],
        onSurfaceVariant: neutralVariant[80],
        onError: error[20],
        onErrorContainer: error[80],
        onBackground: neutral[90],
        outline: neutralVariant[60],
        outlineVariant: neutralVariant[30],
        inverseSurface: neutral[90],
        inverseOnSurface: neutral[20],
        inversePrimary: primary[40],
        scrim: neutral[0],
        shadow: neutral[0],
        surfaceDim: neutral[6],
        surfaceBright: neutral[24],
        surfaceContainerLowest: neutral[4],
        surfaceContainerLow: neutral[10],
        surfaceContainer: neutral[12],
        surfaceContainerHigh: neutral[17],
        surfaceContainerHighest: neutral[22],
    }
}

export function generateBaseColors(primary: string): BaseColors {
    const colorInt = parseInt('FF' + primary.substring(1), 16)
    const scheme = Scheme.light(colorInt)
    return {
        primary: primary,
        secondary: argbToHex(scheme.secondary),
        tertiary: argbToHex(scheme.tertiary),
        neutral: argbToHex(scheme.surface),
        neutralVariant: argbToHex(scheme.surfaceVariant),
        error: argbToHex(scheme.error),
    }
}

function argbToHex(argb: number): string {
    return '#' + ('000000' + argb.toString(16)).slice(-6)
}
