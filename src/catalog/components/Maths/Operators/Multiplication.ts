import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Multiplication extends ResthopperComponent {

	public guid: string = "ce46b74e-00c9-43c4-805a-193b69ea4a11";
	public name: string = "Multiplication";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Mathematical multiplication";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}