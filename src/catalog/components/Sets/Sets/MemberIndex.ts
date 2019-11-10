import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MemberIndex extends ResthopperComponent {

	public guid: string = "3ff27857-b988-417a-b495-b24c733dbd00";
	public name: string = "Member Index";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Find the occurences of a specific member in a set.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}