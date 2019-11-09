import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Expression extends ResthopperComponent {

	public guid: string = "9df5e896-552d-4c8c-b9ca-4fc147ffa022";
	public name: string = "Expression";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "Evaluate an expression";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}