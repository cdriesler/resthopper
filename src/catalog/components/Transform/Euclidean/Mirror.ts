import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Mirror extends ResthopperComponent {

	public guid: string = "f12daa2f-4fd5-48c1-8ac3-5dea476912ca";
	public name: string = "Mirror";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Mirror an object.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}