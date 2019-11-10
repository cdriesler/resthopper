import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Addition extends ResthopperComponent {

	public guid: string = "a0d62394-a118-422d-abb3-6af115c75b25";
	public name: string = "Addition";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Mathematical addition";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}