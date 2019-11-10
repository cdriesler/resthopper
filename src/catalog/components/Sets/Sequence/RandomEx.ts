import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RandomEx extends ResthopperComponent {

	public guid: string = "a12dddbf-bb49-4ef4-aeb8-5653bc882cbd";
	public name: string = "RandomEx";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Generate random data between extremes.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}