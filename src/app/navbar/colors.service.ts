import { Injectable } from '@angular/core';

@Injectable()
export class ColorsService {

  private colorsMap: Map<string, string> = new Map<string, string>();

  constructor() {
    this.setColorsMap();
  }

  /*
  * If color is registered at colors map, the hex color is set, if doesn't
  * exists it's verified if has been passed an hex code.
  * Always return an color is hexadecimal string. If param is invalid returns a
  * default color.
  */
  public checkColor(color: string): string {
    let bgColorHex: string = "";

    if(this.colorsMap.get(color) !== undefined) {
      bgColorHex = this.colorsMap.get(color);
    } else {
      (this.isHexCode(color)) ? (bgColorHex = color) : (bgColorHex = "#C2C2C2");
    }

    return bgColorHex;
  }

  private setColorsMap() {
    this.colorsMap.set('black', '#000000');
    this.colorsMap.set('white', '#FFFFFF');
    this.colorsMap.set('red', '#FB0000');
    this.colorsMap.set('gray', '#C2C2C2');
    this.colorsMap.set('spacialGray', '#C0C0C0')
  }

  private isHexCode(color: string) {
    let isHexCode: boolean = false;

    if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)) {
      isHexCode = true;
    } else  {
      isHexCode = false;
    }

    return isHexCode;
  }

}
