import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Weave extends ResthopperComponent {

	public guid: string = "50faccbd-9c92-4175-a5fa-d65e36013db6";
	public name: string = "Weave";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Weave a set of input data using a custom pattern.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}