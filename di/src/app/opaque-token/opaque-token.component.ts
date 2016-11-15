import { Component, Inject } from '@angular/core';
import { MY_API_CONFIG, OpaqueTokenProvider } from './opaque-token.provider';

@Component({
  selector: 'app-inject-decorator',
  template: `
 <div>API URL: {{appConfig.endpointURL}}</div>
 <div>API PORT: {{appConfig.PORT}}</div>`,
 providers: [{provide:OpaqueTokenProvider, useValue:MY_API_CONFIG}] 
})
export class OpaqueTokenComponent {
  constructor(@Inject(OpaqueTokenProvider) public appConfig) {}
}