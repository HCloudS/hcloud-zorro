import { Injectable } from '@angular/core';
import { Capture, CaptureInfo } from '../data/capture';
import { Observable, of } from 'rxjs';
import { BaseRequestBo } from '../data/bean/BaseRequestBo';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CaptureService extends Capture {

  constructor(private http: HttpClient) {
    super();
  }

  getPicCapture(phone: string): Observable<CaptureInfo> {
    const sessionId = 'his.UUID.UUID()';
    const url = `/api/admin/capture?sessionId=${sessionId}`;
    return of({ sessionId, url });
  }

  sendSmsCapture(phone: string): Observable<BaseRequestBo<string>> {
    const url = `/api/admin/mobile/${phone}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError('smsCapture', [])));
  }
}
