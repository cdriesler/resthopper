import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubSet extends ResthopperComponent {

	public guid: string = "4cfc0bb0-0745-4772-a520-39f9bf3d99bc";
	public name: string = "SubSet";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Test two sets for inclusion.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}