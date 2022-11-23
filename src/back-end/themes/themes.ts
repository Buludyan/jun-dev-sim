import {TypesNamespace} from '../types';
import pixelartHome from '../../assets/themes/pixelart/home.png';
import pixelartLunch from '../../assets/themes/pixelart/lunch.png';
import pixelartMeeting from '../../assets/themes/pixelart/meeting.png';
import pixelartWork from '../../assets/themes/pixelart/work.png';

import steampunkHome from '../../assets/themes/steampunk/home.png';
import steampunkLunch from '../../assets/themes/steampunk/lunch.png';
import steampunkMeeting from '../../assets/themes/steampunk/meeting.png';
import steampunkWork from '../../assets/themes/steampunk/work.png';

import metro2033Home from '../../assets/themes/metro2033/home.png';
import metro2033Lunch from '../../assets/themes/metro2033/lunch.png';
import metro2033Meeting from '../../assets/themes/metro2033/meeting.png';
import metro2033Work from '../../assets/themes/metro2033/work.png';

import lovecraftHome from '../../assets/themes/lovecraft/home.png';
import lovecraftLunch from '../../assets/themes/lovecraft/lunch.png';
import lovecraftMeeting from '../../assets/themes/lovecraft/meeting.png';
import lovecraftWork from '../../assets/themes/lovecraft/work.png';

import hokusaiHome from '../../assets/themes/hokusai/home.png';
import hokusaiLunch from '../../assets/themes/hokusai/lunch.png';
import hokusaiMeeting from '../../assets/themes/hokusai/meeting.png';
import hokusaiWork from '../../assets/themes/hokusai/work.png';

export namespace ThemesNamespace {
  export type Theme = {
    // TODO: fix anys?
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

  const hokusaiTheme = (): Theme => {
    return {
      home: hokusaiHome,
      lunch: hokusaiLunch,
      meeting: hokusaiMeeting,
      work: hokusaiWork,
    };
  };

  const metro2033Theme = (): Theme => {
    return {
      home: metro2033Home,
      lunch: metro2033Lunch,
      meeting: metro2033Meeting,
      work: metro2033Work,
    };
  };

  const lovecraftTheme = (): Theme => {
    return {
      home: lovecraftHome,
      lunch: lovecraftLunch,
      meeting: lovecraftMeeting,
      work: lovecraftWork,
    };
  };

  const allThemesArray = [pixelArtTheme(), steampunkTheme(), hokusaiTheme(), metro2033Theme(), lovecraftTheme()];
  export const allThemes = (): Theme[] => {
    return allThemesArray;
  };

  // TODO: implement
}
