import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MassMultiplication extends ResthopperComponent {

	public guid: string = "e44c1bd7-72cc-4697-80c9-02787baf7bb4";
	public name: string = "Mass Multiplication";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform mass multiplication of a list of items";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}