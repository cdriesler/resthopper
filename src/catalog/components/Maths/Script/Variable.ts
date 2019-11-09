import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Variable extends ResthopperComponent {

	public guid: string = "84fa917c-1ed8-4db3-8be1-7bdc4a6495a2";
	public name: string = "Variable";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "Contains a collection of script-friendly data";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}