/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GeneralResponseListChatInformationResponse } from '../../models/general-response-list-chat-information-response';

export interface GetChatsByReceiverId$Params {
}

export function getChatsByReceiverId(http: HttpClient, rootUrl: string, params?: GetChatsByReceiverId$Params, context?: HttpContext): Observable<StrictHttpResponse<GeneralResponseListChatInformationResponse>> {
  const rb = new RequestBuilder(rootUrl, getChatsByReceiverId.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GeneralResponseListChatInformationResponse>;
    })
  );
}

getChatsByReceiverId.PATH = '/v1.0/chats';
