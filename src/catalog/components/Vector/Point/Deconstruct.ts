import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Deconstruct extends ResthopperComponent {

	public guid: string = "9abae6b7-fa1d-448c-9209-4a8155345841";
	public name: string = "Deconstruct";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Deconstruct a point into its component parts.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}