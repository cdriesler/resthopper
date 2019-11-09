import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class GateXor extends ResthopperComponent {

	public guid: string = "de4a0d86-2709-4564-935a-88bf4d40af89";
	public name: string = "Gate Xor";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean exclusive disjunction (XOR gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}