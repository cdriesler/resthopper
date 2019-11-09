import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Jitter extends ResthopperComponent {

	public guid: string = "f02a20f6-bb49-4e3d-b155-8ed5d3c6b000";
	public name: string = "Jitter";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Randomly shuffles a list of values.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}