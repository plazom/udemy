import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: false // если false то при добавлении в массив нового значения будет автоматически візіваться єтот пайп, но это не желательно использовать из-за нагрузки большой. по умолчанию true
})
export class CarFilterPipe implements PipeTransform {

  transform(carList: [], searchStr: string, fieldName: string): any {
    console.log("Filter pipe started");
    if (carList.length === 0 || searchStr === '') {
      return carList;
    }
    return carList.filter(car => String(car[fieldName]).toLowerCase().indexOf(searchStr.toLowerCase()) >= 0);
  }

}
