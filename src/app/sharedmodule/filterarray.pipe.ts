import {PipeTransform,Pipe,Injectable} from '@angular/core';

@Pipe({
    name:'filterarray'
})

@Injectable()
export class FilterarrayPipe implements PipeTransform
{
    transform(incomingarray:any)
    {
        return incomingarray.filter(arrayobject =>{
            return (arrayobject.name == "pradeep" || arrayobject.name == "prasad")
        });
    }
}