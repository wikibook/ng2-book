export class Station {
  constructor(public name: string,public status = 'close') {}
  toggleMenu() {
    this.status = (this.status === 'open' ? 'close' : 'open');
  }
}