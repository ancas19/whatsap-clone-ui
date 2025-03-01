/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createChat } from '../fn/chat/create-chat';
import { CreateChat$Params } from '../fn/chat/create-chat';
import { GeneralResponseChatCreatedResponse } from '../models/general-response-chat-created-response';
import { GeneralResponseListChatInformationResponse } from '../models/general-response-list-chat-information-response';
import { getChatsByReceiverId } from '../fn/chat/get-chats-by-receiver-id';
import { GetChatsByReceiverId$Params } from '../fn/chat/get-chats-by-receiver-id';


/**
 * Chat operations
 */
@Injectable({ providedIn: 'root' })
export class ChatService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getChatsByReceiverId()` */
  static readonly GetChatsByReceiverIdPath = '/v1.0/chats';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getChatsByReceiverId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChatsByReceiverId$Response(params?: GetChatsByReceiverId$Params, context?: HttpContext): Observable<StrictHttpResponse<GeneralResponseListChatInformationResponse>> {
    return getChatsByReceiverId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getChatsByReceiverId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getChatsByReceiverId(params?: GetChatsByReceiverId$Params, context?: HttpContext): Observable<GeneralResponseListChatInformationResponse> {
    return this.getChatsByReceiverId$Response(params, context).pipe(
      map((r: StrictHttpResponse<GeneralResponseListChatInformationResponse>): GeneralResponseListChatInformationResponse => r.body)
    );
  }

  /** Path part for operation `createChat()` */
  static readonly CreateChatPath = '/v1.0/chats';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createChat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createChat$Response(params: CreateChat$Params, context?: HttpContext): Observable<StrictHttpResponse<GeneralResponseChatCreatedResponse>> {
    return createChat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createChat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createChat(params: CreateChat$Params, context?: HttpContext): Observable<GeneralResponseChatCreatedResponse> {
    return this.createChat$Response(params, context).pipe(
      map((r: StrictHttpResponse<GeneralResponseChatCreatedResponse>): GeneralResponseChatCreatedResponse => r.body)
    );
  }

}
