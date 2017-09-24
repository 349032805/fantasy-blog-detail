import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ParentService {
    private flagSource = new Subject<string>();

    flag$ = this.flagSource.asObservable();

    flagMession(mission: string){
        this.flagSource.next(mission);
    }
}