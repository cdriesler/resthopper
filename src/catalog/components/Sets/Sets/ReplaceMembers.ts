import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReplaceMembers extends ResthopperComponent {

	public guid: string = "bafac914-ede4-4a59-a7b2-cc41bc3de961";
	public name: string = "Replace Members";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Replace members in a set.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}