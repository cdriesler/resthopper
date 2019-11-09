import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CombineData extends ResthopperComponent {

	public guid: string = "e7c80ff6-0299-4303-be36-3080977c14a1";
	public name: string = "Combine Data";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Combine non-null items out of several inputs";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}