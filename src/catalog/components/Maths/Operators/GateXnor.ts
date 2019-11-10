import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateXnor extends ResthopperComponent {

	public guid: string = "b6aedcac-bf43-42d4-899e-d763612f834d";
	public name: string = "Gate Xnor";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean biconditional (XNOR gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}