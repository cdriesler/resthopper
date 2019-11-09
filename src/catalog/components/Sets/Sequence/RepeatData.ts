import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RepeatData extends ResthopperComponent {

	public guid: string = "c40dc145-9e36-4a69-ac1a-6d825c654993";
	public name: string = "Repeat Data";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Repeat a pattern until it reaches a certain length.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}