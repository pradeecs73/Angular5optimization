import {PipeTransform,Pipe,Injectable} from '@angular/core';

@Pipe({
    name:'shorten'
})

@Injectable()
export class ShortenPipe implements PipeTransform
{
    transform(value:any)
    {
        return value.substr(0,4);
    }
}