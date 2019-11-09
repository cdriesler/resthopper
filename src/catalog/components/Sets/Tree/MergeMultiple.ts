import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MergeMultiple extends ResthopperComponent {

	public guid: string = "0b6c5dac-6c93-4158-b8d1-ca3187d45f25";
	public name: string = "Merge Multiple";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge multiple input streams into one";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}