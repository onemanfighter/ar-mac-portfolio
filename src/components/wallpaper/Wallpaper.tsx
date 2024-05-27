import { Img } from '@chakra-ui/react';
import { WallpaperProps } from './types';
import { WallpaperEnum } from '@settingsStore';

// Wallpaper imports
import wallpaper1 from '../../assets/wallpaper/1.jpeg';
import wallpaper2 from '../../assets/wallpaper/2.jpeg';
import wallpaper3 from '../../assets/wallpaper/3.jpeg';
import wallpaper4 from '../../assets/wallpaper/4.jpeg';
import wallpaper5 from '../../assets/wallpaper/5.jpeg';
import wallpaper6 from '../../assets/wallpaper/6.jpeg';
import wallpaper7 from '../../assets/wallpaper/7.jpeg';

// Wallpaper map
const WallpaperMap: Record<WallpaperEnum, string> = {
  [WallpaperEnum.Wallpaper1]: wallpaper1,
  [WallpaperEnum.Wallpaper2]: wallpaper2,
  [WallpaperEnum.Wallpaper3]: wallpaper3,
  [WallpaperEnum.Wallpaper4]: wallpaper4,
  [WallpaperEnum.Wallpaper5]: wallpaper5,
  [WallpaperEnum.Wallpaper6]: wallpaper6,
  [WallpaperEnum.Wallpaper7]: wallpaper7,
};

const WallpaperComponent = ({ id }: WallpaperProps) => {
  return (
    <Img width={'100%'} height={'100%'} src={WallpaperMap[id]} loading="lazy" />
  );
};

export default WallpaperComponent;
