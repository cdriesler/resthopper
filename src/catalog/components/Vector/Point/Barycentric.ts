import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Barycentric extends ResthopperComponent {

	public guid: string = "9adffd61-f5d1-4e9e-9572-e8d9145730dc";
	public name: string = "Barycentric";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create a point from barycentric {u,v,w} coordinates";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}