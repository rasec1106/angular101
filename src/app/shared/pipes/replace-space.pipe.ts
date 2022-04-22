import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace' // This is the name of the pipe
})
export class ReplaceSpacePipe implements PipeTransform {

  // TODO Nickname: (Hola soy Cesar) => hola-soy-cesar
  transform(value: string, args: string): string {
    value = value.split(' ').join(args).toLowerCase();
    return value;
  }

}
