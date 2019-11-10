import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitList extends ResthopperComponent {

	public guid: string = "9ab93e1a-ebdf-4090-9296-b000cff7b202";
	public name: string = "Split List";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Split a list into separate parts.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}