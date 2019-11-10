import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshCurve extends ResthopperComponent {

	public guid: string = "19632848-4b95-4e5e-9e86-b79b47987a46";
	public name: string = "Mesh | Curve";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Mesh Curve intersection";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}