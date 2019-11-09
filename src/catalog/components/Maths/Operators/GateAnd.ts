import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class GateAnd extends ResthopperComponent {

	public guid: string = "040f195d-0b4e-4fe0-901f-fedb2fd3db15";
	public name: string = "Gate And";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean conjunction (AND gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}