import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateOr extends ResthopperComponent {

	public guid: string = "5cad70f9-5a53-4c5c-a782-54a479b4abe3";
	public name: string = "Gate Or";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean disjunction (OR gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}