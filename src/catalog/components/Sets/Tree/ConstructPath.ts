import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructPath extends ResthopperComponent {

	public guid: string = "946cb61e-18d2-45e3-8840-67b0efa26528";
	public name: string = "Construct Path";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Construct a data tree branch path.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}