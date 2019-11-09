import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MassAddition extends ResthopperComponent {

	public guid: string = "5b850221-b527-4bd6-8c62-e94168cd6efa";
	public name: string = "Mass Addition";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform mass addition of a list of items";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}