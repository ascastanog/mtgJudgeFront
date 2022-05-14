import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    if (value == true) {
      return 'text';
    } else {
      return 'password';
    }
  }

}
