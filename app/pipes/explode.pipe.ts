import { Component, Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: "explode"
})

export class ExplodePipe implements PipeTransform {



	transform(val: any, args: string[]): Array<any> {
		return val.split('/')[5];
	}
}