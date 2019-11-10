import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateNor extends ResthopperComponent {

	public guid: string = "548177c2-d1db-4172-b667-bec979e2d38b";
	public name: string = "Gate Nor";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean joint denial (NOR gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}