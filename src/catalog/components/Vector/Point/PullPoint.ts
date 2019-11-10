import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PullPoint extends ResthopperComponent {

	public guid: string = "902289da-28dc-454b-98d4-b8f8aa234516";
	public name: string = "Pull Point";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Pull a point to a variety of geometry.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}