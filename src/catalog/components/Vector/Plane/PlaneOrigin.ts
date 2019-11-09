import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PlaneOrigin extends ResthopperComponent {

	public guid: string = "75eec078-a905-47a1-b0d2-0934182b1e3d";
	public name: string = "Plane Origin";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Change the origin point of a plane";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}