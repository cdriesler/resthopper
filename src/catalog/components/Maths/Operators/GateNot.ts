import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class GateNot extends ResthopperComponent {

	public guid: string = "cb2c7d3c-41b4-4c6d-a6bd-9235bd2851bb";
	public name: string = "Gate Not";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean negation (NOT gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}