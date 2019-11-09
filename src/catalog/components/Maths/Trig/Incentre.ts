import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Incentre extends ResthopperComponent {

	public guid: string = "c3342ea2-e181-46aa-a9b9-e438ccbfb831";
	public name: string = "Incentre";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Generate the triangle incentre from angle bisectors.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}