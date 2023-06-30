import {
  IconApiApp,
  IconBrandKick,
  IconBrandRumble,
  IconBrandTiktok,
  IconBrandTwitch,
  IconBrandYoutube,
} from '@tabler/icons-react'

const platform = {
  twitch: {
    icon: IconBrandTwitch,
    color: '#6441a5',
  },
  youtube: {
    icon: IconBrandYoutube,
    color: '#FF0000',
  },
  kick: {
    icon: IconBrandKick,
    color: '#52fb18',
  },
  tiktok: {
    icon: IconBrandTiktok,
    color: '#FFFFFF',
  },
  rumble: {
    icon: IconBrandRumble,
    color: '#85c742',
  },
  default: {
    icon: IconApiApp,
    color: '#FFFFFF',
  },
}

export function getPlatformIcon(key: string | undefined) {
  const icon = platform[key as keyof typeof platform]
  const value = icon || platform.default
  return [value.icon, value.color] as const
}
