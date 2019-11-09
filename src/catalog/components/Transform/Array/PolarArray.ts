import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PolarArray extends ResthopperComponent {

	public guid: string = "fca5ad7e-ecac-401d-a357-edda0a251cbc";
	public name: string = "Polar Array";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create a polar array of geometry.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}