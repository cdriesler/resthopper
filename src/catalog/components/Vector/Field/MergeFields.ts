import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MergeFields extends ResthopperComponent {

	public guid: string = "d9a6fbd2-2e9f-472e-8147-33bf0233a115";
	public name: string = "Merge Fields";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Merge a collection of fields into one";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}