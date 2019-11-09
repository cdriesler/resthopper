import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BreakField extends ResthopperComponent {

	public guid: string = "b27d53bc-e713-475d-81fd-71cdd8de2e58";
	public name: string = "Break Field";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Break a field into individual elements";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}