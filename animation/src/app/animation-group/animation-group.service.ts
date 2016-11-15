import { Injectable } from '@angular/core';

export class Team {
    constructor(public name: string, public SlidMenu = 'close', public itemStatus = 'void') { }
    toggleSlidMenu() {
        this.SlidMenu = (this.SlidMenu === 'open' ? 'close' : 'open');
    }
}

let ALL_TEAMS = [
    '맨시티', '토트넘', '아스널', '리버풀', '에버턴', '맨유',
    '크리스탈', '첼시', '사우샘프턴', '웨스트브롬', '왓포드',
    '레스터', '번리', '헐시티', '본머스', '미들즈브러', '스완지',
    '웨스트햄', '스토크시티', '선덜랜드'
].map(name => new Team(name, 'close', 'void'));

@Injectable()
export class ItemList{
    public teams: Team[] = [];
    list: Team[] = [];    

    constructor(){        
        this.list = ALL_TEAMS;
    }

    itemAdd() {
        if (this.list.length > this.teams.length) {
            let country: Team = this.list[this.teams.length];
            country.itemStatus = 'init';
            this.teams.push(country);
        }
    }

    itemRemove() {
        if (this.teams.length > 0) {
            this.teams[this.teams.length - 1].itemStatus = 'void';
            this.teams.splice(this.teams.length - 1, 1);
        }
    }
}