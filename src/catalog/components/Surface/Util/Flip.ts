import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Flip extends ResthopperComponent {

	public guid: string = "c3d1f2b8-8596-4e8d-8861-c28ba8ffb4f4";
	public name: string = "Flip";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Flip the normals of a surface based on local or remote geometry";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}