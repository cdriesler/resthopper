import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FlipPlane extends ResthopperComponent {

	public guid: string = "c73e1ed0-82a2-40b0-b4df-8f10e445d60b";
	public name: string = "Flip Plane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Flip or swap the axes of a plane";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}