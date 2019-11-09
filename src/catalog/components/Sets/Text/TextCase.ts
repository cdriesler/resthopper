import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TextCase extends ResthopperComponent {

	public guid: string = "b1991128-8bf1-4dea-8497-4b7188a64e9d";
	public name: string = "Text Case";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Change the CaSiNg of a piece of text";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}