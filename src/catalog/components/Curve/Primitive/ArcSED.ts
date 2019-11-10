import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcSED extends ResthopperComponent {

	public guid: string = "9d2583dd-6cf5-497c-8c40-c9a290598396";
	public name: string = "Arc SED";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an arc defined by start point, end point and a tangent vector.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}