import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  serviceName: string;
  grade: string[] = [];
  getInfo(){}  
}
let myConfig = {
  serviceName  : '회원관리 서비스',
  grade: ['운영자','정회원','준회원'],
  getInfo: ()=>{ return `<b>${myConfig.serviceName}</b>는 <b>${myConfig.grade}</b> 등급제로 운영합니다.`; }
};

export let ValueProvider =
{
  provide: Config,
  useValue: myConfig
};