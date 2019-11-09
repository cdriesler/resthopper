import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Clash extends ResthopperComponent {

	public guid: string = "4439a51b-8d24-4924-b8e2-f77e7f8f5bec";
	public name: string = "Clash";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Perform clash analysis on a set of shapes.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}