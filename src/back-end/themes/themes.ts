import {TypesNamespace} from '../types';
import pixelartHome from '../../assets/themes/pixelart/home.png';
import pixelartLunch from '../../assets/themes/pixelart/lunch.png';
import pixelartMeeting from '../../assets/themes/pixelart/meeting.png';
import pixelartWork from '../../assets/themes/pixelart/work.png';

import steampunkHome from '../../assets/themes/steampunk/home.png';
import steampunkLunch from '../../assets/themes/steampunk/lunch.png';
import steampunkMeeting from '../../assets/themes/steampunk/meeting.png';
import steampunkWork from '../../assets/themes/steampunk/work.png';

export namespace ThemesNamespace {
  export type Theme = {
    home: any;
    lunch: any;
    meeting: any;
    work: any;
    // TODO: add font
  };

  const pixelArtTheme = (): Theme => {
    return {
      home: pixelartHome,
      lunch: pixelartLunch,
      meeting: pixelartMeeting,
      work: pixelartWork,
    };
  };

  const steampunkTheme = (): Theme => {
    return {
      home: steampunkHome,
      lunch: steampunkLunch,
      meeting: steampunkMeeting,
      work: steampunkWork,
    };
  };

  const allThemesArray = [pixelArtTheme(), steampunkTheme()];
  export const allThemes = (): Theme[] => {
    return allThemesArray;
  };

  // TODO: implement
}
