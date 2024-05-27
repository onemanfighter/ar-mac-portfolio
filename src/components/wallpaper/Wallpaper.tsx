import { Img } from '@chakra-ui/react';
import { WallpaperProps } from './types';
import { WallpaperEnum } from '@settingsStore';

export const WallpaperMap: Record<WallpaperEnum, string> = {
  [WallpaperEnum.Wallpaper1]: require('../../assets/wallpaper/1.jpeg'),
  [WallpaperEnum.Wallpaper2]: require('../../assets/wallpaper/2.jpeg'),
  [WallpaperEnum.Wallpaper3]: require('../../assets/wallpaper/3.jpeg'),
  [WallpaperEnum.Wallpaper4]: require('../../assets/wallpaper/4.jpeg'),
  [WallpaperEnum.Wallpaper5]: require('../../assets/wallpaper/5.jpeg'),
  [WallpaperEnum.Wallpaper6]: require('../../assets/wallpaper/6.jpeg'),
  [WallpaperEnum.Wallpaper7]: require('../../assets/wallpaper/7.jpeg'),
};

const WallpaperComponent = ({ id }: WallpaperProps) => {
  console.log('WallpaperComponent', id);

  return (
    <Img width={'100%'} height={'100%'} src={WallpaperMap[id]} loading="lazy" />
  );
};

export default WallpaperComponent;
