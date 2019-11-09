import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RelativeItems extends ResthopperComponent {

	public guid: string = "2653b135-4df1-4a6b-820c-55e2ad3bc1e0";
	public name: string = "Relative Items";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Retrieve a relative item combo from two data trees";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}