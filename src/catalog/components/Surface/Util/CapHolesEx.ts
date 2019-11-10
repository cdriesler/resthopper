import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CapHolesEx extends ResthopperComponent {

	public guid: string = "f6409a9c-3d2a-4b14-9f2c-e3c3f2cb72f8";
	public name: string = "Cap Holes Ex";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Cap as many holes as possible in a Brep.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}